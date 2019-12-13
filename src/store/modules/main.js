export default {
    state:{
        figureData:{}
    },
    getters:{
        figureData(state){
            return state.figureData;
        }

    },
    mutations:{
        setFigureData(state,payload){
            state.figureData = payload
        },
        clearFigureData(state){
            state.figureData = {}
        }
    },
    actions:{
        async setFigureData({commit}){
            let response = await fetch('http://test_nginx.local/main');
            let figureData = await response.json();
            // console.log(desc)
            commit('setFigureData',figureData) 
        },
        clearFigureData({commit}){
            commit('clearFigureData')
        }
    }
}