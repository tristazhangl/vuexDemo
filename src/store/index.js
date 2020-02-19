import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);
import news from './modules/news'
export default new Vuex.Store({
    state : {
        $userCity : '广州'
    },
    getters : {
        getCity : state => state.$userCity
    },
    mutations : {
        changeCity(state,latestCity) {
            state.$userCity = latestCity;
        }
    },
    modules : {
        news
    }
});