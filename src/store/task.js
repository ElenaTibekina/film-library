export default {
  state: {
    tasks: [
      {
        'id': 1,
        'title': 'GrowthBusters: Hooked on Grouth',
        'description': 'I directed this documentary chalinging lalalal lalalalal lalalajhbcbjhj lskksjshhshsh ksksjhshj ksksjjsj hfhjhd hdsh bbbdsgdgsjgdj gdgdggds bsbsgg bsbsb',
        'whatWhatch': 'film',
        'completed': false,
        'editing': false
      },
      {
        'id': 2,
        'title': 'Game of Thrones',
        'description': 'The best TV-show',
        'whatWhatch': 'TV-show',
        'completed': false,
        'editing': false
      }
    ]
  },
  mutations: {
    newTask (state, payload) {
      state.tasks.push(payload)
    }
  },
  actions: {
    newTask ({commit}, payload) {
      payload.id = Math.random()
      commit('newTask', payload)
    }
  },
  getters: {
    tasks (state) {
      return state.tasks
    }
  }
}
