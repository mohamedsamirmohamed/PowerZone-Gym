import React from 'react';
import logo from '../imge/gold_s_gym_2008-logo-5B7A8ECB44-seeklogo 1.png';
import { useTheme } from '../Context/ThemeContext';
import styles from '../Navbar/Navbar.module.css'; // CSS Module للثيم

export default function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer className={`py-5 px-4 text-white ${darkMode ? styles.dark : styles.light}`}>
      <div className="container text-center">
        {/* اللوجو */}
        <div className="mb-4">
          <div className="d-inline-flex align-items-center justify-content-center bg-warning rounded-circle mb-3" style={{ width: '80px', height: '80px' }}>
            <img src={logo} alt="logo" className="img-fluid" />
          </div>
          <h5 className="text-warning fw-bold">GOLD'S GYM</h5>
        </div>

        {/* الوصف */}
        <div className="mx-auto mb-4" style={{ maxWidth: '600px' }}>
          <p className="text-muted small">
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* الحقوق */}
        <div className="border-top border-secondary pt-3">
          <small className="text-secondary">&copy; 2024 Gold's Gym. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
