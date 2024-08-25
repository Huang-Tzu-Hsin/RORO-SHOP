document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.querySelector('.total-price');

    // 添加到購物車功能
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-name');
            const productPrice = parseInt(button.getAttribute('data-price'));

            // 檢查購物車是否已有該產品
            const existingProduct = cart.find(item => item.name === productName);

            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cart.push({ name: productName, price: productPrice, quantity: 1 });
            }

            updateCart();
        });
    });

    // 更新購物車顯示
    function updateCart() {
        // 清空購物車內容
        cartItemsContainer.innerHTML = '';

        let totalPrice = 0;

        cart.forEach(item => {
            const itemElement = document.createElement('li');
            itemElement.textContent = `${item.name} x${item.quantity} - NT$ ${item.price * item.quantity}`;
            cartItemsContainer.appendChild(itemElement);

            totalPrice += item.price * item.quantity;
        });

        totalPriceElement.textContent = totalPrice;
    }
});


document.querySelector('.dropbtn').addEventListener('click', function(event) {
    event.preventDefault();
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});