import React, { createContext, useContext, useState, useEffect } from 'react';
import Bundles_1 from '../imge/Bundles_1_de5f4247-e8b2-4c0f-8da6-64d750702558.webp';
import Bundles_2 from '../imge/Gym_Products_Images/0c66167f-8642-4e4c-8040-198328b28eb0.webp';
import N44 from '../imge/N44669352A_1.png';
import OIP from '../imge/OIP.webp';
import Screenshot from '../imge/Gym_Products_Images/Screenshot 2025-07-26 190826.png';
import shopping from '../imge/Gym_Products_Images/shopping.webp';
import beg1 from '../imge/Gym_Products_Images/SSS2_ADIN6116_4067901846348_1.webp';
import beg2 from '../imge/Gym_Products_Images/SSS2_ADJD9555_4067901821024_2.webp';
import beg3 from '../imge/Gym_Products_Images/SSS2_ADJD9563_4067901824209_1.jpg';

import shopping1 from '../imge/Gym_Products_Images/shopping1.jpeg';
import C4A0199 from '../imge/Gym_Products_Images/0C4A0199_04319d4a-394b-4696-8dfe-4093f07252d9.webp';
import promixx from '../imge/Gym_Products_Images/promixx-ix-battery-powered-protein-mixer-city-grey-292644.webp';

import Shoes1 from '../imge/Gym_Products_Images/Shoes/Screenshot 4.png';
import Shoes2 from '../imge/Gym_Products_Images/Shoes/Screenshot 2025-07-26 193923.png';
import Shoes3 from '../imge/Gym_Products_Images/Shoes/Screenshot 2025-07-26 194003.png';
import Shoes4 from '../imge/Gym_Products_Images/Shoes/Screenshot 2025-07-26 194109.png';
import Shoes5 from '../imge/Gym_Products_Images/Shoes/Screenshot 2025-07-26 194157.png';

import cap1 from '../imge/Gym_Products_Images/cap1.jpg';
import cap2 from '../imge/Gym_Products_Images/cap2.jpg';
import cap3 from '../imge/Gym_Products_Images/cap3.jpg';

const ProductsContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within ProductsProvider');
  }
  return context;
};

