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
  path: '/404',
  redirect: '/'
},
{
  path: '*',
  redirect: '/404'
}
];
