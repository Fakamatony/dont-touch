<template>
  <div class="popup_wrapper " ref="popup_wrapper">
    <div class="v-popup">
      <div class="v-popup__header">
        <span>{{ popupName }}</span>
        <span class="no-selected pointer">
        <i class="material-icons"
           @click="closePopup"
        >
          close
        </i>
      </span>
      </div>
      <div class="v-popup__content">
        <slot>

        </slot>
      </div>
      <div class="v-popup__footer">
        <div
          @click="rightBtnAction"
          class="submit"
        >
          {{ rightBtnTitle }}
        </div>
        <div
          class="close-modal"
          @click="closePopup"
        >
          Close</div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props:{
    popupName:{
      type: String,
      default: 'popup name'
    },
    rightBtnTitle:{
      type: String,
      default: 'Ok bruh'
    }
  },
  name: 'v-popup',
  methods:{
    rightBtnAction(){
      this.$emit('rightBtnAction')
    },
    closePopup(){
      this.$emit('closePopup')
    }
  },
  mounted() {
    let vm = this;
    document.addEventListener('click', function (item) {
      if (item.target === vm.$refs['popup_wrapper']) {
        vm.closePopup()
      }
    })
  },
}

</script>

<style lang="scss">
  .popup_wrapper{
    background-color: rgba(64,64, 64, .4);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  .v-popup{
    position: fixed;
    width: 600px;
    top: 50px;
    background-color: white;
    box-shadow: 0 0 17px 0 gray;
    padding: 16px;
    &__header, &__footer{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__content{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .submit{
      padding: 8px;
      background-color: #94ff2f;
      color: white;
    }
    .close-modal{
      padding: 8px;
      background-color: #cb8100;
      color: white;
    }
  }


</style>
