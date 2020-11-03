<template>
  <v-container class="pt-10">
    <h1 class="title pb-4">USYD Faculties</h1>
    <v-row>
      <v-col
        v-for="card in cards"
        :key="card.title"
        lg="4"
        md="6"
        sm="12"
      >
        <router-link :to="`/uos/${card.link}`" tag='div'>
          <v-card class="cardLink">
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title" class="text-center"></v-card-title>
            </v-img>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cards: [
        { title: 'Arts and Social Science', src: './faculty/arts.jpg', link: 'arts' },
        { title: 'Business', src: './faculty/business.jpg', link: 'business' },
        { title: 'Engineering', src: './faculty/engineering.jpg', link: 'engineering' },
        { title: 'Medicine and Health', src: './faculty/medicine.jpg', link: 'medicine' },
        { title: 'Science', src: './faculty/science.jpg', link: 'science' },
      ],
    }
  },
}

</script>

<style>
  .cardLink {
    cursor: pointer;
  }

</style>