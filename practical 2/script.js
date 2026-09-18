const container = document.getElementById("product-container");

const allBtn = document.getElementById("btn-all");
const laptopBtn = document.getElementById("btn-laptops");
const accessoryBtn = document.getElementById("btn-accessories");

const products = 
[
  { id: 1, name: "Pro Laptop", price: 1200, category: "laptops", inStock: true },
  { id: 2, name: "Wireless Mouse", price: 45, category: "accessories", inStock: true },
  { id: 3, name: "Mechanical Keyboard", price: 150, category: "accessories", inStock: false },
  { id: 4, name: "Budget Laptop", price: 600, category: "laptops", inStock: true },
  { id: 5, name: "USB-C Hub", price: 30, category: "accessories", inStock: true },
];

function renderProducts(items)
{
    container.innerHTML = "";

    const productCards = items.map(item => `
        <div class="${item.inStock ? 'product-card' : 'out-of-stock'}">
            <h3>${item.name}</h3>
            <p>${item.inStock ? item.price: 'Out of Stock'}</p>
            <p>${item.category}</p>
        </div>
        `).join('');

    container.innerHTML = productCards;
}

allBtn.addEventListener("click", () => 
{
    renderProducts(products);
});

laptopBtn.addEventListener("click", () => 
{
    const laptops = products.filter(product => product.category === "laptops");
    renderProducts(laptops);
});

accessoryBtn.addEventListener("click", () => 
{
    const accessories = products.filter(accessory => accessory.category === "accessories");
    renderProducts(accessories);
});

renderProducts(products);