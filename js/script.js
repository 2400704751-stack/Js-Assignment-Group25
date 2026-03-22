const products = [
    {
        id: 1,
        name: "Red Tomatoes",
        price: 6000,
        category: "Vegetables",
        image: "IMAGES/tomato.1.jpg"
    },
    {
        id: 2,
        name: "Sweet Potatoes",
        price: 8000,
        category: "Vegetables",
        image: "IMAGES/potato.jpg"
    },
    {
        id: 3,
        name: "Irish Potatoes",
        price: 10000,
        category: "Vegetables",
        image: "IMAGES/irish.jpg"
    },
    {
        id: 4,
        name: "Millet",
        price: 4000,
        category: "Grains",
        image: "IMAGES/millet.jpg"
    },
    {
        id: 5,
        name: "Banana Bunch",
        price: 6500,
        category: "Fruits",
        image: "IMAGES/banana bunch.jpeg"
    },
    {
        id: 6,
        name: "Fresh Apples",
        price: 12000,
        category: "Fruits",
        image: "IMAGES/apples - Copy (2).jpeg"
    },
    {
        id: 7,
        name: "Strawberries",
        price: 15000,
        category: "Fruits",
        image: "IMAGES/strawberries.jpeg"
    },
    {
        id: 8,
        name: "Fresh Oranges",
        price: 8000,
        category: "Fruits",
        image: "IMAGES/ORANGE.jpeg"
    },
    {
        id: 9,
        name: "Bread Loaf",
        price: 7000,
        category: "Bakery",
        image: "IMAGES/bread.jpeg"
    },
    {
        id: 10,
        name: "Whole Chicken",
        price: 25000,
        category: "Meat",
        image: "IMAGES/fullchicken.jpeg"
    },
    {
        id: 11,
        name: "Fresh Steak",
        price: 35000,
        category: "Meat",
        image: "IMAGES/steak.jpeg"
    },
    {
        id: 12,
        name: "Ferrero Rocher",
        price: 41000,
        category: "Snacks",
        image: "IMAGES/ferrero.jpeg"
    },
    {
        id: 13,
        name: "Dubai Chocolate",
        price: 50000,
        category: "Snacks",
        image: "IMAGES/dubai chocolate.jpeg"
    },
    {
        id: 14,
        name: "Cadbury Chocolate",
        price: 8700,
        category: "Snacks",
        image: "IMAGES/cadbury.jpeg"
    },
    {
        id: 15,
        name: "Doritos Chips",
        price: 5400,
        category: "Snacks",
        image: "IMAGES/doritos.jpeg"
    },
    {
        id: 16,
        name: "Chocolate Cookies",
        price: 23000,
        category: "Snacks",
        image: "IMAGES/cookies - Copy (2).jpeg"
    },
    {
        id: 17,
        name: "Fresh Garlic",
        price: 2000,
        category: "Vegetables",
        image: "IMAGES/garlic.jpeg"
    },
    {
        id: 18,
        name: "Fresh Eggs",
        price: 28000,
        category: "Dairy",
        image: "IMAGES/egg pyramid.jpeg"
    },
    {
        id: 19,
        name: "UHT Milk",
        price: 12000,
        category: "Dairy",
        image: "IMAGES/milk.jpeg"
    },
    {
        id: 20,
        name: "Mozzarella Cheese",
        price: 20000,
        category: "Dairy",
        image: "IMAGES/CHEESE.jpeg"
    },
    {
        id: 21,
        name: "Italian Pasta",
        price: 8000,
        category: "Grains",
        image: "IMAGES/pasta.jpeg"
    },
    {
        id: 22,
        name: "Basmati Rice",
        price: 54000,
        category: "Grains",
        image: "IMAGES/Rice.jpeg"
    },
    {
        id: 23,
        name: "Tinned Fish",
        price: 14000,
        category: "Canned",
        image: "IMAGES/tinned fish.jpeg"
    },
    {
        id: 24,
        name: "Tinned Beans",
        price: 12000,
        category: "Canned",
        image: "IMAGES/tineed beans.jpeg"
    },
    {
        id: 25,
        name: "Kidney Beans",
        price: 6000,
        category: "Grains",
        image: "IMAGES/BEANS.jpeg"
    },
    {
        id: 26,
        name: "Corn Flakes",
        price: 22000,
        category: "Breakfast",
        image: "IMAGES/cornflakes.jpeg"
    },
    {
        id: 27,
        name: "Weetabix",
        price: 18000,
        category: "Breakfast",
        image: "IMAGES/weetabix.jpeg"
    },
    {
        id: 28,
        name: "Nescafe Coffee",
        price: 25000,
        category: "Beverages",
        image: "IMAGES/nescafe.jpeg"
    },
    {
        id: 29,
        name: "Drinking Chocolate",
        price: 18000,
        category: "Beverages",
        image: "IMAGES/drinking chocolate.jpeg"
    },
    {
        id: 30,
        name: "Tomato Ketchup",
        price: 7000,
        category: "Condiments",
        image: "IMAGES/ketchup - Copy (2).jpeg"
    },
    {
        id: 31,
        name: "Mayonnaise",
        price: 15000,
        category: "Condiments",
        image: "IMAGES/MAYONNAISE.jpeg"
    },
    {
        id: 32,
        name: "Soy Sauce",
        price: 6000,
        category: "Condiments",
        image: "IMAGES/SOYSOURCE.jpeg"
    },
    {
        id: 33,
        name: "Curry Powder",
        price: 4500,
        category: "Spices",
        image: "IMAGES/curry powder - Copy (2) - Copy.jpeg"
    },
    {
        id: 34,
        name: "Ginger Powder",
        price: 5000,
        category: "Spices",
        image: "IMAGES/GINGER TROPICAL HEAT.jpeg"
    },
    {
        id: 35,
        name: "Paprika",
        price: 5500,
        category: "Spices",
        image: "IMAGES/Paprika - Copy (3).jpeg"
    },
    {
        id: 36,
        name: "Fresh Vegetables Mix",
        price: 12000,
        category: "Vegetables",
        image: "IMAGES/veggies.jpeg"
    },
    {
        id: 37,
        name: "Toilet Paper Pack",
        price: 13000,
        category: "Household",
        image: "IMAGES/toilet paper.jpeg"
    },
    {
        id: 38,
        name: "Washing Sponge",
        price: 5000,
        category: "Household",
        image: "IMAGES/sponge.jpeg"
    },
    {
        id: 39,
        name: "Colgate Toothpaste",
        price: 8000,
        category: "Personal Care",
        image: "IMAGES/colgate.jpeg"
    },
    {
        id: 40,
        name: "Toothbrush",
        price: 3000,
        category: "Personal Care",
        image: "IMAGES/Tooth brush - Copy.jpeg"
    }
];

