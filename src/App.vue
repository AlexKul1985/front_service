
<template>
  <!-- <v-container> -->
    <component :is="layout"></component>
  <!-- </v-container> -->
</template>

<script>
    import DefaultLayout from './layouts/DefaultLayout'
    import EmptyLayout from './layouts/EmptyLayout'
    
    let ctx;
    
    export default {
      components:{
         DefaultLayout,
         EmptyLayout,
      },

      data(){
        return {
          layout:''
        }
      },
    
     
      watch:{
        $route: (to, from) => {
          ctx.layout = to.meta['layout']+'Layout'
          
        }
      },
          
      created(){
        ctx = this;
      }
    }
</script>
<style>
    .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>


