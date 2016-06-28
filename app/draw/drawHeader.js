
function drawHeaderRows(tr, rows) {
    for (var j = 0; j < rows.length; j++) {
        var td = createElem('th');
        var row = document.createTextNode(rows[j]);
        td.appendChild(row);
        td.className = j == rows.length - 1 ? "table_rowsList table_rowList_last" : "table_rowsList";
        tr.appendChild(td);
    }
}
function drawHeaderCols(tr, cols) {
    for (var j = 0; j < cols.length; j++) {
        var td = createElem('th');
        var col = document.createTextNode(cols[j]);
        td.appendChild(col);
        td.className = "table_rowsList";
        tr.appendChild(td);
    }
}
function drawHeaderTotals(tr, values) {
    for (var j = 0; j < values.length; j++) {
        var td = createElem('th');
        var row = document.createTextNode(values[j].measures + " by : " + values[j].name);
        td.appendChild(row);
        td.className = "total";
        td.colSpan = config.rows.length;
        td.rowSpan = config.columns.length;
        tr.appendChild(td);
    }
}
function drawHeaderBlock(header, blockForRows, config) {
    var tr = createElem('tr');
    drawHeaderTotals(tr, config.values);
    drawHeaderRows(blockForRows, config.rows);
    drawHeaderCols(tr, config.columns);
    header.appendChild(tr);
    return header;
}