import Vue from 'vue'
import Toast from './toast.vue'

let ToastConstructor = Vue.extend(Toast)

export default function (options) {
  let instance = new ToastConstructor({
    data: options
  })

  document.body.appendChild(instance.$mount().$el)
}
