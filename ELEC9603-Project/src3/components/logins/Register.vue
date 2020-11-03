<template>
    <div class="register">
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
                        ref='emailValidate' 
                        v-model="regMail" 
                        :rules="emailRules"                 
                        class="px-10"
                        label="Email"                    
                        outlined
                        prepend-icon="mdi-email"
                    >
                    </v-text-field>

                    <v-text-field
                        ref="pwdValidate" 
                        v-model="regPwd"
                        :rules="pwdRules"             
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
                <v-btn class="mx-auto" color="primary" dark width="150" @click="registerFunc"> {{ title }} </v-btn>
            </v-card-actions>

            <v-card-text>             
                <router-link class="font-weight-bold mr-10" to="/login"> Already have an account? </router-link>   
            </v-card-text>
        </v-card>

    </div>    
</template>

<script>
export default {
    data(){
        return{
            title: 'Register',
            showPassword: false,
            regMail: '',
            regPwd: '',
            emailRules: [
                v => !!v || "Email required",
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            pwdRules: [
                v => v.length >= 8 || 'Minimum of 8 character or more'
            ]    
            
        }
    },
    methods:{
        registerFunc: function(){
            var regMailTxt = this.regMail;
            var regPwdTxt = this.regPwd;

            if(this.$refs.emailValidate.validate() && this.$refs.pwdValidate.validate()){
                    alert('Email: ' + regMailTxt + ' Password: ' + regPwdTxt); 
            }
            
               
        }   
    }
    
}
</script>