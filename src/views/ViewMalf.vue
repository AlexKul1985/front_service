<template>
    <div id="lateral">
         <v-layout>
        <v-flex xs12  >
            <v-card :elevation="7">
                 
                <v-card-title>
                <v-spacer></v-spacer>
                    <v-list-tile-action-text color="red">{{detailMalf.status_name}}</v-list-tile-action-text>
                    <v-icon :color='detailMalf.color_icon' class="ml-1 mr-2" :size="30">{{detailMalf.name_icon}}</v-icon>
                </v-card-title>

                <v-card-title class="ml-2">
                    <v-list-tile-action-text class="mr-2">Название: </v-list-tile-action-text> {{detailMalf['malf_name']}}
                </v-card-title>
                <v-card-title class="ml-2">
                   <v-list-tile-action-text class="mr-2">Тип:  </v-list-tile-action-text> {{detailMalf['type_name']}}
                </v-card-title>
                <v-card-title class="ml-2">
                   <v-list-tile-action-text class="mr-2">Номер:  </v-list-tile-action-text> {{detailMalf['number']}}
                </v-card-title>
                 <v-card-title class="ml-2">
                   <v-list-tile-action-text class="mr-2">Используется:  </v-list-tile-action-text> {{detailMalf['variant_name']}}
                </v-card-title>
                 <v-card-title class="ml-2">
                   <v-list-tile-action-text class="mr-2">Дата и время добавления:  </v-list-tile-action-text>{{detailMalf['created_at']}}
                </v-card-title>
                <v-card-title class="ml-2">
                   <v-list-tile-action-text class="mr-2">Дата и время обнавления:  </v-list-tile-action-text>{{detailMalf['updated_at']}}
                </v-card-title>
                    
                <v-card-text >
                </v-card-text>
             
      
            </v-card>
      </v-flex>
     
       <div class="btn_view_malf text-xs-center">
          <v-btn  color="orange"  @click = "onEdit" fab dark small top left >
            <v-icon dark>edit</v-icon>
          </v-btn>
      
          <v-btn color="green" @click = "onDescList" fab dark small top left >
            <v-icon dark>info</v-icon>
          </v-btn>
            <v-btn color="yellow" @click="onGetHistory" fab dark small top left >
            <v-icon dark>storage</v-icon>
          </v-btn>
           <v-btn color="red" @click="onDeleteQuest" fab dark small top left >
            <v-icon dark>delete</v-icon>
          </v-btn>
       </div>
      
    </v-layout>
    <edit-form
          :statuses="fullInfo.statuses"
          :names="names"
          :types="fullInfo.types"
          :variants="fullInfo.variants"
          
          :dialog.sync="editDialog"
          @onChangeIdType = "getIdType"
    ></edit-form>
    <v-dialog
      v-model="deleteQuest"
      width='400'
      >
      <v-card >
        <v-card-title>
          Вы действительно хотите удалить данную запись?
        </v-card-title>
         <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="onCloseDeleteQuest">Cancel</v-btn>
              <v-btn color="blue darken-1" flat @click="onDelete">DELETE</v-btn>
         </v-card-actions>
      </v-card>
    </v-dialog>
                  
    </div>
</template>
          
<script>





export default {
    components:{
      EditForm:  () => import('../components/EditForm'),
   
    },
     data: () => ({
        deleteQuest:false,
        editDialog: false,
    }),
     

    
            
    
  computed: {

   detailMalf(){
     return this.$store.getters.detailMalf;
   },
    names(){
        return this.$store.getters.namesService;
      },
        fullInfo(){
          return this.$store.getters.fullInfo;
      },
  },
  methods:{
     getIdType(id_type){
      this.$store.dispatch('setNamesService',id_type)
    },
    onEdit(){
       this.$store.dispatch('setLoading', true)
            this.$store.dispatch('setEditData', this.$route.params.id)
            .then(() => {
              this.$store.dispatch('setLoading', false)
              this.editDialog = true
            })
            .catch(() => {

              this.$store.dispatch('setLoading', false)
              this.$store.dispatch('setError', true)

            })
    },
    onDeleteQuest(){

      this.deleteQuest = true;
    },
     onCloseDeleteQuest(){
      this.deleteQuest = false;
    },
    onDelete(){
      let data = {
            id_malf_info: this.$route.params.id,
            ...this.$store.getters.filterData,
          }
          console.log(data)

          this.$store.dispatch('setLoading', true)
          this.$store.dispatch('deleteMalfInfo', data)
          .then(() => {
            this.deleteQuest = false;
            this.$store.dispatch('setLoading', false)
            this.$router.push('/serviceslist')
          })
          .catch(() => {
            this.$store.dispatch('setLoading', false)
            this.$store.dispatch('setError', true)
            this.deleteQuest = false;
          })
    },
    onDescList(){
      this.$router.push('/malf/'+this.$route.params.id+'/desclist');
    },
    onGetHistory(){
            this.$router.push('/malf/'+this.$route.params.id+'/history');

    }
   
  },
 
}
           

</script>
<style>
#lateral .v-speed-dial,
#lateral .v-btn--floating {
}
.btn_view_malf{
  position: absolute;

}
#lateral .v-btn--floating {
  margin: 0 0 16px 16px;
}
</style>
