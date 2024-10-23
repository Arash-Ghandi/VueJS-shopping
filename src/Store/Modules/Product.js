import Vue from 'vue';

const state = {
  MostSellProducts: [],
  ProductImageAddress:window.location.origin+"/src/assets/images/products/",
  Products: {},
};

const getters = {
  GetMostSellProducts(state) {
    return state.MostSellProducts;
  },
  GetProducts(state){
    return state.Products;
  },
  GetProductImageAddress(state){
    return state.ProductImageAddress;
  }
};

const mutations = {
  SetMostSellProducts(state, MostSellProducts) {
    state.MostSellProducts = MostSellProducts;
  },
  SetProducts(state,Products){
    state.Products = Products;
  }

};

const actions = {
  GetMostSellProductsFromServer(context) {
    Vue.http.get("products/MostSellProducts")
      .then(response => {
        return response.json();
      }).then(data => {
        context.commit("SetMostSellProducts", data);
      });
  },
  GetProductsFromServer(context,Filter) {
    Vue.http.get("products/GetProducts", {
      params:{
        pageId: Filter.pageId
      }
    })
      .then(response => {
        return response.json();
      }).then(data => {
        context.commit("SetProducts", data);
      });
  },

};

export default {
  state,
  getters,
  mutations,
  actions
};
