
<template>
<div>
    <component :is="layout"></component>
     <v-snackbar
        v-model="snackbar"
        :color="color"
        :multi-line="mode === 'multi-line'"
        :timeout="timeout"
        :vertical="mode === 'vertical'"
        top
      
      >
        {{ text }}
        <v-btn
          dark
          flat
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>
</div>
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
          layout:'',
          
          color: 'red',
          mode: '',
          timeout: 6000,
          text: 'Неизвестная ошибка'
        }
      },
    
     
      watch:{
        $route: (to, from) => {
          ctx.layout = to.meta['layout']+'Layout'
          
        }
      },
          
      created(){
        ctx = this;
      },
      computed:{
        snackbar:{
          get(){
            return this.$store.getters.error;
          },
          set(val){
            this.$store.dispatch('setError',false)
          }

        }
      }
    }
</script>
<style >

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>


