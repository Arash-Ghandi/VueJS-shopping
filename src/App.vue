<template>
  <div>
    <app-header></app-header>

    <transition enter-active-class="animated fadeIn">
      <router-view></router-view>
    </transition>

    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./Pages/Shared/Header.vue";
import AppFooter from "./Pages/Shared/Footer.vue";
export default {
  components:{
    AppHeader,
    AppFooter
  }
}
</script>

<style>
</style>
