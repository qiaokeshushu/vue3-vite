import { set } from 'nprogress'
import { defineStore } from 'pinia'

export default defineStore('globa',  {
  state:()=> {
    return {
      isCollapse: false,
      routeList: [{
        fullpath: "/dashbord",
        title:'首页',
      }]
    }
  },
  actions: {
    setCollapse(value) {
      this.isCollapse = value
    },
    setRouteList(value) {
      this.routeList = value
    }
  }
})
