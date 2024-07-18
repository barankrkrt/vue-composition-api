<template>

    <div class='flex flex-col gap-2 bg-green-200'>

        <PageHeaderTitle :title='props.title' />






    </div>



</template>

<script setup>

import PageHeaderTitle from '../components/PageHeaderTitle.vue'

const titleModel = defineModel('titleModel')

const subTitleModel = defineModel('subTitleModel')


const props = defineProps({

    title: {
        type: String,
        default: 'default header'
    }
})






</script>

<style lang="scss" scoped></style>