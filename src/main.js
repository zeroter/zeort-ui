import Vue from 'vue'
import App from './App.vue'
import router from './router'
import zeortui from '../components'

Vue.use(zeortui)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
