function _createHeader(table, config) {
    var tHead = document.createElement('thead'),
        colsList = config.columns,
        length = config.columns.length,
        arrTr = [],
        i,
        count = [],
        obj = {};
    for (var z = 0; z < length; z++) {
        arrTr[z] = createTr();
    }
    drawHeaderBlock(tHead, arrTr[length - 1], config);
    for (i = 0; i < table.cols.length; i++) {
        for (var j = 0; j < length; j++) {
            if(j == length -1){
                drawRow(arrTr, "", i,  colsList, j,count);
            }else drawRow(arrTr, obj, i,  colsList, j,count);
        }
    }
    addElements(tHead, arrTr);
    tHead.className = "tHead";
    return tHead;
}
function drawRow(rows, obj, i,colsList, rowNumber,count) {
    var  row = rows[rowNumber];
    var  text = table.cols[i][colsList[rowNumber]];
    if(obj[[colsList[rowNumber]]] == undefined){
        count[rowNumber] = 1;
        obj[[colsList[rowNumber]]]  = text ;
    }
    if (obj == "") {
        makeCell(row,text);
    }else if (text != obj[[colsList[rowNumber]]]) {
        makeCell(row,text,count[rowNumber]);
        count[rowNumber] = 1;
        obj[colsList[rowNumber]] = text;
    }else count[rowNumber]++;
}