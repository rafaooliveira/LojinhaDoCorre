<template lang="pug">

  q-layout(view="lHh Lpr lFf")
    q-header(elevated)
      q-toolbar(
        class="bg-black text-white"
      )
        q-img(
          src="~assets/irmaoMetralha.jpeg"
          style="height: 100px; max-width: 120px"
        )
        q-toolbar-title Lojinha do corre
        q-btn(
          label="Realizar Cadastro"
          :to="'/realizar-cadastro'"
        )
    q-page-container
        router-view
</template>

<script>
import moment from 'moment'
import routes from '../router/routes'
export default {
  name: 'MainLayout',
  data () {
    return {
      m: moment,
      leftDrawerOpen: false,
      registers: []
    }
  },
  methods: {
    renderMenu () {
      routes.forEach((route) => {
        switch (route.path) {
          case '/registros':
            route.children.forEach(child => {
              this.registers.push({
                icon: 'add_location',
                text: child.name,
                to: `${route.path}/${child.path}`
              })
            })
            break
          default:
            break
        }
      })
    }
  },
  async mounted () {
    this.renderMenu()
  }
}
</script>
