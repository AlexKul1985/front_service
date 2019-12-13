import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import {store} from '../store'
Vue.use(VueRouter)

export const router = new VueRouter({
    mode:'history',
    routes
});

router.afterEach((to,from) => {
    if(from.name == "add_malf" && to.name !== "services_list" ){
        store.dispatch('clearFullInfo');
        store.dispatch('clearNamesService');
    }
    else if(from.name == "services_list"){
        store.dispatch('clearServicesList');
        store.dispatch('clearFullFilterInfo');
        store.dispatch('clearNamesServiceFilter');
    }
    else if(from.name == "desc"){
        store.dispatch('clearDesc');
       
    }
    else if(from.name == "main"){
        store.dispatch('clearFigureData');
       
    }
        
    
})