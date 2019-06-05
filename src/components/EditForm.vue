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
                    :trigger.sync = "onClick"
                    @changeValid="onValid"
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
import {provide} from '../providers/onSubmit'


export default {
  
  provide,
  
  components:{
    AddForm
  },  
  data: () => ({
    onClick: false,
    
    validate:false,
    editText:'',
    editDialog:false,


        
    }),
    props:['text','statuses','names','types','dialog'],
    methods:{
         close () {
      // this.$refs.form.reset();
            this.editDialog = false
            this.$emit('update:dialog',this.editDialog)
        },
        onValid(value){
            this.validate = value
        },
     

    save () {
     
      this.close()
    },
     onSubmit () {
      this.onClick = !this.onClick;
        this.close()
     
    },
    },
    watch:{
        text(value){
            this.editText = value
        },
        dialog(value){
            // console.log('dialog',value);
            this.editDialog = value
        }
    }
    
}
</script>
