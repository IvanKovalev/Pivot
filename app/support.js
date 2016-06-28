function checkSpan(obj, source) {
    var keys = Object.keys(obj),
        last = keys[keys.length - 1];
    for (var key in obj) {
        if (obj[key] == source[key]) {
            if (last == key) {
                return true;
            }
        } else break;
    }
    return false;
}
function getColSpan(obj, list) {
    var count = 0;
    for (var i = 0; i < list.length; i++) {
        if (checkSpan(obj, list[i])) {
            count++
        }
    }
    return count;
}
function createElem(tag) {
    return document.createElement(tag);
}
function addText(elem) {
    return document.createTextNode(elem);
}
function addElements(elem, arr) {
    for (var i = 0; i < arr.length; i++) {
        elem.appendChild(arr[i]);
    }
    return elem;
}
