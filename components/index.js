import slider from './slider';
import message from './message';
import '../styles/common.scss';
const components = [ slider ];

const install = function (Vue) {
    if (install.installed) return;
    components.map(component => {
        Vue.use(component);
    });
    Vue.prototype.$message = message;
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    slider
};
