// استيراد React لإنشاء مكون React
import React from 'react';
// استيراد الهُوك useAuth للوصول إلى بيانات المصادقة (userData) من الـ Context
import { useAuth } from '../components/Context/Auth';
// استيراد أيقونات من مكتبة react-icons لعرض أيقونات جانبية في الواجهة
import { FaUserCircle, FaEnvelope, FaPhone } from 'react-icons/fa';

// تعريف مكون Profile لعرض بيانات الملف الشخصي للمستخدم
export default function Profile() {
  // الحصول على بيانات المستخدم من الـ Context
  const { userData } = useAuth();

  // إذا لم يكن هناك بيانات مستخدم (أي لم يتم تسجيل الدخول)
  if (!userData) {
    // عرض رسالة تطلب من المستخدم تسجيل الدخول لعرض الملف الشخصي
    return <h3 className="text-center my-5 text-danger">Please log in to view the profile.</h3>;
  }

  // عرض بيانات الملف الشخصي بشكل جميل باستخدام Bootstrap والكارد
  return (
    // حاوية تحتوي المحتوى مع تباعد عمودي وتوسيط أفقي
    <div className="container my-5 d-flex justify-content-center">
      {/* بطاقة تحتوي معلومات الملف الشخصي مع ظل وتباعد داخلي */}
      <div className="card shadow-lg p-4" style={{ maxWidth: '500px', width: '100%', borderRadius: '20px' }}>
        {/* القسم العلوي مع الأيقونة والعنوان والوصف */}
        <div className="text-center mb-4">
          <FaUserCircle size={80} className="text-primary" /> {/* أيقونة المستخدم بحجم كبير ولون أزرق */}
          <h3 className="mt-3">Profile</h3>                 {/* عنوان الصفحة */}
          <p className="text-muted"> Your Account Information</p> {/* وصف صغير */}
        </div>

        {/* حقل الاسم */}
        <div className="mb-3">
          <label className="form-label fw-bold">
            <FaUserCircle className="me-2" />Name{/* أيقونة اسم المستخدم مع مسافة يمين */}
          </label>
          {/* عرض اسم المستخدم داخل صندوق مظهره مثل حقل الإدخال لكن غير قابل للتعديل */}
          <div className="form-control">{userData.FullName}</div>
        </div>

        {/* حقل البريد الإلكتروني */}
        <div className="mb-3">
          <label className="form-label fw-bold">
            <FaEnvelope className="me-2" />Email {/* أيقونة البريد مع مسافة يمين */}
          </label>
          {/* عرض البريد الإلكتروني */}
          <div className="form-control">{userData.Email}</div>
        </div>

        {/* حقل رقم الهاتف */}
        <div className="mb-3">
          <label className="form-label fw-bold">
            <FaPhone className="me-2" /> Phone {/* أيقونة الهاتف مع مسافة يمين */}
          </label>
          {/* عرض رقم الهاتف */}
          <div className="form-control">{userData.PhoneNumber}</div>
        </div>
      </div>
    </div>
  );
}
