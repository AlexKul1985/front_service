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
            let response = await fetch(`http://localhost:3000/auth`,{
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
            //  commit('login',data.uid);
            return data;
        },
        async register({commit},{email,password}){
            let response = await fetch(`http://localhost:3000/reg`,{
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