<template>
  <div class="v-catalog-item no-selected">
    <img class="v-catalog-item__img img" :src=" require('../../assets/images/' + product_data.image)" alt="">
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">{{ product_data.price }} ₽</p>
    <a href=""></a>

    <button
      class="v-catalog-item__ad_to_cart_btn btn"
      @click="addToCart"
    >add
    </button>
  </div>
</template>

<script>

export default {
  props:{
    product_data:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  name: 'v-catalog-item',
  methods:{
    addToCart(){
      this.$emit('addToCart', this.product_data)
    },
  },

}

</script>

<style lang="scss">
 .v-catalog-item{
   border: #2c3e50 2px solid;
   margin: 5px;
   &__img{
   width: 300px;
   height: 300px;
  }
   &__ad_to_cart_btn{
     width: 100%;
     height: 40px;
     cursor: pointer
   }
 }

</style>
