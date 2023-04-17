<template>
  <div class="v-cart-item no-selected">
    <img class="v-cart-item__img img" :src=" require('../../assets/images/' + cart_item_data.image)" alt="">
    <div class="v-cart-item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }} ₽</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>Qoan</p>
      <span>
        <span class="v-cart-item__quan_limiter" @click="decrementItem">-</span>
        {{ cart_item_data.quantity }}
        <span class="v-cart-item__quan_limiter" @click="incrementItem">+</span>
      </span>

    </div>
    <button class="v-cart-item__btn" @click="deleteFromCart">Delete</button>
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
    margin-bottom: 5px;
    border: #2c3e50 2px solid;
    &__img{
      width: 150px;
      height: 150px;
    }
    &__btn{
      width: 100px;
      height: 20px;
      cursor: pointer;
    }
    &__quan_limiter{
      font-size: 24px;
      cursor: pointer;
    }
  }

</style>
