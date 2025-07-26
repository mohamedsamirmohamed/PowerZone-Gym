import React, { useState } from 'react';
import { useProducts } from '../Context/ProductsContext';
import styles from './Checkout.module.css';
import { useTheme } from '../Context/ThemeContext';
import logo from '../imge/gold_s_gym_2008-logo-5B7A8ECB44-seeklogo 1.png';

export default function Checkout() {
  const { darkMode } = useTheme();

  const { cart, getCartSubtotal, clearCart } = useProducts();

  // Customer data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    phone: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // On form data change
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Submit order
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send this data to a server or email here
    console.log('Order Submitted:', {
      ...formData,
      cartItems: cart,
      totalPrice: getCartSubtotal()
    });
    clearCart();   // Clear cart after submission
    setSubmitted(true);
  };

  // After order submission
  if (submitted) {
    return (
      <div className={styles.successMessage}>
        <h2>✅ Order submitted successfully!</h2>
        <p>We will contact you shortly to confirm your order.</p>
      </div>
    );
  }

  // Form content
  return (
    <div className={`${styles.checkoutContainer} ${darkMode ? styles.dark : styles.light}`}>
      <h1 className={styles.title}>
        <img 
          src={logo} 
          alt="Logo" 
          className={styles.logoImg} 
        />
        Complete Your Order
      </h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          name="fullName"
          type="text"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          type="text"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          name="address"
          type="text"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <textarea
          name="notes"
          placeholder="Additional Notes (optional)"
          value={formData.notes}
          onChange={handleChange}
        ></textarea>
        <button className={styles.submitBtn} type="submit">Submit Order</button>
      </form>

      <div className={styles.subTitle}>🛒 Cart Contents:</div>
      <ul className={styles.cartList}>
        {cart.map((item) => (
          <li key={item.id}>
            <span>{item.name} × {item.quantity}</span>
            <span style={{ float: "left" }}>{(item.price * item.quantity).toFixed(2)}$</span>
          </li>
        ))}
      </ul>
      <div className={styles.total}>
        Total: {getCartSubtotal().toFixed(2)}$
      </div>
    </div>
  );
}
