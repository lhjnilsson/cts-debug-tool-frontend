import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DeviceList from '@/components/devices/List'
import ReportList from '@/components/reports/List'
import Configuration from '@/components/configuration/Configuration'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/devices',
      name: 'DeviceList',
      component: DeviceList
    },
    {
      path: '/reports',
      name: 'ReportList',
      component: ReportList
    },
    {
      path: '/configuration',
      name: 'Configuration',
      component: Configuration
    }
  ]
})
