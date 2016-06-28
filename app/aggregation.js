function _getUniqueValueFromArrayObjects(arr, field) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i][field]] = "";
    }
    return Object.keys(obj).map(function (key) {return key;}).sort();
}
function getUniqueList(source, config) {
    var result = {};
    for (var i = 0; i < config.length; i++) {
        result[config[i]] = _getUniqueValueFromArrayObjects(source, config[i]);
    }
    return result;
}
function check(obj, source) {
    var keys = Object.keys(obj),
        key,
        last = keys[keys.length - 1];

    for (var i = 0; i < source.length; i++) {
        for (key in obj) {
            if (obj[key] != source[i][key]) {
                break;
            }
            if (last == key) {
                return true;
            }
        }
    }
    return false;
}

function generateLists(source, fieldList) {
    var list = [],
        hh = [],
        keyList = Object.keys(fieldList),
        length = keyList.length;

    var u = copyKeyLists(length, keyList, fieldList);

    function calcRec(level, maxLevel){
        var uu = u[level];
        for (var i = 0; i < uu.length; i++) {
            hh[level] = uu[i];
            if(level === maxLevel) {
                var object = copyObject(hh, keyList);
                if (check(object, source))
                    list.push(object);
            } else {
                calcRec(level+1, maxLevel);
            }
        }
    }

    calcRec(0, length-1);
    return list;
}
function copyKeyLists(length, keyList, fieldList){
    var u = [];
    for(var i = 0; i < length;i++){
        var kl = keyList[i];
        var uu = fieldList[kl];
        u.push(uu);
    }
    return u;
}
function copyObject(src, keys){
    var res = {};
    for(var kk = 0; kk < keys.length;kk++){
        var kl = keys[kk];
        res[kl] = src[kk];
    }
    return res;
}
