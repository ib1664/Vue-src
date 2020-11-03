<template>
    <div class="reset">

        <v-card class="mx-auto my-auto mb-8 mt-12 py-12" width="600" flat>
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
                        v-model="resetMail"
                        :rules="emailRules"                                                      
                        class="px-10"
                        label="Email"
                        required
                        outlined
                        prepend-icon="mdi-email"
                    >
                   </v-text-field>
                </v-form>
            </v-card-text>

            <v-card-actions>
                <v-btn class="mx-auto" color="primary" dark width="150" @click="resetFunc"> Reset </v-btn> 
            </v-card-actions>

            <v-card-text>
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
export default {
    data(){
        return{
            title: 'Reset Password',
            resetMail: '',
            emailRules: [
                v => !!v || "Email required",
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ]
        }
    },
    methods:{
        resetFunc: function(){
            var resetMailTxt = this.resetMail;

            if(this.$refs.emailValidate.validate()){
                alert('Email: ' + resetMailTxt);
            }
           
        }

    }
}
</script>