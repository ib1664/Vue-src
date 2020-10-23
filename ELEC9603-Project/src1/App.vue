<template>
  <div id="app">
    <img alt="lock-image" src="./assets/index.png">
    <login> </login>
  </div>
</template>

<script>
import Login from "./components/Login";
export default {
  components:{
    'login': Login
  },
	data(){
		return{
		
		}	
	}
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
