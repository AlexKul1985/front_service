export default {
    state:{
        names:[],
        statuses:[],
        variantsService:[],
        types:[]
    },
    getters:{
        names(state){
            return state.names
        },
        statuses(state){
            return state.statuses
        },
        variantsService(state){
            return state.variantsService
        },
        types(state){
            return state.types
        }
    },
    mutations:{
        setNames(state,payload){
            state.names = payload
        },
        setStatuses(state,payload){
            state.statuses = payload
        },
        setVariantsService(state,payload){
            state.variantsService = payload
        },
        setTypes(state,payload){
            state.types = payload
        }

    },
    actions:{

    }
}