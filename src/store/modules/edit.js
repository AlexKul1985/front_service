export default {
    state:{
        editData:{},
        idOldStatus:0
    },
    getters:{
        editData(state){
            return state.editData
        },
        idOldStatus(state){
            return state.idOldStatus;
        }
    },
    mutations:{
        setEditData(state, payload){
            state.editData = payload
        },
        setOldstatus(state){
            state.idOldStatus = state.editData['id_status']
        }
        
    },
    actions:{
       async setEditData({commit}, id_malf_info){
           try{

               let response = await fetch("http://test_nginx.local/getdataedit/"+id_malf_info)
               let editData = await response.json()
            //    console.log(editData)
               commit('setNamesService',editData['names'])
               commit('setEditData',editData['editData'])
           } catch(e){
            // console.log('Err ',e.message)
           }
        },
        async editMalf({commit},{dataSubmit,id_malf_info}){
            try{
                let response = await fetch("http://test_nginx.local/editmalf/"+id_malf_info,{
                method:'POST',
                body:JSON.stringify(dataSubmit),
                headers:{
                    "Content-Type":'application/json'
                }
            })
            let newDAta = await response.json()
                if(!newDAta[0]['name_icon']){
                    commit('setFilterServicesList',newDAta)
                    
                    console.log('1',newDAta)
                }
                else{
                    commit('setDetailMalf',newDAta[0])
                    console.log(newDAta)

                }
            } catch(e){
                console.log(e.message)
            }
            
            // console.log('res ',data)
        },
        setOldstatus({commit}){
            commit('setOldstatus')
        }
    }
}