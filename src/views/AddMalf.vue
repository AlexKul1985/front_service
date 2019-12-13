 
<template>
    <v-container fluid grid-list-xl >
      <add-form 
          v-model="text"
          :statuses="fullInfo.statuses"
          :variants="fullInfo.variants"
          :names="names"
          :types="fullInfo.types"
          :triggerSubmit = "triggerFlag"
           :flagAddMalf="true"
          @changeValid="onValid"
          @onChangeIdType = "getIdType"
          :method="'POST'"
      ></add-form>
      <v-layout>
         <v-flex xs10 offset-xs1>
               <v-btn color="green"
                :dark="validate" 
                :disabled="!validate"
                 @click="onSubmit">
                 CREATE
                </v-btn>
         </v-flex>
      </v-layout>
    </v-container>
</template>
     
<script>
          
    
  
 
import AddForm from '../components/AddForm'
import onSubmit from '../provides/onSubmit'



export default {
    provide: () => {
      return {
        onSubmit
      }
    },
    components:{
      AddForm
    },
    data () {
      return {
        
        triggerFlag:false,
        validate:false,
        text:'',
      
        
      }
  },
  
  computed:{
    fullInfo(){
      return this.$store.getters.fullInfo;
    },
    names(){
      return this.$store.getters.namesService;
    }
  },          
            
          
            

  methods:{
  
    onValid(value){
      this.validate = value
    },
    onSubmit () {
      this.triggerFlag = !this.triggerFlag;
    },
    getIdType(id_type){
     this.$store.dispatch('setNamesService',id_type)

    }
  },
    
  beforeRouteEnter(to, from, next){
    next((vm) => {
      vm.$store.dispatch('setfullInfo')
    })
  }

    
      
   
         
   
  
  

}
</script>
