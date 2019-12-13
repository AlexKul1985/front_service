<template>
     <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon  @click.stop="onClick"></v-toolbar-side-icon>
      <v-toolbar-title>Service</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat v-for="item in getList" :key = "item.id" @click="onClickBtn(item.path)">{{item.title.toUpperCase()}}</v-btn>
        </v-toolbar-items>
        
    </v-toolbar>
</template>
<script>
export default {
    name:'toolbar',
    props:['value','list'],
   
    methods:{
        onClick(){
             
            this.$emit('input',!this.value);
        },
        onClickBtn(path){
            if(path){

                this.$router.push(path)
            }
            else{
                 this.$store.dispatch('setEditProfile');
            }
        }
    },
    computed:{
        getList(){
            return this.list.slice().reverse();
        }
    }
}
</script>

