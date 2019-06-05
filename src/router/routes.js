// import Main from '../views/Main'
// import ServicesList from '../views/ServicesList'
// import Register from '../views/Auth/Register'
// import Login from '../views/Auth/Login'

let layoutDefault = 'Default'
let layoutEmpty = 'Empty'
export default [
    {
        path:"/",
        component: () => import('../views/Main'),
        
        meta:{
            layout:layoutDefault
        }
    },
    {
        path:"/serviceslist",
        component: () => import('../views/ServicesList'),
        meta:{
            layout:layoutDefault
        }
    },
    {
        path:"/addmalf",
        component: () => import('../views/AddMalf'),
        meta:{
            layout:layoutDefault
        }
    },
    {
        path:"/malf/:id",
        component: () => import('../views/ViewMalf'),
        meta:{
            layout:layoutDefault
        }
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