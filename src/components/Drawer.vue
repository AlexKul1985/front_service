<template>
     <v-navigation-drawer
      :value = "value"
      @input = "onInput"
      fixed
      app
    >
      <v-list dense>
              
        <v-list-tile  v-for = "item in list" :key="item.id" @click="onClick(item.path)">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>

                <v-list-tile-title >{{item.title.toUpperCase()}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
              
       
      </v-list>
    </v-navigation-drawer>
</template>
<script>
export default {
    props:['value','list'],
    data(){
      return {
        v:false
      }
    },
    watch:{
      value(v){
        this.v = v;
      }
    },
    methods:{
        onClick(path){
            this.$router.push(path);
        },
        onInput(v){
          this.$emit('input',v);
        }
    }
   
    

}
</script>
<style>
.active{
    background: #eee;
}
</style>


