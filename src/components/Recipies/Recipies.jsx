import React, { useEffect, useState } from 'react'
// استيراد هوك للوصول لوصفات الطعام من الكونتكست
import { useRecipes } from '../Context/RecipesContext';
// استيراد ملفات التنسيق (CSS Modules)
import styles from '../Recipies/Recipies.module.css';
import { useTheme } from '../Context/ThemeContext';

import { Search, Plus, Trash2, Target, TrendingUp, Calendar, Utensils } from 'lucide-react';
import { useCalories } from '../Context/CaloriesContext';

export default function Recipies() {
  // جلب الدالة التي ترجع الوصفات مصنفة حسب الفئة
  const { getRecipesByCategory } = useRecipes();
 const { darkMode } = useTheme();
  // حالة لتخزين الوصفة المختارة وعرض تفاصيلها
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // الحصول على الوصفات حسب الفئات (أوبجكت فيه كل الفئات)
  const categories = getRecipesByCategory();

  // دالة لتعيين الوصفة المختارة عند الضغط عليها والتمرير لأعلى لعرض التفاصيل
  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // تمرير الصفحة للأعلى بسلاسة
  };

  // دالة لإغلاق عرض تفاصيل الوصفة وإخفاء المودال
  const closeRecipeDetails = () => {
    setSelectedRecipe(null);
  };






