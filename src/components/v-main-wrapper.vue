<template>
  <div class="v-main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>

export default {
  name: 'v-main-wrapper',
  props:{},
  data() {},
  methods:{},
  computed:{}
}
</script>

<style>
  .v-main-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%
  }
</style>
