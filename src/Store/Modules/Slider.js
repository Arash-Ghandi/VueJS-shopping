import Vue from 'vue';

const state = {
  sliders: [],
  // SliderImageAddress: "http://127.0.0.1:5000/api/slider/image/"
};


const getters = {
  GetSliders(state) {
    return state.sliders;
  },
  // GetSliderImageAddress(state){
  //   return state.SliderImageAddress;
  // }
};

const mutations = {
  SetSliders(state, sliders) {
    state.sliders = sliders;
  }
};

const actions = {
  GetSlidersFromServer(context) {
    Vue.http.get("slider/GetSliders")
      .then(response => {
        console.log(response);
        return response.json();
      }).then(data => {
        context.commit("SetSliders", data);
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
