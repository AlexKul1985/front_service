export default {
    state:{
      servicesList:[]
    },
    getters:{
        servicesList(state){
            return state.servicesList
        }
    },
    mutations:{
      setFilterServicesList(state,payload){
        
        state.servicesList = payload
    },
      setServicesList(state,payload){
        state.servicesList = payload
      },
      clearServicesList(state){
        state.servicesList = [];
      },
      deleteMalfInfo(state,idx){
        state.servicesList.slice(idx,1);
      }
    },
    actions:{
      async setFilterServicesList({commit},payload){
        let response = await fetch("http://test_nginx.local/filter",{
            method:'POST',
            body:JSON.stringify(payload),
            headers:{
                "Content-Type":'application/json'
            }
        })
        let data = await response.json()
        commit('setFilterServicesList',data)
      },
        async setServicesList({commit}){
            let response = await fetch("http://test_nginx.local/test/join")
            let servicesList = await response.json();
            commit('setServicesList',servicesList)
           
        },
        async deleteMalfInfo({commit},payload){
          let response = await fetch("http://test_nginx.local/delmalfinfo",{
            method:'POST',
            body:JSON.stringify(payload),
            headers:{
                "Content-Type":'application/json'
            }
        })
        let data = await response.json()
        commit('setFilterServicesList',data)
        },
        clearServicesList({commit}){
            commit('clearServicesList')
          }
    }
}