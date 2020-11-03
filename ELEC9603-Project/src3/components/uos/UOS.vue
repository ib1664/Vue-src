<template>
  <v-container class="pt-10">

    <v-card-title>
      {{ facultyName[faculty] }}
      <v-spacer></v-spacer>

      <v-text-field
        filled
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="courses"
      :search="search"
      @click:row="rowClick"
      class="elevation-2"
    ></v-data-table>

  </v-container>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        // university: "USYD",
        faculty: '',
        facultyName: {
          'arts': 'Arts and Social Science',
          'business': 'Business',
          'engineering': 'Engineering',
          'medicine': 'Medicine and Health',
          'science': 'Science'
        },
        search: '',
        headers: [
          {text: 'UOS ID', align: 'start', sortable: true, value: 'course_id'},
          {text: 'Name', align: 'start', sortable: false, value: 'name'},
          {text: 'Faculty', align: 'start', sortable: false, value: 'faculty'},
        ],
        courses: [],
        getCoursesError: false,

      }
    },

    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.faculty = to.params.faculty;
      })
    },

    created() {
      // this.getCourses();
    },

    methods: {
      getCourses() {
        axios.get(`/courses/${this.faculty}`).then(resp => {
          if (resp.status === 200) {
            this.courses = resp.data.courses;
          }
        }).catch(err => {
          this.getCoursesError = true;
        })
      },
      rowClick(val) {
        this.$router.push({
          path: `/course/${val.course_id}`
        })
      }
    }
  }
</script>