import Vue from 'vue';

const state = {
  MostSellProducts: [],
  ProductImageAddress:window.location.origin+"/src/assets/images/products/",
  Products: {},
  Product: {},
};

const getters = {
  GetMostSellProducts(state) {
    return state.MostSellProducts;
  },
  GetProducts(state){
    return state.Products;
  },
  GetProduct(state){
    return state.Product;
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
  },
  SetProduct(state,Product){
    state.Product = Product;
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
  GetProductFromServer(context,Filter) {
    Vue.http.get("products/GetProduct/" + Filter.productId)
      .then(response => {
        return response.json();
      }).then(data => {
        context.commit("SetProduct", data);
      });
  },

};

export default {
  state,
  getters,
  mutations,
  actions
};
