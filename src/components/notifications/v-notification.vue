<template>
  <div class="v-notification">
    <div
      class="v-notification__content"
      v-for="message in messages"
      :key="message.id"
    >
      <div class="content__text">
        <span>Notifications</span>
        <i class="material-icons">check_circle</i>
      </div>
      <div class="content__buttons">
        <button>Ok</button>
        <button>No</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-notification'
}
</script>

<style lang="scss">
  .v-notification{
    position: fixed;
    top: 80px;

    right: 16px;
    z-index: 10;
    &__content{
      padding: 16px;
      background-color: #94ff2f;
      border-radius: 4px;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      margin-bottom: 16px;
    }
  }
</style>
