import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import logo from '../imge/gold_s_gym_2008-logo-5B7A8ECB44-seeklogo 1.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/Auth';
import { useTheme } from '../Context/ThemeContext';

const Navbar = () => {
  const { logout, loading } = useAuth();
  const navigate = useNavigate();
  const { toggleTheme, darkMode } = useTheme();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [showLoading, setShowLoading] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Show loading overlay when loading or pendingNavigation is set
  useEffect(() => {
    if (loading || pendingNavigation) {
      setShowLoading(true);
    } else {
      setShowLoading(false);
    }
  }, [loading, pendingNavigation]);

  // Navigate after 4 seconds delay if pendingNavigation is set
  useEffect(() => {
    if (!pendingNavigation) return;
    const timer = setTimeout(() => {
      navigate(pendingNavigation);
      setPendingNavigation(null);
      setIsOpen(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [pendingNavigation, navigate]);

  // Handler for NavLink clicks to trigger loading + delay navigation
  const handleNavClick = (e, path) => {
    e.preventDefault(); // prevent immediate navigation
    if (!pendingNavigation) {
      setPendingNavigation(path);
    }
  };

  return (
    <>
      {showLoading && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
        >
          <i
            className="fas fa-spinner fa-spin"
            style={{ fontSize: '3rem', color: '#ffc107' }}
          ></i>
        </div>
      )}
      <nav
        className={`${styles.navbar} ${
          darkMode ? styles.dark : styles.light
        } ${showNavbar ? styles.show : styles.hide}`}
      >
        <img src={logo} alt="Gold's Gym Logo" className={styles.logo} />

        <div className={styles.hamburger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? styles.active : '')}
              onClick={(e) => handleNavClick(e, '/home')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.active : '')}
              onClick={(e) => handleNavClick(e, '/about')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/programs"
              className={({ isActive }) => (isActive ? styles.active : '')}
              onClick={(e) => handleNavClick(e, '/programs')}
            >
              Workout Programs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recipes"
              className={({ isActive }) => (isActive ? styles.active : '')}
              onClick={(e) => handleNavClick(e, '/recipies')}
            >
              Recipes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/store"
              className={({ isActive }) => (isActive ? styles.active : '')}
              onClick={(e) => handleNavClick(e, '/store')}
            >
              Store
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleLogout} className={styles.logoutButton}>
              Logout
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? styles.active : '')}
              onClick={(e) => handleNavClick(e, '/profile')}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <div className={styles.themeToggle}>
              <span className={styles.toggleLabel}>Dark</span>
              <div className={styles.toggleContainer} onClick={toggleTheme}>
                <div
                  className={`${styles.toggleSwitch} ${
                    darkMode ? styles.toggleOn : styles.toggleOff
                  }`}
                >
                  <div className={styles.toggleCircle}>
                    {darkMode ? '🌙' : '☀️'}
                  </div>
                </div>
              </div>
              <span className={styles.toggleLabel}>Light</span>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
