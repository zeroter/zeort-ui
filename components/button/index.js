import button from './src/button'

button.install = function (Vue) {
    Vue.component(button.name, button);
}

export default button;