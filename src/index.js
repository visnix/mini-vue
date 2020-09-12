import zVue from '../packages/vue2.js'

const w = new zVue({
  el: '#app',
  data: {
    "name": "visnix",
    "content": "前端开发工程师",
  },
  methods: {
    plus: function () {
      console.log('hello')
    }
  }
})