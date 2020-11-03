<template>
  <v-app>
    <Header></Header>
    <v-main>
      <router-view></router-view>
    </v-main>
    <FloatBtn></FloatBtn>
  </v-app>
</template>

<script>
  import Header from "./components/Header";
  import FloatBtn from "./components/util/FloatBtn";
  export default {
    name: 'App',
    components: {
      Header,
      FloatBtn,
    },
    data: () => ({
      //
    }),
    created() {
      const suffix = ' | UniCentral'
      if (this.$route.meta.title) {
        document.title = this.$route.meta.title + suffix;
      } else {
        document.title = 'UniCentral'
      }
    },
    watch: {
      // eslint-disable-next-line no-unused-vars
      '$route'(to, from) {
        const suffix = ' | UniCentral'
        if (to.meta.title) {
          document.title = to.meta.title + suffix;
        } else {
          document.title = 'UniCentral'
        }
      }
    }
  };
</script>