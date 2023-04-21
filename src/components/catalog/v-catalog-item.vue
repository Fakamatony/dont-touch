<template>
  <div class="v-catalog-item no-selected">

    <v-popup
      v-if="isInfoPopUpVisible"
      @closePopup="closeInfoPopup"
      @rightBtnAction="addToCart"
      right-btn-title="Add to cart"
      :popupName="product_data.name"
    >
      <div>
        <img class="v-catalog-item__img img" :src=" require('../../assets/images/' + product_data.image)" alt="">
        <p class="v-catalog-item__price">{{ product_data.price }} ₽</p>
        <p class="v-catalog-item__price">{{ product_data.category }}</p>
      </div>


    </v-popup>


    <img class="v-catalog-item__img img" :src=" require('../../assets/images/' + product_data.image)" alt="">
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">{{ product_data.price }} ₽</p>
    <button
      class="v-catalog-item__show-info btn"
      @click="showPopupInfo"
    >
      Show info
    </button>
    <button
      class="v-catalog-item__ad_to_cart_btn btn"
      @click="addToCart"
    >add
    </button>
  </div>
</template>

<script>
import vPopup from '../popup/v-popup.vue'
export default {
  props:{
    product_data:{
      type: Object,
      default(){
        return {}
      }
    },
  },
  data(){
    return{
      isInfoPopUpVisible: false
    }
  },
  components:{
    vPopup
  },
  name: 'v-catalog-item',
  methods:{
    addToCart(){
      this.$emit('addToCart', this.product_data)
    },
    showPopupInfo(){
      this.isInfoPopUpVisible = true
    },
    closeInfoPopup(){
      this.isInfoPopUpVisible = false

    }
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
   &__show-info{
     width: 100%;
     height: 40px;
     cursor: pointer
   }
 }

</style>
