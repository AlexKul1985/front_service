<template>
    <v-layout>
        <v-flex xs8 offset-xs2 >
            <!-- <v-card > -->
                  <bar-figure
                  :data="figureData"
                        
                      
                  :options="{responsive: true, maintainAspectRatio: false}"
                  ></bar-figure>
            <!-- </v-card>       -->
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

import BarFigure from '../components/ChartFigure'

export default {
  components:{
    BarFigure
  },
  computed:{
    figureData(){
      return this.$store.getters.figureData;
    }
  }  
}
</script>


