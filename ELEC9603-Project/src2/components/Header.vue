<template>
    <header>
        <span>
            UNICENTRAL
            <span v-html="facultiesTag"> </span>
            <span> Login  </span>
        </span>
        
    </header>    
</template>

<script>
export default {
    data(){
        return{
            facultiesTag: "<a href='#faculties'> Faculties </a>"
        }
    }
    
}
</script>

<style scoped>
header{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    background:honeydew;
    padding: 2px;

}

</style>