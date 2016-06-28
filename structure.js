function pivotTable(config, source, element) {
    var table = {};
    function _renderTable(config, source, block) {
        var tbl = createElem('table');
        table.rows = generateLists(data, getUniqueList(data, config.rows));
        table.cols = generateLists(data, getUniqueList(data, config.columns));

        tbl.className = "pivot-table";
        tbl.appendChild(_createHeader(table.cols, config));
        tbl.appendChild(_createRows(table.rows, table.cols, config, source));
        block.appendChild(tbl);
    }
    _renderTable(config, source, element)
}