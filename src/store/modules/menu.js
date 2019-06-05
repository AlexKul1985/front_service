export default {
    state:{
        listMenu:[
            {
            id:1,
            title:'Home',
            path:'/',
            icon:'home'
              },
             {
            id:2,
            title:'Services',
            path:'/serviceslist',
            icon:'build'
            },
            {
            id:3,
            title:'add malfunction',
            path:'/addmalf',
            icon:'add'
            },
            {
                id:4,
                title:'CREATE SERVICE',
                path:'/createservice',
                icon:'create'
                }              
        ]      
    },
    getters:{
        listMenu(state){
            return state.listMenu;
        }
    },
    mutations:{
        setListMenu(state,payload){
            state.listMenu = payload;
        }
    },
    actions:{
        async setListMenu({commit},{email, password}){
            let data = await fetch(`http://localhost:3000/auth`,{
                method:'POST',
                body:JSON.stringify({
                    "email":email,
                    "password":password
                }),
                headers:{
                    
                }
            })
            return data.json();
            // commit('setListMenu',payload);
        }
    }
}