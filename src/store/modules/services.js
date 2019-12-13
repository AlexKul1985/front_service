export default {
    state:{
        typesService:[],
        namesService:[],
        statusesService:[],
        variantsService:[],
        fullInfo:[]
    },
    getters:{
        typesService(state){
            return state.typesService;
        },
        fullInfo(state){
            return state.fullInfo;
        },
        namesService(state){
            return state.namesService;
        },
        statusesService(state){
            return state.statusesService;
        },
        variantsService(state){
            return state.variantsService;
        }

    },
    mutations:{
        setTypesService(state,payload){
            state.typesService = payload
        },
        setNamesService(state,payload){
            state.namesService = payload
        },
        setStatusesService(state,payload){
            state.statusesService = payload
        },
        setVariantsService(state,payload){
            state.variantsService = payload
        },
        setfullInfo(state,payload){
            state.fullInfo = payload
        },
        clearTypesService(state){
            state.typesService = []
        },
        clearNamesService(state){
            state.typesService = []
        },
        clearFullInfo(state){
            state.fullInfo = []
        },
        clearStatusesService(state){
            state.statusesService = []
        },
        clearVariantsService(state){
            state.variantsService = []
        },
       

    },
    actions:{
        async setTypesService({commit}){
            
            let response = await fetch("http://test_nginx.local/types")
            let types = await response.json();
            commit('setTypesService',types)
        },
        async setfullInfo({commit}){
            let response = await fetch("http://test_nginx.local/fullinfo")
            let fullInfo = await response.json();
            commit('setfullInfo',fullInfo)
        },
        async createType({commit}, payload){
            
              let response = await fetch("http://test_nginx.local/create_type",{
                    method:'POST',
                    body:JSON.stringify(payload),
                    headers:{
                        "Content-Type":'application/json'
                    }
                })
                let types = await response.json();
                commit('setTypesService',types)
            
        },
        async createMalf(store,payload){
            await fetch("http://test_nginx.local/createmalf",{
                method:'POST',
                body:JSON.stringify(payload),
                headers:{
                    "Content-Type":'application/json'
                }
            })
            
            // let data = await response.json()
            
        },
        clearTypesService({commit}){
            commit('clearTypesService')
        },
        clearNamesService({commit}){
            commit('clearNamesService')
        },
        clearFullInfo({commit}){
            commit('clearFullInfo')
        },
        async setNamesService({commit},id_type){
            let response = await fetch("http://test_nginx.local/names/"+id_type)
            let names = await response.json();
            commit('setNamesService',names)
        }
    }
}