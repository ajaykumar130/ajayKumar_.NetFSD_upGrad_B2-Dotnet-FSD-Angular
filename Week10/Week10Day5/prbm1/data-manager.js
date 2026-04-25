"use strict";
function getFirstElement(items) {
    return items[0];
}
class DataManager {
    items = [];
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
const userManager = new DataManager();
userManager.add({ id: 1, name: "Ajay" });
userManager.add({ id: 2, name: "Kumar" });
const productManager = new DataManager();
productManager.add({ id: 101, title: "Laptop" });
productManager.add({ id: 102, title: "Mobile" });
console.log("Users:", userManager.getAll());
console.log("Products:", productManager.getAll());
