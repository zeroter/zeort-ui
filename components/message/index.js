import { checkedValueType } from '../utils/common';
import Message from './src/message'
import Vue from 'vue';
const defaults = {
    top: 50,
    duration: 3000
}

function notice (type, options) {

    if (['undefined', 'null'].includes(checkedValueType(options))) {
        var content = "";
    } else if (checkedValueType(options) === 'string') {
        var content = options;
    } else if (checkedValueType(options) === 'object') {
        var { content = "", duration = defaults.duration, top = defaults.top, onClose = function () {} } = options;
    }

    let _props = {content, duration, top};

    const Instance = new Vue({
        render (h) {
            return h(Message, {
                props: _props
            });
        }
    });

    const component = Instance.$mount();
    document.body.appendChild(component.$el);


}
export default {
    name: 'Message',
    info(options) {
        return notice('info', options); 
    }
};