<template>
  <div>
    <h3> {{ title }} </h3>
    <input type="text" value="Email*" ref="input1" />
	<input type="text" value="Password*" ref="input2" />

	<button> Login	</button>
  </div>
</template>

<script>

export default{
	data(){
		return{
			title: 'LOGIN'
		}	
	}
}
</script>

<style scoped>

</style>