const allProducts = [
  // 1. Classic Logo T-Shirt - قميص كلاسيكي بشعار العلامة
  {
    id: 1,
    name: 'Classic Logo T-Shirt',
    type: 'shirt',
    category: 'Clothing',
    price: 25.99,
    image: Bundles_1,
    color: 'White',
    size: ['S', 'M', 'L', 'XL'],
    description: 'High quality cotton t-shirt with our signature logo. Perfect for everyday wear.',
    inStock: true,
    featured: true
  },

  // 2. Black Premium Tee - تي شيرت أسود عالي الجودة من قطن عضوي
  {
    id: 2,
    name: 'Black Premium Tee',
    type: 'shirt',
    category: 'Clothing',
    price: 29.99,
    image: Bundles_2,
    color: 'Black',
    size: ['S', 'M', 'L', 'XL'],
    description: 'Premium black t-shirt made from organic cotton. Comfortable and stylish.',
    inStock: true,
    featured: false
  },

  // 3. Limited Edition Shirt - قميص إصدار محدود بتصميم حصري
  {
    id: 3,
    name: 'Limited Edition Shirt',
    type: 'shirt',
    category: 'Clothing',
    price: 35.99,
    image: Screenshot,
    color: 'Navy',
    size: ['M', 'L', 'XL'],
    description: 'Limited edition shirt with exclusive design. Only 100 pieces available.',
    inStock: true,
    featured: false
  },

  // 4. Sport Performance Tee - تي شيرت أداء رياضي يمتص الرطوبة
  {
    id: 4,
    name: 'Sport Performance Tee',
    type: 'shirt',
    category: 'Clothing',
    price: 32.99,
    image: Bundles_2,
    inStock: true,
    featured: true
  },

  // 5. Vintage Logo Shirt - قميص بتصميم شعارات قديمة وأسلوب رجعي
  {
    id: 5,
    name: 'Vintage Logo Shirt',
    type: 'shirt',
    category: 'Clothing',
    price: 27.99,
    image: shopping,
    color: 'Beige',
    size: ['S', 'M', 'L'],
    description: 'Vintage-inspired shirt with retro logo design. Soft and comfortable fit.',
    inStock: false,
    featured: false
  },

  // 6. Canvas Tote Bag - حقيبة توت كانفاس صديقة للبيئة ومناسبة للتسوق
  {
    id: 6,
    name: 'Shaker ',
    type: 'bag',
    category: 'Accessories',
    price: 19.99,
    image: N44,
    color: 'Natural',
    material: 'Canvas',
    description: 'Eco-friendly canvas tote bag perfect for shopping and daily use. Durable and spacious.',
    inStock: true,
    featured: true
  },

  // 7. Premium Leather Bag - حقيبة جلدية فاخرة يدوية الصنع للمحترفين
  {
    id: 7,
    name: 'Premium Leather Bag',
    type: 'bag',
    category: 'Accessories',
    price: 89.99,
    image: beg1,
    color: 'Brown',
    material: 'Leather',
    description: 'Handcrafted leather bag with premium quality. Perfect for professional use.',
    inStock: true,
    featured: false
  },

  // 8. Sports Backpack - حقيبة ظهر رياضية مقاومة للماء مع أقسام متعددة
  {
    id: 8,
    name: 'Sports Backpack',
    type: 'bag',
    category: 'Accessories',
    price: 45.99,
    image: beg2,
    color: 'Black',
    material: 'Nylon',
    description: 'Waterproof sports backpack with multiple compartments. Great for gym and travel.',
    inStock: true,
    featured: false
  },

  // 9. Mini Crossbody Bag - حقيبة صغيرة عصرية للحمل اليومي والخفيف
  {
    id: 9,
    name: ' Gym Bag',
    type: 'bag',
    category: 'Accessories',
    price: 34.99,
    image: OIP,
    color: 'Pink',
    material: 'Synthetic',
    description: 'Stylish mini crossbody bag perfect for carrying essentials. Lightweight and trendy.',
    inStock: true,
    featured: true
  },

  // 10. Laptop Messenger Bag - حقيبة رسول بمساحة للابتوب مناسبة للعمل والاعمال
  {
    id: 10,
    name: 'Laptop Messenger Bag',
    type: 'bag',
    category: 'Accessories',
    price: 67.99,
    image: beg3,
    color: 'Gray',
    material: 'Canvas',
    description: 'Professional messenger bag with laptop compartment. Perfect for work and business.',
    inStock: false,
    featured: false
  },

  // 11. Stainless Steel Bottle - زجاجة من الستانلس ستيل مع عزل مزدوج تحافظ على حرارة المشروبات
  {
    id: 11,
    name: 'Stainless Steel Bottle',
    type: 'bottle',
    category: 'Drinkware',
    price: 24.99,
    image: shopping1,
    material: 'Stainless Steel',
    capacity: '500ml',
    description: 'Double-wall insulated stainless steel bottle. Keeps drinks hot for 12h, cold for 24h.',
    inStock: true,
    featured: true
  },

  // 12. Glass Water Bottle - زجاجة ماء من الزجاج البورسليكات مع غلاف سيليكون
  {
    id: 12,
    name: 'Glass Water Bottle',
    type: 'bottle',
    category: 'Drinkware',
    price: 18.99,
    image: C4A0199,
    material: 'Borosilicate Glass',
    capacity: '750ml',
    description: 'Premium borosilicate glass bottle with silicone sleeve. BPA-free and eco-friendly.',
    inStock: true,
    featured: false
  },

  // 13. Sport Hydration Bottle - زجاجة رياضية بسعة كبيرة مع علامات قياس
  {
    id: 13,
    name: 'Sport Hydration Bottle',
    type: 'bottle',
    category: 'Drinkware',
    price: 22.99,
    image: promixx,
    material: 'Tritan Plastic',
    capacity: '1L',
    description: 'Large capacity sports bottle with measurement marks. Perfect for intense workouts.',
    inStock: true,
    featured: false
  },

  // 14. Bamboo Eco Bottle - زجاجة صديقة للبيئة بجسم من الخيزران والصلب
  {
    id: 14,
    name: 'Bamboo Eco Bottle',
    type: 'bottle',
    category: 'Drinkware',
    price: 29.99,
    image: promixx,
    material: 'Bamboo/Steel',
    capacity: '400ml',
    description: 'Sustainable bamboo exterior with steel interior. Environmentally conscious choice.',
    inStock: true,
    featured: true
  },

  // 15. Smart Temperature Bottle - زجاجة ذكية بشاشة LED تعرض درجة حرارة المشروب
  {
    id: 15,
    name: 'Smart Temperature Bottle',
    type: 'bottle',
    category: 'Drinkware',
    price: 59.99,
    image: shopping1,
    material: 'Smart Steel',
    capacity: '500ml',
    description: 'Smart bottle with LED temperature display. Shows drink temperature in real-time.',
    inStock: false,
    featured: false
  },

// 16. Classic Gym Shoes - أحذية كلاسيكية مريحة للتمارين
{
  id: 16,
  name: 'Classic Gym Shoes',
  type: 'shoes',
  category: 'Footwear',
  price: 59.99,
  image: Shoes1,
  color: 'White',
  size: [40, 41, 42, 43, 44],
  description: 'Lightweight and comfortable classic gym shoes with durable soles, ideal for everyday workouts.',
  inStock: true,
  featured: false
},

// 17. Zip-Up Training Sneakers - أحذية تدريب بسحاب مع دعم ممتاز
{
  id: 17,
  name: 'Zip-Up Training Sneakers',
  type: 'shoes',
  category: 'Footwear',
  price: 69.99,
  image: Shoes2,
  color: 'Black & White',
  size: [39, 40, 41, 42, 43],
  description: 'Modern training sneakers with zip-up design for easy wear and secure fit, perfect for intense gym sessions.',
  inStock: true,
  featured: true
},

// 18. Gym Training Shoes - حذاء رياضي مخصص للتمارين
{
  id: 18,
  name: 'Gym Training Shoes',
  type: 'shoes',
  category: 'Footwear',
  price: 79.99,
  image: Shoes3,
  color: 'Black & Red',
  size: [40, 41, 42, 43, 44],
  description: 'Durable and lightweight gym shoes with excellent grip and breathability. Ideal for workouts and training.',
  inStock: true,
  featured: true
},

// 19. Runner Pro Sneakers - أحذية جري متقدمة
{
  id: 19,
  name: 'Runner Pro Sneakers',
  type: 'shoes',
  category: 'Footwear',
  price: 99.99,
  image: Shoes4,
  color: 'Blue & White',
  size: [39, 40, 41, 42, 43],
  description: 'High-performance running shoes designed for comfort and speed, with breathable mesh and cushioned soles.',
  inStock: true,
  featured: false
},

// 20. FlexFit Cross Trainers - أحذية تدريب متعددة الاستخدام
{
  id: 20,
  name: 'FlexFit Cross Trainers',
  type: 'shoes',
  category: 'Footwear',
  price: 89.99,
  image: Shoes5,
  color: 'Grey & Orange',
  size: [40, 41, 42, 43, 44, 45],
  description: 'Versatile cross-training shoes with flexible soles and reinforced support for dynamic workouts.',
  inStock: true,
  featured: true
},

  // 21. Baseball Cap - قبعة بيسبول كلاسيكية مع شعار مطرز
  {
    id: 21,
    name: 'Baseball Cap',
    type: 'cap',
    category: 'Accessories',
    price: 19.99,
    image: cap1,
    color: 'Black',
    material: 'Cotton',
    description: 'Classic baseball cap with embroidered logo. Adjustable strap for perfect fit.',
    inStock: true,
    featured: false
  },

  // 22. Snapback Hat - قبعة سناب باك عصرية مع حافة مسطحة
  {
    id: 22,
    name: 'Snapback Hat',
    type: 'cap',
    category: 'Accessories',
    price: 24.99,
    image: cap2,
    color: 'White',
    material: 'Cotton/Polyester',
    description: 'Urban snapback hat with flat brim. Street style essential with premium construction.',
    inStock: true,
    featured: false
  },

  // 23. Beanie Hat - قبعة بيني دافئة مع حافة قابلة للطي
  {
    id: 23,
    name: 'Beanie Hat',
    type: 'beanie',
    category: 'Accessories',
    price: 16.99,
    image: cap3,
    color: 'Gray',
    material: 'Acrylic',
    description: 'Warm and cozy beanie perfect for cold weather. Soft knit with fold-up cuff.',
    inStock: true,
    featured: false
  }
];

