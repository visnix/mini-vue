import zVue from '../packages/vue3.js'

const w = new zVue({
  el: '#app',
  data: {
    "name": "visnix",
    "content": "前端开发工程师",
    "innerHTML": "<h1>mini-vue</h1>",
    'desc': {
      'sex': 'male',
      'other': {
        'age': 18
      }
    }
  },
  methods: {
    plus: function () {
      console.log('hello')
    }
  }
})