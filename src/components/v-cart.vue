<template>
  <div class="v-cart">
    <router-link :to="{ name: 'catalog', }">
      <div class="v-catalog__link_to_cart">
        Back to catalog
      </div>
    </router-link>
    <h1>Cart</h1>
    <p v-if="!CART.length">Вначале выбери леопарда</p>
    <v-cart-item
      v-for="(item, index) in CART"
      :key="item.id"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"

    />
    <div class="v-cart__total">
      <p class="total__name">Total coast</p>
      <p>{{ cartTotalCoast }} ₽</p>
    </div>
  </div>

</template>

<script>
import vCartItem from './v-cart-item.vue'
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'v-cart',
  components:{
    vCartItem
  },
  props:{
    cart_data:{
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    ...mapGetters([
      'CART'
    ]),
    cartTotalCoast(){
      let result = []
      if (this.CART.length){
        for (let item of this.CART){
          result.push(item.price + item.quantity)
        }
        result = result.reduce(function (sum, el){
          return sum + el
        })
        return result
      }else {
        return 0
      }
    }
  },
  methods:{
    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM'
    ]),
    increment(index){
      this.INCREMENT_CART_ITEM(index)
    },
    decrement(index){
      this.DECREMENT_CART_ITEM(index)
    },
    deleteFromCart(index){
      this.DELETE_FROM_CART(index)
    }
  },
}
</script>

<style lang="scss">
  .v-cart{
    width: 100%;
    height: 100%;
    &__total{
      position: static;
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: center;
      background-color: seagreen;
      color: white;
    }
  }
</style>
