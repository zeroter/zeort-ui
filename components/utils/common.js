
function checkedValueType(value) {
    let type = Object.prototype.toString.call(value);
    type = type.split(" ")[1].split("]")[0];
    return type.toLowerCase()   
} 
export {
    checkedValueType
}