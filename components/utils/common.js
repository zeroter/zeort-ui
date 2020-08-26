let closeTimer = null

function checkedValueType (value) {
    let type = Object.prototype.toString.call(value);
    type = type.split(" ")[1].split("]")[0];

    return type.toLowerCase();
} 

function setElStyle (el, styles, duration, callback) {
    if (!el) return;

    function set () {
        Object.keys(styles).forEach(key => {
            el.style[key] = styles[key]
        });
        
        if(closeTimer){
            clearTimeout(closeTimer);
            closeTimer = null;
        }

        callback && callback()
    }

    if(duration){
        closeTimer = setTimeout(set, duration)
    } else {
        set()
    }
}

function oneOf (value, validList) {
    if(checkedValueType(validList) === 'array'){   
        let isExist = validList.findIndex((item) => {
            return item === value
        })

        if(isExist !== -1){
            return true
        }
    }
    return false;
}

function on (el, event, fn, useCapture = false) {
    if(!el || !event || checkedValueType(fn) !== 'function') return

    el.addEventListener(event, fn, useCapture)
}

function off (el, event, fn, useCapture = false) {
    if(!el || !event || checkedValueType(fn) !== 'function') return

    el.removeEventListener(event, fn, useCapture)
}

export {
    checkedValueType,
    setElStyle,
    oneOf,
    on,
    off
}