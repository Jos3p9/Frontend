// Datos de ejemplo para productos
const productsData = [
    { name: "Producto 1", price: 10 },
    { name: "Producto 2", price: 20 },
    { name: "Producto 3", price: 30 },
    { name: "Producto 4", price: 40 },
];

// Función para mostrar los productos en la página
function renderProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    productsData.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Precio: $${product.price}</p>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Llamar a la función para mostrar los productos al cargar la página
document.addEventListener('DOMContentLoaded', renderProducts);
