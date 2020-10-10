<template lang="pug">
  div.q-ma-sm
    div.row.flex-center
      div.coluna
        q-input.col-xl-6.col-lg-6.col-md-6.col-sm-6.col-xs-12.q-pa-lg(
          filled
          v-model="register.user"
          label="Usuário"
          class="text-white"
          :rules="[val => !!val || msgCampoObr]"
          clearable
        )
          template(v-slot:prepend)
            q-icon(name="person" color="grey-7")
        q-input.col-xl-6.col-lg-6.col-md-6.col-sm-6.col-xs-12.q-pa-lg(
          filled
          v-model="register.password"
          label="Senha"
          class="text-white"
          :rules="[val => !!val || msgCampoObr]"
          clearable
        )
          template(v-slot:prepend)
            q-icon(name="login" color="grey-7")
        q-btn.col-xl-3.col-lg-3.col-md-3.col-sm-3.col-xs-3.q-ma-lg(
          label="Entrar"
          color="positive"
          :to='"/home"'
        )
        q-btn.col-xl-3.col-lg-3.col-md-3.col-sm-3.col-xs-3.q-ma-lg(
          label="Esqueceu sua senha?"
          color="warning"
          @click="modalEmail"
        )
</template>
<style scoped>
.coluna {
    width: 50%;
}
</style>
<script>
import { Notify } from 'quasar'

Notify.setDefaults({
  position: 'top-right',
  timeout: 1000,
  actions: [{ icon: 'close', color: 'white' }]
})

export default {
  name: 'Login',
  data () {
    return {
      msgCampoObr: 'Campo Obrigatório',
      register: [
        {
          user: '',
          password: '',
          email: ''
        }
      ]
    }
  },
  methods: {
    validar () {
      if (!this.register.user || !this.register.password) {
        this.$q.notify({
          message: 'Preencha os campos para continuar',
          color: 'negative'
        })
      }
    },
    modalEmail () {
      this.$q.dialog({
        title: 'E-mail',
        message: 'Será enviado um e-mail para redefinir sua senha',
        prompt: {
          model: this.register.email,
          isValid: val => val !== '', // << here is the magic
          type: 'text' // optional
        },
        cancel: true,
        persistent: true
      }).onOk(data => {
        if (data === '' || data === undefined || data === null) {
          this.$q.notify({
            message: 'Preenche o campo na maciota pai',
            color: 'negative'
          })
        } else {
          this.register.email = data
          this.$q.notify({
            message: `Email enviado para ${data}`,
            color: 'positive'
          })
        }
      })
    }
  }
}
</script>
