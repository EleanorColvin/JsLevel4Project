let length = 5;
let selId = "";
let sel = null;
let row = null;
let rows = 5;
let select = false;
let selidx = 0;
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
    for (i = 0; i < rows; i++) {
        table.rows[i].style.backgroundColor = "white";
    }
    selId = "";
    sel = null;
    document.getElementById("movingItem").value = "";
    selected = "";
    selidx = 0;
    select = false
}
function checkIfSelected() {
    table = document.getElementById("myTable");
    selected = document.getElementById("movingItem").value;
    selected --;
    if (!toString(selected.value) == "") {
        select = true;
        table.rows[selected].style.backgroundColor = "yellow";
        selidx = selected;
    }
}
function moveUp() {
    if (select == true) {
        if (selId == "") {
            selId = selected;
        }
        row = document.getElementById(selId);
        sel = row;
        table = document.getElementById("myTable");
        row = sel;
        table.rows[selidx - 1].style.backgroundColor = "yellow";
        table.rows[selidx].style.backgroundColor = "white";
        s = selidx;
        idx2 = selidx - 1;
        moveRows(s, idx2);
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
    selId = table.rows[idx2].id;
    if(idx1 > idx2)
    {
        selidx--;
    }
    else{
        selidx++;
    }
    setNums();
}
function moveDown() {
    if (select == true) {
        if (selId == "") {
            selId = selected;
        }
        row = document.getElementById(selId);
        sel = row;
        table = document.getElementById("myTable");
        row = sel;
        table.rows[selidx + 1].style.backgroundColor = "yellow";
        table.rows[selidx].style.backgroundColor = "white";
        s = selidx;
        idx2 = selidx + 1;
        moveRows(s, idx2);
    }
}