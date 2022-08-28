import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

console.log(import.meta.env)
console.log(import.meta.env.MODE)
console.log(import.meta.env.PROD)
console.log(import.meta.env.DEV)
console.log(import.meta.env.BASE_URL)

console.log(new URL('./assets/logo.png', import.meta.url).href)
console.log(new URL('@/assets/logo.png', import.meta.url).href)

console.log(import.meta.glob('./components/*.vue', { eager: true }))
console.log(import.meta.glob('@/components/*.vue', { eager: true }))
console.log(import.meta.glob('@/components/*.vue'))

console.log(import.meta.glob('./**/*.js', { eager: true }))
console.log(import.meta.glob('@/**/*.js', { eager: true }))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
