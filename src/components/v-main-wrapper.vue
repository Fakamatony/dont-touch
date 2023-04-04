<template>
  <div class="v-main-wrapper">
    <h1>{{ title }}</h1>
    <v-catalog></v-catalog>
    <v-cart
      v-if="CART.length"
      :cart_data="CART"
    />
  </div>
</template>

<script>
import vCatalog from './v-catalog.vue'
import vCart from './v-cart.vue'
import {mapGetters} from 'vuex';

export default {
  name: 'v-main-wrapper',
  components:{
    vCatalog,
    vCart
  },
  props:{},
  data() {
    return{
      title: 'Ebal?'
    }
  },
  methods:{
    ...mapGetters([
      'CART'
    ])
  }
}
</script>

<style>
  .v-main-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 900px;
  }
</style>
