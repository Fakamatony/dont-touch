<template>
  <div class="v-cart-item">
    <img class="v-cart-item__img img" :src=" require('../assets/images/' + cart_item_data.image)" alt="">
    <div class="v-cart-item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }} ₽</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>Qoan</p>
      <span>
        <span @click="decrementItem">-</span>
        {{ cart_item_data.quantity }}
        <span @click="incrementItem">+</span>
      </span>

    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>


export default {
  name: 'v-cart-item',
  props:{
    cart_item_data:{
      type: Object,
      default(){
        return { }
      }
    }
  },
  methods:{
    incrementItem(){
      this.$emit('increment')
    },
    decrementItem(){
      this.$emit('decrement')
    },
    deleteFromCart(){
      this.$emit('deleteFromCart')
    }
  },


}
</script>

<style lang="scss">
  .v-cart-item{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  }
  .img{
    width: 100px;
    height: 100px;
  }
</style>
