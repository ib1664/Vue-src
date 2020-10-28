<template>
    <v-card class="mx-auto my-auto mb-8 mt-8 py-12" width="600" flat>
        <v-row>
            <v-img class="mx-auto"
                max-width="100" 
                max-height="80" 
                src="../../assets/lock.png"> 
            </v-img>
        </v-row>

        <v-row>
            <h3 class="display-1 mx-auto pt-10"> {{ title }} </h3>
        </v-row>

        <v-card-text>
            <v-form>
                <v-text-field                  
                    class="px-10"
                    label="Email"
                    outlined
                    prepend-icon="mdi-email"
                >
                </v-text-field>

                <v-text-field                  
                    class="px-10"
                    v-bind:type="showPassword ? 'text' : 'password'" 
                    label="Password" 
                    outlined
                    prepend-icon="mdi-lock" 
                    v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                >
                </v-text-field>                 
            </v-form>
        </v-card-text>

        <v-card-actions> 
                <v-btn class="mx-auto" color="secondary" dark  width="150" @click="registerFunc"> {{ title }} </v-btn>              
        </v-card-actions>

        <v-card-text>
            <p class="font-weight-bold ml-10"> Already have an account? </p>
        </v-card-text>

    </v-card>   
    
</template>

<script>
export default {
data(){
    return{
        title: 'Register',
        showPassword: false
    }
},
methods: {
    registerFunc: function(){
        alert("Register");
    }

}
    
}
</script>