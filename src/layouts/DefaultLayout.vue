<template>
<transition appear mode="out-in" name="fade" apear>
<div id="app">
  <v-app id="inspire">
    <v-container>
        <Drawer v-model="drawer" :list="listMenu"/>
        <Toolbar v-model="drawer" :list="listMenu"/>
        <Content>
            <transition appear mode="out-in" name="fade" >
                <router-view ></router-view>
            </transition>
        </Content>
        <!-- <v-footer color="indigo" app>
        <span class="white--text">&copy; 2019</span>
        </v-footer> -->
    </v-container>
    </v-app>
    
</div>
    </transition>

</template>
   
<script>
import Toolbar from '../components/Toolbar'
import Content from '../components/Content'
import Drawer from '../components/Drawer'
export default {
    name:'default',
    components:{
        Toolbar,Content,Drawer
    },
     data: () => ({
      drawer: false,
     
    }),
    // props: {
    //   source: String
    // },
    computed:{
        listMenu(){
            return this.$store.getters.listMenu;
        }
    },
    methods:{
    
    }
   
}
</script>
<style >

</style>

