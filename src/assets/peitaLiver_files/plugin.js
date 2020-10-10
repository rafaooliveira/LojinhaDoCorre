"use strict";

/**
 * Sizebay Virtual Fitting Room - Tracking Suite
 */
var sb = (function () {
  var VERSION = {
    virtual_fitting: "3.0",
    size_chart: "2.0",
    virtual_shoe: "3.0",
  };
  var obj = undefined;
  var DEFAULT_URL = "https://vfr-v3-production.sizebay.technology";
  var DEFAULT_URL_SHOES_SIZE =
    "https://vfr-v3-production.sizebay.technology/V3/?mode=vfr";
  var DEFAULT_URL_SIZE_CHART =
    "https://vfr-v3-production.sizebay.technology/V3/?mode=table";
  var BASE_URL = "https://static.sizebay.com/";
  var CONFIG_FILE = "/config-theme.js";
  var IS_LOOKBOOK = false;
  var IS_SHOE = false;
  var IS_ACCESSORY = false;
  var SHOW_VFR3 = false;
  var TENANT_ID = 0;
  var SID = 0;
  var css = {
    text: "background: #ededed; color: #565656; padding: 3px 5px;",
    title:
      "background: #ededed; color: black; padding: 3px 5px; font-weight: bold;",
    code:
      "display: block; color: green; font-family: monospace; width: 100%; text-align: center;",
  };
  function includeJavascript(url, callback, falback) {
    var js = document.createElement("script");
    js.type = "text/javascript";
    js.onload = callback;
    js.onerror = falback;
    js.src = url;
    document.body.appendChild(js);
  }

  var constructionPlugin = function (args) {
    var self = {};

    self.CLOSED = " closed";
    self.OPENED_BUTTON = "sizebay-plugin ";
    self.OVERLAY = "sizebay-plugin-overlay";

    self.iframe_holder = null;
    self.overlay = null;
    self.load_counter = 0;
    self.iframe = null;
    self.body = null;
    self.close_button = null;
    self.session_id = null;
    self.htmlOverflowY = null;
    self.htmlOverflowX = null;
    self.config = null;

    /* fix arguments sent by the developers */
    self.fix_arguments = function () {
      args.button = args.button || "btn_plugin";
      args.base_url = args.base_url || DEFAULT_URL;
      args.image =
        args.image ||
        "https://s3.amazonaws.com/sizebay-images/button/site_sizebay.png";
      args.config_repository = args.config_repository || "default";
      args.size_chart = !args.size_chart ? false : args.size_chart;

      args.on_init = args.on_init || this.init.bind(this);
      args.on_show_button = args.on_show_button || this.show_button.bind(this);

      if (args.size_chart) this.includeConfig();
    };
    self.includeConfig = function () {
      includeJavascript(
        this.getUrl(),
        this.includeLanguage,
        this.includeLocalConfig.bind(this)
      );
    };
    (self.getUrl = function () {
      var config = args.config_repository;
      if (config !== "default")
        return BASE_URL + "store/" + config + CONFIG_FILE;
      return this.getConfigLocalUrl();
    }),
      (self.getConfigLocalUrl = function () {
        return DEFAULT_URL + "/assets/default" + CONFIG_FILE;
      }),
      (self.includeLocalConfig = function () {
        includeJavascript(this.getConfigLocalUrl(), this.includeLanguage);
      }),
      (self.includeLanguage = function () {
        includeJavascript(configTheme.languages[0].link);
      });

    /* load product id for this page */
    self.init = function (on_open_plugin, product_id) {
      args.product_id = product_id;

      println("Virtual Fitting Room: " + VERSION.virtual_fitting);
      println("Configured product identification: " + args.product_id);
      println("Expected button image: ", args.image);
      args.on_show_button(
        this.$.find(args.button),
        this.on_open_plugin.bind(this)
      );
    };
    self.show_button = function (image, clickCallback) {
      image.src = args.image;
      if (!args.size_chart) image.style.display = "inline-block";
      image.addEventListener("click", clickCallback);
    };
    self.on_open_plugin = function () {
      var that = this;
      request(args.base_url + "/plugin/opened?sid=" + SID, function () {
        dataLayer.push({ event: "szb-plugin-opened" });
        println("Opening the plugin window...");
        if (args.on_open) args.on_open();
      });

      if (!that.iframe_holder) that.attach_iframe_into_body();
      else that.update_iframe_url();

      that.store_current_scroll_position();
      that.body.classList.add("sizebay-plugin-opened");
      that.iframe_holder.className = that.OPENED_BUTTON;
      that.overlay.className = that.OVERLAY;
    };
    self.on_close_plugin = function () {
      if (!this.load_counter) return;

      println("Closing the plugin window...");

      this.body.classList.remove("sizebay-plugin-opened");
      this.iframe_holder.className = this.OPENED_BUTTON + this.CLOSED;
      this.overlay.className = this.OVERLAY + this.CLOSED;

      this.recovery_original_scroll_bar();
      this.load_counter = 0;

      if (args.on_close) args.on_close();
    };
    self.update_iframe_url = function () {
      this.iframe.src =
        args.base_url +
        "?id=" +
        args.product_id +
        "&sid=" +
        SID +
        "&logo=" +
        args.brand_logo +
        "&logoSizeChart=" +
        (args.brand_logo_sizeChart || args.brand_logo) +
        "&custom_theme=" +
        (args.custom_theme || "") +
        "&config=" +
        args.config_repository +
        "&size_chart=" +
        (args.size_chart || "");
    };
    self.store_current_scroll_position = function () {
      this.htmlOverflowY = window.scrollY;
      this.htmlOverflowX = window.scrollX;
    };
    self.recovery_original_scroll_bar = function () {
      var that = this;
      setTimeout(function () {
        window.scrollTo(that.htmlOverflowX, that.htmlOverflowY);
      }, 100);
    };
    self.attach_iframe_into_body = function () {
      this.iframe_holder = this.$.element("div");
      this.iframe_holder.className = this.OPENED_BUTTON + this.CLOSED;
      this.iframe_holder.appendChild(this.create_iframe());
      this.iframe_holder.appendChild(this.create_image());

      this.overlay = this.$.element("div");
      this.overlay.addEventListener("click", this.on_close_plugin.bind(this));
      this.overlay.className = this.OVERLAY + this.CLOSED;

      this.body = this.$.findByTag("body")[0];
      this.body.appendChild(this.iframe_holder);
      this.body.appendChild(this.overlay);
    };
    self.create_iframe = function () {
      this.iframe = this.$.element("iframe");
      this.iframe.frameBorder = 0;
      this.iframe.addEventListener("load", this.on_iframe_load);
      this.update_iframe_url();
      return this.iframe;
    };
    self.create_image = function () {
      this.close_button = this.$.element("img");
      this.close_button.className = "sizebay-close-button";
      this.close_button.src = args.base_url + "/assets/imgs/close-modal.svg";
      this.close_button.addEventListener(
        "click",
        this.on_close_plugin.bind(this)
      );
      return this.close_button;
    };
    self.on_iframe_load = function () {
      if (self.load_counter++) {
        self.on_close_plugin();
      }
    };
    self.loadProductIdAndConfigurePlugin = function () {
      var that = this;
      load_product_id({
        base_url: args.base_url,
        product_id: args.product_id,
        session_id: SID,
        callback: function (product_id) {
          args.on_init(that.on_open_plugin.bind(that), product_id);
        },
        notFoundCallback: args.on_product_not_found,
      });
    };
    return self;
  };
  var constructionEmbeddedIndicator = function (args) {
    var self = {};
    self.elements = null;
    self.found_product_id = null;
    self.session_id = null;
    self.genderProfile = null;

    self.fix_arguments = function () {
      args.on_render_size = args.on_render_size || this.on_render_size;
      args.on_product_does_not_fit =
        args.on_product_does_not_fit || this.on_product_does_not_fit;
      args.on_product_not_found =
        args.on_product_not_found || this.on_product_not_found;
      args.on_user_profile_is_empty =
        args.on_user_profile_is_empty || this.on_user_profile_is_empty;
      args.on_select_size = args.on_select_size || this.on_select_size;
      args.on_show_button = args.on_show_button || this.on_show_button;
      args.button = args.button || "btn_plugin";
      args.base_url = args.base_url || DEFAULT_URL;
      args.size_chart = args.size_chart;
    };

    self.init = function () {
      var that = this;
      println("Embedded Size Recommendation: " + VERSION.virtual_fitting);
      if (!args.size_chart)
        request(
          DEFAULT_URL +
            "/views/embedded-recommendation.html?domain=" +
            window.location.hostname +
            "&sid=" +
            SID,
          function (html) {
            that.on_render_plugin(html, that.checkIfProductExists.bind(that));
          }
        );
      create_post_message_listener(DEFAULT_URL);
    };

    self.on_render_plugin = function (html, callback) {
      this.render_plugin(html);
      this.showState("loading");
      callback();
    };

    self.render_plugin = function (html) {
      var btn = this.$.find(args.button);
      btn.style.display = "none";
      btn.innerHTML = html;

      this.elements = {
        container: btn,
        sizePlaceholder: btn.getElementsByClassName(
          "sizebay-state-recommended-size-placeholder"
        )[0],
      };
    };

    self.checkIfProductExists = function () {
      var that = this;
      load_product_id({
        base_url: args.base_url,
        session_id: SID,
        callback: function (product_id) {
          that.memorizeProductIdAndShowButton(product_id);
          that.checkIfUserProfileIsEmpty(product_id);
        },
        notFoundCallback: args.on_product_not_found.bind(that),
      });
    };

    self.checkIfUserProfileIsEmpty = function (product_id) {
      var that = this;
      request(args.base_url + "/api/me?sid=" + SID, function (me, resp) {
        var is_empty = resp.status >= 300;
        if (!is_empty) {
          is_empty =
            JSON.parse(me).currentProfile.measures.empty &&
            typeof currentProfile.measures.ownProductBrand === "undefined";
          that.genderProfile = JSON.parse(me).currentProfile.measures.gender;
          setCookie("SIZEBAY_SESSION_ID_V3", SID);
        }
        is_empty
          ? that.startLoading(
              "initial-loading",
              args.on_user_profile_is_empty.bind(that)
            )
          : that.doSuitabilityAnalysisFor();
      });
    };

    self.memorizeProductIdAndShowButton = function (product_id) {
      var that = this;
      this.elements.container.style.display = "table";
      this.found_product_id = product_id;
      args.on_show_button(this.elements.container, product_id, function () {
        that.showState("loading");
        that.checkIfUserProfileIsEmpty(that.found_product_id);
      });
    };

    self.startLoading = function (value, execute) {
      this.showState(value);
      setTimeout(execute, 3000);
    };

    self.on_show_button = function (button) {
      println("Displaying the fitting-room button");
    };

    self.doSuitabilityAnalysisFor = function () {
      var that = this;
      var found_size = 0;
      var profileName = "";

      function renderSize() {
        args.on_render_size(found_size, profileName, that.$, that);
      }

      request(
        args.base_url +
          "/api/me/analysis/" +
          this.found_product_id +
          "?sid=" +
          SID,
        function (analysis, resp) {
          found_size = resp.status < 300;
          var data = JSON.parse(analysis);

          var productGender = data.productGender;
          var productMatchesProfile =
            productGender === "U" || productGender === that.genderProfile;
          profileName = data.profileName;

          if (productMatchesProfile) {
            if (found_size)
              found_size = JSON.parse(analysis).analysisResponse
                .recommendedSize;
            found_size
              ? that.startLoading("loading", renderSize.bind(that))
              : that.startLoading(
                  "initial-loading",
                  args.on_product_does_not_fit.bind(that)
                );
          } else {
            that.showState("profile-empty");
          }
        }
      );
    };

    self.on_render_size = function (sizeName, $, that) {
      args.on_select_size(sizeName);
      that.elements.sizePlaceholder.className =
        "sizebay-state-recommended-size-placeholder";
      that.elements.sizePlaceholder.innerHTML = sizeName;

      that.showState("recommended-size size-" + sizeName.length);
    };

    self.on_select_size = function (sizeName) {
      println("Recommended size: " + sizeName);
    };

    self.on_product_does_not_fit = function () {
      document.getElementById("recomendation-size")
        ? document.getElementById("recomendation-size").remove()
        : null;
      println("Product does not fit to current user.");
      this.showState("profile-empty");
    };

    self.on_product_not_found = function () {
      println("Product not found. This plugin is inactive.");
      showState("product-not-found");
    };

    self.on_user_profile_is_empty = function () {
      println("User's profile is empty");
      this.showState("profile-empty");
    };

    self.showState = function (stateName) {
      this.elements.container.className =
        "sizebay-embedded-recommendation-button state-" + stateName;
    };
    return self;
  };

  /*plugin 3*/
  var constructionPlugin3 = function (args) {
    var self = {};
    self.CLOSED = " closed";
    self.OPENED_BUTTON = "sizebay-plugin ";
    self.OVERLAY = "sizebay-plugin-overlay";

    self.iframe_holder = null;
    self.overlay = null;
    self.load_counter = 0;
    self.iframe = null;
    self.body = null;
    self.close_button = null;
    self.session_id = null;
    self.htmlOverflowY = null;
    self.htmlOverflowX = null;
    self.config = null;

    /* fix arguments sent by the developers */
    self.fix_arguments = function () {
      args.button = args.button || "btn_plugin";
      args.base_url = args.base_url || DEFAULT_URL;
      args.image =
        args.image ||
        "https://s3.amazonaws.com/sizebay-images/button/site_sizebay.png";
      args.config_repository = args.config_repository || "default";
      args.size_chart = !args.size_chart ? false : args.size_chart;

      args.on_init = args.on_init || this.init.bind(this);
      args.on_show_button = args.on_show_button || this.show_button.bind(this);
    };

    /* load product id for this page */
    self.init = function (on_open_plugin, product_id) {
      args.product_id = product_id;

      println("Virtual Fitting Room: " + VERSION.virtual_fitting);
      println("Configured product identification: " + args.product_id);
      println("Expected button image: ", args.image);
      args.on_show_button(
        this.$.find(args.button),
        this.on_open_plugin.bind(this)
      );
    };

    self.show_button = function (image, clickCallback) {
      image.src = args.image;
      if (!args.size_chart) image.style.display = "inline-block";
      image.addEventListener("click", clickCallback);
    };

    self.on_open_plugin = function () {
      var that = this;
      var button =
        typeof arguments[0] === "string"
          ? arguments[0]
          : document.querySelector(
              "#" + args.button.id + " button.button_plugin:hover"
            ).id;
      args.size_chart = button === "szb_size_chart" ? true : false;
      if (args.size_chart)
        request(args.base_url + "/plugin/table-opened?sid=" + SID, function () {
          dataLayer.push({ event: "szb-table-opened" });
          println("Opening the table window...");
          if (args.on_open) args.on_open();
        });
      else
        request(args.base_url + "/plugin/opened?sid=" + SID, function () {
          dataLayer.push({ event: "szb-plugin-opened" });
          println("Opening the plugin window...");
          if (args.on_open) args.on_open();
        });

      if (!that.iframe_holder) that.attach_iframe_into_body();
      else that.update_iframe_url();

      that.store_current_scroll_position();
      that.body.classList.add("sizebay-plugin-opened");
      that.iframe_holder.className = that.OPENED_BUTTON;
      that.overlay.className = that.OVERLAY;
    };
    self.on_close_plugin = function () {
      if (!this.load_counter) return;

      println("Closing the plugin window...");

      this.body.classList.remove("sizebay-plugin-opened");
      this.iframe_holder.className = this.OPENED_BUTTON + this.CLOSED;
      this.overlay.className = this.OVERLAY + this.CLOSED;

      this.recovery_original_scroll_bar();
      this.load_counter = 0;

      if (args.on_close) args.on_close();
    };
    self.update_iframe_url = function () {
      this.iframe.src = "";

      var showVFR3 = typeof args.showVFR3 != "undefined" && args.showVFR3;

      var isShoe = IS_SHOE;
      var isMeasuresTable = args.size_chart;
      self.load_counter = 0;

      if ((showVFR3 || isShoe) && !isMeasuresTable) {
        println("Virtual Fitting Room: " + VERSION.virtual_fitting);

        self.iframe.src =
          DEFAULT_URL_SHOES_SIZE +
          "&id=" +
          args.product_id +
          "&sid=" +
          SID +
          "&tenantId=" +
          args.tenantId;

        if (args.lang) {
          self.iframe.src += "&lang=" + args.lang;
        }

        if (args.rawId) {
          self.iframe.src += "&rawId=" + args.rawId;
        }

        if (args.configProfile) {
          self.iframe.src += "&configProfile=" + args.configProfile;
        }
      } else {
        if (isMeasuresTable) {
          self.iframe.src =
            DEFAULT_URL_SIZE_CHART +
            "&id=" +
            args.product_id +
            "&tenantId=" +
            args.tenantId;

          if (args.lang) {
            self.iframe.src += "&lang=" + args.lang;
          }
          if (args.configProfile) {
            self.iframe.src += "&configProfile=" + args.configProfile;
          }
        } else {
          self.iframe.src =
            args.base_url +
            "?id=" +
            args.product_id +
            "&sid=" +
            SID +
            "&logo=" +
            args.brand_logo +
            "&logoSizeChart=" +
            (args.brand_logo_sizeChart || args.brand_logo) +
            "&custom_theme=" +
            (args.custom_theme || "") +
            "&config=" +
            args.config_repository +
            "&size_chart=false";
        }
      }
    };

    self.store_current_scroll_position = function () {
      this.htmlOverflowY = window.scrollY;
      this.htmlOverflowX = window.scrollX;
    };
    self.recovery_original_scroll_bar = function () {
      var that = this;
      setTimeout(function () {
        window.scrollTo(that.htmlOverflowX, that.htmlOverflowY);
      }, 100);
    };
    self.attach_iframe_into_body = function () {
      this.iframe_holder = this.$.element("div");
      this.iframe_holder.className = this.OPENED_BUTTON + this.CLOSED;
      this.iframe_holder.appendChild(this.create_iframe());
      this.iframe_holder.appendChild(this.create_image());

      this.overlay = this.$.element("div");
      this.overlay.addEventListener("click", this.on_close_plugin.bind(this));
      this.overlay.className = this.OVERLAY + this.CLOSED;

      this.body = this.$.findByTag("body")[0];
      this.body.appendChild(this.iframe_holder);
      this.body.appendChild(this.overlay);
    };
    self.create_iframe = function () {
      this.iframe = this.$.element("iframe");
      this.iframe.frameBorder = 0;
      this.iframe.addEventListener("load", this.on_iframe_load);
      this.update_iframe_url();
      return this.iframe;
    };
    self.create_image = function () {
      this.close_button = this.$.element("img");
      this.close_button.className = "sizebay-close-button";
      this.close_button.src = args.base_url + "/assets/imgs/close-modal.svg";
      this.close_button.addEventListener(
        "click",
        this.on_close_plugin.bind(this)
      );
      return this.close_button;
    };
    self.on_iframe_load = function () {
      if (self.load_counter++) {
        self.on_close_plugin();
      }
    };
    self.loadProductIdAndConfigurePlugin = function () {
      var that = this;
      load_product_id({
        base_url: args.base_url,
        product_id: args.product_id,
        session_id: SID,
        callback: function (product_id) {
          args.on_init(that.on_open_plugin.bind(that), product_id);
        },
        notFoundCallback: args.on_product_not_found,
      });
    };
    return self;
  };
  var constructionEmbeddedIndicator3 = function (args) {
    var self = {};
    self.elements = null;
    self.found_product_id = null;
    self.session_id = null;
    self.genderProfile = null;
    self.isOneButton = null;
    self.currentProfile = {};

    self.fix_arguments = function () {
      args.on_render_size = args.on_render_size || this.on_render_size;
      args.on_product_does_not_fit =
        args.on_product_does_not_fit || this.on_product_does_not_fit;
      args.on_product_not_found =
        args.on_product_not_found || this.on_product_not_found;
      args.on_user_profile_is_empty =
        args.on_user_profile_is_empty || this.on_user_profile_is_empty;
      args.on_select_size = args.on_select_size || this.on_select_size;
      args.on_show_button = args.on_show_button || this.on_show_button;
      args.button = args.button || "btn_plugin";
      args.button.show_tooltip =
        args.button.show_tooltip !== undefined
          ? args.button.show_tooltip
          : true;
      args.base_url = args.base_url || DEFAULT_URL;
      args.config_repository = args.config_repository || "default";
      args.permalink = !args.permalink ? window.location.href : args.permalink;
    };

    self.init = function () {
      var self = this;

      println("Embedded Size Recommendation: " + VERSION.virtual_fitting);

      dataLayer.push({ event: "szb-plugin-imported" });

      includeJavascript(
        self.includeConfig(),
        self.includeLanguage.bind(self),
        self.includeLocalConfig.bind(self)
      );

      create_post_message_listener(DEFAULT_URL);
    };

    (self.includeConfig = function () {
      var config = args.config_repository;
      if (config !== "default")
        return BASE_URL + "store/" + config + CONFIG_FILE;
      return this.getConfigLocalUrl();
    }),
      (self.getConfigLocalUrl = function () {
        return DEFAULT_URL + "/assets/default" + CONFIG_FILE;
      });

    self.includeLocalConfig = function () {
      includeJavascript(this.getConfigLocalUrl(), this.includeLanguage);
    };

    self.includeLanguage = function () {
      includeJavascript(
        configTheme.languages[0].link,
        this.fixDefaulButton.bind(this)
      );
    };

    self.fixDefaulButton = function () {
      this.fix_arguments_buttons();
      this.checkIfProductExists();
    };

    self.fix_arguments_buttons = function () {
      args.btn1 = this.fixConfigButton(args.btn1);
      args.btn2 = this.fixConfigButton(args.btn2);
      this.isOneButton = args.btn2 && args.btn1 ? false : true;
    };

    self.fixConfigButton = function (btn) {
      if (btn) {
        if (btn.name === "provador")
          return this.getConfigButton("szb_fitting_room", btn);
        return this.getConfigButton("szb_size_chart", btn);
      }
    };

    self.getConfigButton = function (_id, btn) {
      var buttonDefault = {
        szb_fitting_room: {
          text: lang.button.fitting_room_text,
          tooltip_text: lang.button.fitting_room_tooltip_text,
        },
        szb_size_chart: {
          text: lang.button.size_chart_text,
          tooltip_text: lang.button.size_chart_tooltip_text,
        },
      };
      return {
        id: _id,
        text: btn.text || buttonDefault[_id].text,
        tooltip_text: btn.tooltip_text || buttonDefault[_id].tooltip_text,
        button_fixed: btn.button_fixed || false,
        icon_link: btn.icon_link || false,
        border: this.verifyconfig(btn.border),
        icon: this.verifyconfig(btn.icon),
      };
    };
    self.verifyconfig = function (config) {
      return config === false ? false : true;
    };

    self.constructButtons = function () {
      var box = this.$.find(args.button.id);

      if (obj.accessory && !obj.shoe) {
        this.createButton(args.btn2, box);
      } else {
        this.createButton(args.btn1, box);
        this.createButton(args.btn2, box);
      }

      box.className = "sizebay-container";
      box.className += args.button.button_fixed
        ? " " + args.button.button_fixed + "_button"
        : "";
      box.className +=
        args.button.position_button === "vertical"
          ? " " + args.button.position_button
          : "";
      box.className +=
        args.button.position_tooltip === "top"
          ? " tooltip-top"
          : " tooltip-bottom";

      box.style.display = "none";
      this.elements = {
        container: box,
        classDefault: box.className,
      };
    };
    self.createButton = function (button, box) {
      var shouldntDisplayIcon = function () {
        //bug browser security!!!!!!!!!!!!!!!!!!
        var chrome = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
        var firefox = navigator.userAgent.match(/Firefox\/([0-9]+)\./);
        return (chrome && chrome[2] == 64) || (firefox && firefox[1] > 57);
      };

      var createIconDiv = function (btn, link) {
        var divIcon = document.createElement("div");
        divIcon.className = "div-icon";
        divIcon.style.background = "url(" + link + ") center no-repeat";
        divIcon.style.display = "inline-block";
        divIcon.style.height = "35px";
        divIcon.style.width = "35px";
        divIcon.style.backgroundSize = "55% 55%";
        divIcon.style.transform = "scale(1, 1)";
        divIcon.style.position = "relative";
        divIcon.style.verticalAlign = "middle";

        if (btn.prepend) {
          btn.prepend(divIcon);
        } else {
          btn.insertBefore(divIcon);
        }

        return btn;
      };

      if (button) {
        var btn = document.createElement("button");

        btn.setAttribute("alt", button.text + " button");
        btn.id = button.id;

        btn.type = "button";

        this.createText("span", button.text, btn);

        if (button.icon_link) {
          button.icon = false;
          createIconDiv(btn, button.icon_link);

          //var spanBefore = '#' + btn.id + '.button_plugin.icon > span:before' document.styleSheets[0].insertRule( spanBefore + '{ content: " "; background-image: url(' + button.icon_link + '); background-repeat: no-repeat; }',1);
          //document.styleSheets[0].addRule( spanBefore ,'content: " "',1);
          //document.styleSheets[0].addRule( spanBefore ,'background-image: url(' + button.icon_link + ')', 1 );
          //document.styleSheets[0].addRule( spanBefore ,'background-repeat: no-repeat', 1 );
        }

        btn = this.addStyleClass(btn, button);

        this.createTooltip(btn, button);
        box.appendChild(btn);
      }
    };
    self.addStyleClass = function (btn, button) {
      btn.className = "button_plugin";
      btn.className += this.isOneButton ? " oneButton" : "";
      btn.className += button.icon ? " icon" : "";
      btn.className += button.border ? "" : " link";

      if (btn.children.length > 1 && btn.children[0].localName === "div") {
        btn.className += " div-icon";
      }

      return btn;
    };

    self.createText = function (element, txt, button, class_name) {
      var text = document.createElement(element);
      text.innerHTML = txt;
      if (class_name) text.className = class_name;
      button.appendChild(text);
    };

    self.havetooltip = function () {
      return args.button.show_tooltip;
    };

    self.createTooltip = function (btn, button) {
      if (!this.havetooltip()) return;
      var recomendedSizeText = lang.button.tooltip_recomended_size + ": ";
      var container_tooltip = document.createElement("div");
      container_tooltip.className = "contextual-tooltip";
      var container = document.createElement("div");
      container.className = "container-tooltip";
      container_tooltip.appendChild(container);
      this.createText("span", button.tooltip_text, container, "default_text");

      if (button.id === "szb_fitting_room") {
        this.createText("span", recomendedSizeText, container, "primary-text");
        this.createText(
          "span",
          lang.button.more_details,
          container,
          "secondary-text"
        );
      }

      btn.appendChild(container_tooltip);
    };

    self.update_tooltipFittingRoom = function (update) {
      if (!this.havetooltip()) return;
      var span = document.querySelector(
        "#szb_fitting_room > .contextual-tooltip > .container-tooltip .primary-text"
      );
      var spanSize = span.querySelector("b");
      if (spanSize) return (spanSize.innerHTML = update);
      this.createText("b", update, span);
    };

    self.on_render_plugin = function (html, callback) {
      this.render_plugin(html);
      callback();
    };

    self.render_plugin = function (html) {
      var box = this.$.find(args.button);
      box.style.display = "none";

      this.elements = {
        container: box,
        sizePlaceholder: box.getElementsByClassName("sizebay-container")[0],
      };
    };

    self.checkIfProductExists = function () {
      var that = this;
      load_product_id({
        base_url: args.base_url,
        session_id: SID,
        permalink: args.permalink,
        callback: function (product_id) {
          that.constructButtons();
          that.memorizeProductIdAndShowButton(product_id);
          that.checkIfUserProfileIsEmpty(product_id);
        },
        notFoundCallback: args.on_product_not_found.bind(that),
      });
    };

    self.checkIfUserProfileIsEmpty = function (product_id) {
      var that = this;
      request(args.base_url + "/api/me?sid=" + SID, function (me, resp) {
        var data = JSON.parse(resp.response);
        var is_empty = resp.status >= 300;
        if (!is_empty) {
          var currentProfile = data.currentProfile;
          is_empty =
            currentProfile.measures.empty &&
            typeof currentProfile.measures.ownProductBrand === "undefined";
          that.genderProfile = currentProfile.measures.gender;
          setCookie("SIZEBAY_SESSION_ID_V3", SID);
          self.currentProfile = currentProfile.measures;
        }
        is_empty
          ? args.on_user_profile_is_empty()
          : that.doSuitabilityAnalysisFor();
      });
    };

    self.memorizeProductIdAndShowButton = function (product_id) {
      var that = this;
      var container = this.elements.container.style;
      container.display = "flex";
      if (args.button.position_button === "vertical")
        container.display = "block";

      this.found_product_id = product_id;
      args.on_show_button(this.elements.container, product_id, function () {
        that.isProfileChanged();
      });
    };

    self.isProfileChanged = function () {
      var that = this;
      request(args.base_url + "/api/me?sid=" + SID, function (me, resp) {
        var is_empty = resp.status >= 300;
        that.oldProfile = that.currentProfile;
        self.currentProfile = JSON.parse(me).currentProfile.measures;
        if (that.verifyObjectIsEqual(that.oldProfile, self.currentProfile))
          that.refreshRecommendation(SID, is_empty);
      });
    };
    self.verifyObjectIsEqual = function (obj1, obj2) {
      for (var key in obj1) {
        if (obj1[key] !== obj2[key] && key !== "birth") return true;
      }
      return false;
    };
    self.refreshRecommendation = function (username, is_empty) {
      if (!is_empty) {
        is_empty = this.currentProfile.empty;
        this.genderProfile = this.currentProfile.gender;
        setCookie("SIZEBAY_SESSION_ID_V3", username);
      }
      is_empty
        ? args.on_user_profile_is_empty()
        : this.doSuitabilityAnalysisFor();
    };

    self.on_show_button = function (button) {
      println("Displaying the fitting-room button");
    };

    self.doSuitabilityAnalysisFor = function () {
      var that = this;
      var age = this.currentProfile.age;
      var productId = this.found_product_id;

      if (IS_ACCESSORY && !IS_SHOE) return;

      function renderSize(found_size, profileName) {
        args.on_render_size(found_size, profileName, that.$, that);
      }

      var url = DEFAULT_URL + "/api/me/analysis/" + that.found_product_id + "?sid=" + SID;

      if (SHOW_VFR3) url += "&tenant=" + TENANT_ID;

      request(url, function (analysis, resp) {
        var found_size = resp.status < 300;
        var data = JSON.parse(analysis);

        var profileName = data.profileName;
        var productGender = data.productGender;
        var productMatchesProfile =
          productGender === "U" || productGender === that.genderProfile;

        if (productMatchesProfile) {
          if (found_size) {
            dataLayer.push({ event: "szb-select-size" });
            found_size = data.recommendedSize;
            found_size
              ? renderSize(found_size, profileName)
              : args.on_product_does_not_fit();
          }
        } else {
          that.showState("profile-empty");
          args.on_user_profile_is_empty();
        }
      });
    };

    self.on_render_size = function (sizeName, profileName, $, that) {
      args.on_select_size(sizeName, profileName);
      that.update_tooltipFittingRoom(sizeName, profileName);
      that.showState("recommended-size");
    };

    self.on_select_size = function (sizeName, profileName) {
      println("Recommended size: " + sizeName + " for " + profileName);
    };

    self.on_product_does_not_fit = function () {
      document.getElementById("recomendation-size")
        ? document.getElementById("recomendation-size").remove()
        : null;
      println("Product does not fit to current user.");
      self.showState("profile-empty");
    };

    self.on_product_not_found = function () {
      println("Product not found. This plugin is inactive.");
      self.showState("product-not-found");
    };

    self.on_user_profile_is_empty = function () {
      println("User's profile is empty");
      self.showState("profile-empty");
    };

    self.showState = function (stateName) {
      if (this.elements !== null)
        this.elements.container.className =
          this.elements.classDefault + " state-" + stateName;

      if (stateName.indexOf("loading") > -1) {
        this.animate_tootip();
      }
    };

    self.animate_tootip = function () {
      var tooltip = document.querySelector("#szb_fitting_room");

      if (tooltip) {
        tooltip.classList.add("animate");
        setTimeout(function () {
          tooltip.classList.remove("animate");
        }, 4000);
      }
    };
    return self;
  };

  function println(line, code) {
    var msg = "%cSizebay: " + "%c" + line;
    console.log(msg, css.title, css.text);
    if (code) console.debug("%c >> %c" + code, "color: #cdcdcd;", css.code);
  }

  /**
   * Simple HTTP Request based on this Gist:
   * https://gist.github.com/Xeoncross/7663273
   */
  function request(url, callback, data) {
    try {
      var x = new XMLHttpRequest();
      x.open(data ? "POST" : "GET", url, 1);
      x.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      x.setRequestHeader("Content-type", "application/json");
      x.withCredentials = true;
      x.onreadystatechange = function () {
        x.readyState > 3 && callback && callback(x.responseText, x);
      };
      x.send(data);
    } catch (e) {
      window.console && console.error(e);
    }
  }

  /**
   * Load product id for a given URL.
   */
  function load_product_id(args) {
    if (args.product_id) args.callback();
    else {
      var url =
        args.base_url + "/plugin/my-product-id?sid=" + SID + getPermalink(args);
      request(url, function (id, resp) {
        if (resp.status < 300) {
          obj = JSON.parse(resp.response);
          IS_SHOE = obj.shoe;
          IS_ACCESSORY = obj.accessory;

          if (!IS_ACCESSORY && IS_LOOKBOOK) {
            args.callback(parseInt(obj.id));
          } else if (!IS_LOOKBOOK) {
            args.callback(parseInt(obj.id));
          }
        } else if (resp.status == 404) args.notFoundCallback ? args.notFoundCallback.apply(window, arguments) : console.error("Could not find the product");
      });
    }
  }
  function getPermalink(args) {
    return args.permalink ? "&permalink=" + args.permalink : "";
  }

  function create_post_message_listener(url) {
    // Create IE + others compatible event handler
    var eventMethod = window.addEventListener
      ? "addEventListener"
      : "attachEvent";
    var eventer = window[eventMethod];
    var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
    // Listen to message from child window
    eventer(
      messageEvent,
      function (e) {
        if (e.origin === url) {
          var chunks = e.data.split(";");
          if (chunks[0] === "new-sid") {
            setCookie("SIZEBAY_SESSION_ID_V3", SID);
          }
        }
      },
      false
    );
  }

  function load_session_id(base_url, callback) {
    var sessionId = getCookie("SIZEBAY_SESSION_ID_V3");
    if (sessionId && sessionId !== "undefined") {
      SID = sessionId;
      setCookie("SIZEBAY_SESSION_ID_V3", sessionId);
      return callback(sessionId);
    }

    var url = base_url + "/api/me/session-id";
    request(url, function (newSessionId) {
      newSessionId = JSON.parse(newSessionId);
      setCookie("SIZEBAY_SESSION_ID_V3", newSessionId);
      SID = newSessionId;
      callback(newSessionId);
    });
  }

  function getCookie(cname) {
    var name = cname + "=",
      c = null,
      ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1);
      if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
  }

  function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + "; path= / ";
  }

  return {
    /* nano DOM API */
    dom: {
      //is_mobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      is_ios: /iPod|iPad|iPhone/i.test(navigator.userAgent),
      is_mobile: /Android|iPad|iPhone/i.test(navigator.userAgent),
      find: function (id) {
        return document.getElementById(id);
      },
      findByTag: function (name) {
        return document.getElementsByTagName(name);
      },
      element: function (name) {
        return document.createElement(name);
      },
    },

    log: println,

    product_added_to_cart: function (args) {
      args = args || {};
      args.base_url = args.base_url || DEFAULT_URL;
      args.product = args.product || document.location.href;

      if (!args.product.includes("http") || !args.product.includes("https")) {
        var splitedUrl = args.product.split("//");
        if (splitedUrl.length == 1) {
          args.product = "https://" + args.product;
        } else {
          args.product = "https:" + args.product;
        }
      }

      load_session_id(args.base_url, function (sid) {
        request(
          args.base_url +
            "/plugin/added-to-cart?product=" +
            args.product +
            "&sid=" +
            sid,
          function () {
            dataLayer.push({ event: "szb-add-to-cart" });
            println("Product registered as 'added to cart'", args.product);
          }
        );
      });
    },

    product_ordered: function (args) {
      if (!args || !args.items || !args.items.length)
        throw (
          "Bad argument: " +
          (args && JSON.stringify(args)) +
          ". Check the https://sizebay.com/docs for more details."
        );

      var base_url = args.base_url || DEFAULT_URL;
      delete args.base_url;

      args.items.forEach(function (item, index) {
        if (!item.product.includes("http") || !item.product.includes("https")) {
          var splitedUrl = item.product.split("//");
          if (splitedUrl.length == 1) {
            args.items[index].product = "https://" + args.items[index].product;
          } else {
            args.items[index].product = "https:" + args.items[index].product;
          }
        }
      });

      load_session_id(base_url, function (sid) {
        request(
          base_url + "/plugin/ordered?sid=" + sid,
          function () {
            var urls = "";
            for (var i = 0; i < args.items.length; i++)
              urls += args.items[i].product + "\n";

            dataLayer.push({ event: "szb-ordered" });
            println("Order registered", urls);
          },
          JSON.stringify(args)
        );
      });
    },

    profile_bond: function (tenant_id) {
      if (!tenant_id) throw "Bad argument: Tenant id is required.";

      var base_url = DEFAULT_URL;

      load_session_id(base_url, function (sid) {
        request(
          base_url +
            "/plugin/profile-bond?sid=" +
            sid +
            "&tenant_user_id=" +
            tenant_id
        );
      });
    },

    /**
     * Initialize the Sizebay's embedded recommended size indicator.
     */
    embedded_indicator: function (args) {
      var n = new constructionEmbeddedIndicator(args);
      n.$ = this.dom;

      n.fix_arguments();
      load_session_id(args.base_url, function (sessionId) {
        n.session_id = sessionId;
        n.init();
      });
    },

    fitting_room: function (args) {
      var n = new constructionPlugin(args);
      n.$ = this.dom;
      n.fix_arguments();
      load_session_id(args.base_url, function (sessionId) {
        n.session_id = sessionId;
        n.loadProductIdAndConfigurePlugin();
      });
    },

    /**
     * Initialize the Sizebay's Sizechart and Fitting room.
     */
    twoButtons: function (args) {
      var n = new constructionPlugin(args);
      n.$ = this.dom;

      n.fix_arguments = function () {
        fix_size_chart();
        fix_virtual_fitting();
        args.base_url = args.base_url || DEFAULT_URL;
        args.config_repository = args.config_repository || "default";

        args.on_init = args.on_init || this.init;
        args.on_show_button = args.on_show_button || this.show_button;
        this.includeConfig();
      };
      n.init = function (on_open_plugin, product_id) {
        args.product_id = product_id;
        println("Configured product identification: " + args.product_id);
        configurePlugin("size_chart");
        if (!args.on_init_fitting) configurePlugin("virtual_fitting");
        else args.on_init_fitting(on_open_plugin, product_id);
      };
      n.show_button = function (button, image_button, clickCallback) {
        button.src = image_button;
        if (!args.size_chart) button.style.display = "inline-block";
        button.addEventListener("click", clickCallback);
      };
      (n.on_open_plugin = function () {
        request(args.base_url + "/plugin/opened?sid=" + SID, function () {
          dataLayer.push({ event: "szb-plugin-opened" });
          println("Opening the plugin window...");
          if (args.on_open) args.on_open();
        });
        args.size_chart = this.id === args.size_chart_button ? true : false;

        if (!n.iframe_holder) n.attach_iframe_into_body();
        else n.update_iframe_url();

        n.store_current_scroll_position();
        n.body.className += " sizebay-plugin-opened";
        n.iframe_holder.className = n.OPENED_BUTTON;
        n.overlay.className = n.OVERLAY;
      }),
        (n.loadProductIdAndConfigurePlugin = function () {
          load_product_id({
            base_url: args.base_url,
            product_id: args.product_id,
            session_id: SID,
            callback: function (product_id) {
              args.on_init(n.on_open_plugin, product_id);
              if (args.on_init_fitting)
                args.on_init_fitting(n.on_open_plugin, product_id);
            },
            notFoundCallback: args.on_product_not_found,
          });
        });
      function fix_size_chart() {
        args.size_chart_button = args.size_chart_button || "size_chart";
        args.size_chart_image =
          args.size_chart_image ||
          "https://s3.amazonaws.com/sizebay-images/button/site_sizebay.png";
      }
      function fix_virtual_fitting() {
        if (!args.on_init_fitting) {
          args.virtual_fitting_button =
            args.virtual_fitting_button || "btn_plugin";
          args.virtual_fitting_image =
            args.virtual_fitting_image ||
            "https://s3.amazonaws.com/sizebay-images/button/site_sizebay.png";
        }
      }
      function configurePlugin(plugin) {
        var montImage = plugin + "_image";
        var montButton = plugin + "_button";
        println(plugin + ": " + VERSION[plugin]);
        println("Expected button image: ", args[montImage]);
        args.on_show_button(
          n.$.find(args[montButton]),
          args[montImage],
          n.on_open_plugin
        );
      }

      n.fix_arguments();
      if (!args.product_id)
        load_session_id(args.base_url, function (sessionId) {
          n.session_id = sessionId;
          n.loadProductIdAndConfigurePlugin();
        });
      else
        load_session_id(args.base_url, function (sessionId) {
          n.session_id = sessionId;
          args.on_init(n.on_open_plugin, args.product_id);
          args.on_init_fitting(n.on_open_plugin, args.product_id);
        });
    },
    /**
     * Initialize the Sizebay's embedded recommended size indicator.
     */
    embedded_indicator2: function (args) {
      var n = new constructionEmbeddedIndicator(args);
      n.$ = this.dom;
      n.fix_arguments();
      load_session_id(args.base_url, function (sessionId) {
        n.session_id = sessionId;
        n.init();
      });
      n.render_plugin = function (html) {
        var btn = this.$.find(args.virtual_fitting_button);
        btn.style.display = "none";
        btn.innerHTML = html;

        this.elements = {
          container: btn,
          sizePlaceholder: btn.getElementsByClassName(
            "sizebay-state-recommended-size-placeholder"
          )[0],
        };
      };
    },

    embedded_indicator3: function (args) {
      var n = new constructionEmbeddedIndicator3(args);
      n.$ = this.dom;
      n.fix_arguments();
      load_session_id(args.base_url, function (sessionId) {
        n.session_id = sessionId;
        n.init();
      });
    },
    plugin3: function (args) {
      SHOW_VFR3 = args.showVFR3;
      TENANT_ID = args.tenantId;

      var n = new constructionPlugin3(args);
      n.$ = this.dom;
      n.fix_arguments();
      load_session_id(args.base_url, function (sessionId) {
        n.session_id = sessionId;
        n.loadProductIdAndConfigurePlugin();
      });
    },
    multiproduct: function (args) {
      IS_LOOKBOOK = true;

      var n = new constructionEmbeddedIndicator3(args);
      n.$ = this.dom;

      n.constructButtons = function () {
        var box = args.button.id;
        var newBox = document.createElement("div");
        box.append(newBox);

        this.createButton(args.btn1, newBox);
        this.createButton(args.btn2, newBox);

        newBox.className = "sizebay-container";
        newBox.className += args.button.button_fixed
          ? " " + args.button.button_fixed + "_button"
          : "";
        newBox.className +=
          args.button.position_button === "vertical"
            ? " " + args.button.position_button
            : "";
        newBox.className +=
          args.button.position_tooltip === "top"
            ? " tooltip-top"
            : " tooltip-bottom";

        newBox.style.display = "none";
        this.elements = {
          container: newBox,
          classDefault: newBox.className,
        };
      };

      n.update_tooltipFittingRoom = function (update) {
        if (!this.havetooltip()) return;
        var span = n.button.id.querySelector(
          "#szb_fitting_room > .contextual-tooltip > .container-tooltip .primary-text"
        );
        var spanSize = span.querySelector("b");
        if (spanSize) return (spanSize.innerHTML = update);
        this.createText("b", update, span);
      };
      n.on_select_size = function (sizeName, profileName) {
        createLabelRecomendedSize(sizeName, profileName);
        println("Recommended size: " + sizeName + " for " + profileName);
      };

      function createLabelRecomendedSize(sizeName, profileName) {
        var label = args.button.id.querySelector("#szb_fitting_room");
        label.innerText = "Recomendamos ";
        var recomended = document.createElement("b");
        recomended.innerText = sizeName;
        var name = document.createElement("b");
        name.innerText = name;
        label.append(recomended);
        label.append(name);
      }

      n.on_user_profile_is_empty = function () {
        updateToDefaultText();
      };
      n.on_product_does_not_fit = function () {
        updateToDefaultText();
        document.getElementById("recomendation-size")
          ? document.getElementById("recomendation-size").remove()
          : null;
        println("Product does not fit to current user.");
        this.showState("profile-empty");
      };
      function updateToDefaultText() {
        var label = args.button.id.querySelector("#szb_fitting_room");
        label.innerText = getFittingRoomText();
      }
      function getFittingRoomText() {
        if (args.btn1.id == "szb_fitting_room") return args.btn1.text;
        return args.btn2.text;
      }

      n.fix_arguments(args);
      load_session_id(args.base_url, function (sessionId) {
        n.session_id = sessionId;
        n.init();
      });
      return n;
    },
    multiproductPlugin: function (args) {
      var n = new constructionPlugin3(args);
      n.$ = this.dom;
      n.fix_arguments();

      n.loadProductIdAndConfigurePlugin = function () {
        var that = this;
        load_product_id({
          base_url: args.base_url,
          product_id: args.product_id,
          session_id: SID,
          callback: function (product_id) {
            args.on_init(n.on_open_plugin.bind(that), product_id);
          },
          notFoundCallback: args.on_product_not_found,
        });
      };
      n.on_open_plugin = function () {
        var that = this;
        var button =
          typeof arguments[0] === "string"
            ? arguments[0]
            : args.button.querySelector(" button.button_plugin:hover").id;
        args.size_chart = button === "szb_size_chart" ? true : false;
        if (args.size_chart)
          request(
            args.base_url + "/plugin/table-opened?sid=" + SID,
            function () {
              dataLayer.push({ event: "szb-plugin-opened" });
              println("Opening the table window...");
              if (args.on_open) args.on_open();
            }
          );
        else
          request(args.base_url + "/plugin/opened?sid=" + SID, function () {
            dataLayer.push({ event: "szb-plugin-opened" });
            println("Opening the plugin window...");
            if (args.on_open) args.on_open();
          });

        if (!that.iframe_holder) that.attach_iframe_into_body();
        else that.update_iframe_url();

        that.store_current_scroll_position();
        that.body.classList.add("sizebay-plugin-opened");
        that.iframe_holder.className = that.OPENED_BUTTON;
        that.overlay.className = that.OVERLAY;
      };

      load_session_id(args.base_url, function (sessionId) {
        n.session_id = sessionId;
        n.loadProductIdAndConfigurePlugin();
      });
      return n;
    },
  };
})();
