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
  path: '/404',
  redirect: '/'
},
{
  path: '*',
  redirect: '/404'
}
];
