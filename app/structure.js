function pivotTable(config, source, element) {
    var table = {};

    function _getUniqueValueFromArrayObjects(arr, field) {
        var obj = {};
        for (var i = 0; i < arr.length; i++) {
            obj[arr[i][field]] = "";
        }
        return Object.keys(obj).map(function (key) {return key;}).sort();
    }// Принимает массив и выдает список уникальных ключей
    function getUniqueList(source, config) {
        var result = {};
        for (var i = 0; i < config.length; i++) {
            result[config[i]] = _getUniqueValueFromArrayObjects(source, config[i]);
            result[config[i]] = result[config[i]].sort();

        }

        return result;
    } // получает список по всем полям уникальными значениями по всем полям
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
    } // проверяет существует ли обьет в исходном массиве

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
    } // суммирует все элементы по полученному шаблону obj
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
    } // получает список со всеми возможными комбинациями  по заданным полям

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
            if (j == cols.length - 1) {
                var td1 = createElem('th');
                td1.className = "table_rowsList";
                td1.colSpan = table.cols.length;
                tr.appendChild(td1);
            }

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
        return tr;
    }
    function drawHeaderBlock(header, blockForRows, config) {
        var tr = createElem('tr');
        drawHeaderTotals(tr, config.values);
        drawHeaderRows(blockForRows, config.rows);
        drawHeaderCols(tr, config.columns, length);
        header.appendChild(tr);
    }

    /**
     * @param tag
     * @returns {Element}
     */
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
    function makeCell(tr, obj,length) {
        var th = createElem('th');
        th.appendChild(addText(obj));
        if (obj != "") {
            th.colSpan = length;
        }
        tr.appendChild(th);
        return tr;
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
    }// создает ячейку таблицы и записывает и вычисляет значение

        function _createHeader(table, config) {
            var tHead = createElem('thead'),
                colsList = config.columns,
                length = config.columns.length,
                arrTr = [],
                i,
                count = [],
                obj = {};
            for (var z = 0; z < length; z++) {
                arrTr[z] = createElem('tr');
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

    function _createRows(rowList, collList, config, source) {
        var tBody = createElem('tbody'),
            keys = config.rows,
            length = config.rows.length,
            i,
            tr,
            obj,
            currentValue0 = "",
            currentValue1 = "";
        switch (length) {
            case 1 :
                for (i = 0; i < rowList.length; i++) {
                    tr = createElem('tr');
                    makeBodyCell(tr, "", rowList, rowList[i][keys[0]]);
                    _createRowsElements(tr, rowList[i], collList, source);
                    tBody.appendChild(tr);
                }
                break;
            case 2 :
                for (i = 0; i < rowList.length; i++) {
                    tr = createElem('tr');
                    obj = {};
                    if (rowList[i][keys[0]] != currentValue0) {
                        currentValue0 = rowList[i][keys[0]];
                        obj[keys[0]] = currentValue0;
                        makeBodyCell(tr, obj, rowList, currentValue0);
                    }
                    makeBodyCell(tr, "", rowList, rowList[i][keys[1]]);
                    _createRowsElements(tr, rowList[i], collList, source);
                    tBody.appendChild(tr);
                }
                break;
            case 3 :
                for (i = 0; i < rowList.length; i++) {
                    tr = createElem('tr');
                    obj = {};
                    if (rowList[i][keys[0]] != currentValue0) {
                        currentValue0 = rowList[i][keys[0]];
                        obj[keys[0]] = currentValue0;
                        makeBodyCell(tr, obj, rowList, currentValue0);
                    }
                    if (rowList[i][keys[1]] != currentValue1) {
                        currentValue1 = rowList[i][keys[1]];
                        obj[keys[0]] = currentValue0;
                        obj[keys[1]] = currentValue1;
                        makeBodyCell(tr, obj, rowList, currentValue1);
                    }
                    makeBodyCell(tr, "", rowList, rowList[i][keys[2]]);
                    _createRowsElements(tr, rowList[i], collList, source);
                    tBody.appendChild(tr);
                }
                break;
        }
        tBody.className = "tBody";
        return tBody;
    }

    function _renderTable(config, source, block) {
        var tbl = createElem('table');
        table.rows = generateLists(data, getUniqueList(data, config.rows));
        table.cols = generateLists(data, getUniqueList(data, config.columns));

        tbl.className = "pivot-table";
        tbl.appendChild(_createHeader(table, config));
        tbl.appendChild(_createRows(table.rows, table.cols, config, source));
        block.appendChild(tbl);
    }

    _renderTable(config, source, element)
}
