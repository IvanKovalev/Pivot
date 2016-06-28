function sumElem(obj, source, field) {
    var keyList = Object.keys(obj),
        length = keyList.length,
        result = 0;
    for (var i = 0; i < source.length; i++) {
        for (var key in obj) {
            if (obj[key] == source[i][key]) {
                if (keyList[length - 1] == key) {
                    result += source[i][field.name];
                }
            } else break;
        }
    }
    if (result == 0) {
        return "";
    }
    return result.toFixed(2);
} 