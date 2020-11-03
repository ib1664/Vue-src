<template>
    <div>
        <v-app-bar
            app
            color="primary"
            dark
        >

            <v-icon class="pr-6">mdi-unicode</v-icon>
<!--            <v-toolbar-title>Unicentral</v-toolbar-title>-->

<!--            <v-toolbar-title class="headerLink"><router-link to="/" tag='div' class="pr-4">Courses</router-link></v-toolbar-title>-->
<!--            <v-toolbar-title class="headerLink"><router-link to="/reviews" tag='div' class="pr-4">Reviews</router-link></v-toolbar-title>-->

            <v-btn text><router-link to="/" tag='div'>Faculties</router-link></v-btn>
<!--            <v-btn text><router-link to="/reviews" tag='div'>Reviews</router-link></v-btn>-->

            <v-spacer></v-spacer>

<!--            <v-toolbar-title v-if="auth" class="headerLink"><div @click="logout" class="pr-2">Logout</div></v-toolbar-title>-->
<!--            <v-toolbar-title v-else class="headerLink"><router-link to="/login" tag='div' class="pr-2">Login</router-link></v-toolbar-title>-->

            <v-btn text @click="logout" v-if="auth">Logout</v-btn>
            <v-btn text v-else><router-link to="/login" tag='div'>Login</router-link></v-btn>

<!--            <v-toolbar-title class="pr-2">Courses</v-toolbar-title>-->
<!--            <v-toolbar-title class="pr-2">Reviews</v-toolbar-title>-->

        </v-app-bar>
    </div>
</template>

<script>
    export default {
        // props: {
        //
        // },
        data() {
            return {
                drawer: true,
            }
        },

        methods: {
            logout() {
                this.$store.dispatch('logout');
            }
        },

        // computed: {
        //     auth() {
        //         return this.$store.getters.isAuthenticated
        //     }
        // }
    }
</script>

<style>
    .headerLink {
        cursor: pointer;
    }
</style>