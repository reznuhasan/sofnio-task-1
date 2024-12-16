const reviewsContainer = document.querySelector('.card-project-brand-color-container');
const colorArr = [{ name: 'periwinkle', color: "#816BFF", src: "./assests/product-gallery.png" }, { name: "turquoise", color: "#1FCEC9", src: "./assests/cyan.png" }, { name: "skyblue", color: "#4B97D3", src: "./assests/blue.png" }, { name: "charcoal", color: "#3B4747", src: "./assests/black.png" }];

// Function to create color elements
const createColorElements = (colors) => {
    return colors.map((properties) => {
        const div = document.createElement('div');
        div.classList.add('card-project-brand-color', `card-project-brand-color--${properties.name}`);
        div.style.backgroundColor = properties.color;
        div.addEventListener('click', () => {
            const mainThumb = document.querySelector('.card-project-main-container__main-thumb img');
            mainThumb.src = properties.src;  // Set the image source to the selected color's source
        })
        return div;
    });
};

// Append created elements to the container
const brandColors = createColorElements(colorArr);
brandColors.forEach((colorElement) => {
    reviewsContainer.appendChild(colorElement);
});

document.querySelector('.increment-btn').addEventListener('click',  () =>{
    let inputField = document.querySelector('#quantity');
    let value = parseInt(inputField.value);
    if(isNaN(value)){
        inputField.value=1;
    }
    if (!isNaN(value)) {
        inputField.value = value + 1;
    }
});

document.querySelector('.decrement-btn').addEventListener('click',  () =>{
    let inputField = document.querySelector('#quantity');
    let value = parseInt(inputField.value);
    if (!isNaN(value) && value > 1) {
        inputField.value = value - 1;
    }
});

document.querySelector('.add-to-cart-button').addEventListener('click',()=>{
    const checkoutButton=document.querySelector('.checkout-btn');
    checkoutButton.classList.add('checkout-btn-active');
})

// Sample cart items (for demo purposes)
// Sample cart items (for demo purposes)
const cartItems = [
    { id: 1, name: "Classy Modern Smart watch", color: "Black", size: "XL", quantity: 1, price: 99.00, image: "./assests/black.png" },
    { id: 2, name: "Classy Modern Smart watch", color: "Purple", size: "L", quantity: 2, price: 178.00, image: "./assests/product-gallery.png" },
    { id: 3, name: "Classy Modern Smart watch", color: "Cyan", size: "M", quantity: 1, price: 79.00, image: "./assests/cyan.png" },
];

// Function to open the modal and populate the table with cart items
document.querySelector('.checkout-btn').addEventListener('click', function() {
    const modal = document.getElementById('checkoutModal');
    const cartItemsTable = document.getElementById('cart-items'); // Corrected the ID for cart items tbody
    let totalPrice = 0;
    let totalQuantity = 0;

    // Clear previous items from table
    cartItemsTable.innerHTML = '';

    // Populate the table with cart items
    cartItems.forEach(item => {
        const row = document.createElement('tr');
        const itemTotal = item.quantity * item.price;
        totalPrice += itemTotal;
        totalQuantity += item.quantity;

        row.innerHTML = `
            <td><img src="${item.image}" alt="${item.name}" width="50">${item.name}</td>
            <td>${item.color}</td>
            <td>${item.size}</td>
            <td>${item.quantity}</td>
            <td>$${item.price.toFixed(2)}</td>
        `;
        cartItemsTable.appendChild(row);
    });

    // Update total price and quantity
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
    document.getElementById('total-quantity').textContent = totalQuantity;

    // Show the modal
    modal.style.display = 'flex';
});

// Close the modal
document.getElementById('modalCloseBtn').addEventListener('click', function() {
    document.getElementById('checkoutModal').style.display = 'none';
});

// Continue Shopping
document.getElementById('continueShopping').addEventListener('click', function() {
    document.getElementById('checkoutModal').style.display = 'none';
    // Here, you could redirect to another page or scroll to continue shopping
});

// Checkout
document.getElementById('finalCheckout').addEventListener('click', function() {
    alert('Proceeding to checkout...');
    // Implement checkout logic here
});
