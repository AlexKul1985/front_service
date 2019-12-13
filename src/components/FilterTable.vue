<template>
     <td :colspan="headLen">
          <!-- <strong>This is an extra footer</strong> -->
          <v-card-title class="mb-2 mt-2">Фильтровать: </v-card-title>
         <v-layout row> 
           
          <v-flex xs3 flex>
                      <strong class="mb-2 mt-2 font-weight-thin">По типу  </strong>

                        <v-select
                          :items="getTypes"
                          label="Все"
                          solo
                           :item-text="'type_name'"
                         :item-value="'id_type'"
                          v-model="filter.filterType"
                          @change = "getFilterIdType"
                          
                       ></v-select>
                         
                         
                          
          </v-flex>
          <v-flex xs3 flex>
            <strong class="mb-2 mt-2 font-weight-thin">По названию</strong>
                        <v-select
                          :items="getNames"
                          label="Все"
                          solo
                           :item-text="'malf_name'"
                         :item-value="'id_malf'"
                          v-model="filter.filterName"
                        
                       ></v-select>
                        
                         
                          
          </v-flex>
          <v-flex xs3 flex>
            <strong class="mb-2 mt-2 font-weight-thin">По варианту использования</strong>
                        <v-select
                          :items="getVariants"
                          label="Все"
                          solo
                           :item-text="'variant_name'"
                         :item-value="'id_variant'"
                          v-model="filter.filterVariant"
                          

                       ></v-select>
                          
                         
                          
          </v-flex>
          <v-flex xs3 flex>
            <strong class="mb-2 mt-2 font-weight-thin">По статусу</strong>
                        <v-select
                          :items="getStatuses"
                          label="Все"
                          solo
                          :item-text="'status_name'"
                          :item-value="'id_status'"
                          v-model="filter.filterStatus"
                          
                       ></v-select>
                          
                         
          </v-flex>
         </v-layout>
        </td>
                          
                          
      </template>
       
</template>
<script>
export default {
    props:['headLen','names','types','statuses','variants'],
    computed:{
      getStatuses(){
        return [{id_status:'0',status_name:'Все'},...this.statuses];
      },
      getVariants(){
        return [{id_variant:'0',variant_name:'Все'},...this.variants];
      },
      getTypes(){
        return [{id_type:'0',type_name:'Все'},...this.types];
      },
      getNames(){
        return [{id_malf:'0',malf_name:'Все'},...this.names];
      },
    },
    data(){
      return {
        filter:{
           filterStatus: '0',
           filterVariant: '0',
           filterName:'0',
           filterType:'0'
        }
       

      }
    },
   methods:{
     getFilterIdType(v){
       console.log('method')
        this.filter.filterName = '0'
       this.$emit('onChangeFilterIdType', v)
     }
   },
   
    created(){
      this.$watch('filter', function({filterStatus,filterVariant,filterName,filterType}){
         console.log('watch')
        //  if(filterType == '0') { filterName = '0' }
         
         let dataSubmit = {
          id_status:filterStatus,
          id_variant:filterVariant,
          id_malf:filterName,
          id_type:filterType
      }
      console.log(dataSubmit)
        this.$emit('filterData',dataSubmit);
      },
      {
        deep: true
     })
    }
}
</script>
