<template>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
          <v-flex text-xs-center>
           <slot></slot>
          </v-flex>
        </v-layout>
      </v-container>
       <div class="loading" v-if="loading">
     <v-progress-circular
        :size="60"
        :width="5"
        color="indigo"
        indeterminate
      ></v-progress-circular>
    </div>
    <v-dialog v-model="editProfile">
      <v-card class="edit">
        <v-card-text>
          <write-data-profile></write-data-profile> 
        </v-card-text>      
      </v-card>    
    </v-dialog>
    </v-content>
</template>
<script>
import  WriteDataProfile from '../components/WriteDataProfile' 

export default {
 
 
 
  components:{
    WriteDataProfile
  },
  computed:{
    loading(){
      return this.$store.getters.loading;
    },
    editProfile:{
      get(){
        //console.log(this)
        return this.$store.getters.editProfile
      },
      set(val){
        this.$store.dispatch('setEditProfile',val)
      }
    }
  }
}
</script>

<style >
.loading{
  position: absolute;
  background: transparent;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  z-index:1001;
}
.edit{
 min-height: 95vh;
}
</style>

