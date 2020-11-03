<template>
  <v-card-text style="height: 100px; position: relative">
    <v-fab-transition>
      <v-btn
        v-show="auth && $route.path !== '/review/add'"
        color="primary"
        @click="$router.push('/review/add')"
        dark
        absolute
        top
        right
        fab
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-card-text>
</template>

<script>
  export default {
    data: function() {
      return {
        // speedDial: false,
      }
    }
  }
</script>