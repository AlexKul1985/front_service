export default {
    state:{
        
        namesServiceFilter: [],
        fullFilterInfo: [],
        filterData:{
            id_status: 0,
            id_variant: 0,
            id_malf: 0,
            id_type: 0
          },
        
    },
    getters:{
       
        fullFilterInfo(state){
            return state.fullFilterInfo;
        },
        namesServiceFilter(state){
            return state.namesServiceFilter;
        },
        filterData(state){
            return state.filterData
        }
       

    },
    mutations:{
        setFilterData(state,payload){
            state.filterData = payload
        },
       
        setNamesServiceFilter(state,payload){
            state.namesServiceFilter = payload
        },
        setFullFilterInfo(state,payload){
            state.fullFilterInfo = payload
        },
       
        clearFullFilterInfo(state){
            state.fullFilterInfo = []
        },
        clearNamesServiceFilter(state){
            state.namesServiceFilter = []
        }
    },
    actions:{
        
    
        async setFullFilterInfo({commit}){
            let response = await fetch("http://test_nginx.local/fullinfo")
            let fullInfo = await response.json();
            commit('setFullFilterInfo',fullInfo)
        },
       
        async setNamesServiceFilter({commit},id_type){
            let response = await fetch("http://test_nginx.local/names/"+id_type)
            let names = await response.json();
            commit('setNamesServiceFilter',names)
        },
        
        clearNamesServiceFilter({commit}){
            commit('clearNamesServiceFilter')
        },
        clearFullFilterInfo({commit}){
            commit('clearFullFilterInfo')
        },
        setFilterData({commit},filterData){
            commit('setFilterData',filterData)
        }

    }
}