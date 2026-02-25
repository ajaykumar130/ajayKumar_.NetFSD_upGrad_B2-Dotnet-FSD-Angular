let db;
let request = indexedDB.open("ExpenseDB", 1);

request.onupgradeneeded = function (event) {
    db = event.target.result;
    db.createObjectStore("expenses", { keyPath: "title" });
};

request.onsuccess = function (event) {
    db = event.target.result;
    console.log("Database Ready");
};

request.onerror = function () {
    alert("Database Error");
};

document.getElementById("addBtn").addEventListener("click", function (e) {
    e.preventDefault();
    let title = document.getElementById("title").value;
    let amount = document.getElementById("amount").value;
    let date = document.getElementById("date").value;
    let transaction = db.transaction(["expenses"], "readwrite");
    let store = transaction.objectStore("expenses");
    store.add({ title: title, amount: amount, date: date });
    alert("Expense Added");
});

document.getElementById("viewBtn").addEventListener("click", function (e) {
    e.preventDefault();
    let transaction = db.transaction(["expenses"], "readonly");
    let store = transaction.objectStore("expenses");
    let request = store.getAll();
    request.onsuccess = function () {
        let expenses = request.result;
        let list = document.getElementById("expenseList");
        list.innerHTML = "";
        expenses.forEach(function (exp) {
            let li = document.createElement("li");
            li.textContent = exp.title + " - " + exp.amount + " - " + exp.date;
            list.appendChild(li);
        });
    };
});

document.getElementById("deleteBtn").addEventListener("click", function (e) {
    e.preventDefault();
    let title = prompt("Enter Expense Title to Delete");
    let transaction = db.transaction(["expenses"], "readwrite");
    let store = transaction.objectStore("expenses");
    store.delete(title);
    alert("Expense Deleted");
});