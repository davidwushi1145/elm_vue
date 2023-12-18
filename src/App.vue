<script lang="ts" setup>
import {RouterView} from 'vue-router'
import Router from "@/components/Router.vue";
</script>

<template>
  <RouterView/>
  <router v-if="!$route.meta.hideFooter"/>
</template>

<style scoped>

</style>
