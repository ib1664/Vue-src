<template>
<v-container class="pt-10">
    <Review> </Review>
</v-container>
</template>


<script>
import Review from  './Review'

export default {
    data() {
        return {
            test : ''
        }
    },
     components: {
      Review,
    },
  
}
</script>

