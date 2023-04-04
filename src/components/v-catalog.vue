<template>
  <div class="v-catalog">
    <v-catalog-item
      v-for="product in this.PRODUCTS"
      :key="product.id"
      :product_data="product"
      @addToCart="addToCart"
    />
  </div>

</template>

<script>
import vCatalogItem from './v-catalog-item.vue'
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'v-catalog',
  data(){
    return{
      products: [

      ],
    }
  },
  components:{
    vCatalogItem
  },
  computed:{
    ...mapGetters([
      'PRODUCTS'
    ])
  },
  methods:{
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart(data){
      this.ADD_TO_CART(data)
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
      .then((response)=>{
        if (response.data){
          console.log('Заебись загрузилось')
        }
      })
  }
}
</script>

<style scoped>
  .v-catalog{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap:wrap;
  }
</style>
