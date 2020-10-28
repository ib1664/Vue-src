<template>
    <div class="login">
        <v-card class="mx-auto mb-8 mt-12 py-12" width="600" flat>
            <v-row> 
                <v-img class="mx-auto"                     
                    max-width="100" 
                    max-height="80" 
                    src="../../assets/lock.png">     
                </v-img> 
            </v-row>

            <v-row>
                <h3 class="display-1 mx-auto pt-10"> {{ titleLog }} </h3>
            </v-row>

            <v-card-text>
                <v-form>
                    <v-text-field 
                        class="px-10" 
                        label="Username" 
                        outlined 
                        prepend-icon="mdi-account-circle">
                    </v-text-field>

                    <v-text-field                  
                        class="px-10"                        
                        label="Password" 
                        outlined    
                        prepend-icon="mdi-lock" 
                        v-bind:type="showPassword ? 'text' : 'password'" 
                        v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassword = !showPassword">
                    </v-text-field> 
                </v-form>
            </v-card-text>            

            <v-card-actions> 
                <v-btn class="mx-auto" color="secondary" dark  width="150" @click="logFunc"> {{ titleLog }} </v-btn>              
            </v-card-actions>

            <v-card-text>
                <v-row>
                    <p class="font-weight-bold ml-10"> Forget Password? </p>
                    <v-spacer>  </v-spacer>
                    <p class="font-weight-bold mr-10"> Need an account? </p>
                </v-row>
            </v-card-text>

        </v-card>
    </div>    
</template>

<script>
export default {

data(){
    return{
        titleLog: 'Login',
        showPassword: false
    }
},
methods: {

    logFunc: function(){
        alert("login");
    }
}
    
}
</script>