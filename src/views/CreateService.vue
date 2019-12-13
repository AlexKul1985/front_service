<template>
    
      <v-container>
          <v-form 
             ref="form"
            v-model="valid"
            validation
          >
       
  
        
  
         
  
        <v-layout row wrap>
         <v-flex xs10 offset-xs1  d-flex>
          <v-select
            :items="types"
            label="Выбирете тип изделия"
            solo
            :item-text="'type_name'"
            :disabled="new_type_flag"
            :rules="typeRules"
            :item-value="'id_type'"
            v-model="activeType"
          ></v-select>
        </v-flex> 
         <v-layout  wrap row>
           <v-flex xs7 offset-xs1 >
            <v-text-field
              
              label="Новый тип изделия"
              outline
              :disabled="!new_type_flag"
              v-model="new_type"
              :rules="newTypeRules"
            ></v-text-field>
          </v-flex>
          <v-flex xs3 offset-xs1>
               <v-checkbox
                @change="onChangeTypeFlag"
                    v-model="new_type_flag"
                    label="new type"
                ></v-checkbox>
          </v-flex>
         </v-layout>
          <v-flex xs10 offset-xs1 >
            <v-text-field
              label="Название изделия"
              outline
              :rules="nameRules"
              v-model="activeName"
            ></v-text-field>
          </v-flex>
            <v-flex xs10 offset-xs1>
               <v-btn color="green" :dark="valid" :disabled="!valid" @click="onSubmit">CREATE</v-btn>
             </v-flex>
        </v-layout>
    </v-form>
        
  
      </v-container>
    
</template>
<script>

let ctx;

export default {
    data(){
        return {
            valid:false,
           
           
            // types: [{id:1,type:'Плата'}, {id:2, type:'Ячейка'}, {id:3, type:'Стойка'},{id:4, type: 'Изделие'}],
            new_type_flag: false,
            activeType: null,
            activeName: null,
            new_type: "",
            
            typeRules:[
               v => (!ctx.new_type_flag && !!v) ||
                (ctx.new_type_flag && (!!v || !v)) ||
                 'Type is required',
            ],
                 
            nameRules:[
               v => !!v || 'Name is required',
            ],
            newTypeRules:[
                v => (ctx.new_type_flag && !!v) || 
                (!ctx.new_type_flag && !!v) ||
                 (!ctx.new_type_flag && !v) 
                 || 'New type is required',
            ]
        }
    },
    created(){
        ctx = this;
    },
    mounted(){
        console.log(ctx.$refs.from)
    },
   
    computed:{
       types(){
        return this.$store.getters.typesService;
      }
    },
            
            
    methods:{
        onChangeTypeFlag(value){
             this.$refs.form.resetValidation()
        },
            
        async onSubmit () {
            if (this.$refs.form.validate()) {
                
                let newTypeFlag = this.new_type_flag && this.new_type !== "" ? true : false;
                let type_name = newTypeFlag ? this.new_type : this.activeType;

                let dataSubmit = {
                    type_name,
                    malf_name:this.activeName,
                    
                    newTypeFlag,
                    // id_user:7
                }
            
            console.log('data - ',dataSubmit)
           await this.$store.dispatch('createType',dataSubmit)
             this.$refs.form.reset()
            
                   
    }
    }
  },
   beforeRouteEnter(to, from, next){
    next((vm) => {
    vm.$store.dispatch('setTypesService')

    })
  },
  beforeRouteLeave(to, from,next){
      this.$store.dispatch('clearTypesService');
      next()
  }
      

         
}
</script>
