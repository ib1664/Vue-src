<template>
<v-container class="pt-10">
<v-card> 
<v-card-title> {{review.name}} </v-card-title>
<v-card-text> {{review.text}} </v-card-text>
</v-card>

</v-container>
</template>

<script>
export default {
    data()  {
        return  {
            review: {
                name : "nj",
                text:  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda explicabo",
                rating: 1, 
                workload: 13
            }
        }
    }
  

}
</script>

<style>


</style>