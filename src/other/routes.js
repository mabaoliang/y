
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/home/Home";
import Login from "@/views/login/Login";
import VA  from "@/views/Vpagea/VpageA";
import VB from "@/views/Vpageb/VpageB";
import VC from "@/views/Vpagec/VpageC";
import VD from "@/views/Vpaged/VpageD";



Vue.use(VueRouter);
// eslint-disable-next-line no-unused-vars
const router = new VueRouter({
    mode: 'history',
    routes: [
        {path:'/',component: Login},
        {path:'/home',component:Home,children:[
                {path:'/va',component: VA},
                {path:'/vb',component: VB},
                {path:'/vc',component: VC},
                {path:'/vd',component: VD}
            ]
        }
    ]
})
export default router;
// const routes = [
//     {path:'/',component:Home},
//     {path:'/login',component: Login}
// ]
