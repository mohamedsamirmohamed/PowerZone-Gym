// استيراد الدوال والمكونات اللازمة من React
import React, { createContext, useContext, useState } from 'react';

// إنشاء السياق الخاص بالثيم (الوضع الليلي والنهاري)
const ThemeContext = createContext();

// هوك مخصص لاستخدام سياق الثيم بسهولة داخل المكونات
export const useTheme = () => useContext(ThemeContext);

// مكون يقوم بتوفير الثيم (الوضع الليلي أو النهاري) لكل المكونات اللي داخله
export const ThemeProvider = ({ children }) => {
  // تعريف حالة للتحكم في الوضع (ليلي أو نهاري)، والافتراضي هو ليلي
  const [darkMode, setDarkMode] = useState(true);

  // دالة لتغيير الوضع (التبديل بين الليلي والنهاري)
  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    // توفير القيمة (الوضع الحالي والدالة لتغييره) لباقي المكونات
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {/* تغيير لون الخلفية والنص بناءً على الوضع الحالي */}
      <div
        style={{
          backgroundColor: darkMode ? '#000' : '#fff', // خلفية سوداء في الوضع الليلي وبيضاء في النهاري
          color: darkMode ? '#fff' : '#000', // نص أبيض في الوضع الليلي وأسود في النهاري
          minHeight: '100vh', // ارتفاع الصفحة بالكامل
          transition: '0.3s' // انتقال سلس بين الأوضاع
        }}
      >
        {/* عرض مكونات الأطفال داخل المزود */}
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
