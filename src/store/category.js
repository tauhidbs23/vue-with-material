

const state = {
    category: []
}

const getters = {
    allCategory: (state) => {
        return state.category
    }
}

const actions = {
    testCategoryAction() {
        console.log('this.is vuex form category ');
    },

    async addCategory({ commit }, name) {

        commit('newCategory', name);

    },
    async deleteCategory({ commit }, id) {

        commit('removeCategory', id)

    },
    async editCategory({ commit }, name) {

        commit('updateCategory', name);

    }
}

const mutations = {
    setCategory: (state, category) => (state.category = category),
    newCategory: (state, category) => state.category.unshift(category),
    removeCategory: (state, id) => (state.category = state.category.filter(category => category.id !== id)),
    updateCategory: (state, updCategory) => {
        const index = state.category.findIndex(category => category.id === updCategory.id)
        if (index !== -1) {
            state.category.splice(index, 1, updCategory)
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}