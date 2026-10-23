
let list = [];

function addNumber() {
    let input = document.getElementById("num").value;

    if (input === "") {
        alert("Please enter a number.");
        return;
    }

    list.push(parseFloat(input));

    document.getElementById("display").innerHTML =
        list.join("<br>");

    let total = list.reduce((a, b) => a + b, 0);

    document.getElementById("total").textContent = total;
    document.getElementById("max").textContent = Math.max(...list);
    document.getElementById("min").textContent = Math.min(...list);

    document.getElementById("num").value = "";
}

function clearNumbers() {
    list.length = 0;

    document.getElementById("num").value = "";
    document.getElementById("display").innerHTML = "";
    document.getElementById("total").textContent = "";
    document.getElementById("max").textContent = "";
    document.getElementById("min").textContent = "";
}