<script setup>
import PageHeader from '../components/PageHeader.vue'
import PageHeaderTitle from '../components/PageHeaderTitle.vue'

import { ref, watch, provide } from 'vue'



const title = ref('page title')



const subTitle = ref('page subtitle')


provide('providedTitle', "Provided Title")

watch(name, (newValue, oldValue) => {


  console.log('yeni değer=> ' + newValue)
  console.log('eski değer=> ' + oldValue)


})




</script>

<template>



  <PageHeader :title='"Page title"' />

  <main>

    Home page
  </main>

  <input v-model='title' class='m-4 bg-slate-100'>

  <input v-model='subTitle' class='m-4 bg-slate-100'>

</template>