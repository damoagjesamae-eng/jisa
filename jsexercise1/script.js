
function compute() {
    let a = document.getElementById("first").value;
    let b = document.getElementById("second").value;

    if (a === "" || b === "") {
        alert("Please fill in both number fields!");
        return;
    }

    a = parseFloat(a);
    b = parseFloat(b);

    showResult("result1", a + b);
    showResult("result2", a - b);
    showResult("result3", a * b);

    if (b === 0) {
        showResult("result4", "Cannot divide by zero");
    } else {
        showResult("result4", a / b);
    }
}

function showResult(id, value) {
    document.getElementById(id).textContent = value;
}

function resetCalculator() {
    document.getElementById("first").value = "";
    document.getElementById("second").value = "";

    let results = ["result1", "result2", "result3", "result4"];

    results.forEach(function(id) {
        document.getElementById(id).textContent = "";
    });
}