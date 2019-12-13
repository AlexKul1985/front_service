<template>
<v-toolbar flat color="white">
        <v-spacer></v-spacer>
        <v-dialog v-model="editDialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">Редактировать</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-xs>
                 <add-form 
                    v-model="editText"
                    :statuses="statuses"
                    :names="names"
                    :types="types"
                    :variants="variants"
                    :triggerSubmit = "triggerFlag"
                    @changeValid="onValid"
                    :method="'PUT'"
                    :closeFunction = "close"
                     @onChangeIdType = "$event => $emit('onChangeIdType',$event)"
                ></add-form>
             </v-container>
                   
                    
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1"  :flat="validate" :disabled="!validate" @click="onSubmit">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
     
</template>
<script>
import AddForm from './AddForm'
import onSubmit from '../provides/onSubmit'


export default {
  name:'EditForm',
    provide: function() {
      return {
        onSubmit,
        close:this.close

      }
    },
  components:{
    AddForm
  },  
  data: () => ({
    triggerFlag: false,
    
    validate:false,
    editText:'',
    editDialog:false
    }),
    
    props:['text','statuses','names','types','dialog','variants'],
    props:{
      text:{
        type: String,
        default:''
      },
      statuses:{
        required:true,
        type: Array
      },
      names:{
        required:true,
        type: Array
      },
      types:{
        required:true,
        type: Array

      },
      dialog:{
        required:true,
        type: Boolean
      },
      variants:{
        required:true,
        type: Array
      }
    },
    methods:{
       
    close () {
        this.editDialog = false
        
    },
    onValid(value){
        this.validate = value
    },
           
    save () {
      this.close()
    },
           
     

     
       onSubmit () {
       this.triggerFlag = !this.triggerFlag;
      //  this.close();
     
      },
    },
   
    watch:{
        text(value){
            this.editText = value
        },
        dialog(value){
            
             this.editDialog = value;
             
        },
        editDialog(value){
          console.log('EDIT DIALOG',value)
          if(value){
            this.$store.dispatch('setOldstatus')
          }
          this.$emit('update:dialog',value)
        }
    }
    
}
</script>
