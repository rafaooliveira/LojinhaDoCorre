window.hjSiteSettings = window.hjSiteSettings || {"site_id":58506,"r":0.16605295430322406,"rec_value":0.004074505238649592,"state_change_listen_mode":"manual","record":true,"continuous_capture_enabled":true,"recording_capture_keystrokes":false,"anonymize_digits":false,"anonymize_emails":false,"suppress_all":false,"suppress_text":null,"suppress_location":false,"user_attributes_enabled":false,"legal_name":null,"privacy_policy_url":null,"deferred_page_contents":[],"record_targeting_rules":[{"component":"url","match_operation":"contains","pattern":"/login","negate":false}],"feedback_widgets":[],"forms":[],"heatmaps":[],"polls":[{"id":615231,"created_epoch_time":1601925388,"skin":"light","background":"#EAEAEA","effective_show_branding":false,"position":"right","content":{"version":2,"questions":[{"uuid":"334bb726-948e-4e06-b8b1-8d9589e3738d","type":"single-close-ended","text":"Queremos a sua ajuda para melhorar a experi\u00eancia de acompanhamento de pedido. Voc\u00ea topa?","required":true,"randomize_answer_order":false,"pin_last_to_bottom":false,"answers":[{"text":"Sim","comments":false},{"text":"N\u00e3o","comments":false}],"nextByAnswer":["byOrder","thankYou"],"next":"byAnswer"},{"uuid":"aa824f6d-5ab5-4963-ab5c-cdbc0afec652","type":"multiple-close-ended","text":"Como voc\u00ea acompanha a entrega do seu pedido?","required":true,"randomize_answer_order":true,"pin_last_to_bottom":false,"answers":[{"text":"WhatsApp","comments":false},{"text":"Entro em contato com a Netshoes (chat, telefone, e-mail)","comments":false},{"text":"Entro no site e acesso a p\u00e1gina \"Meus Pedidos\"","comments":false},{"text":"Aplicativo","comments":false},{"text":"E-mail de status de pedido","comments":false}],"next":"byOrder"},{"uuid":"a446a7e4-3f78-4bf9-9199-2d6549462e27","type":"single-close-ended","text":"Voc\u00ea teve alguma dificuldade para acompanhar seu pedido?","required":true,"randomize_answer_order":false,"pin_last_to_bottom":false,"answers":[{"text":"Sim","comments":false},{"text":"N\u00e3o","comments":false}],"nextByAnswer":["question:1cb7e9ab-a024-4d19-b83b-23f767ef17c1","question:853877dc-2549-4244-96e4-f41a52d071d0"],"next":"byAnswer"},{"uuid":"1cb7e9ab-a024-4d19-b83b-23f767ef17c1","type":"single-close-ended","text":"Onde voc\u00ea teve dificuldade?","required":true,"randomize_answer_order":false,"pin_last_to_bottom":false,"answers":[{"text":"N\u00e3o encontrei o rastreio","comments":false},{"text":"O pedido estava atrasado","comments":false},{"text":"O rastreio n\u00e3o estava atualizado","comments":false},{"text":"Queria mais detalhes da entrega","comments":false},{"text":"Outro:","comments":true}],"next":"byOrder"},{"uuid":"5118448e-46b6-4e26-b1fe-338f532ccf12","type":"single-open-ended-single-line","text":"Pode nos passar o n\u00famero do pedido com o qual teve problema?","required":false,"nextIfSkipped":"byOrder","next":"byOrder"},{"uuid":"853877dc-2549-4244-96e4-f41a52d071d0","type":"single-open-ended-single-line","text":"Voc\u00ea tem alguma sugest\u00e3o para a gente melhorar o acompanhamento de pedidos? ","required":false,"nextIfSkipped":"thankYou","next":"thankYou"}],"thankyou":"Obrigado por responder! Seu feedback \u00e9 super importante para gente."},"ask_for_consent":false,"language":"pt_BR","display_condition":"immediate","display_delay":0,"persist_condition":"response","targeting_percentage":5,"targeting":[{"component":"url","match_operation":"contains","name":null,"negate":false,"pattern":"new-account/my-orders","rule_type":null},{"component":"device","match_operation":"exact","name":null,"negate":false,"pattern":"phone","rule_type":null},{"component":"device","match_operation":"exact","name":null,"negate":false,"pattern":"tablet","rule_type":null},{"component":"device","match_operation":"exact","name":null,"negate":false,"pattern":"desktop","rule_type":null}],"show_legal":false,"uuid":"e03ac2de-ab86-458e-99a9-f312a82402a2","enabled_offsite":false,"logo_url":null,"invite":{"title":"Your feedback is important to us!","description":"Tell us what you think about this page by taking our quick Survey.","button":"Yes, I will give feedback","close":"No thanks"},"invite_enabled":false}],"integrations":{"optimizely":{"tag_recordings":false}},"features":["recordings.page_content_ws","settings.billing_v2"]};

!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=251)}({251:function(e,t){window.hjBootstrap=window.hjBootstrap||function(e,t,n){var o=["bot","headless","google","baidu","bing","msn","duckduckbot","teoma","slurp","yandex","phantomjs","pingdom","ahrefsbot"].join("|"),r=new RegExp(o,"i"),a=window.navigator||{userAgent:"unknown"},i=a.userAgent?a.userAgent:"unknown";if(r.test(i))console.warn("Hotjar not launching due to suspicious userAgent:",i);else{var d=function(e,t,n){window.hjBootstrapCalled=(window.hjBootstrapCalled||[]).concat(n),window.hj&&window.hj._init&&window.hj._init._verifyInstallation&&hj._init._verifyInstallation()};d(0,0,n);var s,u,l,c,p=window.document,f=p.head||p.getElementsByTagName("head")[0];p.addEventListener&&(hj.scriptDomain=e,(s=p.createElement("script")).async=1,s.src=hj.scriptDomain+t,s.charset="utf-8",f.appendChild(s),c=["iframe#_hjRemoteVarsFrame {","display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;","}"],(u=p.createElement("style")).type="text/css",u.styleSheet?u.styleSheet.cssText=c.join(""):u.appendChild(p.createTextNode(c.join(""))),f.appendChild(u),(l=p.createElement("iframe")).style.cssText=c[1],l.name="_hjRemoteVarsFrame",l.title="_hjRemoteVarsFrame",l.id="_hjRemoteVarsFrame",l.src="https://"+(window._hjSettings.varsHost||"vars.hotjar.com")+"/box-469cf41adb11dc78be68c1ae7f9457a4.html",l.onload=function(){d.varsLoaded=!0,"undefined"!=typeof hj&&hj.event&&hj.event.signal("varsLoaded")},d.varsJar=l,"interactive"===p.readyState||"complete"===p.readyState||"loaded"===p.readyState?h():p.addEventListener("DOMContentLoaded",h),d.revision="f9b37dcf0b97",window.hjBootstrap=d)}function h(){setTimeout((function(){p.body.appendChild(l)}),50)}},window.hjBootstrap("https://script.hotjar.com/","modules.0d7a047cb613393385fe.js","58506")}});
//# sourceMappingURL=hotjar.js.map