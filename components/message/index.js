import { checkedValueType } from '../utils/common';
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
        var { content = "", duration = defaults.duration, onClose = function () {} } = options;
    }

    let Instance = new Vue({
        el: $el,
        render (h) {
            return h('div', {
                "class": "ze-message"
            }, content);
        }
    });
}
export default {
    name: 'Message',
    info(options) {
        return notice('info', options); 
    }
};