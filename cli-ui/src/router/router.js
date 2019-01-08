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
      // 开单
        // 运单列表
        {
          path: 'orderList', 
          component: _import('pages/openOrder/orderList')
        },
        // 开单
        {
          path: 'openOrder', 
          component: _import('pages/openOrder/openOrder')
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
    // 系统设置
        // K单过滤
        {
          path: 'charterInfo', 
          component: _import('pages/systemSetting/charterInfo')
        },
        // 打印机设置
        {
          path: 'printSetting', 
          component: _import('pages/systemSetting/printSetting')
        },
        // 包车信息
        {
          path: 'Kfilter', 
          component: _import('pages/systemSetting/Kfilter')
        },
        // 测试页面
        {
          path: 'test', 
          component: _import('pages/test/test')
        },
        {
          path: 'test2', 
          component: _import('pages/test/test2')
        },
    
      ]
    },
    
  ]
})
