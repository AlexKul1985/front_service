<template>
    <v-container>
        <ul class="links_input">
             <router-link tag="a"  to="/register">
                  <v-icon>lock</v-icon>
              </router-link>
              <router-link tag="a" to="/login">
                  <v-icon>exit_to_app</v-icon>
              </router-link>
        </ul>
        <transition appear mode="out-in" name="fade">

            <router-view></router-view>
        </transition>
    </v-container>
</template>
<script>
export default {
    name:'empty'
}
</script>



                
                
<style>
    .links_input{
        position: fixed;
        top:2%;
        right: 2%;
    }
    .links_input a{
        margin: 5px;
    }
  
</style>

        
