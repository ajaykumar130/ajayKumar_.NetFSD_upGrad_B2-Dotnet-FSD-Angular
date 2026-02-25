const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile Phone" },
    { id: 3, name: "Headphones" },
    { id: 4, name: "Keyboard" },
    { id: 5, name: "Mouse" },
    { id: 6, name: "Smart Watch" }
];

let filteredProducts = [products];
const searchInput = document.getElementById("searchInput");
const productList = document.getElementById("productList");
const noResults = document.getElementById("noResults");

const renderProducts = (items) => {
    productList.innerHTML = "";
    if (items.length === 0) {
        noResults.textContent = "No Results Found";
        return;
    }
    noResults.textContent = "";
    items.forEach(product => {
        const li = document.createElement("li");
        li.innerHTML = `${product.name}<button class="view-btn" data-id="${product.id}">View</button>`;
        productList.appendChild(li);
    });
};

const filterProducts = (keyword) => {
    filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(keyword.toLowerCase())
    );
    renderProducts(filteredProducts);
};

const handleProductClick = (event) => {

    if (event.target.classList.contains("view-btn")) {
        const id = event.target.dataset.id;
        const selectedProduct = products.find(product => product.id == id);
        alert(`Product Selected: ${selectedProduct.name}`);
    }
};

searchInput.addEventListener("input", (event) => {filterProducts(event.target.value);
});

productList.addEventListener("click", handleProductClick);
renderProducts(products);