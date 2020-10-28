<template>
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
                    class="px-10"
                    label="Email"
                    outlined
                    prepend-icon="mdi-email"
                >
                </v-text-field>
            </v-form>
        </v-card-text>

        <v-card-text> 
            <v-form>
                {{ msg }}
            </v-form>        
        </v-card-text>

        <v-card-actions> 
                <v-btn class="mx-auto" color="secondary" dark  width="150" @click="resetFunc"> Reset </v-btn>              
        </v-card-actions>

        <v-card-text>
            <v-row>
                <p class="font-weight-bold ml-10"> Already have an Account? </p>
                <v-spacer>  </v-spacer>
                <p class="font-weight-bold mr-10"> Need an account? </p>
            </v-row>
        </v-card-text>

    </v-card>    
</template>

<script>
export default {

data(){
    return{
        title: 'Reset Password',
        msg: 'Hello!',
    }
},
methods: {
    resetFunc: function(){
        alert("Reset");
    }
}

    
}
</script>