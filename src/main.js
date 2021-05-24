import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
import TreeTable from 'vue-table-with-tree-grid'
//导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'

// require styles 导入富文本编辑器的样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

//富文本编辑器全局注册
Vue.use(VueQuillEditor)

Vue.config.productionTip = false
//配置请求的根路径
axios.defaults.baseURL='http://127.0.0.1:8888/api/private/v1/'
//通过axios请求拦截器添加token，保证拥有获取数据的权限
axios.interceptors.request.use(config =>{
  //为请求头对象，添加Token验证的Authorization字段
  config.headers.Authorization =window.sessionStorage.getItem('token')
  //最后一定有  return config
  return config
})
Vue.prototype.$http = axios

Vue.component('tree-table',TreeTable)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
