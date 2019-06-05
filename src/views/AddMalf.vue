 
<template>
    <v-container fluid grid-list-xl>
      <add-form 
          v-model="text"
          :statuses="statuses"
          :names="names"
          :types="types"
          :trigger.sync = "onClick"
          @changeValid="onValid"
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
import {provide} from '../providers/onSubmit'


export default {
    provide,
    components:{
      AddForm
    },
    data () {
      return {
        
       onClick:false,
       validate:false,
        names: ['Плата ЦОС-ПРМ', 'Плата ЦОС-ПРД', 'Изделие РАЗМАХ-4КВ', 'Модуль МСОА'],
        text:'',
         statuses:[
            {
                id:1,
                label:'В работе'
            },
            {
                 id:2,
                label:'Выполнено'
            },
            {
                 id:3,
                label:'В ремонте'
            }
            ],
            
            
            types: ['Плата', 'Ячейка', 'Стойка', 'Изделие'],
          
            
      }

  },
  methods:{
   
    onValid(value){
      this.validate = value
    },
    onSubmit () {
      this.onClick = !this.onClick;
    },
   
  },
  
  

}
</script>
