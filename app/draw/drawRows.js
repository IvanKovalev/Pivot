function _createRows(rowList, collList, config, source) {
    var tBody = createElem('tbody'),
        keys = config.rows,
        length = keys.length- 1,
        obj,
        arr =[];
            for (var i = 0; i < rowList.length; i++) {
                var row = rowList[i];
                var tr = createElem('tr');
                obj = {};
                for (var j = 0; j < length; j++) {
                    if (row[keys[j]] != arr[j]) {
                        arr[j] = row[keys[j]];
                        obj[keys[j]] = arr[j];
                        makeBodyCell(tr, obj, rowList, arr[j]);
                    }
                }
                makeBodyCell(tr, "", rowList, row[keys[length]]);
                _createRowsElements(tr, row, collList, source);
                tBody.appendChild(tr);
            }
    tBody.className = "tBody";
    return tBody;
}
function makeBodyCell(tr, obj, rowList, text) {
    var th = createElem('th');
    th.appendChild(addText(text));
    if (obj != "")
        th.rowSpan = getColSpan(obj, rowList);
    else
        th.className = "border";
    tr.appendChild(th);
    return tr;
}
function _createRowsElements(element, currentRow, collList, source) {
    for (var i = 0; i < collList.length; i++) {
        var td = createElem('td');
        var str = addText(sumElem(Object.assign(currentRow, collList[i]), source, config.values[0]));
        td.appendChild(str);
        td.className = "table_cell";
        element.appendChild(td);
    }
    return element;
}