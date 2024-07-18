<template>
    <div class='bg-red-200 w-10'>
        {{ props.title }}
    </div>

    <div class='bg-blue-200 w-10'>
        {{ providedTitle }}


    </div>
</template>

<script setup>
import { inject } from 'vue'


const providedTitle = inject('providedTitle')

const props = defineProps({

    title: {
        type: String
    }
})


</script>
