<template>
  
  <Suspense>
    <template #default> 
      <Home/>
    </template>
    <template #fallback> 
      <SplashScreen/>
    </template>
  </Suspense>

</template>

<script>
import SplashScreen from "./components/SplashScreen.vue";
import { defineAsyncComponent } from "vue";
// import Home from '@/components/Home.vue'

export default {

  components: {

    SplashScreen,
    Home: defineAsyncComponent(() => 
      {
        return new Promise((resolve) =>{
          setTimeout(() => {
            resolve(import ('@/components/Home.vue'))
            console.log('TE AMO HARU') //Mensaje cuando se haya logrado cargar el otro componente
          }, 2500);
        })
      }
    ),
  }

}
</script>

<style>
html,
body,
.app {
  min-height: 100vh;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

* {
  --brand-green: #04b500;
  --brand-blue: rgb(36, 154, 250); 
  --brand-purple: #7d1ae0;
}
</style>