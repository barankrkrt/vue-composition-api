<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { ref, reactive, computed } from 'vue'


//static data tanımları

const title = ref('Welcome composition api') //primitive //object

//console.log(title)


const router = useRouter()

const num1 = ref(5)
const num2 = ref(3)


const goTo = (route) => {


  router.push(route)



}



//console.log(num1.value + num2.value)



const cars = ref(['BMW', 'Mercedes', 'Audi'])




//methods
const run = () => console.log('running..')

const firstName = ref('John')
const lastName = ref('Doe')



//Reassigned computed properties
/*
const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {

    // Note: we are using destructuring assignment syntax here.
    if (newValue.split(' ')[0] === 'John') firstName.value = 'Ahmet John'
    else firstName.value = newValue.split(' ')[0]

  }
})

fullName.value = 'John Doe'
*/



/*
const content = reactive({ title: 'Welcome composition api' }) //primitive almaz, obje alır

console.log(content.title)

*/





/*
export default {

  data() {

    return {

      title: 'Welcome composition api'
    }
  },

  computed: {

    titleWithUpper() {

      return this.title.toUpperCase()
    }
  }


}

*/



//v-for, v-if, v-show
</script>

<template>



  <div v-for='car in cars'>



    <div class='text-3xl text-red-300 m-2'>

      {{ car }}

    </div>




  </div>





  <button @click='run' v-if='false'>Click</button>

  <header>

    {{ fullName }}

    <div class="wrapper">

      <nav class='flex gap-4 justify-center cursor-pointer'>

        <div @click='goTo("/")'>Home</div>

        <div @click='goTo("/about")'>About</div>




      </nav>
    </div>
  </header>

  <div class='border-4 border-red-300 m-4 h-screen'>
    <RouterView />

  </div>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
