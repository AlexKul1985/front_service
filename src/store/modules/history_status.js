export default {
    state:{
        historyStatuses:[]
    },
    getters:{
        historyStatuses(state){
            return state.historyStatuses
        }
    },
    mutations:{
        setHistoryStatuses(state,payload){
            state.historyStatuses = payload
        }
    },
    actions:{
        async setHistoryStatuses({commit},id_malf_info){
            let response = await fetch("http://test_nginx.local/gethistorystatuses/"+id_malf_info);
            let history_statuses = await response.json();
            
            commit('setHistoryStatuses',history_statuses);
        }
    }
}