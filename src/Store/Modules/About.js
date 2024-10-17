import Vue from 'vue';

const state = {
  about: [],
};

const getters = {
  GetAbout(state) {
    return state.about;
  },
};

const mutations = {
  SetAbout(state, about) {
    state.about = about;
  }
};

const actions = {
  GetAboutFromServer(context) {
    Vue.http.get("about/GetAbout")
      .then(response => {
        return response.json();
      }).then(data => {
        context.commit("SetAbout", data);
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
