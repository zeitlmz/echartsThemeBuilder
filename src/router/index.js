import Vue from 'vue'
import VueRouter from 'vue-router'
import themeBuilder from '../views/ThemeBuilder/theme-builder'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'themeBuilder',
        component: themeBuilder,
        meta: {
            title: 'echarts主题设计工具'
        }
    }
]

const router = new VueRouter({
    routes
})

export default router
