var Home = resolve => {
  require.ensure(['./Pages/Index/Index.vue'],()=>{
    resolve(require('./Pages/Index/Index.vue'));
  });
};
export const Routes = [{
  path: "/",
  component: Home
},
// {
//   path: "/User",
//   component: User,
//   children: [{
//       path: "",
//       component: UserStart
//     },
//     {
//       path: "edit/:id",
//       component: UserEdit,
//       name: "editUser",
//       beforeEnter: (to, from, next) => {
//         console.log('enter in route user edit ....');
//         next();
//       }
//     },
//     {
//       path: "detail/:id",
//       component: UserDetail
//     }
//   ]
// },
{
  path: '/404',
  redirect: '/'
},
{
  path: '*',
  redirect: '/404'
}
];