export const ProductsProvider = ({ children }) => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  // Load cart from localStorage when component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem('shopping-cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('shopping-cart', JSON.stringify(cart));
  }, [cart]);

  const getFeaturedProducts = () => {
    return allProducts.filter(product => product.featured).slice(0, 4);
  };

  const getAllProducts = () => {
    return allProducts;
  };

  const getProductById = (id) => {
    return allProducts.find(product => product.id === parseInt(id));
  };

  const navigateTo = (view, productId = null) => {
    setCurrentView(view);
    if (productId) {
      setSelectedProduct(getProductById(productId));
    }
  };

  const addToCart = (product, quantity = 1, selectedSize = null) => {
    const existingIndex = cart.findIndex(
      item => item.id === product.id && item.selectedSize === selectedSize
    );

    if (existingIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      const cartItem = {
        ...product,
        quantity,
        selectedSize,
        cartId: `${product.id}-${selectedSize || 'default'}-${Date.now()}`
      };
      setCart(prevCart => [...prevCart, cartItem]);
    }
  };

  const removeFromCart = (cartId) => {
    setCart(prevCart => prevCart.filter(item => item.cartId !== cartId));
  };

  // Updated function for changing quantity directly
  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.cartId === cartId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Update item size in cart - الدالة المضافة
  const updateItemSize = (cartId, newSize) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.cartId === cartId ? { ...item, selectedSize: newSize } : item
      )
    );
  };

  const increaseQuantity = (cartId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.cartId === cartId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (cartId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.cartId === cartId
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const value = {
    allProducts,
    cart,
    currentView,
    selectedProduct,
    getFeaturedProducts,
    getAllProducts,
    getProductById,
    navigateTo,
    addToCart,
    removeFromCart,
    updateQuantity,
    updateItemSize,
    increaseQuantity,
    decreaseQuantity,
    getCartCount,
    getCartSubtotal,
    clearCart,
    totalProducts: allProducts.length,
    availableProducts: allProducts.filter(p => p.inStock).length
  };


  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};