<template>
   <div id="app">
  <v-app id="inspire">
      <h2 class="mb-4">История изменения статуса</h2>
    <v-timeline>
      
      <v-timeline-item
        v-for="historyStatus in historyStatuses"
        :key="historyStatus.id_history_status"
        color="transparent"
        :icon-color="historyStatus.color_icon"
        :icon="historyStatus.name_icon"
        
        
        
      >
        <template  v-slot:opposite>
          <div :class="`headline font-weight-bold ${historyStatus.color_icon}--text`" class="mb-3">{{historyStatus.status_name}}</div> 
          <span
          >
          {{historyStatus.created_at}}
          </span>
          <div class="mt-3">
           <v-btn small color="primary" >show</v-btn>
          </div>
        </template>

      </v-timeline-item>
      
    </v-timeline>
  </v-app>
</div>
</template>
<script>
export default {
   
  computed:{
      historyStatuses(){
          return this.$store.getters.historyStatuses;
      }
  }
}
</script>
<style>

</style>
