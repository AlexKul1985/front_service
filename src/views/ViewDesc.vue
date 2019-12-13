<template>
     <v-layout>
        <v-flex xs12  >
            <v-card :elevation="7" class="desc">
                <v-card-title>Дата добавления: {{desc.created_at}}</v-card-title>
                <hr/>
                   <v-card-text v-html="desc.description">

                   </v-card-text>
            </v-card>
        </v-flex>
     </v-layout>      
</template>
<script>
export default {
    data(){
        return{
            id:null
        }
    },
    computed:{
        desc(){
            return this.$store.getters.desc;
        }
    },
    
    beforeRouteEnter(to, from, next){
        next((vm) => {
                vm.$store.dispatch('setLoading',true);
                console.log({id: from.params.id, id_desc: to.params.id_desc})
               vm.$store.dispatch('setDesc',{id: to.params.id, id_desc: to.params.id_desc})
              .then(() => {
                  
                  vm.$store.dispatch('setLoading',false);
                  
              })
              .catch(() => {
                  vm.$store.dispatch('setError',true);
                  vm.$store.dispatch('setLoading',false);
              })
                  

        })
    }
    
}
</script>
<style>
.desc{
    padding: 20px 0;
}
.desc li,.desc p{
    text-align: left;
}
</style>
