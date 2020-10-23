<template>
  <div id="loginId">
	<img src="../assets/index.png" width="120" height="63" alt="lock-image">
    <h3> {{ title }} </h3>
    <input class="input" type="text" ref="email-login" placeholder="Email*" size="50" />
	<br>
	<input class="input" type="text" ref="password-login" placeholder="Password*" size="50" />
	<br>
	<button class="btn-login" v-on:click="getLoginVal"> Login	</button>

	<span>		
		<p v-html="forgetPwdTag" ></p>
		<p v-html="needAnAccTag" > </p>
	</span>

  </div>
  
</template>

<script>

export default{
	data(){
		return{			
			title: 'LOGIN',
			forgetPwdTag: '<a href="#forgot-pwd" > Forgot Password? </a>',
			needAnAccTag: '<a href="#Account" > Need an account? </a>'
		}	
	},
	methods:{
		getLoginVal: function(){
			console.log(this.$refs);			
			//console.log(this.$refs.email-login.value);			

			//alert(this.$refs.email-login.value);
			//alert(this.$refs.password-login.value);
		}

	}
}
</script>

<style scoped>
#loginId{
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	text-align: center;
	margin-top: 200px;
}

.input{
padding: 10px;
margin: 10px;
}

.btn-login{
	padding: 4px 50px;
	cursor: pointer;
}



</style>
