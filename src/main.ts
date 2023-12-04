import './assets/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router'
import  './assets/index.css'
import './assets/global.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../dist/output.css'
import axios from "axios";
import {getToken} from "@/authService";
const app = createApp(App)
axios.defaults.baseURL = 'http://localhost:1145';
router.beforeEach((to, from, next) => {
    const token = getToken();
    const publicPages = ['/', '/business-list', '/business-info', '/login', '/register', 'index.html']; // 公共页面列表
    const authRequired = !publicPages.includes(to.path); // 检查是否需要身份验证

    if (authRequired && token == null) {
        console.log("token is null, redirecting to login");
        next('/login');
        alert("请登录");
    } else {
        console.log("你的token是"+token);
        next();
    }
});


app.use(router)
app.use(ElementPlus)

app.mount('#app')
