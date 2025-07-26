import React, { useState } from 'react';
import styles from '../Home/Home.module.css';
import risen from '../imge/risen.png';
import Mask from '../imge/Mask (1).png';
import Mask2 from '../imge/Mask group 2.png';
import Mask3 from '../imge/Mask group 3.png';
import Mask4 from '../imge/Mask group 4.png';
import contactImage from '../imge/Maskl.png';
import Yoga from '../imge/Yoga.png';
import Group from '../imge/Group 156.png';
import Cardio from '../imge/Cardio.png';
import { useProducts } from '../Context/ProductsContext';
import { useTheme } from '../Context/ThemeContext';
import { useRecipes } from '../Context/RecipesContext';
import { Link } from 'react-router-dom';

export default function Home() {
  const { darkMode } = useTheme();

  const programData = [
    { title: 'Beginner Friendly', image: Yoga },
    { title: 'Moderate to Advanced', image: Group },
    { title: 'Weight Loss', image: Cardio },
    { title: 'No Equipment', image: Cardio },
    { title: 'Strength Training', image: Cardio },
  ];

  const { getFeaturedProducts, navigateTo } = useProducts();
  const featuredProducts = getFeaturedProducts();

  const galleryImages = [
    { id: 1, src: Mask, alt: "Woman doing yoga", shape: "rounded" },
    { id: 2, src: Mask2, alt: "Woman doing yoga", shape: "rounded" },
    { id: 3, src: contactImage, shape: "rounded" },
    { id: 4, src: Mask2, shape: "rounded" },
    { id: 5, src: Mask3, shape: "rounded" },
    { id: 6, src: Mask4, alt: "Weight training", shape: "rounded" },
    { id: 7, src: Mask3, alt: "Man working out", shape: "rounded" },
    { id: 8, src: Mask4, alt: "Weight training", shape: "rounded" }
  ];

  const { getDisplayedRecipes, getRecipesByCategory, showAll, setShowAll } = useRecipes();
  const displayedRecipes = getDisplayedRecipes();
  const categorizedRecipes = getRecipesByCategory();

  // الحالة لتخزين الوصفة المختارة لعرض التفاصيل تحت الوصفة
  const [expandedRecipe, setExpandedRecipe] = useState(null);

  const handleViewMore = () => {
    setShowAll(!showAll);
  };

  // عند الضغط على وصفة، يظهر أو يخفي التفاصيل تحتها
  const handleViewRecipe = (recipeId) => {
    if (expandedRecipe === recipeId) {
      setExpandedRecipe(null); // إغلاق التفاصيل إذا كانت مفتوحة
    } else {
      setExpandedRecipe(recipeId); // فتح التفاصيل للوصفة المحددة
    }
  };

  return <>
    <div className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}>
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1>
            <span className={styles.muted}>make your</span> <span className={styles.bold}>BODY SHAPE</span>
          </h1>
          <p className={styles.subtitle}>
            Being physically active can improve your brain health, help manage weight, reduce the risk of disease, strengthen bones and muscles, and improve your ability to do everyday activities.
          </p>
          <button className={styles.getStarted}>Get Started</button>
        </div>
        <img src={risen} className={styles.heroImg} alt="Gym Background" />
      </div>

      <div className={styles.programs}>
        <h2 className={styles.programsTitle}>Free Workout Programs</h2>
        <div className={styles.programList}>
          {programData.map((program, idx) => (
            <div key={idx} className={styles.programItem}>
              <img src={program.image} alt={program.title} />
              <div className={styles.verticalOverlayText}>{program.title}</div>
              <button className={`${styles.startButton} ${idx === 1 ? styles.startButtonYellow : ''}`}>
                Start Today
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* GET OUR MERCH */}
    <div className={`${styles.container1} ${darkMode ? styles.dark : styles.light}`}>
      <div className={styles.header}>
        <div className={styles.merchButton}>
          <span className={styles.slashes}>///</span>
          <span className={styles.text}>GET OUR MERCH</span>
        </div>
        <Link to='/store'>
         <button
          className={styles.viewAllButton}
          onClick={() => navigateTo('all-products')}
        >
          View All Products
        </button>
        </Link>
       
      </div>

      <div className={styles.productsGrid}>
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className={styles.productCard}
            onClick={() => navigateTo('product-detail', product.id)}
          >
            <div className={styles.productImage}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.productImgTag} 
                
              />
              {!product.inStock && (
                <div className={styles.outOfStock}>Out of Stock</div>
              )}
            </div>
            <div className={styles.productInfo}>
              <div className={styles.productName}>{product.name}</div>
              <div className={styles.productPrice}>${product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Gallery */}
    <div className={`${styles.container1} ${darkMode ? styles.dark : styles.light}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>///Gallery</h2>
      </div>

      <div className={styles.gallery}>
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className={`${styles.imageCard} ${styles[image.shape]}`}
          >
            <div className={styles.imageWrapper}>
              <img
                src={image.src}
                alt={image.alt || ""}
                className={styles.image}
              />
              <div className={styles.overlay}></div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Recipes */}
    <div className={`${styles.container5} ${darkMode ? styles.dark : styles.light}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>///Recipes</h2>
        <button
          className={styles.viewMoreBtn}
          onClick={handleViewMore}
        >
          {showAll ? 'Show Less' : 'View More Recipes'}
        </button>
      </div>

      <div className={styles.content}>
        {/* Featured Recipe */}
        {!showAll && displayedRecipes.length > 0 && (
          <div className={styles.featuredSection}>
            <div className={styles.featuredImage}>
              <img
                src={displayedRecipes[0].image}
                alt={displayedRecipes[0].title}
                className={styles.mainImage}
              />
            </div>

            <div className={styles.featuredContent}>
              <h3 className={styles.featuredTitle}>
                {displayedRecipes[0].title}
              </h3>
              <p className={styles.featuredDescription}>
                {displayedRecipes[0].description}
              </p>
              <div className={styles.recipeStats}>
                <span className={styles.stat}>
                  <i className={styles.icon}>⏱</i>
                  {displayedRecipes[0].cookTime}
                </span>
                <span className={styles.stat}>
                  <i className={styles.icon}>🍽</i>
                  {displayedRecipes[0].servings} servings
                </span>
                <span className={styles.stat}>
                  <i className={styles.icon}>🔥</i>
                  {displayedRecipes[0].calories} cal
                </span>
              </div>
              <button
                className={styles.viewFullRecipeBtn}
                onClick={() => handleViewRecipe(displayedRecipes[0].id)}
              >
                {expandedRecipe === displayedRecipes[0].id ? 'Hide Details' : 'View Details'}
                <span className={styles.btnIcon}>
                  {expandedRecipe === displayedRecipes[0].id ? '↑' : '→'}
                </span>
              </button>

              {/* صندوق التفاصيل الصغير */}
              {expandedRecipe === displayedRecipes[0].id && (
                <div className={styles.recipeDetailsBox}>
                  <div className={styles.detailsContent}>
                    <div className={styles.detailsSection}>
                      <h4>المكونات:</h4>
                      <ul className={styles.ingredientsList}>
                        {displayedRecipes[0].ingredients.map((ingredient, index) => (
                          <li key={index}>{ingredient}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={styles.detailsSection}>
                      <h4>طريقة التحضير:</h4>
                      <ol className={styles.instructionsList}>
                        {displayedRecipes[0].instructions.map((instruction, index) => (
                          <li key={index}>{instruction}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Categories Sidebar */}
        <div className={styles.sidebar}>
          {Object.entries(categorizedRecipes).map(([category, recipes]) => (
            <div key={category} className={styles.categoryCard}>
              <div className={styles.categoryImage}>
                <img
                  src={recipes[0]?.image}
                  alt={category}
                  className={styles.categoryImg}
                />
              </div>
              <div className={styles.categoryContent}>
                <h4 className={styles.categoryTitle}>{category}</h4>
                <span className={styles.recipeCount}>
                  {recipes.length} recipes
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Recipes Grid (when showAll is true) */}
      {showAll && (
        <div className={styles.allRecipesGrid}>
          {displayedRecipes.map((recipe) => (
            <div key={recipe.id} className={styles.recipeCardWrapper}>
              <div
                className={styles.recipeCard}
                onClick={() => handleViewRecipe(recipe.id)}
              >
                <div className={styles.recipeImageWrapper}>
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className={styles.recipeImage}
                  />
                  <div className={styles.recipeOverlay}>
                    <button className={styles.viewBtn}>
                      {expandedRecipe === recipe.id ? 'Hide Details' : 'View Details'}
                    </button>
                  </div>
                </div>

                <div className={styles.recipeInfo}>
                  <span className={styles.recipeCategory}>{recipe.category}</span>
                  <h3 className={styles.recipeTitle}>{recipe.title}</h3>
                  <p className={styles.recipeDesc}>
                    {recipe.description.substring(0, 100)}...
                  </p>

                  <div className={styles.recipeDetails}>
                    <span className={styles.detail}>
                      ⏱ {recipe.cookTime}
                    </span>
                    <span className={styles.detail}>
                      🔥 {recipe.calories} cal
                    </span>
                    <span className={styles.detail}>
                      📊 {recipe.difficulty}
                    </span>
                  </div>
                </div>
              </div>

              {/* صندوق التفاصيل للوصفات في الشبكة */}
              {expandedRecipe === recipe.id && (
                <div className={styles.recipeDetailsBoxGrid}>
                  <div className={styles.detailsContentGrid}>
                    <div className={styles.detailsHeader}>
                      <h3>تفاصيل الوصفة: {recipe.title}</h3>
                      <button 
                        className={styles.closeDetailsBtn}
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedRecipe(null);
                        }}
                      >
                        ✕
                      </button>
                    </div>
                    
                    <div className={styles.detailsGrid}>
                      <div className={styles.detailsSection}>
                        <h4>المكونات:</h4>
                        <ul className={styles.ingredientsList}>
                          {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className={styles.detailsSection}>
                        <h4>طريقة التحضير:</h4>
                        <ol className={styles.instructionsList}>
                          {recipe.instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>

    {/* Contact Us */}
    <div className={`${styles.container9} ${darkMode ? styles.dark : styles.light}`}>
      <div className={styles.left}>
        <h2 className={styles.title}>///Contact Us</h2>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
        </p>
        <input type="text" placeholder="Enter your name" className={styles.input} />
        <input type="email" placeholder="xyz@gmail.com" className={styles.input} />
        <textarea placeholder="Enter your message..." className={styles.textarea}></textarea>
      </div>
      <div className={styles.right}>
        <img src={contactImage} alt="Contact Visual" className={styles.image} />
      </div>
    </div>
  </>
}