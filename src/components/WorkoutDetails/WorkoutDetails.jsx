import React, { useState } from 'react';
import styles from '../WorkoutDetails/WorkoutDetails.module.css';
import { MdArrowBack, MdPlayArrow, MdAdd, MdRemove } from 'react-icons/md';
import { useWorkouts } from '../Context/WorkoutContext';
import contactImage from '../imge/Maskl.png';

export default function WorkoutDetails({ workout, onBack, darkMode }) {
  const { workoutDays, dayWorkouts, faqData } = useWorkouts();
  const [selectedDay, setSelectedDay] = useState(1);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className={`${styles.workoutDetails} ${darkMode ? styles.dark : styles.light}`}>
      <div className={styles.header}>
        <button className={styles.backButton} onClick={onBack}>
          <MdArrowBack />
        </button>
        <h1 className={styles.workoutTitle}>{workout.title}</h1>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.leftSection}>
          <div className={styles.workoutCard}>
            <img src={workout.image} alt={workout.title} className={styles.workoutImage} />
            <div className={styles.workoutBadge}>Challenge</div>
          </div>

          <div className={styles.motivationSection}>
            <h3>Motivation</h3>
            <p>
              It is a long established fact that a reader will be 
              distracted by the readable content of a page when 
              looking at its layout...
            </p>
          </div>

          <div className={styles.faqSection}>
            <h3>FAQ</h3>
            <div className={styles.faqList}>
              {faqData.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <div className={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
                    <span>{faq.question}</span>
                    <span className={styles.faqIcon}>
                      {expandedFAQ === index ? <MdRemove /> : <MdAdd />}
                    </span>
                  </div>
                  {expandedFAQ === index && (
                    <div className={styles.faqAnswer}>
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.challengeHeader}>
            <h2>2023 Get Abs Challenge</h2>
            <div className={styles.daysNavigation}>
              {workoutDays.map((dayData) => (
                <button
                  key={dayData.day}
                  className={`${styles.dayButton} ${selectedDay === dayData.day ? styles.active : ''} ${dayData.active ? styles.available : styles.locked}`}
                  onClick={() => setSelectedDay(dayData.day)}
                  disabled={!dayData.active}
                >
                  Day {dayData.day}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.dailyWorkoutContent}>
            <div className={styles.dayHeader}>
              <h3>Day {selectedDay}'s Workout</h3>
              <button className={styles.skipButton}>Optional</button>
            </div>

            <div className={styles.workoutsList}>
              {(dayWorkouts[selectedDay] || []).map((exercise, index) => (
                <div key={exercise.id} className={styles.exerciseItem}>
                  <div className={styles.exerciseContent}>
                    <div className={styles.exerciseImageContainer}>
                      <img src={exercise.image} alt={exercise.title} className={styles.exerciseImage} />
                      <div className={styles.playButton}><MdPlayArrow /></div>
                      <div className={styles.exerciseCategory}>{exercise.category}</div>
                      {exercise.duration && <div className={styles.exerciseDuration}>{exercise.duration}</div>}
                    </div>
                    <div className={styles.exerciseInfo}>
                      <h4>{exercise.title}</h4>
                      <p>{exercise.description}</p>
                    </div>
                  </div>
                  {index < (dayWorkouts[selectedDay]?.length || 0) - 1 && (
                    <div className={styles.exerciseDivider}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>




         {/* Contact Us */}
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
                  <img src={contactImage} alt="Contact Visual" className={styles.image} />
                </div>
              </div>
    </div>
  );
}
