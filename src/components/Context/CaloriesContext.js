import React, { createContext, useContext, useState, useEffect } from 'react';

// إنشاء السياق
const CaloriesContext = createContext();

// قاعدة بيانات الأطعمة - كل عنصر يحتوي اسم عربي، إنجليزي، وسعرات لكل 100 جرام
const foodDatabase = [
  { ar: 'أرز أبيض', en: 'White Rice', calories: 130 },
  { ar: 'أرز بني', en: 'Brown Rice', calories: 111 },
  { ar: 'خبز أبيض', en: 'White Bread', calories: 265 },
  { ar: 'خبز أسمر', en: 'Whole Wheat Bread', calories: 247 },
  { ar: 'مكرونة', en: 'Pasta', calories: 131 },
  { ar: 'برغل', en: 'Bulgur', calories: 83 },
  { ar: 'شوفان', en: 'Oats', calories: 389 },
  { ar: 'كينوا', en: 'Quinoa', calories: 120 },
  { ar: 'بطاطس', en: 'Potato', calories: 77 },
  { ar: 'بطاطا حلوة', en: 'Sweet Potato', calories: 86 },
  { ar: 'لحم بقري', en: 'Beef', calories: 250 },
  { ar: 'لحم ضأن', en: 'Lamb', calories: 294 },
  { ar: 'دجاج بالجلد', en: 'Chicken with skin', calories: 239 },
  { ar: 'دجاج بدون جلد', en: 'Chicken without skin', calories: 165 },
  { ar: 'ديك رومي', en: 'Turkey', calories: 189 },
  { ar: 'كبدة', en: 'Liver', calories: 135 },
  { ar: 'سمك سلمون', en: 'Salmon', calories: 208 },
  { ar: 'سمك تونة', en: 'Tuna', calories: 144 },
  { ar: 'سمك بلطي', en: 'Tilapia', calories: 96 },
  { ar: 'جمبري', en: 'Shrimp', calories: 85 },
  { ar: 'سمك سردين', en: 'Sardine', calories: 208 },
  { ar: 'سمك ماكريل', en: 'Mackerel', calories: 205 },
  { ar: 'بيض', en: 'Egg', calories: 155 },
  { ar: 'حليب كامل الدسم', en: 'Full Fat Milk', calories: 61 },
  { ar: 'حليب قليل الدسم', en: 'Low Fat Milk', calories: 42 },
  { ar: 'حليب خالي الدسم', en: 'Skim Milk', calories: 34 },
  { ar: 'جبنة شيدر', en: 'Cheddar Cheese', calories: 403 },
  { ar: 'جبنة موتزاريلا', en: 'Mozzarella Cheese', calories: 280 },
  { ar: 'جبنة فيتا', en: 'Feta Cheese', calories: 264 },
  { ar: 'جبنة قريش', en: 'Cottage Cheese', calories: 98 },
  { ar: 'زبادي طبيعي', en: 'Plain Yogurt', calories: 59 },
  { ar: 'زبادي يوناني', en: 'Greek Yogurt', calories: 97 },
  { ar: 'طماطم', en: 'Tomato', calories: 18 },
  { ar: 'خيار', en: 'Cucumber', calories: 15 },
  { ar: 'خس', en: 'Lettuce', calories: 15 },
  { ar: 'جزر', en: 'Carrot', calories: 41 },
  { ar: 'فلفل أخضر', en: 'Green Pepper', calories: 20 },
  { ar: 'فلفل أحمر', en: 'Red Pepper', calories: 31 },
  { ar: 'بصل', en: 'Onion', calories: 40 },
  { ar: 'ثوم', en: 'Garlic', calories: 149 },
  { ar: 'بروكلي', en: 'Broccoli', calories: 34 },
  { ar: 'قرنبيط', en: 'Cauliflower', calories: 25 },
  { ar: 'سبانخ', en: 'Spinach', calories: 23 },
  { ar: 'كوسة', en: 'Zucchini', calories: 17 },
  { ar: 'باذنجان', en: 'Eggplant', calories: 25 },
  { ar: 'فاصوليا خضراء', en: 'Green Beans', calories: 31 },
  { ar: 'بازلاء', en: 'Peas', calories: 81 },
  { ar: 'ذرة', en: 'Corn', calories: 86 },
  { ar: 'تفاح', en: 'Apple', calories: 52 },
  { ar: 'موز', en: 'Banana', calories: 89 },
  { ar: 'برتقال', en: 'Orange', calories: 47 },
  { ar: 'عنب', en: 'Grapes', calories: 62 },
  { ar: 'فراولة', en: 'Strawberry', calories: 32 },
  { ar: 'مانجو', en: 'Mango', calories: 60 },
  { ar: 'أناناس', en: 'Pineapple', calories: 50 },
  { ar: 'كيوي', en: 'Kiwi', calories: 61 },
  { ar: 'خوخ', en: 'Peach', calories: 39 },
  { ar: 'مشمش', en: 'Apricot', calories: 48 },
  { ar: 'تمر', en: 'Dates', calories: 277 },
  { ar: 'تين', en: 'Figs', calories: 74 },
  { ar: 'رمان', en: 'Pomegranate', calories: 83 },
  { ar: 'بطيخ', en: 'Watermelon', calories: 30 },
  { ar: 'شمام', en: 'Melon', calories: 34 },
  { ar: 'لوز', en: 'Almonds', calories: 579 },
  { ar: 'جوز', en: 'Walnuts', calories: 654 },
  { ar: 'فستق', en: 'Pistachios', calories: 560 },
  { ar: 'كاجو', en: 'Cashews', calories: 553 },
  { ar: 'فول سوداني', en: 'Peanuts', calories: 567 },
  { ar: 'بذور عباد الشمس', en: 'Sunflower Seeds', calories: 584 },
  { ar: 'بذور اليقطين', en: 'Pumpkin Seeds', calories: 559 },
  { ar: 'سمسم', en: 'Sesame Seeds', calories: 573 },
  { ar: 'فول', en: 'Fava Beans', calories: 341 },
  { ar: 'عدس', en: 'Lentils', calories: 353 },
  { ar: 'حمص', en: 'Chickpeas', calories: 378 },
  { ar: 'فاصوليا بيضاء', en: 'White Beans', calories: 333 },
  { ar: 'فاصوليا حمراء', en: 'Red Beans', calories: 333 },
  { ar: 'لوبيا', en: 'Black-eyed Peas', calories: 336 },
  { ar: 'زيت زيتون', en: 'Olive Oil', calories: 884 },
  { ar: 'زيت عباد الشمس', en: 'Sunflower Oil', calories: 884 },
  { ar: 'زبدة', en: 'Butter', calories: 717 },
  { ar: 'سمن', en: 'Ghee', calories: 876 },
  { ar: 'طحينة', en: 'Tahini', calories: 595 },
  { ar: 'أفوكادو', en: 'Avocado', calories: 160 },
  { ar: 'سكر أبيض', en: 'White Sugar', calories: 387 },
  { ar: 'عسل', en: 'Honey', calories: 304 },
  { ar: 'مربى', en: 'Jam', calories: 278 },
  { ar: 'شوكولاتة داكنة', en: 'Dark Chocolate', calories: 546 },
  { ar: 'شوكولاتة بالحليب', en: 'Milk Chocolate', calories: 535 },
  { ar: 'كنافة', en: 'Kunafa', calories: 350 },
  { ar: 'بقلاوة', en: 'Baklava', calories: 518 },
  { ar: 'قطايف', en: 'Qatayef', calories: 290 },
  { ar: 'عصير برتقال', en: 'Orange Juice', calories: 45 },
  { ar: 'عصير تفاح', en: 'Apple Juice', calories: 46 },
  { ar: 'كولا', en: 'Cola', calories: 42 },
  { ar: 'قهوة سوداء', en: 'Black Coffee', calories: 2 },
  { ar: 'شاي', en: 'Tea', calories: 1 },
  { ar: 'حليب بالشوكولاتة', en: 'Chocolate Milk', calories: 83 },
];

