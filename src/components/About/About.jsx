import React from 'react'
import styless from '../About/About.module.css';
import { useTheme } from '../Context/ThemeContext';
import contactImage from '../imge/Maskl.png';
export default function About() {
     const { darkMode } = useTheme();
  return <>
  
 <div className={styless.container}>
      <div className={styless.hero}>
        <div className={styless.heroContent}>
          <h1 className={styless.title}>
            get more out of your<br />
            <span className={styless.highlight}>Fitness Journey</span>
          </h1>
          <p className={styless.subtitle}>Join the community to track your progress</p>
          <p className={styless.description}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque
            ipsa quae ab illo inventore veritatis et quasi architecto beatae
            vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit.
          </p>
          <button className={styless.ctaButton}>Create Account</button>
        </div>
        
        <div className={styless.features}>
          <div className={styless.featureCard}>
            <div className={styless.icon}>
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle cx="25" cy="25" r="20" stroke="#FFD700" strokeWidth="3" fill="none"/>
                <circle cx="25" cy="25" r="12" fill="#FFD700"/>
                <circle cx="21" cy="21" r="2" fill="#000"/>
                <circle cx="29" cy="21" r="2" fill="#000"/>
                <path d="M20 29c2 3 3 3 5 3s3 0 5-3" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
                <path d="M10 10l8 8M40 10l-8 8M10 40l8-8M40 40l-8-8" stroke="#FFD700" strokeWidth="2"/>
                <path d="M8 8l5 5M42 8l-5 5M8 42l5-5M42 42l-5-5" stroke="#FFD700" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className={styless.cardContent}>
              <h3>1000+ Being</h3>
              <p>physically active can improve your brain health, help manage weight.</p>
            </div>
          </div>
          
          <div className={styless.featureCard}>
            <div className={styless.icon}>
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle cx="25" cy="25" r="20" stroke="#FFD700" strokeWidth="3" fill="none"/>
                <circle cx="25" cy="25" r="12" fill="#FFD700"/>
                <circle cx="21" cy="21" r="2" fill="#000"/>
                <circle cx="29" cy="21" r="2" fill="#000"/>
                <path d="M20 29c2 3 3 3 5 3s3 0 5-3" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
                <path d="M10 10l8 8M40 10l-8 8M10 40l8-8M40 40l-8-8" stroke="#FFD700" strokeWidth="2"/>
                <path d="M8 8l5 5M42 8l-5 5M8 42l5-5M42 42l-5-5" stroke="#FFD700" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className={styless.cardContent}>
              <h3>1000+ Being</h3>
              <p>physically active can improve your brain health, help manage weight.</p>
            </div>
          </div>
          
          <div className={styless.featureCard}>
            <div className={styless.icon}>
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle cx="25" cy="25" r="20" stroke="#FFD700" strokeWidth="3" fill="none"/>
                <circle cx="25" cy="25" r="12" fill="#FFD700"/>
                <circle cx="21" cy="21" r="2" fill="#000"/>
                <circle cx="29" cy="21" r="2" fill="#000"/>
                <path d="M20 29c2 3 3 3 5 3s3 0 5-3" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
                <path d="M10 10l8 8M40 10l-8 8M10 40l8-8M40 40l-8-8" stroke="#FFD700" strokeWidth="2"/>
                <path d="M8 8l5 5M42 8l-5 5M8 42l5-5M42 42l-5-5" stroke="#FFD700" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className={styless.cardContent}>
              <h3>1000+ Being</h3>
              <p>physically active can improve your brain health, help manage weight.</p>
            </div>
          </div>
        </div>
      </div>
    </div>




        {/* Contact Us */}
     <div className={`${styless.container9} ${darkMode ? styless.dark : styless.light}`}>
          <div className={styless.left}>
            <h2 className={styless.title}>///Contact Us</h2>
            <p className={styless.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <input type="text" placeholder="Enter your name" className={styless.input} />
            <input type="email" placeholder="xyz@gmail.com" className={styless.input} />
            <textarea placeholder="Enter your message..." className={styless.textarea}></textarea>
          </div>
          <div className={styless.right}>
            <img src={contactImage} alt="Contact Visual" className={styless.image} />
          </div>
        </div>
  </>
}
