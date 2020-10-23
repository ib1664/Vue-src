<template>
  <div id="app">
    
    <app-header> </app-header>

   <!-- <app-login> </app-login>  -->

    <app-register>  </app-register>

  </div>
</template>

<script>
import Header from "./components/Header.vue";
//import Login from "./components/Login";

import Register from "./components/Register";

export default {
  components:{
    'app-header': Header,
    //'app-login': Login,
    'app-register': Register

  },
	data(){
		return{
		
		}	
	}
}
</script>

<style>

</style>
