import slider from './src/slider'

slider.install = function (Vue) {
    Vue.component(Zeort.uiPrefix + slider.name, slider);
}

export default slider;