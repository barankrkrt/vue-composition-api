<template>
    <PageHeader :title='"about header"' />
    <div>

        <div>
            <div class='text-2xl'>Counter</div>


            <div>

                {{ `Count: ${counterStore.count}` }}
            </div>

            <div>

                {{ `Double Count: ${counterStore.doubleCount}` }}
            </div>


            <button class='bg-red-300' @click='counterStore.increment()'>Click</button>


        </div>
    </div>
</template>

<script setup>

import PageHeader from '../components/PageHeader.vue'
import { useCounterStore } from '../stores/counter.js'


const counterStore = useCounterStore()



</script>

<style lang="scss" scoped></style>