const {
    meals,
    dailyCalories,
    dailyGoal,
    addMeal,
    removeMeal,
    searchFood,
  } = useCalories();

  const [food, setFood] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('gram');
  const [suggestions, setSuggestions] = useState([]);

  // عند إرسال الفورم لإضافة وجبة
  const handleAddMeal = (e) => {
    e.preventDefault();
    if (!food.trim() || !quantity) return;

    addMeal({ food: food.trim(), quantity: Number(quantity), unit });
    setFood('');
    setQuantity('');
    setSuggestions([]);
  };

  // عند تغيير اسم الأكل في الحقل مع جلب اقتراحات البحث
  const handleFoodChange = (e) => {
    const value = e.target.value;
    setFood(value);

    if (value.trim() === '') {
      setSuggestions([]);
    } else {
      const results = searchFood(value);
      setSuggestions(results);
    }
  };

  // عند اختيار اقتراح
  const handleSuggestionClick = (name) => {
    setFood(name);
    setSuggestions([]);
  };
  return <>
    <div className={`${ styles.recipiesContainer} ${darkMode ? styles.dark : styles.light}`}>

      {/* عرض تفاصيل الوصفة كمودال عند اختيار وصفة */}
      {selectedRecipe && (
        <div className={styles.recipeDetails}>
          <div className={styles.recipeDetailsContent}>
            {/* زر إغلاق المودال */}
            <button 
              className={styles.closeButton}
              onClick={closeRecipeDetails}
            >
              ✕
            </button>
            
            {/* رأس تفاصيل الوصفة: صورة ومعلومات */}
            <div className={styles.recipeHeader}>
              <div className={styles.recipeImageLarge}>
                {/* صورة الوصفة */}
                <img src={selectedRecipe.image} alt={selectedRecipe.title} />
              </div>
              
              <div className={styles.recipeInfo}>
                {/* عنوان الوصفة */}
                <h1 className={styles.recipeTitle}>{selectedRecipe.title}</h1>
                {/* وصف الوصفة */}
                <p className={styles.recipeDescription}>{selectedRecipe.description}</p>
                
                {/* معلومات إضافية عن الوصفة مثل وقت الطهي، عدد الحصص، الصعوبة، والسعرات */}
                <div className={styles.recipeStats}>
                  <div className={styles.stat}>
                    <span className={styles.statLabel}>Cook Time:</span>
                    <span className={styles.statValue}>{selectedRecipe.cookTime}</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statLabel}>Servings:</span>
                    <span className={styles.statValue}>{selectedRecipe.servings}</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statLabel}>Difficulty:</span>
                    <span className={styles.statValue}>{selectedRecipe.difficulty}</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statLabel}>Calories:</span>
                    <span className={styles.statValue}>{selectedRecipe.calories}</span>
                  </div>
                </div>
                
                {/* زر عرض الوصفة كاملة (غير مفعل هنا ولكن مكانه موجود) */}
                <button className={styles.viewFullRecipeBtn}>
                  View Full Recipe
                  <span className={styles.btnIcon}>→</span>
                </button>
              </div>
            </div>
            
            {/* محتوى الوصفة: المكونات والتعليمات */}
            <div className={styles.recipeContent}>
              {/* قائمة المكونات */}
              <div className={styles.ingredients}>
                <h3>Ingredients</h3>
                <ul>
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li> // عرض كل مكون
                  ))}
                </ul>
              </div>
              
              {/* خطوات التحضير */}
              <div className={styles.instructions}>
                <h3>Instructions</h3>
                <ol>
                  {selectedRecipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li> // عرض كل خطوة تحضير
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* قسم الوصفات المميزة */}
      <section className={styles.featuredSection}>
        <h2 className={styles.sectionTitle}>Featured Recipes</h2>
        
        <div className={styles.featuredContent}>
          {/* البطاقة الرئيسية للوصفة المميزة الأولى */}
          <div className={styles.featuredMainCard}>
            <div className={styles.featuredImage}>
              <img src={categories["High Protein Recipes"][0]?.image} alt="Featured Recipe" />
            </div>
            <div className={styles.featuredInfo}>
              <h3>{categories["High Protein Recipes"][0]?.title}</h3>
              <p>{categories["High Protein Recipes"][0]?.description}</p>
              {/* زر لعرض تفاصيل الوصفة عند الضغط */}
              <button 
                className={styles.viewFullRecipeBtn}
                onClick={() => handleRecipeClick(categories["High Protein Recipes"][0])}
              >
                View Full Recipe
                <span className={styles.btnIcon}>→</span>
              </button>
            </div>
          </div>
          
          {/* شريط جانبي يعرض بقية الوصفات المميزة */}
          <div className={styles.featuredSidebar}>
            {categories["High Protein Recipes"].slice(1, 5).map((recipe) => (
              <div 
                key={recipe.id} 
                className={styles.sidebarItem}
                onClick={() => handleRecipeClick(recipe)} // عند الضغط تعرض تفاصيل الوصفة
              >
                <div className={styles.sidebarImage}>
                  <img src={recipe.image} alt={recipe.title} />
                </div>
                <div className={styles.sidebarInfo}>
                  <h4>{recipe.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* أقسام الوصفات حسب الفئة */}
      {/* هنا قسم وصفات عالية البروتين */}
      <section className={styles.categorySection}>
        <h2 className={styles.sectionTitle}>High Protein Recipes</h2>
        <p className={styles.sectionSubtitle}>
          Start your day right with these easy power bowls. Some low-carb too for enhanced intake of food.
        </p>
        
        <div className={styles.recipesGrid}>
          {/* عرض كل الوصفات الموجودة في هذه الفئة */}
          {categories["High Protein Recipes"].map((recipe) => (
            <div 
              key={recipe.id} 
              className={styles.recipeCard}
              onClick={() => handleRecipeClick(recipe)} // عرض تفاصيل عند الضغط
            >
              <div className={styles.recipeImage}>
                <img src={recipe.image} alt={recipe.title} />
                <div className={styles.recipeOverlay}>
                  <span className={styles.difficultyBadge}>{recipe.difficulty}</span> {/* مستوى الصعوبة */}
                </div>
              </div>
              <div className={styles.recipeCardContent}>
                <button className={styles.viewFullRecipeBtn}>
                  View Full Recipe
                  <span className={styles.btnIcon}>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* نفس الشيء لباقي الأقسام: Low Carb, Dairy Free, Vegetarian */}
      <section className={styles.categorySection}>
        <h2 className={styles.sectionTitle}>Low Carb Recipes</h2>
        <p className={styles.sectionSubtitle}>
          Start your day right with these easy power bowls. Some low-carb too for enhanced intake of food.
        </p>
        
        <div className={styles.recipesGrid}>
          {categories["Low Carb Recipes"].map((recipe) => (
            <div 
              key={recipe.id} 
              className={styles.recipeCard}
              onClick={() => handleRecipeClick(recipe)}
            >
              <div className={styles.recipeImage}>
                <img src={recipe.image} alt={recipe.title} />
                <div className={styles.recipeOverlay}>
                  <span className={styles.difficultyBadge}>{recipe.difficulty}</span>
                </div>
              </div>
              <div className={styles.recipeCardContent}>
                <button className={styles.viewFullRecipeBtn}>
                  View Full Recipe
                  <span className={styles.btnIcon}>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.categorySection}>
        <h2 className={styles.sectionTitle}>Dairy Free Recipes</h2>
        <p className={styles.sectionSubtitle}>
          Start your day right with these easy power bowls. Some low-carb too for enhanced intake of food.
        </p>
        
        <div className={styles.recipesGrid}>
          {categories["Dairy Free Recipes"].map((recipe) => (
            <div 
              key={recipe.id} 
              className={styles.recipeCard}
              onClick={() => handleRecipeClick(recipe)}
            >
              <div className={styles.recipeImage}>
                <img src={recipe.image} alt={recipe.title} />
                <div className={styles.recipeOverlay}>
                  <span className={styles.difficultyBadge}>{recipe.difficulty}</span>
                </div>
              </div>
              <div className={styles.recipeCardContent}>
                <button className={styles.viewFullRecipeBtn}>
                  View Full Recipe
                  <span className={styles.btnIcon}>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.categorySection}>
        <h2 className={styles.sectionTitle}>Vegetarian Recipes</h2>
        <p className={styles.sectionSubtitle}>
          Start your day right with these easy power bowls. Some low-carb too for enhanced intake of food.
        </p>
        
        <div className={styles.recipesGrid}>
          {categories["Vegetarian Recipes"].map((recipe) => (
            <div 
              key={recipe.id} 
              className={styles.recipeCard}
              onClick={() => handleRecipeClick(recipe)}
            >
              <div className={styles.recipeImage}>
                <img src={recipe.image} alt={recipe.title} />
                <div className={styles.recipeOverlay}>
                  <span className={styles.difficultyBadge}>{recipe.difficulty}</span>
                </div>
              </div>
              <div className={styles.recipeCardContent}>
                <button className={styles.viewFullRecipeBtn}>
                  View Full Recipe
                  <span className={styles.btnIcon}>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>


<div className={styles.container10}>
      <h1 className={styles.title}>🍽️ Calories Tracker</h1>

      <form onSubmit={handleAddMeal} className={styles.form}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Food name"
            value={food}
            onChange={handleFoodChange}
            className={styles.input}
            autoComplete="off"
          />
          {suggestions.length > 0 && (
            <ul className={styles.suggestions}>
              {suggestions.map((item, idx) => (
                <li
                  key={idx}
                  onClick={() => handleSuggestionClick(item)}
                  className={styles.suggestionItem}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        <input
          type="number"
          placeholder="Quantity"
          min="0"
          step="any"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className={styles.input}
        />

        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          className={styles.select}
        >
          <option value="gram">Gram</option>
          <option value="kg">Kilogram</option>
          <option value="cup">Cup</option>
          <option value="tablespoon">Tablespoon</option>
          <option value="teaspoon">Teaspoon</option>
          <option value="piece">Piece</option>
        </select>

        <button type="submit" className={styles.addBtn}>
          Add
        </button>
      </form>

      <div className={styles.summary}>
        <p>
          <strong>Total Calories:</strong> {dailyCalories} / {dailyGoal}
        </p>
      </div>

      <ul className={styles.mealList}>
        {meals.length === 0 && <p>No meals added yet.</p>}
        {meals.map((meal) => (
          <li key={meal.id} className={styles.mealItem}>
            <span>
              {meal.food} - {meal.quantity} {meal.unit} - {meal.calories} cal
            </span>
            <button
              className={styles.removeBtn}
              onClick={() => removeMeal(meal.id)}
              aria-label="Remove meal"
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
























      {/* قسم الاتصال */}
      <section className={styles.contactSection}>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2>Contact Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            {/* نموذج الاتصال */}
            <div className={styles.contactForm}>
              <input type="text" placeholder="Enter your name" className={styles.inputField} />
              <input type="email" placeholder="example@email.com" className={styles.inputField} />
              <textarea placeholder="Enter your message..." className={styles.textareaField}></textarea>
            </div>
          </div>
          
          {/* صورة في جانب الاتصال */}
          <div className={styles.contactImage}>
            <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Chef cooking" />
          </div>
        </div>
      </section>
    </div>
  </>
}
