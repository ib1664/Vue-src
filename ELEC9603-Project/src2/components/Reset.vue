<template>
    <div>
        <img src="../assets/index.png" width="120" height="63" alt="lock-image">
        <h3> {{ title }}   </h3>
        <input class="input" type="text" ref="email-reset" placeholder="Email*" size="50" />
        <br>
        <button class="btn-rest" v-on:click="getRegVal"> Login	</button>

        <span>
            <p v-html="alreadyHaveAccTag">   </p>
            <p v-html="needAnAccTag" > </p>
        </span>

    </div>
</template>

<script>
export default {

    data(){
        return{
            title: "Reset Password",
            alreadyHaveAccTag: '<a href="#someWhere"> Already have an account?  </a>',
            needAnAccTag: '<a href="#Account" > Need an account? </a>'
        }
    },
    methods:{
        getRegVal: function(){
            
        }
    }    
}
</script>

<style scoped>

</style>