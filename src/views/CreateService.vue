<template>
    
      <v-container>
          <v-form 
             ref="form"
            v-model="valid"
            validation
          >
         <v-layout row wrap>
             <v-flex xs10 offset-xs1>
                  <v-radio-group v-model="activeVariant">
                    <v-radio
                    v-for="variant in variantsService"
                    :key="variant.id"
                    :label="variant.label"
                    :value="variant.id"
                    ></v-radio>
                </v-radio-group>
             </v-flex>
         </v-layout>
  
        
  
         
  
        <v-layout row wrap>
            <v-flex xs10 offset-xs1  d-flex>
          <v-select
            :items="types"
            label="Выбирете тип изделия"
            solo
           
            :disabled="new_type_flag"
            :rules="typeRules"
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
            variantsService:
            [
                {
                    id:1,
                    label:'Производство'
                },
                {
                    id:2,
                    label:'Командировки'
                }
            ],
            activeVariant: 1,
            types: ['Плата', 'Ячейка', 'Стойка', 'Изделие'],
            new_type_flag: true,
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

            
            
    methods:{
        onChangeTypeFlag(value){
            if(!value) this.$refs.form.resetValidation()
        },
            
        onSubmit () {
            if (this.$refs.form.validate()) {
                
                let newTypeFlag = this.new_type_flag && this.new_type !== "" ? true : false;
                let type = newTypeFlag ? this.new_type : this.activeType;

                let dataSubmit = {
                    type,
                    name:this.activeName,
                    variant:this.activeVariant,
                    newTypeFlag
                }
            
            console.log('data - ',dataSubmit)
            
                   
    }
    }
      

         
  },
}
</script>
