// import Main from '../views/Main'
// import ServicesList from '../views/ServicesList'
// import Register from '../views/Auth/Register'
// import Login from '../views/Auth/Login'
import {store} from '../store'

let layoutDefault = 'Default'
let layoutEmpty = 'Empty'
export default [
    {
        path:"/",
        component: () => import('../views/Main'),
        name:'main',
        meta:{
            layout:layoutDefault
        },
         beforeEnter(from,to,next){
            store.dispatch('setLoading',true)
            store.dispatch('setFigureData')
            .then(() => {
                
                store.dispatch('setLoading',false)
                next()
            })
            .catch(() => {
                store.dispatch('setError',true)
                store.dispatch('setLoading',false)
            })
        }
    },
    // {
    //     path:'/ourprofile',
    //     // component: () => import('../views/EditProfile'),
    //     name:'ourprofile',
    //     meta:{
    //         layout:layoutDefault
    //     },

    // },
    {
        path:"/serviceslist",
        component: () => import('../views/ServicesList'),
        meta:{
            layout:layoutDefault
        },
        name:'services_list',
        async beforeEnter(from, to, next){
            try{

                store.dispatch('setLoading',true);
                
                await store.dispatch('setServicesList')
                
                
                
                await store.dispatch('setFullFilterInfo')
                
                
                await store.dispatch('setfullInfo')
                 store.dispatch('setLoading',false);
                next();
            } catch(e){

                store.dispatch('setError',true);
                store.dispatch('setLoading',false);
            }
          
            

        }
    },
    {
        path:"/addmalf",
        component: () => import('../views/AddMalf'),
        meta:{
            layout:layoutDefault
        },
        name:'add_malf'
    },
    {
        path:'/malf/:id/history',
        component: () => import('../views/HistoryStatus'),
        meta:{
            layout:layoutDefault
        },
        name:'history',
        async beforeEnter(from, to, next){
            try{

                store.dispatch('setLoading',true);
                
                store.dispatch('setHistoryStatuses',from.params.id);
                
              
                
                
                 store.dispatch('setLoading',false);
                next();
            } catch(e){

                store.dispatch('setError',true);
                store.dispatch('setLoading',false);
            }
          
            

        }
    },
    {
        path:"/malf/:id",
        component: () => import('../views/ViewMalf'),
        meta:{
            layout:layoutDefault
        },
        async beforeEnter(from, to, next){
            store.dispatch('setLoading',true);
            await store.dispatch('setfullInfo')
            await store.dispatch('setDetailMalf',from.params.id)
            store.dispatch('setLoading',false);
            next();
        }
    },
    {
        path:'/malf/:id/desclist',
        component:() => import('../views/DescList'),
        meta:{
            layout:layoutDefault
        },
        async beforeEnter(from, to, next){
            store.dispatch('setLoading',true);
            await store.dispatch('setDescList',from.params.id)
            store.dispatch('setLoading',false);
            next();
        }
    },
    {
        path:'/malf/:id/desclist/:id_desc',
        component:() => import('../views/ViewDesc'),
        meta:{
            layout:layoutDefault
        },
        name:'desc'
        // async beforeEnter(from, to, next){
        //     store.dispatch('setLoading',true);
        //     await store.dispatch('setDesc',{id: from.params.id,id_desc: to.params.id_desc})
        //     store.dispatch('setLoading',false);
        //     next();
        // }
    },
           
    {
        path:"/createservice",
        component: () => import('../views/CreateService'),
        meta:{
            layout:layoutDefault
        }
    },
    {
        path:"/register",
        component: () => import('../views/Auth/Register'),
        meta:{
            layout:layoutEmpty
        }
    },
    {
        path:"/login",
        component: () => import('../views/Auth/Login'),
        meta:{
            layout:layoutEmpty
        }
    }
]