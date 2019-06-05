<template>
    <v-layout>
        <v-flex xs10 offset-xs1 >
            <v-card dark color="orange" >
                <v-card-title primary-title>
                  <div>
                    <div class="headline font-weight-black mb-2 yellow--text"  >В работе - 10</div>
                    <div class="headline font-weight-black mb-2 light-green--text" >Выполнено - 2</div>
                    <div class="headline font-weight-black mb-2 red--text" >В ремонте - 2</div>
                  </div>
                  
                </v-card-title>
            </v-card>
        </v-flex>
        <v-fab-transition>
        <v-btn
          color="red"
          dark
          fab
          fixed
          bottom
          right
        >
          2
        </v-btn>
       </v-fab-transition>
    </v-layout>
      
          
          
            
        
     
</template>
<script>
export default {
    created(){
        // this.$router.push('/login')
    }
}
</script>

