<template lang="pug">
  div.q-ma-sm
    div.row.flex-center
      q-input.col-xl-4.col-lg-6.col-md-6.col-sm-8.col-xs-12.q-pa-lg(
        filled
        v-model="register.nome"
        label="Nome"
        class="text-white"
        clearable
      )
      q-input.col-xl-4.col-lg-6.col-md-6.col-sm-8.col-xs-12.q-pa-lg(
        filled
        v-model="register.idade"
        label="Idade"
        class="text-white"
        clearable
      )
      q-input.col-xl-4.col-lg-6.col-md-6.col-sm-8.col-xs-12.q-pa-lg(
        filled
        v-model="register.email"
        label="E-mail"
        class="text-white"
        :rules="[val => !!val || msgCampoObr]"
        clearable
      )
      q-input.col-xl-4.col-lg-6.col-md-6.col-sm-8.col-xs-12.q-pa-lg(
        filled
        v-model="register.cpf"
        mask="###.###.###-##"
        label="CPF"
        class="text-white"
        clearable
        :rules="[val => !!val || msgCampoObr]"
      )
      q-input.col-xl-4.col-lg-6.col-md-6.col-sm-8.col-xs-12.q-pa-lg(
        filled
        v-model="register.cep"
        mask="#####-###"
        label="CEP"
        class="text-white"
        clearable
        @change="buscarCepDigitado"
        :rules="[val => !!val || msgCampoObr]"
      )
      q-input.col-xl-4.col-lg-6.col-md-6.col-sm-8.col-xs-12.q-pa-lg(
        filled
        v-model="register.logradouro"
        label="Logradouro"
        class="text-white"
        clearable
        :rules="[val => !!val || msgCampoObr]"
      )
      q-input.col-xl-4.col-lg-6.col-md-6.col-sm-8.col-xs-12.q-pa-lg(
        filled
        v-model="register.uf"
        label="UF"
        class="text-white"
        clearable
        :rules="[val => !!val || msgCampoObr]"
      )
      q-input.col-xl-4.col-lg-6.col-md-6.col-sm-8.col-xs-12.q-pa-lg(
        filled
        v-model="register.localidade"
        label="Cidade"
        class="text-white"
        clearable
        :rules="[val => !!val || msgCampoObr]"
      )
      q-input.col-xl-4.col-lg-6.col-md-6.col-sm-8.col-xs-12.q-pa-lg(
        filled
        v-model="register.bairro"
        label="Bairo"
        class="text-white"
        clearable
        :rules="[val => !!val || msgCampoObr]"
      )
      q-input.col-xl-4.col-lg-6.col-md-6.col-sm-8.col-xs-12.q-pa-lg(
        filled
        v-model="register.numero"
        label="Número"
        class="text-white"
        mask="######"
        clearable
        :rules="[val => !!val || msgCampoObr]"
      )
      q-input.col-xl-4.col-lg-6.col-md-6.col-sm-8.col-xs-12.q-pa-lg(
        filled
        v-model="register.complemento"
        label="Complemento"
        class="text-white"
        clearable
        :rules="[val => !!val || msgCampoObr]"
      )
      q-btn.col-xl-4.col-lg-6.col-md-6.col-sm-8.col-xs-12(
        color="secondary"
        label="Cadastrar"
        @click="cadastrar"
      )
</template>
<script>
import { Notify } from 'quasar'

Notify.setDefaults({
  position: 'top-right',
  timeout: 1000,
  actions: [{ icon: 'close', color: 'white' }]
})
export default {
  name: 'Cadastro',
  data () {
    return {
      filtro: '',
      msgCampoObr: 'Campo Obrigatório',
      register: {
        nome: '',
        idade: '',
        cpf: '',
        email: '',
        cep: '',
        bairro: '',
        uf: '',
        logradouro: '',
        localidade: '',
        numero: '',
        complemento: ''
      }
    }
  },
  methods: {
    buscarCepDigitado () {
      var cep = this.register.cep.replace(/-/, '')
      this.$viaCep.buscarCep(cep).then((obj) => {
        this.register.localidade = obj.localidade
        this.register.logradouro = obj.logradouro
        this.register.uf = obj.uf
        this.register.bairro = obj.bairro
      }).catch(err => {
        console.log(err)
      })
    },
    limparCampos () {
      this.register.nome = ''
      this.register.idade = ''
      this.register.cpf = ''
      this.register.email = ''
      this.register.cep = ''
      this.register.bairro = ''
      this.register.uf = ''
      this.register.logradouro = ''
      this.register.localidade = ''
      this.register.numero = ''
      this.register.complemento = ''
    },
    cadastrar () {
      this.$q.notify({
        message: `${this.register.nome} cadastrado com sucesso`,
        color: 'positive'
      })
      this.limparCampos()
    }
  },
  mounted () {
    this.data = this.records
  }
}
</script>
