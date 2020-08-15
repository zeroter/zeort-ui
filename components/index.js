import slider from './slider';
import message from './message';
import button from './button';
import '../styles/common.scss';

const components = [ slider, button ];

const install = function (Vue) {
    if (install.installed) return;

    components.map(component => {
        Vue.use(component);
    });

    Vue.prototype.$message = message;
};

if(window){
    class Zeort {

        constructor() {
            this.colseTimer = null;
        };

        clearCloseTimer() {
            if (this.closeTimer) {
                clearTimeout(this.closeTimer);
                this.closeTimer = null;
            }
        };
    }

    window.Zeort = new Zeort;

}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    slider,
    button
};
