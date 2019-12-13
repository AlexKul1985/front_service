<template>
    <tr>
        <td>{{ props.item.malf_name }}</td>
          <td class="text-xs-right">{{ props.item.type_name }}</td>
          <td class="text-xs-right">{{ props.item.number }}</td>
          <td class="text-xs-right">{{ props.item.status_name }}</td>
          <td class="text-xs-right">{{ props.item.variant_name }}</td>
          <td class="text-xs-right">{{ props.item.created_at }}</td>
          <td class="text-xs-right">{{ props.item.updated_at }}</td>
          <td class="justify-center align-center layout px-0">
            <v-icon
              small
              class="mr-2"
              @click="methodShow(props.item)"
              
            >
              visibility
            </v-icon>
            <v-icon
              small
              class="mr-2"
              
              @click="methodEdit(props.item.id_malf_info)"
            >
              edit
            </v-icon>
            <v-icon
              small
              @click="methodDelete(props.item.id_malf_info)"
               
            >
              delete
            </v-icon>
          </td>
    </tr>
</template>
<script>
export default {
    inject:['editItem','showItem','deleteItem'],
    props:['props'],
    methods:{
        methodDelete(id_malf_info){
            this.deleteItem(id_malf_info)
        },
        methodShow(item){
            this.showItem(item)
        },
        methodEdit(id_malf_info){
            this.editItem(id_malf_info)
        },
        
    }
}
</script>

