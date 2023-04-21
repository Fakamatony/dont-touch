<template>
  <div class="v-catalog">

    <v-notification
      :messages="messages"
    />

    <router-link
      :to="{ name: 'cart'}"
      :cart_data="CART"
    >
      <div class="v-catalog__link_to_cart">
        Cart: {{ CART.length }}
      </div>
    </router-link>
    <h1>Catalog</h1>
    <v-select
      :selected="selected"
      :options="categories"
      @select="sortByCategories"
    />
    <div class="v-catalog__list">
      <v-catalog-item
        v-for="product in this.filteredProducts"
        :key="product.id"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>

  </div>

</template>

<script>
import vCatalogItem from './v-catalog-item.vue'
import {mapActions, mapGetters} from 'vuex';
import vSelect from '../v-select.vue'
import vNotification from '../notifications/v-notification.vue'

export default {
  name: 'v-catalog',
  data(){
    return{
      categories:[
        {name:"Женские",value:"Ж"},
        {name:"Мужские",value:"М"},
        {name:"Все",value:"ALL"},
      ],
      selected:'Все',
      sortedProducts:[],
      messages:[
        {name: 'Notitification name', id: Date.now().toLocaleString()}
      ]
    }
  },
  components:{
    vCatalogItem,
    vSelect,
    vNotification
  },
  computed:{
    ...mapGetters([
      'PRODUCTS',
      'CART'
    ]),
    filteredProducts(){
      if (this.sortedProducts.length){
        return this.sortedProducts
      }else {
        return this.PRODUCTS
      }
    }
  },
  methods:{
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    sortByCategories(category){
      this.sortedProducts = []
      let wario = this
      this.PRODUCTS.map(function (item){
        if (item.category === category.name){
          wario.sortedProducts.push(item)
        }
      })
      this.selected = category.name
    },
    addToCart(data){
      this.ADD_TO_CART(data)
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
      .then((response)=>{
        if (response.data){
          console.log('nice')
        }
      })
  }
}
</script>

<style lang="scss">
  .v-catalog{
    &__list{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
    &__link_to_cart{
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 16px;
      border: solid 2px black;
    }
  }
</style>