let cart = [];

document.addEventListener('DOMContentLoaded', function() {
    loadCartFromStorage();
    updateCartCount();
    
    if (document.getElementById('products-container')) {
        displayProducts(products);
        setupSearchFunction();
        setupCategoryFilters();
    }
    
    if (document.getElementById('cart-items-container')) {
        displayCartItems();
    }
    
    if (document.getElementById('checkout-form')) {
        displayCheckoutItems();
        setupCheckoutForm();
    }
});

function displayProducts(productsArray) {
    const container = document.getElementById('products-container');
    container.innerHTML = '';
    
    if (productsArray.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #888;">No products found.</p>';
        return;
    }
    
    productsArray.forEach(function(product) {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="product-category">${product.category}</p>
            <p class="product-price">UGX ${product.price.toLocaleString()}</p>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        `;
        container.appendChild(productCard);
    });
}

function setupSearchFunction() {
    const searchInput = document.getElementById('search-input');
    
    searchInput.addEventListener('input', function() {
        const searchText = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(function(product) {
            return product.name.toLowerCase().includes(searchText);
        });
        displayProducts(filteredProducts);
    });
}

function setupCategoryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            filterButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            
            button.classList.add('active');
            const category = button.getAttribute('data-category');
            
            let filteredProducts;
            if (category === 'all') {
                filteredProducts = products;
            } else {
                filteredProducts = products.filter(function(product) {
                    return product.category === category;
                });
            }
            
            displayProducts(filteredProducts);
        });
    });
}

function addToCart(productId) {
    try {
        const product = products.find(function(p) {
            return p.id === productId;
        });
        
        if (!product) {
            throw new Error('Product not found!');
        }
        
        const existingItem = cart.find(function(item) {
            return item.id === productId;
        });
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }
        
        saveCartToStorage();
        updateCartCount();
        alert('Product added to cart!');
        
    } catch (error) {
        console.error('Error adding to cart:', error);
        alert('Error: ' + error.message);
    }
}

function updateCartCount() {
    let totalItems = 0;
    cart.forEach(function(item) {
        totalItems += item.quantity;
    });
    
    const cartCountElements = document.querySelectorAll('#cart-count');
    cartCountElements.forEach(function(element) {
        element.innerHTML = totalItems;
    });
}


// ==========================================
// DISPLAY CART ITEMS
// ==========================================

// This function displays items in the shopping cart
function displayCartItems() {
    // Using getElementById to get the container
    const container = document.getElementById('cart-items-container');
    
    // Check if cart is empty
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <p>Your cart is empty!</p>
                <a href="index.html" style="color: #667eea;">Continue Shopping</a>
            </div>
        `;
        document.getElementById('cart-summary').style.display = 'none';
        return;
    }
    
    document.getElementById('cart-summary').style.display = 'block';
    container.innerHTML = '';
    
    cart.forEach(function(item) {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p class="cart-item-price">UGX ${item.price.toLocaleString()}</p>
            </div>
            <div class="quantity-controls">
                <button class="qty-btn" onclick="decreaseQuantity(${item.id})">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="qty-btn" onclick="increaseQuantity(${item.id})">+</button>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        `;
        container.appendChild(cartItemDiv);
    });
    
    updateCartTotal();
}

function increaseQuantity(productId) {
    const item = cart.find(function(i) {
        return i.id === productId;
    });
    
    if (item) {
        item.quantity += 1;
        saveCartToStorage();
        displayCartItems();
        updateCartCount();
    }
}

function decreaseQuantity(productId) {
    const item = cart.find(function(i) {
        return i.id === productId;
    });
    
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            removeFromCart(productId);
            return;
        }
        saveCartToStorage();
        displayCartItems();
        updateCartCount();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(function(item) {
        return item.id !== productId;
    });
    
    saveCartToStorage();
    displayCartItems();
    updateCartCount();
}

function updateCartTotal() {
    let total = 0;
    
    cart.forEach(function(item) {
        total += item.price * item.quantity;
    });
    
    const totalElement = document.getElementById('cart-total');
    
    if (totalElement) {
        totalElement.innerHTML = total.toLocaleString();
    }
}

function saveCartToStorage() {
    try {
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
        alert('Could not save cart. Please check your browser settings.');
    }
}

function loadCartFromStorage() {
    try {
        const savedCart = localStorage.getItem('shoppingCart');
        
        if (savedCart) {
            cart = JSON.parse(savedCart);
        }
    } catch (error) {
        console.error('Error loading from localStorage:', error);
        cart = [];
    }
}

function displayCheckoutItems() {
    const container = document.getElementById('checkout-items');
    const totalElement = document.getElementById('checkout-total');
    
    if (cart.length === 0) {
        container.innerHTML = '<p style="color: #888;">Your cart is empty!</p>';
        totalElement.innerHTML = '0';
        return;
    }
    
    container.innerHTML = '';
    let total = 0;
    
    cart.forEach(function(item) {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'checkout-item';
        itemDiv.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <span>UGX ${itemTotal.toLocaleString()}</span>
        `;
        container.appendChild(itemDiv);
    });
    
    totalElement.innerHTML = total.toLocaleString();
}

function setupCheckoutForm() {
    const form = document.getElementById('checkout-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        try {
            if (cart.length === 0) {
                throw new Error('Your cart is empty! Please add items before checkout.');
            }
            
            const name = document.getElementById('customer-name').value.trim();
            const email = document.getElementById('customer-email').value.trim();
            const phone = document.getElementById('customer-phone').value.trim();
            const address = document.getElementById('customer-address').value.trim();
            
            if (!name || !email || !phone || !address) {
                throw new Error('Please fill in all fields!');
            }
            
            if (name.length < 3) {
                throw new Error('Name must be at least 3 characters long!');
            }
            
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                throw new Error('Please enter a valid email address!');
            }
            
            const phonePattern = /^[0-9]{10,}$/;
            if (!phonePattern.test(phone.replace(/\s/g, ''))) {
                throw new Error('Please enter a valid phone number (at least 10 digits)!');
            }
            
            if (address.length < 10) {
                throw new Error('Please enter a complete delivery address!');
            }
            
            alert('Order placed successfully! Thank you for shopping with us.\n\nOrder Details:\nName: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone);
            
            cart = [];
            saveCartToStorage();
            updateCartCount();
            
            setTimeout(function() {
                window.location.href = 'index.html';
            }, 2000);
            
        } catch (error) {
            const errorElement = document.getElementById('error-message');
            errorElement.innerHTML = '❌ ' + error.message;
            errorElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
}
