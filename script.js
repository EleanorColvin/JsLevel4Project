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
    del = document.getElementById("deletedItem");
    addMess = document.getElementById("addMessage");
}
function addItem() {
    var rep = false;
    let table = document.getElementById("myTable");
    for (var i = 0, row; row = table.rows[i]; i++) {
        if(table.rows[i].id == input.value)
        {
            rep = true
            console.log("you can't do that! <3");
            addMess.innerHTML = input.value + " is already on your list!";
            break;
        }
        else
        {
            rep = false;
            addMess.innerHTML = "";
        }
    }
    if(rep == false){
        length++;
        let newRow = myTable.insertRow(-1);
        newRow.id = input.value;
        let numCell = newRow.insertCell(0);
        numCell.innerHTML = length + ")";
        let newCell = newRow.insertCell(1);
        newCell.innerHTML = input.value;
        rows++;
    }
    document.getElementById("newItem").value = "";
}
function removeItem() {
    table = document.getElementById("myTable");
    row = table.rows[del.value - 1];
    row.parentNode.removeChild(row);
    length--;
    rows--;
    setNums();
    document.getElementById("deletedItem").value = "";
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
        table.rows[i].style.backgroundColor = "rgb(194, 231, 249)";
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
    selected--;
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
        table.rows[selidx].style.backgroundColor = "rgb(194, 231, 249)";
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
    if (idx1 > idx2) {
        selidx--;
    }
    else {
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
        table.rows[selidx].style.backgroundColor = "rgb(194, 231, 249)";
        s = selidx;
        idx2 = selidx + 1;
        moveRows(s, idx2);
    }
}