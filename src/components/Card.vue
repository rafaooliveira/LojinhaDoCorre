<template lang="pug">
  div.q-ma-sm
    div.row.flex-center
      q-input.col-xl-8.col-lg-8.col-md-8.col-sm-8.col-xs-12.q-pa-lg(
        filled
        v-model="filtro"
        label="Buscar"
        class="text-white"
        clearable
        @input="filtrar"
      )
        template(v-slot:prepend)
          q-icon(name="search" color="grey-7")
      q-card.col-xl-4.col-lg-4.col-md-6.col-sm-8.col-xs-12.q-pa-sm.q-ma-sm.card(
        v-for="(item, index) in records" :key="index"
        flat
        bordered
      )
        q-img.float-left(
          v-bind:src="item.img"
          style="height: 300px; max-width: 300px;"
        )
        q-card-section.q-px-md
          div.row
            div(
              class="col text-h6 ellipsis"
            ) {{item.nome}}
        q-card-section
          div.row
            q-btn.q-mx-xs(
              color="teal"
              size="sm"
            ) {{item.tamanho}}
            div.q-my-sm.q-mx-xs(
              class="text-body1 text-italic"
              strong
            )  Descrição: {{item.descricao}}
          div(class="col-auto")
            q-btn.q-my-xs(
              color="secondary"
              flat
            ) R$ {{item.preco}}
</template>
<style scoped>
.card:hover {
  border-color: #26a69a;
}
</style>
<script>

export default {
  name: 'Card',
  data () {
    return {
      filtro: '',
      records: [
        {
          id: 1,
          img: require('../assets/high_listrinha_chapada.jpg'),
          nome: 'Camiseta High',
          tamanho: ['G', 'GG', 'GGG'],
          descricao: 'Peça feita a mão estilo cachorro',
          marca: 'high',
          preco: '100.00'
        },
        {
          id: 2,
          img: require('../assets/essaAteEuQueria.jpg'),
          nome: 'Camiseta Nike SB',
          tamanho: ['G', 'GG', 'GGG'],
          descricao: 'Peça feita a maquina daquele jeitão',
          marca: 'nike',
          preco: '200.00'
        },
        {
          id: 3,
          img: require('../assets/juju.jpg'),
          nome: 'Lupa mandrake',
          tamanho: ['G', 'GG', 'GGG'],
          descricao: 'Pai, quer ficar gangueiro memo?',
          marca: 'oakley',
          preco: '250.00'
        },
        {
          id: 4,
          img: require('../assets/peitaLiver.jpg'),
          nome: 'Peita chave',
          tamanho: ['G', 'GG', 'GGG'],
          descricao: 'Essa é embassada pai',
          marca: 'nike',
          preco: '100.00'
        },
        {
          id: 5,
          img: require('../assets/cyclonado.png'),
          nome: 'Bermuda Cyclone',
          tamanho: ['G', 'GG', 'GGG'],
          descricao: 'Quem te trombar se borra',
          marca: 'cyclone',
          preco: '200.00'
        },
        {
          id: 6,
          img: require('../assets/kitBeck.jpeg'),
          nome: 'Kit Beck embassado',
          tamanho: ['G', 'GG', 'GGG'],
          descricao: 'Pai, quer ficar gangueiro memo?',
          marca: 'adidas',
          preco: '250.00'
        }
      ]
    }
  },
  methods: {
    filtrar () {
      if (this.filtro === '') {
        this.records = this.data
      } else {
        this.records = this.data.filter(item => {
          return item.nome.startsWith(this.filtro)
        })
      }
    }
  },
  mounted () {
    this.data = this.records
  }
}
</script>
