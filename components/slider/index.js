import slider from './src/slider'

slider.install = function (Vue) {
    Vue.component(slider.name, slider);
}

export default slider;