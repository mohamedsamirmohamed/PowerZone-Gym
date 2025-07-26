import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../Cart/Cart.module.css';
import { useProducts } from '../Context/ProductsContext';
import { useTheme } from '../Context/ThemeContext';

export default function Cart() {
    const { darkMode } = useTheme();
    const { cart, removeFromCart, updateQuantity, updateItemSize, getAllProducts } = useProducts();
    const navigate = useNavigate(); // ⬅️ للتنقل للصفحة الجديدة

    const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleQuantityChange = (cartId, newQuantity) => {
        if (newQuantity < 1) return;
        updateQuantity(cartId, newQuantity);
    };

    const handleSizeChange = (cartId, newSize) => {
        if (newSize) {
            updateItemSize(cartId, newSize);
        }
    };

    const getAvailableSizes = (productId) => {
        const allProducts = getAllProducts();
        const product = allProducts.find(p => p.id === productId);
        return product?.size || [];
    };

    const isCartValid = () => {
        return cart.every(item => {
            const availableSizes = getAvailableSizes(item.id);
            if (availableSizes.length > 0) {
                return item.selectedSize && item.selectedSize.trim() !== '';
            }
            return true;
        });
    };

    const handleCheckout = () => {
        if (isCartValid()) {
            navigate('/checkout'); // ⬅️ الانتقال لصفحة الدفع
        } else {
            alert('Please select sizes for all items before checkout');
        }
    };

    return (
        <div className={`${styles.cartContainer} ${darkMode ? styles.dark : styles.light}`}>
            {cart.length === 0 ? (
                <div className={styles.emptyCart}>
                    <p>Your cart is empty</p>
                </div>
            ) : (
                <>
                    {cart.map(item => (
                        <div key={item.cartId} className={styles.cartItem}>
                            <div className={styles.itemImageContainer}>
                                <img src={item.image} alt={item.name} className={styles.itemImage} />
                            </div>
                            <div className={styles.itemDetails}>
                                <div className={styles.itemHeader}>
                                    <h3 className={styles.itemName}>{item.name}</h3>
                                    <button 
                                        className={styles.removeButton} 
                                        onClick={() => removeFromCart(item.cartId)}
                                    >
                                        ✕
                                    </button>
                                </div>
                                
                                <p className={styles.itemPrice}>Rs {item.price}</p>
                                <p className={styles.itemDescription}>{item.description}</p>

                                {getAvailableSizes(item.id).length > 0 && (
                                    <div className={styles.sizeSelection}>
                                        <label className={styles.sizeLabel}>Size:</label>
                                        <select 
                                            className={`${styles.sizeSelect} ${!item.selectedSize ? styles.sizeSelectEmpty : ''}`}
                                            value={item.selectedSize || ''}
                                            onChange={(e) => handleSizeChange(item.cartId, e.target.value)}
                                            required
                                        >
                                            <option value="" disabled>Choose Size</option>
                                            {getAvailableSizes(item.id).map(size => (
                                                <option key={size} value={size}>
                                                    {size}
                                                </option>
                                            ))}
                                        </select>
                                        {!item.selectedSize && (
                                            <span className={styles.sizeWarning}>⚠️ Please select a size</span>
                                        )}
                                    </div>
                                )}

                                <div className={styles.quantityControls}>
                                    <button 
                                        className={styles.quantityBtn}
                                        onClick={() => handleQuantityChange(item.cartId, item.quantity - 1)}
                                        disabled={item.quantity <= 1}
                                    >
                                        -
                                    </button>
                                    <span className={styles.quantity}>{item.quantity}</span>
                                    <button 
                                        className={styles.quantityBtn}
                                        onClick={() => handleQuantityChange(item.cartId, item.quantity + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className={styles.subtotalSection}>
                        <h3 className={styles.subtotal}>SUBTOTAL : Rs {calculateSubtotal().toFixed(2)}</h3>
                    </div>

                    <button 
                        className={`${styles.checkoutButton} ${!isCartValid() ? styles.checkoutDisabled : ''}`}
                        disabled={!isCartValid()}
                        onClick={handleCheckout}
                    >
                        {!isCartValid() ? 'Please select all sizes' : 'Proceed to checkout'}
                    </button>
                </>
            )}
        </div>
    );
}
