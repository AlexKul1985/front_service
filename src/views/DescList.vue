<template>
 <div id="lateral">
         <v-layout>
        <v-flex xs12  >
            
<v-fab-transition>
    <v-btn color="red"  @click = "onAddDesc" fab dark small top left >
        <v-icon dark>playlist_add</v-icon>
    </v-btn>
</v-fab-transition>
<v-card>
    <h2 class="title_desc">Список описаний</h2>
    <v-card-text>
        
      
       
     <v-data-table
      :items="descList"
      class="elevation-1 rel"
      hide-actions
      hide-headers
    >
    
      <template v-slot:items="props">
        <td class="text-xs-left">{{ props.item.created_at }}</td>
         <td class="text-xs-right">
            <v-icon
              small
              class="mr-2"
              @click="methodShow( props.item.id_desc_malf_info)"
              
            >
              visibility
            </v-icon>
            <v-icon
              small
              class="mr-2"
              
             
            >
              edit
            </v-icon>
            <v-icon
              small
             
               
            >
              delete
            </v-icon>
          </td>
        <!-- <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td> -->
        <!-- <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td> -->
      </template>
    </v-data-table>
    </v-card-text>
  </v-card> 
 </v-flex>
</v-layout>
<v-dialog
      v-model="descFlag"
    >
    <v-card>
       <v-card-text>
              <v-container grid-list-xs>
     <quill-editor
          v-model="newDesc"
          :options="editorOption"
          @input="onInput"
      ></quill-editor>
              </v-container>
      </v-card-text>
      <p class="error_desc" v-if="error_desc">Поле не может быть пустым</p>
      <v-card-actions >
              <v-spacer></v-spacer>
              <div class="text-xs-center">
                <v-btn color="blue darken-1"  flat @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1"  flat :disabled="error_desc"  @click="onSubmit">Save</v-btn>
              </div>

      </v-card-actions>
    </v-card>

    </v-dialog>     
 </div> 
</template>
<script>

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import {quillEditor} from 'vue-quill-editor'
export default {
    components:{
        quillEditor
    },
    data () {
    return {
        error_desc:false,
        editorOption: { 
                debug:false,
                placeholder: 'Описание неисправности...',
                readOnly:true,
                theme:'snow'
            },
       newDesc:'',
       descFlag:false,
      desserts: [
        {
          id_desc_malf_info:1,      
          created_at: '12.12.2019',

         
        },
        {
            
          id_desc_malf_info:2,      
          created_at: '12.12.2019',
         
        },
        {
            
          id_desc_malf_info:3,      
          created_at: '12.12.2019',
         
        },
        {
          id_desc_malf_info:4,      
          created_at: '12.12.2019',          
        }
        
      ]
        
    }
  },
  methods:{
      methodShow(id_desc_malf_info){
          this.$router.push('/malf/'+this.$route.params.id+'/desclist/'+id_desc_malf_info)
      },
       onAddDesc(){
      this.descFlag = true
    },
    close(){
      this.descFlag = false
      this.error_desc = false

    },
    onInput(e){
      if(e.trim() == ''){
        this.error_desc = true;
      }
      else{
        this.error_desc = false
      }
    },
  
    onSubmit(){
       if(this.newDesc.trim() == ''){
        this.error_desc = true;
        return;
      }
      let dataSubmit = { 
        description: this.newDesc,
        id_malf_info: this.$route.params.id

      }
      console.log(dataSubmit)
      this.$store.dispatch('setLoading',true)
      this.$store.dispatch('saveNewDesc',dataSubmit)
      .then(() => {
        
        this.$store.dispatch('setLoading',false)
        this.descFlag = false
      })
      .catch(() => {
        this.$store.dispatch('setLoading',false)
        this.$store.dispatch('setError',true)
        this.descFlag = false



      })
    }
  },
  computed:{
   
    descList(){
      return this.$store.getters.descList;
    }
  }
}
</script>
<style scoped>
.rel{
    position: relative;
}
.btnAddList{
  
}
#lateral .v-speed-dial,
#lateral .v-btn--floating {
    position: absolute;
    z-index: 1;
    top:0;
    left:0;
}
.title_desc{
    padding:10px 0;
}
.error_desc{
  text-align: center;
  color:red;
}
.ql-editor{
        height: 200px;
    }
</style>

