var Home = resolve => {
  require.ensure(['./Pages/Index/Index.vue'],()=>{
    resolve(require('./Pages/Index/Index.vue'));
  });
};
var About = resolve => {
  require.ensure(['./Pages/About/Index.vue'],()=>{
    resolve(require('./Pages/About/Index.vue'));
  });
};
var Products = resolve => {
  require.ensure(['./Pages/Products/Index.vue'],()=>{
    resolve(require('./Pages/Products/Index.vue'));
  });
};
var Product = resolve => {
  require.ensure(['./Pages/Product/Index.vue'],()=>{
    resolve(require('./Pages/Product/Index.vue'));
  });
};
var Login = resolve => {
  require.ensure(['./Pages/Login/Index.vue'],()=>{
    resolve(require('./Pages/Login/Index.vue'));
  });
};
var Register = resolve => {
  require.ensure(['./Pages/Register/Index.vue'],()=>{
    resolve(require('./Pages/Register/Index.vue'));
  });
};
var ShopCart = resolve => {
  require.ensure(['./Pages/ShopCart/Index.vue'],()=>{
    resolve(require('./Pages/ShopCart/Index.vue'));
  });
};

export const Routes = [
  {
  path: "/",
  component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/products",
    component: Products,
    name:"GetProducts"
  },
  {
    path: "/products/product/:id",
    component: Product,
    name:"GetProduct"
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/shopCart",
    component: ShopCart,
  },
  {
    path: '/404',
    redirect: '/'
  },
  {
    path: '*',
    redirect: '/404'
  }
];
