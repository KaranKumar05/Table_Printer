function printTable() {
    let number = document.getElementById("numberInput").value;
    let table = "<table>";
    table += "<tr><th>Multiplication Table of: " + number + "</th></tr>";
    let numbertill = document.getElementById("numbertill").value;
    for (i = 1; i <= numbertill; i++) {
        table += "<tr><td>" + number + " x " + i + " = " + (i * number) + "</td></tr>";
    }
    document.getElementById("tableContainer").innerHTML = table;
}