import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', description: 'This is Product 1', price: 25 },
    { id: 2, name: 'Product 2', description: 'This is Product 2', price: 30 },
    { id: 3, name: 'Product 3', description: 'This is Product 3', price: 15 },
  ]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <header className="header">
        <h1>My Store</h1>
        <button className="cart-button">
          Cart ({cart.length})
          {cart.length > 0 && (
            <span className="cart-count">{cart.length}</span>
          )}
        </button>
      </header>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button
              className="add-to-cart-button"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className={`cart ${cart.length > 0 ? 'active' : ''}`}>
        <h2>Cart</h2>
        {cart.map((product, index) => (
          <div key={index} className="cart-item">
            <p>{product.name}</p>
            <button
              className="remove-button"
              onClick={() => removeFromCart(product.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
