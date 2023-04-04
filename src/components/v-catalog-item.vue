<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item__img img" :src=" require('../assets/images/' + product_data.image)" alt="">
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">{{ product_data.price }}</p>
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
    }

  }
}

</script>

<style scoped>
 .v-catalog-item{
   border: #2c3e50 2px solid;
   margin: 10px;
 }
 .img{
   width: 100px;
   height: 100px;

 }
</style>
