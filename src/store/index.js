import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import menu from './modules/menu'
import user from './modules/user'
import services from './modules/services'
import services_list from './modules/services_list'
import filters from './modules/filters'
import malf_detail from './modules/malf_detail'
import desclist from './modules/desclist'
import edit from './modules/edit'
import main from './modules/main'
import history_status from './modules/history_status'


export const store = new Vuex.Store({
    state:{
        loading:false,
        error:false,
        editProfile:false
    },
    getters:{
        loading(state){
            return state.loading;
        },
        error(state){
            return state.error;
        },
        editProfile(state){
            return state.editProfile
        }
    },
    mutations:{
        setLoading(state,payload){
            state.loading = payload;
        },
        setError(state,payload){
            state.error = payload;
        },
        setEditProfile(state,payload) {
            if(payload){

                state.editProfile = payload;
            }
            else{
                state.editProfile = !state.editProfile;
            }
        }
    },
    actions:{
        setLoading({commit},payload){
            commit('setLoading',payload)
        },
        setError({commit},payload){
            commit('setError',payload)
        },
        setEditProfile({commit},payload){
            commit('setEditProfile',payload)
        }
    },
    modules:{
        menu, user, services, services_list, filters, malf_detail, desclist, edit, main, history_status 
    }
})