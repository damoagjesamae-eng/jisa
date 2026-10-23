function displayName() {
    let first = document.getElementById("first").value;
    let middle = document.getElementById("middle").value;
    let last = document.getElementById("last").value;

    if (first.trim() === "" || middle.trim() === "" || last.trim() === "") {
        alert("Please enter your first, middle, and last name.");
    } else {
        let name = `${first} ${middle} ${last}`;
        document.getElementById("output").textContent = name;
    }
}

function clearForm() {
    document.getElementById("first").value = "";
    document.getElementById("middle").value = "";
    document.getElementById("last").value = "";

    document.getElementById("output").textContent = "";
}