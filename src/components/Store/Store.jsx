import React, { useState, useRef } from 'react';
import styles from '../Store/Store.module.css';
import { useProducts } from "../Context/ProductsContext";
import { useTheme } from '../Context/ThemeContext';
import image91 from '../imge/image 18.png';
import { useNavigate } from 'react-router-dom';

export default function Store({ heroImage = image91 }) {
    const { darkMode } = useTheme();
    const { getAllProducts, addToCart, navigateTo } = useProducts();
    const allProducts = getAllProducts();
const navigate = useNavigate();
    // ✅ Pagination logic
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 5;
    const totalPages = Math.ceil(allProducts.length / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // ✅ Ref to scroll to first product
    const firstProductRef = useRef(null);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        setTimeout(() => {
            if (firstProductRef.current) {
                firstProductRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // delay عشان يتغير الصفحة الأول
    };

    return (
        <div className={`${styles.storeContainer} ${darkMode ? styles.dark : styles.light}`}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.backgroundImage}>
                    <img
                        src={heroImage}
                        alt="Fitness motivation"
                        className={styles.heroImage}
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                        }}
                    />
                    <div className={styles.fallbackImage} style={{ display: 'none' }}>
                        <div className={styles.fallbackContent}>
                            <span>Add Your Image Here</span>
                        </div>
                    </div>
                </div>
                <div className={styles.overlay}></div>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.textContent}>
                            <h1 className={styles.heading}>
                                inspiring you for<br />
                                <span className={styles.highlight}>NEW LOOK</span><br />
                                <span className={styles.subHeading}>everyday</span>
                            </h1>
                            <p className={styles.description}>
                                Being physically active can improve your brain health, help manage weight, reduce the
                                risk of disease, strengthen bones and muscles, and improve your ability to do everyday
                                activities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <h2 className={styles.sectionTitle}>Store</h2>
            <div className={styles.productsList}>
                {currentProducts.map((product, index) => (
                    <div
                        className={styles.productCard}
                        key={product.id}
                        ref={index === 0 ? firstProductRef : null} // ✅ add ref to the first product
                    >
                        <div className={styles.productImageBox}>
                            <img
                                src={typeof product.image === "string" ? product.image : product.image}
                                alt={product.name}
                                className={styles.productImage}
                            />
                        </div>
                        <div className={styles.productInfo}>
                            <h3 className={styles.productName}>{product.name}</h3>
                            <div className={styles.productPrice}>Rs {product.price}</div>
                            <button
                                className={styles.addToCartBtn}
                                onClick={() => {
                                    addToCart(product);
                                    navigate('/cart'); // ✅ يروح على صفحة السلة بعد الإضافة
                                }}>
                                ADD TO CART
                            </button>
                            <p className={styles.productDesc}>{product.description}</p>
                        </div>
                        <div className={styles.ratingBox}>
                            <span className={styles.star}>★</span>
                            <span className={styles.rating}>4.5</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className={styles.pagination}>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        className={`${styles.pageButton} ${currentPage === i + 1 ? styles.activePage : ''}`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}
