<template>
    <div id="lateral">
         <v-layout>
        <v-flex xs12  >
            <v-card :elevation="7">
                 
                <v-card-title>
                <v-spacer></v-spacer>
                    <v-list-tile-action-text color="red">В ремонте</v-list-tile-action-text>
                    <v-icon color='red' class="ml-1 mr-2" :size="30">warning</v-icon>
                </v-card-title>

                <v-card-title class="ml-2">
                    <v-list-tile-action-text class="mr-2">Название: </v-list-tile-action-text> ЦОС-ПРМ
                </v-card-title>
                <v-card-title class="ml-2">
                   <v-list-tile-action-text class="mr-2">Тип:  </v-list-tile-action-text> Плата
                </v-card-title>
                <v-card-title class="ml-2">
                   <v-list-tile-action-text class="mr-2">Номер:  </v-list-tile-action-text> 2222
                </v-card-title>
                 <v-card-title class="ml-2">
                   <v-list-tile-action-text class="mr-2">Дата добавления:  </v-list-tile-action-text>{{new Date()}}
                </v-card-title>
                <v-card-title class="ml-2">
                   <v-list-tile-action-text class="mr-2">Дата обнавления:  </v-list-tile-action-text>{{new Date()}}
                </v-card-title>
                    
                <v-card-text >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, commodi magnam alias dolore blanditiis quo velit ad est qui, quidem perspiciatis consequuntur. Ex sequi quia sed. Voluptates dolorum dolorem fuga, at nemo, doloribus, sequi fugit natus rerum quam mollitia sunt tempora aperiam! Architecto, modi assumenda rerum minus fugiat ad soluta aliquam, ex quaerat illum fuga placeat. Soluta distinctio eligendi veniam tenetur ad doloremque quod suscipit ut nihil possimus, impedit officia tempore aliquam esse dicta in, assumenda eveniet iste rerum non facere? Itaque dolor iste ipsam saepe aut tempore molestiae libero a animi quaerat ratione maiores rem ex, corrupti quae quia?
                </v-card-text>
             
      
            </v-card>
      </v-flex>
      <v-fab-transition>
        <v-btn
          color="orange"
          dark
          fab
          fixed
          top
          left
          @click = "onEdit"
          
          
        >
          <v-icon>edit</v-icon>
          
        </v-btn>
      </v-fab-transition>
    </v-layout>
            
  
          
     <edit-form
          :statuses="statuses"
          :names="names"
          :types="types"
          :text="text"
          :dialog.sync="editDialog"
      ></edit-form>         
    </div>
</template>
<script>
import EditForm from '../components/EditForm'

export default {
  components:{
    EditForm
  },
     data: () => ({
      editDialog: false,
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

  computed: {
   
  },
  methods:{
    onEdit(){
       this.editDialog = true
    }
  }
}
</script>
<style>
#lateral .v-speed-dial,
#lateral .v-btn--floating {
  position: absolute;
}
#lateral .v-btn--floating {
  margin: 0 0 16px 16px;
}
</style>
