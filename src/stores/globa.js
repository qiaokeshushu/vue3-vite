import { defineStore } from 'pinia'

export default defineStore('globa',  {
  state:()=> {
    return {
      isCollapse:false
    }
  },
  actions: {
    setCollapse(value) {
      this.isCollapse = value
    },
  }

})
