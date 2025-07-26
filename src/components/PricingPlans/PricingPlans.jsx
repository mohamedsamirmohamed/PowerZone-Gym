import React from 'react'
// استيراد ملف CSS لتنسيق الخطط
import styles from '../PricingPlans/PricingPlans.module.css'
// استيراد Link للتنقل بين الصفحات
import { Link } from 'react-router-dom';
// استيراد مكون التسجيل (غير مستخدم حاليًا)
import Register from '../Register/Register';

export default function PricingPlans() {
    // تعريف الخطط الخاصة بالاشتراك
    const plans = [
        {
            title: "One Month Plan", // عنوان الخطة
            gyms: 132,               // عدد الصالات المتاحة
            visits: 20,              // عدد الزيارات في الشهر
            price: 3900,             // السعر بالجنيهات
            highlighted: false       // هل الخطة مميزة بصريًا؟
        },
        {
            title: "Three Month Plan",
            gyms: 132,
            visits: 20,
            price: 3900,
            highlighted: true       // هذه الخطة مميزة (زر مختلف الشكل)
        },
        {
            title: "Six Month Plan",
            gyms: 132,
            visits: 20,
            price: 3900,
            highlighted: false
        }
    ];

    return (
        <>
            {/* الحاوية الرئيسية للصفحة */}
            <div className={styles.container}>
                {/* عنوان رئيسي للصفحة */}
                <h1 className={styles.title}>
                    Let's Join<br />
                    Membership
                </h1>

                {/* حاوية الكروت الخاصة بالخطط */}
                <div className={styles.cardsContainer}>
                    {plans.map((plan, index) => (
                        // كارت يحتوي على تفاصيل كل خطة
                        <div key={index} className={styles.card}>
                            {/* عنوان الخطة */}
                            <h3 className={styles.cardTitle}>{plan.title}</h3>

                            {/* تفاصيل الخطة */}
                            <div className={styles.cardDetails}>
                                number of gyms - {plan.gyms} Gyms<br />
                                check-ins - {plan.visits} visits a Month<br />
                                price - rs {plan.price.toLocaleString()}.00/ month
                            </div>

                            {/* ملاحظة بعدم وجود رسوم تسجيل */}
                            <p className={styles.noFeesText}>
                                NO REGISTRATION FEES! YOU<br />
                                PAY NOTHING TO GYMS.
                            </p>

                            {/* زر الاشتراك - ينتقل لصفحة التسجيل */}
                            <Link to='register' style={{ outline: 'none', textDecoration: 'none' }}>
                                <button
                                    className={`${styles.button} ${plan.highlighted ? styles.buttonHighlight : ''}`}>
                                    Start Today
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
