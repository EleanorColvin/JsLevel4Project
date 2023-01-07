let length = 5;
let selid = "";
let selidx = 0;
let sel = null;
let row = null;
let rows = 5;
let select = false;
function initialize() {
    input = document.getElementById("newItem");
    selected = document.getElementById("movingItem");
    row = document.getElementById(selected.value);
}
function addItem() {
    length++;
    let table = document.getElementById("myTable");
    let newRow = myTable.insertRow(-1);
    newRow.id = input.value;
    let numCell = newRow.insertCell(0);
    numCell.innerHTML = length + ")";
    let newCell = newRow.insertCell(1);
    newCell.innerHTML = input.value;
    rows++;
}
function removeItem() {
    table = document.getElementById("myTable");
    row = document.getElementById(input.value);
    row.parentNode.removeChild(row);
    length--;
    rows--;
    setNums();
}
function setNums() {
    var table = document.getElementById("myTable");
    currentNum = 1;
    for (var i = 0, row; row = table.rows[i]; i++) {
        var cell = row.cells[0]
        cell.innerHTML = currentNum + ") ";
        currentNum++;
    }
}
function deselect() {
    table.rows[selidx].style.backgroundColor = "purple";
    for (i = 0; i < rows; i++) {
        table.rows[i].style.backgroundColor = "white";
    }
    selid = "";
    selidx = 0;
    sel = null;
    document.getElementById("movingItem").value = "";
    selected = "";
    select = false
}
function checkIfSelected() {
    table = document.getElementById("myTable");
    selected = document.getElementById("movingItem");
    if (!selected.value == "") {
        select = true;
        r = document.getElementById(selected.value);
        ri = r.rowIndex;
        table.rows[ri].style.backgroundColor = "yellow";
    }
}
function moveUp() {
    if (select == true) {
        if (selid == "") {
            selid = selected.value;
        }
        row = document.getElementById(selid);
        sel = row;
        table = document.getElementById("myTable");
        row = sel;
        selidx = row.rowIndex;
        table.rows[selidx - 1].style.backgroundColor = "yellow";
        table.rows[selidx].style.backgroundColor = "white";
        selidx = row.rowIndex;
        idx2 = selidx - 1;
        moveRows(selidx, idx2);
    }
}
function moveRows(idx1, idx2) {
    table = document.getElementById("myTable");
    var temp = table.rows[idx1].innerHTML;
    var tempid = table.rows[idx1].id;
    table.rows[idx1].innerHTML = table.rows[idx2].innerHTML;
    table.rows[idx1].id = table.rows[idx2].id;
    table.rows[idx2].innerHTML = temp;
    table.rows[idx2].id = tempid;
    sel = table.rows[idx2];
    selid = table.rows[idx2].id;
    selidx--;

    setNums();
}
function moveDown() {
    if (select == true) {
        if (selid == "") {
            selid = selected.value;
        }
        row = document.getElementById(selid);
        sel = row;
        table = document.getElementById("myTable");
        row = sel;
        table = document.getElementById("myTable");
        selidx = row.rowIndex;
        table.rows[selidx + 1].style.backgroundColor = "yellow";
        table.rows[selidx].style.backgroundColor = "white";
        idx2 = selidx + 1;
        moveRows(selidx, idx2);
    }
}