// البحث في الأطعمة بالعربي والإنجليزي
const searchFood = (query) => {
  if (!query) return [];
  const lowerQuery = query.toLowerCase();
  return foodDatabase
    .filter(food =>
      food.ar.toLowerCase().includes(lowerQuery) ||
      food.en.toLowerCase().includes(lowerQuery)
    )
    .map(food => food.ar);  // ترجع أسماء الأطعمة بالعربي، يمكنك تعديلها حسب الواجهة
};

// إيجاد السعرات من الاسم العربي أو الإنجليزي
const findCaloriesByName = (name) => {
  const foodItem = foodDatabase.find(food =>
    food.ar === name || food.en.toLowerCase() === name.toLowerCase()
  );
  return foodItem ? foodItem.calories : 0;
};

// مكون مزود السياق
export const CaloriesProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [dailyCalories, setDailyCalories] = useState(0);
  const [dailyGoal, setDailyGoal] = useState(2000);
  const [userProfile, setUserProfile] = useState({
    weight: 70,
    height: 170,
    age: 30,
    gender: 'male',
    activityLevel: 'moderate'
  });

  // حساب السعرات الحرارية للطعام حسب الكمية
  const calculateCalories = (foodName, quantity, unit = 'gram') => {
    const caloriesPerHundredGrams = findCaloriesByName(foodName);
    if (!caloriesPerHundredGrams) return 0;

    let quantityInGrams = quantity;

    switch (unit) {
      case 'kg': quantityInGrams = quantity * 1000; break;
      case 'cup': quantityInGrams = quantity * 240; break;
      case 'tablespoon': quantityInGrams = quantity * 15; break;
      case 'teaspoon': quantityInGrams = quantity * 5; break;
      case 'piece': quantityInGrams = quantity * 100; break;
      default: quantityInGrams = quantity;
    }

    return Math.round((caloriesPerHundredGrams * quantityInGrams) / 100);
  };

  // إضافة وجبة
  const addMeal = (mealData) => {
    const calories = calculateCalories(mealData.food, mealData.quantity, mealData.unit);
    const meal = {
      id: Date.now(),
      ...mealData,
      calories,
      timestamp: new Date()
    };

    setMeals(prev => [...prev, meal]);
    setDailyCalories(prev => prev + calories);
  };

  // حذف وجبة
  const removeMeal = (mealId) => {
    const mealToRemove = meals.find(meal => meal.id === mealId);
    if (mealToRemove) {
      setMeals(prev => prev.filter(meal => meal.id !== mealId));
      setDailyCalories(prev => prev - mealToRemove.calories);
    }
  };

  // البحث في الأطعمة
  // (يمكنك استخدام الدالة searchFood مباشرةً من هنا)
  
  // باقي الوظائف كما في الكود الأصلي

  // حفظ واسترجاع البيانات من التخزين المحلي
  useEffect(() => {
    const savedMeals = localStorage.getItem('caloriesMeals');
    const savedProfile = localStorage.getItem('userProfile');

    if (savedMeals) {
      const parsedMeals = JSON.parse(savedMeals);
      setMeals(parsedMeals);
      setDailyCalories(parsedMeals.reduce((total, meal) => total + meal.calories, 0));
    }

    if (savedProfile) {
      setUserProfile(JSON.parse(savedProfile));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('caloriesMeals', JSON.stringify(meals));
  }, [meals]);

  useEffect(() => {
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
  }, [userProfile]);

  const value = {
    meals,
    dailyCalories,
    dailyGoal,
    userProfile,
    foodDatabase,
    searchFood,
    addMeal,
    removeMeal,
    calculateCalories,
    setUserProfile,
    setDailyGoal,
  };

  return (
    <CaloriesContext.Provider value={value}>
      {children}
    </CaloriesContext.Provider>
  );
};

// هوك لاستخدام السياق
export const useCalories = () => {
  const context = useContext(CaloriesContext);
  if (!context) {
    throw new Error('useCalories must be used within a CaloriesProvider');
  }
  return context;
};

export default CaloriesContext;
