export default {
    state:{
     detailMalf:{}
    },
    getters:{
        detailMalf(state){
            return state.detailMalf
        },
        idStatusDetailMalf(state){
            return state.idStatusDetailMalf
        }
    },
    mutations:{
        setDetailMalf(state,payload){
            state.detailMalf = payload
        }
     
    },
    actions:{
        async setDetailMalf({commit},id_malf_info){
            let response = await fetch("http://test_nginx.local/detail/"+id_malf_info)
            
            let detail = await response.json()
            
            commit('setDetailMalf',detail[0])
        }
     
    }
}