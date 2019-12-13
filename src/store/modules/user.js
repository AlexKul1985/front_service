class User{
    constructor({uid}){
        this.id = uid
    }
}
export default {
    state:{
        user:null
    },
    getters:{
        user(state){
            return state.user;
        }
    },
    mutations:{
        login(state,uid){
            state.user = new User({uid});
        }
    },
    actions:{
        async login({commit},{email, password}){
            let response = await fetch(`http://test_nginx.local/auth`,{
                method:'POST',
                body:JSON.stringify({
                    "email":email,
                    "password":password
                }),
                headers:{
                    "Content-Type":'application/json'
                }
            })
            let data = await response.json()
            console.log(data)
            //  commit('login',data.uid);
            return data;
        },
        async register({commit},{email,password}){
            let response = await fetch(`http://test_nginx.local/reg`,{
                method:'POST',
                body:JSON.stringify({
                    "email":email,
                    "password":password
                }),
                headers:{
                    
                }
            })
            let data = await response.json()
            console.log(data)
             
        }
    }
}