
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
        
        callback && callback()
    }

    if(duration){
        setTimeout(set, duration)
    } else {
        set()
    }
}
export {
    checkedValueType,
    setElStyle
}