import button from './src/button'

button.install = function (Vue) {
    Vue.component(Zeort.uiPrefix + button.name, button);
}

export default button;