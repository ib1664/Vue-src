<template>
    <div id="registerId">
        <img src="../assets/index.png" width="120" height="63" alt="lock-image">
        <h3> {{ title }}   </h3>
        <input class="input" type="text" ref="email-reg" placeholder="Email*" size="50" />
        <br>
        <input class="input" type="text" ref="password-reg" placeholder="Password*" size="50" />
        <br>
        <button class="btn-reg" v-on:click="getRegVal"> Login	</button>

        <span>
            <p v-html="alreadyHaveAccTag">   </p>
        </span>

    </div>
</template>

<script>
export default {
    data(){
        return {
            title: 'Register',
            alreadyHaveAccTag: '<a href="#someWhere"> Already have an account?  </a>'
        }
    },
    methods:{
        getRegVal: function(){
            console.log(this.$refs);	
           //alert(this.$ref.email-reg.value)
        }
    }
    
}
</script>

<style scoped>
#registerId{
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

.btn-reg{
    padding: 4px 50px;
	cursor: pointer;
}

</style>