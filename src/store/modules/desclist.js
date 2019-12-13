

export default {
    state:{
        descList:[],
        desc:{},
        
    },
    getters:{
        descList(state){
            return state.descList;
        },
        desc(state){
            return state.desc;
        }
    },
    mutations:{
        setDescList(state,payload){
            state.descList = payload
        },
        clearDescList(state){
            state.descList = [];
        },
        setDesc(state,payload){
            state.desc = payload
        },
        clearDesc(state){
            state.desc = {};
        },
        setNewDescList(state,newDesc){
            state.descList.push(newDesc)
        }

    },
    actions:{
        async setDescList({commit},id_malf_info){
            let response = await fetch('http://test_nginx.local/malf/'+id_malf_info+'/desclist');
            let descList = await response.json();
            commit('setDescList',descList) 
        },
        async setDesc({commit},{id, id_desc}){
            let response = await fetch('http://test_nginx.local/malf/'+id+'/desclist/'+id_desc);
            let desc = await response.json();
            // console.log(desc)
            commit('setDesc',desc) 
        },
        async saveNewDesc({commit},payload){
            let response = await fetch("http://test_nginx.local/newdescadd",{
                method:'POST',
                body:JSON.stringify(payload),
                headers:{
                    "Content-Type":'application/json'
                }
            })
            let newDesc = await response.json()
            commit('setNewDescList',newDesc)
        },
        clearDesc({commit}){
            commit('clearDesc');
        }
    }
}