import Vue from 'vue'
import Router from 'vue-router'

const _import = file => () => import('@/views/' + file + '.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Box',
      component: _import('index'),
      children:[
        {
          path: 'index', 
          component: _import('pages/index/index')
        },
        {
          path: 'addOrder', 
          component: _import('pages/index/addOrder')
        },
        {
          path: 'test', 
          component: _import('pages/index/test')
        },
        // 智能分配
        // 实时分配
        {
          path: 'realDispatch', 
          component: _import('pages/autoDispatch/realDispatch')
        },
        // 预分配
        {
          path: 'exceptDispatch', 
          component: _import('pages/autoDispatch/exceptDispatch')
        },
      ]
    },
    
  ]
})
