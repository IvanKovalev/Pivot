function _createHeader(colsList, config) {
    var tHead = createElem('tbody'),
        keys = config.columns,
        length = keys.length - 1,
        obj,
        tr = [],
        arr = [];
    for (var j = 0; j < keys.length; j++) {
        tr[j] = createElem('tr');
    }
     drawHeaderBlock(tHead, tr[length], config);
    for (var i = 0; i < colsList.length; i++) {
        var row = colsList[i];
        obj = {};
        for (var j = 0; j < length; j++) {
            if (row[keys[j]] != arr[j]) {
                arr[j] = row[keys[j]];
                obj[keys[j]] = arr[j];
                makeCell(tr[j], obj, colsList, arr[j]);
            }
        }
        makeCell(tr[length], "", colsList, row[keys[length]]);
    }
    addElements(tHead, tr);
    tHead.className = "tHead";
    return tHead;
}
function makeCell(tr, obj, colsList, text) {
    var th = createElem('th');
    th.appendChild(addText(text));
    if (obj != "")
        th.colSpan = getColSpan(obj, colsList);
    else
        th.className = "headerBorderBottom";
    tr.appendChild(th);
    return tr;
}
