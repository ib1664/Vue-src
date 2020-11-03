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
                        ref="txtField1"      
                        v-model="user"        
                        class="px-10"
                        label="Username"
                        outlined
                        required
                        hint='Must enter your username'
                        v-bind:rules="usernameRules"
                        prepend-icon="mdi-account-circle"
                        >
                    </v-text-field>

                    <v-text-field
                        ref="txtField2"
                        v-model="pwd"                                       
                        class="px-10"                        
                        label="Password" 
                        outlined 
                        required  
                        prepend-icon="mdi-lock"
                        hint='Please enter a valid password'
                        v-bind:rules="pwdRules" 
                        v-bind:type="showPassword ? 'text' : 'password'" 
                        v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassword = !showPassword"
                        >
                    </v-text-field>
                </v-form>
            </v-card-text>

            <v-card-actions>
                <v-btn class="mx-auto" color="primary" outline dark width="150" @click="loginFunc"> {{ titleLog }} </v-btn> 
            </v-card-actions>

            <v-card-text>
                <v-row>               
                    <router-link class="font-weight-bold ml-10" to="/reset"> Forget Password? </router-link>
                    <v-spacer>  </v-spacer>
                    <router-link class="font-weight-bold mr-10" to="/register"> Need an account? </router-link>                    
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
            showPassword: false,    
            user: '',
            pwd: '', 
            usernameRules: [
                v => v.length >= 2 || 'Must enter your username'
            ],
            pwdRules: [
                v => v.length >= 2 || 'Please enter a valid password'
            ]          
        }
    },
    methods:{
        loginFunc: function(){
            var userTxt = this.user;
            var pwdTxt = this.pwd;
            if(this.$refs.txtField1.validate() && this.$refs.txtField2.validate()){
                alert( 'UserName: ' + userTxt  + ' Password: ' + pwdTxt);
            }        
            
        }

    }
    
}
</script>