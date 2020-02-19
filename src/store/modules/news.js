const state = {
    showViewsList : []
}

const mutations = {
    setShowViews(state,showViewsList){
        state.showViewsList = showViewsList;
    }
}

export default {
    namespaced:true,
    state,
    mutations
}