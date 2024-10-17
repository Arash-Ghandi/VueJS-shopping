import Vue from 'vue';

const state = {
  MostSellProducts: [],
  LatestProducts: [],
  ProductImageAddress:"http://localhost:13172/api/product/image/"
};


const getters = {
  GetMostSellProducts(state) {
    return state.MostSellProducts;
  },
  GetLatestProducts(state) {
    return state.LatestProducts;
  },
  GetProductImageAddress(state){
    return state.ProductImageAddress;
  }
};

const mutations = {
  SetMostSellProducts(state, MostSellProducts) {
    state.MostSellProducts = MostSellProducts;
  },
  SetLatestProducts(state, LatestProducts) {
    state.LatestProducts = LatestProducts;
  }
};

const actions = {
  GetMostSellProductsFromServer(context) {
    Vue.http.get("product/MostSellProducts")
      .then(response => {
        return response.json();
      }).then(data => {
        context.commit("SetMostSellProducts", data);
      });
  },
  GetLatestProductsFromServer(context) {
    Vue.http.get("product/LatestProducts")
      .then(response => {
        return response.json();
      }).then(data => {
        context.commit("SetLatestProducts", data);
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
