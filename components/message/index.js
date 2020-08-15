import { checkedValueType } from '../utils/common';
import Message from './src/message'
import Vue from 'vue';

const defaults = {
    top: 50,
    duration: 3000
}

let closeTimer = null;

function notice (type, options) {

    var content = "", duration = defaults.duration, top = defaults.top;

    if (checkedValueType(options) === 'string') {
        content = options;
    } else if (checkedValueType(options) === 'object') {
        var { content = "", duration = defaults.duration, top = defaults.top} = options;
    }
 
    let _props = {type, content, duration, top, onClose};

    const Instance = new Vue({
        render (h) {
            return h(Message, {
                props: _props
            });
        }
    });

    reomveNodes();
    const component = Instance.$mount();
    document.body.appendChild(component.$el);

    function onClose () {
        closeTimer = setTimeout(()=>{
            reomveNodes();
        }, 500);
    }

}

function reomveNodes (){

    if(closeTimer){
        clearTimeout(closeTimer);
        closeTimer = null;
    };

    const zeMsgCont = document.querySelector('.ze-message-container');

    if(zeMsgCont){
        document.body.removeChild(zeMsgCont)
    };

}

export default {
    name: 'Message',
    info (options) {
        return notice('info', options); 
    },
    remove() {
        Message.methods.close(0);
    }
};