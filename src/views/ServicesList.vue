<template>
  
   <div id="lateral">
     <v-layout>
        <v-flex xs12  >
            
<v-fab-transition>
    <v-btn color="red"  @click = "onAddMalf" fab dark small top left >
        <v-icon dark>add</v-icon>
    </v-btn>
</v-fab-transition>

         <edit-form
          :statuses="fullInfo.statuses"
          :names="names"
          :types="fullInfo.types"
          :variants="fullInfo.variants"
          :text="text"
          :dialog.sync="editDialog"
          @onChangeIdType = "getIdType"
          
         ></edit-form>   
               
        <v-data-table
          :headers="headers"
          :items="desserts"
          class="elevation-1"
          pagination.sync="page"
          :rows-per-page-items = [5,10,20]
          
          

        >
        
        <template v-slot:footer>
          <filter-table 
          :headLen="headers.length"
          :statuses="fullFilterInfo.statuses"
          :variants="fullFilterInfo.variants"
          :names="namesServiceFilter"
          :types="fullFilterInfo.types"
          @onChangeFilterIdType = "getFilterIdType"
          @filterData="getFilterData"

          ></filter-table>
        </template>
        <template v-slot:items="props">
          <table-list :props="props"></table-list>
        </template>
      </v-data-table>
       </v-flex >
      </v-layout>
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
<style>

</style>

       
  
   
      
       
     
                    
                    
       
                      
  
<script>


import FilterTable from '../components/FilterTable'
import TableList from '../components/Table'



let ctx;
export default {
  
   provide:() => {
     return {
        editItem: (id_malf_info) => {
            ctx.$store.dispatch('setLoading', true)
            ctx.$store.dispatch('setEditData', id_malf_info)
            .then(() => {
              ctx.$store.dispatch('setLoading', false)
              ctx.editDialog = true
            })
            .catch(() => {

              ctx.$store.dispatch('setLoading', false)
              ctx.$store.dispatch('setError', true)

            })
        },

        deleteItem: (id_malf_info) => {
          ctx.id_malf_info = id_malf_info;
          ctx.deleteQuest = true;
        },
          
          
        showItem:(item) => {
          ctx.$router.push('/malf/'+item.id_malf_info);
        },

     }
   },
  
  components:{
    EditForm:  () => import('../components/EditForm'),
    FilterTable,TableList
  },  
  data: () => ({
   deleteQuest:false,
    // page:{
      
    //   descending: false,
    //   page: 1,
    //   rowsPerPage: -1 ,// -1 for All",
    //   sortBy: '',
    //   totalItems: 1
    // },
    id_malf_info:0,
    editDialog: false,
    headers: [
      {
        text: 'Название',
        align: 'left',
        sortable: false,
        value: 'malf_name'
      },
      { text: 'Тип', value: 'type_name' },
      { text: 'Номер', value: 'number' },
      { text: 'Статус', value: 'status_name' },
       { text: 'Используется', value: 'variant_name' },
      { text: 'Дата и время добавления', value: 'created_at' },
      { text: 'Дата и время обнавления', value: 'updated_at' },
      { text: 'Действия', value: 'do', sortable: false }
    ],
    text:'',
    
  }),
            
           

  computed:{
    desserts(){
      return this.$store.getters.servicesList;
    },
    
      fullInfo(){
        return this.$store.getters.fullInfo;
      },
      names(){
        return this.$store.getters.namesService;
      },
       fullFilterInfo(){
        return this.$store.getters.fullFilterInfo;
      },
      namesServiceFilter(){
        return this.$store.getters.namesServiceFilter;
      }
        
  },

  created () {
    ctx = this;
  
  },


  methods: {
    onAddMalf(){
      this.$router.push('/addmalf');
    },
    getIdType(id_type){
      this.$store.dispatch('setNamesService',id_type)
    },
    getFilterIdType(id_type){
      
      this.$store.dispatch('setNamesServiceFilter',id_type)
    },
    getFilterData(d){
      
      this.$store.dispatch('setFilterData',d)
      this.$store.dispatch('setLoading',true)

      this.$store.dispatch('setFilterServicesList',d)
      .then(() => {
      this.$store.dispatch('setLoading',false)

      })
      .catch(() => {
        
        this.$store.dispatch('setLoading',false)
        this.$store.dispatch('setError',true)
      })
    },
    onCloseDeleteQuest(){
      this.deleteQuest = false;
    },
    onDelete(){
      let data = {
            id_malf_info: this.id_malf_info,
            ...this.$store.getters.filterData,
          }
          console.log(data)

          this.$store.dispatch('setLoading', true)
          this.$store.dispatch('deleteMalfInfo', data)
          .then(() => {
            this.deleteQuest = false;
            this.$store.dispatch('setLoading', false)
          })
          .catch(() => {
            this.$store.dispatch('setLoading', false)
            this.$store.dispatch('setError', true)
            this.deleteQuest = false;
          })
    },
   
    onValid(value){
        this.validate = value 
    },
    onSubmit () {
      this.onClick = !this.onClick;
        this.close()
     
    },
  

  }
  
  

}
</script>
<style scoped>
#lateral .v-speed-dial,
#lateral .v-btn--floating {
    position: absolute;
    z-index: 1;
    top:0;
    left:0;
}
</style>

