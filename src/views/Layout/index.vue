<script setup>
import LayoutSticky from './components/LayoutSticky.vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'

import { useCounterStore } from '@/stores/category.js'
import { onMounted } from 'vue'
const categoryStore = useCounterStore()
onMounted(() => {
  categoryStore.togetlist()
})



</script>

<template>
  <div>
    <LayoutSticky />
    <LayoutNav />
    <LayoutHeader />
    <!-- <RouterView :key="$route.fullPath" /> -->
    <RouterView />

    <LayoutFooter />
  </div>
</template>