<template>
  <div id="app">
  <v-app id="inspire">
    <div>
   
      
       
         
  
      <!-- <v-toolbar flat color="white">
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-xs>
                 <add-form 
                    v-model="text"
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
      </v-toolbar> -->
         <edit-form
          :statuses="statuses"
          :names="names"
          :types="types"
          :text="text"
          :dialog.sync="editDialog"
         ></edit-form>         
                    
                    
       <v-data-table
        :headers="headers"
        :items="desserts"
        class="elevation-1"
      >
       <template v-slot:footer>
        <td :colspan="headers.length">
          <!-- <strong>This is an extra footer</strong> -->
          <v-card-title class="mb-2 mt-2">Фильтровать: </v-card-title>
         <v-layout row> 
           
          <v-flex xs3 flex>
                      <strong class="mb-2 mt-2 font-weight-thin">По типу  </strong>

                        <v-select
                          :items="['One','Two']"
                          label="Все"
                          solo
                       ></v-select>
                         
                         
                          
          </v-flex>
          <v-flex xs3 flex>
            <strong class="mb-2 mt-2 font-weight-thin">По названию</strong>
                        <v-select
                          :items="['One','Two']"
                          label="Все"
                          solo
                       ></v-select>
                        
                         
                          
          </v-flex>
          <v-flex xs3 flex>
            <strong class="mb-2 mt-2 font-weight-thin">По номеру</strong>
                        <v-select
                          :items="['One','Two']"
                          label="Все"
                          solo
                       ></v-select>
                          
                         
                          
          </v-flex>
          <v-flex xs3 flex>
            <strong class="mb-2 mt-2 font-weight-thin">По статусу</strong>
                        <v-select
                          :items="['One','Two']"
                          label="Все"
                          solo
                       ></v-select>
                         
          </v-flex>
         </v-layout>
        </td>
                          
                          
      </template>
        <template v-slot:items="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.calories }}</td>
          <td class="text-xs-right">{{ props.item.fat }}</td>
          <td class="text-xs-right">{{ props.item.carbs }}</td>
          <td class="text-xs-right">{{ props.item.protein }}</td>
          <td class="justify-center layout px-0">
            <v-icon
              small
              class="mr-2"
              @click="showItem(props.item)"
            >
              visibility
            </v-icon>
            <v-icon
              small
              class="mr-2"
              @click="editItem(props.item)"
            >
              edit
            </v-icon>
            <v-icon
              small
              @click="deleteItem(props.item)"
            >
              delete
            </v-icon>
          </td>
        </template>
       
      </v-data-table>
    </div>
  </v-app>
</div>
</template>
       
                      
  
<script>

import EditForm from '../components/EditForm'
// import {provide} from '../providers/onSubmit'


export default {
  
  // provide,
  
  components:{
    EditForm
  },  
  data: () => ({
    // onClick: false,
    editDialog: false,
    headers: [
      {
        text: 'Название',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'Тип', value: 'calories' },
      { text: 'Статус', value: 'fat' },
      { text: 'Дата добавления', value: 'carbs' },
      { text: 'Дата обнавления', value: 'protein' },
      { text: 'Действия', value: 'name', sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    },
    defaultItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    },
    // validate:false,
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
  }),
            
           

  computed:{
    // formTitle () {
    //   return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    // }
  },

  watch: {
    // dialog (val) {
    //   val || this.close()
    // }
  },

  created () {
    this.initialize()
  },

  methods: {

    onValid(value){
        this.validate = value
    },
    onSubmit () {
      this.onClick = !this.onClick;
        this.close()
     
    },
    initialize () {
      this.desserts = [
        {
          name: 'ЦОС-ПРМ',
          calories: 'Плата',
          fat: 'В работе',
          carbs: '22.06.2019',
          protein: '27.06.2019'
        },
          {
          name: 'ЦОС-ПРД',
          calories: 'Ячейка',
          fat: 'В ремонте',
          carbs: '22.06.2019',
          protein: '27.06.2019'
        },
          {
          name: 'ЦОС-ПРМ',
          calories: 'Плата',
          fat: 'В работе',
          carbs: '22.06.2019',
          protein: '27.06.2019'
        },
          {
          name: 'ЦОС-ПРМ',
          calories: 'Плата',
          fat: 'В работе',
          carbs: '22.06.2019',
          protein: '27.06.2019'
        },
          {
          name: 'ЦОС-ПРМ',
          calories: 'Плата',
          fat: 'В работе',
          carbs: '22.06.2019',
          protein: '27.06.2019'
        },
          {
          name: 'ЦОС-ПРД',
          calories: 'Ячейка',
          fat: 'В работе',
          carbs: '22.06.2019',
          protein: '27.06.2019'
        },
      ]
    },

        
        

    editItem (item) {
      // this.activeStatus = 1;
      // this.editedIndex = this.desserts.indexOf(item)
      // this.editedItem = Object.assign({}, item)
      console.log('EDIT', this.editDialog)
      this.editDialog = true
    },

    deleteItem (item) {
      // const index = this.desserts.indexOf(item)
      // confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
    },
    showItem(item){
      this.$router.push('/malf/'+item);
    },
   

    // close () {
    //   // this.$refs.form.reset();
    //   this.dialog = false
    //   setTimeout(() => {
    //     this.editedItem = Object.assign({}, this.defaultItem)
    //     this.editedIndex = -1
    //   }, 300)
    // },

    // save () {
    //   if (this.editedIndex > -1) {
    //     Object.assign(this.desserts[this.editedIndex], this.editedItem)
    //   } else {
    //     this.desserts.push(this.editedItem)
    //   }
    //   this.close()
    // }
  }

}
</script>
