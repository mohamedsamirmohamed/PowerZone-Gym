// WorkoutPrograms.jsx

import React, { useState } from 'react';
import styles from '../WorkoutPrograms/WorkoutPrograms.module.css';
import WorkoutDetails from '../WorkoutDetails/WorkoutDetails'; // المكون الجديد
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { MdCalendarToday, MdAccessTime } from 'react-icons/md';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import contactImage1 from '../imge/Maskl.png';

import { useTheme } from '../Context/ThemeContext';
import { useWorkouts } from '../Context/WorkoutContext';

export default function WorkoutPrograms() {
  const { darkMode } = useTheme();
  const {
    freeWorkouts,
    beginnerWorkouts,
    moderateWorkouts,
    weightLossWorkouts,
    StrengthTraining
  } = useWorkouts();

  // State لإدارة الصفحة المعروضة والـ workout المحدد
  const [currentView, setCurrentView] = useState('main'); // 'main' أو 'details'
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  // دالة لفتح تفاصيل التمرين
  const openWorkoutDetails = (workout, category) => {
    setSelectedWorkout({ ...workout, category });
    setCurrentView('details');
  };

  // دالة للرجوع للصفحة الرئيسية
  const goBackToMain = () => {
    setCurrentView('main');
    setSelectedWorkout(null);
  };

  // لو كنا في صفحة التفاصيل، نعرض مكون التفاصيل
  if (currentView === 'details' && selectedWorkout) {
    return (
      <WorkoutDetails 
        workout={selectedWorkout} 
        onBack={goBackToMain}
        darkMode={darkMode}
      />
    );
  }

  // الصفحة الرئيسية
  return (
    <div className={`${styles.workoutPrograms} ${darkMode ? styles.dark : styles.light}`}>

      {/* قسم البرامج المجانية */}
      <section className={styles.freeProgramsSection}>
        <h2 className={styles.sectionTitle}>Free Workout Programs</h2>
        <div className={styles.freeProgramsGrid}>
          {freeWorkouts.map((workout, index) => (
            <div key={index} className={styles.freeProgramCard}>
              <div className={styles.cardImage}>
                <img src={workout.image} alt={workout.title} />
                <div className={styles.cardOverlay}>
                  <h3 className={styles.cardTitle}>{workout.title}</h3>
                </div>
              </div>
              <div className={styles.cardActions}>
                <button className={styles.btnSecondary}>Learn Today</button>
                <button 
                  className={styles.btnPrimary}
                  onClick={() => openWorkoutDetails(workout, 'free')}
                >
                  Start Today
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* قسم المبتدئين */}
      <section className={styles.workoutSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Beginner Friendly</h2>
          <p className={styles.sectionSubtitle}>
            Ready to start your fitness journey? Try these easy beginner-friendly programs.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={8}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className={styles.workoutCarousel}
        >
          {beginnerWorkouts.map((workout, index) => (
            <SwiperSlide key={index}>
              <div 
                className={styles.workoutCard}
                onClick={() => openWorkoutDetails(workout, 'beginner')}
                style={{ cursor: 'pointer' }}
              >
                <div className={styles.cardImage}>
                  <img src={workout.image} alt={workout.title} />
                  <div className={styles.workoutOverlay}>
                    <div className={styles.workoutBadge}>
                      <MdCalendarToday className={styles.badgeIcon} />
                      {workout.days}
                    </div>
                    <div className={styles.workoutBadge}>
                      <MdAccessTime className={styles.badgeIcon} />
                      {workout.time}
                    </div>
                  </div>
                </div>
                <div className={styles.workoutTitleOverlay}>
                  <h3 className={styles.workoutTitle}>{workout.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* قسم المستوى المتوسط والمتقدم */}
      <section className={styles.workoutSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Moderate to Advanced</h2>
          <p className={styles.sectionSubtitle}>
            Looking for a challenge? These programs are designed for intermediate to advanced levels.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={8}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className={styles.workoutCarousel}
        >
          {moderateWorkouts.map((workout, index) => (
            <SwiperSlide key={index}>
              <div 
                className={styles.workoutCard}
                onClick={() => openWorkoutDetails(workout, 'moderate')}
                style={{ cursor: 'pointer' }}
              >
                <div className={styles.cardImage}>
                  <img src={workout.image} alt={workout.title} />
                  <div className={styles.workoutTitleOverlay}>
                    <h3 className={styles.workoutTitle}>{workout.title}</h3>
                  </div>
                  <div className={styles.workoutOverlay}>
                    <div className={styles.workoutBadge}>
                      <MdCalendarToday className={styles.badgeIcon} />
                      {workout.days}
                    </div>
                    <div className={`${styles.workoutBadge} ${styles.time}`}>
                      <MdAccessTime className={styles.badgeIcon} />
                      {workout.time}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* قسم فقدان الوزن */}
      <section className={styles.workoutSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Weight Loss</h2>
          <p className={styles.sectionSubtitle}>
            Burn fat and boost your metabolism with these targeted programs.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={8}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className={styles.workoutCarousel}
        >
          {weightLossWorkouts.map((workout, index) => (
            <SwiperSlide key={index}>
              <div 
                className={styles.workoutCard}
                onClick={() => openWorkoutDetails(workout, 'weightLoss')}
                style={{ cursor: 'pointer' }}
              >
                <div className={styles.cardImage}>
                  <img src={workout.image} alt={workout.title} />
                  <div className={styles.workoutTitleOverlay}>
                    <h3 className={styles.workoutTitle}>{workout.title}</h3>
                  </div>
                  <div className={styles.workoutOverlay}>
                    <div className={styles.workoutBadge}>
                      <MdCalendarToday className={styles.badgeIcon} />
                      {workout.days}
                    </div>
                    <div className={`${styles.workoutBadge} ${styles.time}`}>
                      <MdAccessTime className={styles.badgeIcon} />
                      {workout.time}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* قسم تمارين القوة */}
      <section className={styles.workoutSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Strength Training</h2>
          <p className={styles.sectionSubtitle}>
            Build muscle and increase strength with these powerful workout plans.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={8}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className={styles.workoutCarousel}
        >
          {StrengthTraining.map((workout, index) => (
            <SwiperSlide key={index}>
              <div 
                className={styles.workoutCard}
                onClick={() => openWorkoutDetails(workout, 'strength')}
                style={{ cursor: 'pointer' }}
              >
                <div className={styles.cardImage}>
                  <img src={workout.image} alt={workout.title} />
                  <div className={styles.workoutTitleOverlay}>
                    <h3 className={styles.workoutTitle}>{workout.title}</h3>
                  </div>
                  <div className={styles.workoutOverlay}>
                    <div className={styles.workoutBadge}>
                      <MdCalendarToday className={styles.badgeIcon} />
                      {workout.days}
                    </div>
                    <div className={`${styles.workoutBadge} ${styles.time}`}>
                      <MdAccessTime className={styles.badgeIcon} />
                      {workout.time}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Contact Us section */}
      <div className={`${styles.container9} ${darkMode ? styles.dark : styles.light}`}>
        <div className={styles.left}>
          <h2 className={styles.title}>///Contact Us</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
          <input type="text" placeholder="Enter your name" className={styles.input} />
          <input type="email" placeholder="xyz@gmail.com" className={styles.input} />
          <textarea placeholder="Enter your message..." className={styles.textarea}></textarea>
        </div>
        <div className={styles.right}>
          <img src={contactImage1} alt="Contact Visual" className={styles.image} />
        </div>
      </div>
    </div>
  );
}