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
    // 车队管理
        {
          path: 'manageCar', 
          component: _import('pages/manageCar/manageCar')
        }, 
    // 客户管理  
        //  收货人
        {
          path: 'consignee', 
          component: _import('pages/userManage/consignee')
        }, 
        // 发货人
        {
          path: 'consignor', 
          component: _import('pages/userManage/consignor')
        }, 
    // 区域配置
        {
          path: 'areaSetting', 
          component: _import('pages/areaSetting/areaSetting')
        },
      ]
    },
    
  ]
})
