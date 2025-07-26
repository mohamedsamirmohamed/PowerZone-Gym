import React, { createContext, useContext, useState } from 'react';
// استيراد الصور المستخدمة في الوصفات
import Mask0 from '../imge/Mask group 0.png';
import Rectangle from '../imge/Rectangle 27.png';

// إنشاء الكونتكست الخاص بالوصفات
const RecipesContext = createContext();

// هوك مخصص للوصول لقيم الكونتكست بكل سهولة
export const useRecipes = () => {
  const context = useContext(RecipesContext);
  if (!context) {
    // تحقق من أن الكومبوننت داخل الـ Provider الخاص بالوصفات
    throw new Error('useRecipes must be used within a RecipesProvider');
  }
  return context;
};

// مكون الـ Provider الذي يحتوي على بيانات الوصفات والوظائف المرتبطة بها
export const RecipesProvider = ({ children }) => {
  // حالة تخزن مصفوفة الوصفات (بيانات ثابتة هنا)
  const [recipes] = useState([
    {
      id: 1,
      title: "Protein-packed power bowl", // عنوان الوصفة
      description: "A colorful protein-packed power bowl filled with flavorful, meaty grilled satay tofu and an array of vibrant veggies on a bed of fluffy quinoa. Completed with a healthy and delicious satay dipping sauce and crushed roasted peanuts. Delicious!", // وصف الوصفة
      image: Mask0, // صورة الوصفة
      category: "High Protein Recipes", // التصنيف
      cookTime: "25 mins", // مدة الطهي
      servings: 2, // عدد الحصص
      difficulty: "Easy", // مستوى الصعوبة
      calories: 450, // السعرات الحرارية
      ingredients: [ // قائمة المكونات
        "200g firm tofu",
        "1 cup quinoa",
        "1 cup broccoli florets",
        "1 carrot, julienned",
        "1/2 cup cherry tomatoes",
        "2 tbsp peanut butter",
        "2 tbsp soy sauce",
        "1 tbsp honey",
        "1 tsp sesame oil"
      ],
      instructions: [ // خطوات التحضير
        "Cook quinoa according to package instructions",
        "Press tofu and cut into cubes",
        "Marinate tofu in soy sauce and sesame oil",
        "Grill tofu until golden brown",
        "Steam broccoli and prepare other vegetables",
        "Make satay sauce with peanut butter and honey",
        "Assemble bowl with quinoa, vegetables, and tofu",
        "Drizzle with satay sauce and serve"
      ]
    },
    {
      id: 2,
      title: "Grilled Salmon with Quinoa",
      description: "Fresh Atlantic salmon grilled to perfection, served with fluffy quinoa and seasonal vegetables. Rich in omega-3 fatty acids and complete proteins.",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "High Protein Recipes",
      cookTime: "20 mins",
      servings: 2,
      difficulty: "Medium",
      calories: 520,
      ingredients: [
        "2 salmon fillets (150g each)",
        "1 cup quinoa",
        "1 zucchini, sliced",
        "1 bell pepper, diced",
        "2 tbsp olive oil",
        "1 lemon, juiced",
        "2 cloves garlic, minced",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Preheat grill to medium-high heat",
        "Season salmon with salt, pepper, and lemon juice",
        "Cook quinoa according to package directions",
        "Grill salmon for 4-5 minutes per side",
        "Sauté vegetables in olive oil with garlic",
        "Plate quinoa, top with salmon and vegetables",
        "Garnish with fresh herbs and serve"
      ]
    },
    {
      id: 3,
      title: "Keto Cauliflower Rice Bowl",
      description: "Low-carb cauliflower rice bowl topped with grilled chicken, avocado, and fresh vegetables. Perfect for ketogenic diet followers.",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Low Carb Recipes",
      cookTime: "15 mins",
      servings: 1,
      difficulty: "Easy",
      calories: 380,
      ingredients: [
        "1 cup cauliflower rice",
        "1 chicken breast (120g)",
        "1/2 avocado, sliced",
        "1/4 cup cherry tomatoes",
        "2 tbsp olive oil",
        "1 tbsp lime juice",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Season and grill chicken breast",
        "Sauté cauliflower rice in olive oil",
        "Slice chicken and avocado",
        "Assemble bowl with cauliflower rice as base",
        "Top with chicken, avocado, and tomatoes",
        "Drizzle with lime juice and serve"
      ]
    },
    {
      id: 4,
      title: "Zucchini Noodles with Pesto",
      description: "Spiralized zucchini noodles tossed in homemade basil pesto with cherry tomatoes and pine nuts. Light, fresh, and carb-free.",
      image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Low Carb Recipes",
      cookTime: "10 mins",
      servings: 2,
      difficulty: "Easy",
      calories: 220,
      ingredients: [
        "2 large zucchini, spiralized",
        "1/4 cup basil pesto",
        "1/2 cup cherry tomatoes",
        "2 tbsp pine nuts",
        "2 tbsp parmesan cheese",
        "1 tbsp olive oil"
      ],
      instructions: [
        "Spiralize zucchini into noodles",
        "Heat olive oil in large pan",
        "Lightly sauté zucchini noodles for 2-3 minutes",
        "Toss with pesto sauce",
        "Add cherry tomatoes and pine nuts",
        "Sprinkle with parmesan and serve immediately"
      ]
    },
    {
      id: 5,
      title: "Coconut Curry Chickpeas",
      description: "Creamy coconut curry with tender chickpeas, spinach, and aromatic spices. Completely dairy-free and full of flavor.",
      image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Dairy Free Recipes",
      cookTime: "30 mins",
      servings: 4,
      difficulty: "Medium",
      calories: 340,
      ingredients: [
        "2 cups cooked chickpeas",
        "1 can coconut milk (400ml)",
        "2 cups fresh spinach",
        "1 onion, diced",
        "3 cloves garlic, minced",
        "1 tbsp curry powder",
        "1 tsp turmeric",
        "2 tbsp coconut oil"
      ],
      instructions: [
        "Heat coconut oil in large pot",
        "Sauté onion until translucent",
        "Add garlic, curry powder, and turmeric",
        "Pour in coconut milk and bring to simmer",
        "Add chickpeas and cook for 15 minutes",
        "Stir in spinach until wilted",
        "Season with salt and serve with rice"
      ]
    },
    {
      id: 6,
      title: "Almond Flour Pancakes",
      description: "Fluffy dairy-free pancakes made with almond flour and coconut milk. Perfect for breakfast or brunch, naturally gluten-free.",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Dairy Free Recipes",
      cookTime: "15 mins",
      servings: 3,
      difficulty: "Easy",
      calories: 280,
      ingredients: [
        "1 cup almond flour",
        "3/4 cup coconut milk",
        "2 eggs",
        "2 tbsp maple syrup",
        "1 tsp baking powder",
        "1/2 tsp vanilla extract",
        "Pinch of salt",
        "Coconut oil for cooking"
      ],
      instructions: [
        "Whisk together dry ingredients",
        "In separate bowl, combine wet ingredients",
        "Mix wet and dry ingredients until smooth",
        "Heat coconut oil in non-stick pan",
        "Pour batter to form pancakes",
        "Cook 2-3 minutes per side until golden",
        "Serve with fresh berries and maple syrup"
      ]
    },
    {
      id: 7,
      title: "Mediterranean Stuffed Peppers",
      description: "Colorful bell peppers stuffed with quinoa, vegetables, and Mediterranean herbs. A complete vegetarian meal packed with nutrients.",
      image: Rectangle,
      category: "Vegetarian Recipes",
      cookTime: "45 mins",
      servings: 4,
      difficulty: "Medium",
      calories: 320,
      ingredients: [
        "4 large bell peppers",
        "1 cup cooked quinoa",
        "1/2 cup diced tomatoes",
        "1/4 cup olives, chopped",
        "1/4 cup feta cheese",
        "2 tbsp olive oil",
        "1 tsp oregano",
        "Fresh basil leaves"
      ],
      instructions: [
        "Preheat oven to 375°F (190°C)",
        "Cut tops off peppers and remove seeds",
        "Mix quinoa, tomatoes, olives, and herbs",
        "Stuff peppers with quinoa mixture",
        "Top with feta cheese",
        "Bake for 30-35 minutes until tender",
        "Garnish with fresh basil and serve"
      ]
    },
    {
      id: 8,
      title: "Lentil and Vegetable Stew",
      description: "Hearty and nutritious stew with red lentils, carrots, celery, and tomatoes. Perfect comfort food that's completely plant-based.",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Vegetarian Recipes",
      cookTime: "35 mins",
      servings: 6,
      difficulty: "Easy",
      calories: 250,
      ingredients: [
        "1 cup red lentils",
        "2 carrots, diced",
        "2 celery stalks, diced",
        "1 can diced tomatoes",
        "3 cups vegetable broth",
        "1 onion, diced",
        "3 cloves garlic, minced",
        "2 tsp cumin"
      ],
      instructions: [
        "Sauté onion, carrots, and celery",
        "Add garlic and cumin, cook 1 minute",
        "Add lentils, tomatoes, and broth",
        "Bring to boil, then reduce heat",
        "Simmer 20-25 minutes until lentils are tender",
        "Season with salt and pepper",
        "Serve with crusty bread"
      ]
    },
    {
      id: 9,
      title: "Asian-Style Tofu Stir Fry",
      description: "Crispy tofu stir-fried with colorful vegetables in a savory Asian sauce. Quick, healthy, and full of plant-based protein.",
      image: "https://thvnext.bing.com/th/id/OIP.xTNBUE_iOf6J1eWj6pWELQHaHa?w=89&h=89&c=1&rs=1&qlt=70&r=0&o=7&cb=thvnext&dpr=1.3&pid=InlineBlock&rm=3",
      category: "Vegetarian Recipes",
      cookTime: "20 mins",
      servings: 3,
      difficulty: "Medium",
      calories: 290,
      ingredients: [
        "300g firm tofu, cubed",
        "1 bell pepper, sliced",
        "1 cup broccoli florets",
        "1 carrot, julienned",
        "3 tbsp soy sauce",
        "2 tbsp rice vinegar",
        "1 tbsp sesame oil",
        "2 cloves garlic, minced"
      ],
      instructions: [
        "Press tofu and cut into cubes",
        "Heat oil in wok or large pan",
        "Fry tofu until golden and crispy",
        "Remove tofu, stir-fry vegetables",
        "Combine sauce ingredients",
        "Return tofu to pan with sauce",
        "Toss everything together and serve over rice"
      ]
    },
    {
      id: 10,
      title: "Rainbow Buddha Bowl",
      description: "A vibrant bowl featuring roasted vegetables, quinoa, avocado, and tahini dressing. Instagram-worthy and incredibly nutritious.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Vegetarian Recipes",
      cookTime: "40 mins",
      servings: 2,
      difficulty: "Easy",
      calories: 420,
      ingredients: [
        "1 cup quinoa",
        "1 sweet potato, cubed",
        "1 cup Brussels sprouts, halved",
        "1 avocado, sliced",
        "1/4 cup tahini",
        "2 tbsp lemon juice",
        "1 tbsp maple syrup",
        "Mixed greens"
      ],
      instructions: [
        "Preheat oven to 400°F (200°C)",
        "Roast sweet potato and Brussels sprouts",
        "Cook quinoa according to package directions",
        "Make tahini dressing with lemon and maple syrup",
        "Arrange quinoa, roasted vegetables, and greens in bowls",
        "Top with avocado slices",
        "Drizzle with tahini dressing and serve"
      ]
    }
  ]);

  // حالة لتحديد هل نعرض كل الوصفات أو عدد محدود فقط
  const [showAll, setShowAll] = useState(false);

  // دالة تعرض 4 وصفات فقط أو كل الوصفات حسب حالة showAll
  const getDisplayedRecipes = () => {
    return showAll ? recipes : recipes.slice(0, 4);
  };

  // دالة تجمع الوصفات حسب التصنيف في أوبجكت
  const getRecipesByCategory = () => {
    const categories = {
      "High Protein Recipes": recipes.filter(recipe => recipe.category === "High Protein Recipes"),
      "Low Carb Recipes": recipes.filter(recipe => recipe.category === "Low Carb Recipes"),
      "Dairy Free Recipes": recipes.filter(recipe => recipe.category === "Dairy Free Recipes"),
      "Vegetarian Recipes": recipes.filter(recipe => recipe.category === "Vegetarian Recipes")
    };
    return categories;
  };

  // دالة للبحث عن وصفة معينة باستخدام الـ ID الخاص بها
  const getRecipeById = (id) => {
    return recipes.find(recipe => recipe.id === parseInt(id));
  };

  // القيمة التي سيتم توفيرها لكل المكونات التي تستخدم هذا الكونتكست
  const value = {
    recipes,
    showAll,
    setShowAll,
    getDisplayedRecipes,
    getRecipesByCategory,
    getRecipeById
  };

  // توفير الكونتكست مع القيمة المعرفة
  return (
    <RecipesContext.Provider value={value}>
      {children}  {/* عرض كل المكونات الأبناء داخل الـ Provider */}
    </RecipesContext.Provider>
  );
};
