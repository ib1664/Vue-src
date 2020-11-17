<template>
    <div>

        <v-card class="mx-auto my-auto mb-8 mt-12 py-12" width="600" flat>
            <v-row> 
                <v-icon class="mx-auto" x-large color="teal darken-2"> {{ headingIcon }} </v-icon>
            </v-row>

            <v-row>
                <h3 class="display-1 mx-auto pt-10"> {{ headingTitle }} </h3>
            </v-row>

            <v-card-text>
                <v-form ref="resetForm" v-model="validForm">
                    <v-text-field
                        ref="pwdValidate1"
                        v-if="this.isEmail"
                        v-model="initpwd"
                        :rules="[validPassword()]"
                        label="New Password"
                        :type="showPassword1 ? 'text' : 'password'"
                        class="px-10"
                        outlined
                        prepend-icon="mdi-lock"
                        v-bind:append-icon="showPassword1 ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassword1 = !showPassword1"
                    >
                    </v-text-field>

                    <v-text-field
                        ref='emailValidate'
                        v-if="this.isRest"   
                        v-model="resetMail"
                        :rules="[requiredEmail(), validEmail()]"                                                      
                        class="px-10"
                        label="Email"
                        required
                        outlined
                        prepend-icon="mdi-email"
                    >
                   </v-text-field>

                    <v-text-field
                        ref="pwdValidate2"
                        v-if="this.isEmail"
                        v-model="finalpwd"
                        class="px-10"
                        :rules="[validPassword()]"
                        label="Retype Password"
                        :type="showPassword2 ? 'text' : 'passord '"                                                
                        outlined
                        prepend-icon="mdi-lock"
                        v-bind:append-icon="showPassword2 ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassword2 = !showPassword2"
                    >
                    </v-text-field>
                </v-form>
            </v-card-text>

            <v-card-action>
                <v-btn v-if="this.isReset" class="mx-auto" color="primary" width="150" :disabled="!validForm" @click="resetFunc"> Reset </v-btn>
                <v-btn v-else class="mx-auto" color="primary" width="150" :disabled="!validForm" @click="resetPwd"> Submit </v-btn>
            </v-card-action>

            <v-card-text v-if="this.isReset">
                <v-row>
                    <router-link class="font-weight-bold mr-10" to="/login"> Already have an account? </router-link> 
                    <v-spacer>  </v-spacer>
                    <router-link class="font-weight-bold mr-10" to="/register"> Need an account? </router-link> 
                </v-row>
            </v-card-text>

        </v-card>

    </div>    
</template>

<script>
import axios from 'axios';

export default {

    data(){
        return{
            isReset: false,
            isEmail: false,
            validForm: true,
            initpwd: undefined,
            finalpwd: undefined,
            resetMail: undefined,
            showPassword1: false,
            showPassword2: false,
            passwordRules: [
                v => v.length >= 8 || 'Minimum of 8 character or more'
            ],
            emailRules: [
                v => !!v || "Email required",
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],

            requiredEmail(){
                return v => !!v || 'Email required'
            },
            validEmail(){
                return v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
            },
            validPassword(){
                return v => v.length >= 8 || 'Minimum of 8 character or more'
            }
        }
    },
    methods:{
        resetFunc: function(){
            var resetMailTxt = this.resetMail;

            if(this.$refs.resetForm.validate()){
                alert('Email: ' + resetMailTxt);
                this.$router.push('/emailSent');
            }           
        },
        resetPwd: function(){
            var initPwdTxt = this.initpwd;
            var finalPwdTxt = this.finalpwd;

            if( this.$refs.resetForm.validate() && (initPwdTxt == finalPwdTxt) ){

            }
        }

    },
    computed:{
        headingIcon: function(){
            return this.isReset ? 'mdi-email-lock' : '';
        },
        headingTitle: function(){
            return this.isReset ? 'Reset Password' : 'Enter your new password';
        },
        btnText: function(){
            return this.isReset ? 'Reset' : 'Submit';
        },
        btnAction: function(){

        }
    }
    
}
</script>

<style scoped>

</style>