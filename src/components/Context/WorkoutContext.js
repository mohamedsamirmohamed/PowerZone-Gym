// WorkoutContext.js
import React, { createContext, useContext } from 'react';

import contactImage from '../imge/Yoga.png';
import Group from '../imge/Group 156.png';
import Cardio from '../imge/Cardio.png';
import image from '../imge/image 27.png';
import Mask2 from '../imge/Mask group (1).png';
import Mask3 from '../imge/Mask3.png';
import image33 from '../imge/image 31.png';
import image28 from '../imge/image 28.png';
import image23 from '../imge/image 32.png';
import Group99 from '../imge/88.png';
import group88 from '../imge/Mask group88.png';
import group100 from '../imge/100.png';
import image100 from '../imge/image 36.png';
import group77 from '../imge/Mask group77.png';
import group202 from '../imge/Mask group202.png';

const WorkoutContext = createContext();

export function WorkoutProvider({ children }) {
  const freeWorkouts = [
    { title: 'Beginner Friendly', image: contactImage, difficulty: 'beginner' },
    { title: 'Upper Body Strength', image: Group, difficulty: 'intermediate' },
    { title: 'Weight Loss', image: Cardio, difficulty: 'beginner' },
    { title: 'Full Body Burn', image: Cardio, difficulty: 'advanced' },
    { title: 'Strength Training', image: Cardio, difficulty: 'intermediate' }
  ];

  const beginnerWorkouts = [
    { title: 'Get Abs Challenge', image: image, days: '14 days', time: '20-40 mins' },
    { title: 'Cardio Starter Program', image: Mask2, days: '7 days', time: '15-25 mins' },
    { title: 'Full Body Beginner', image: Mask3, days: '21 days', time: '30-45 mins' }
  ];

  const moderateWorkouts = [
    { title: 'Core Power Challenge', image: image33, days: '28 days', time: '25-35 mins' },
    { title: 'HIIT Training Program', image: image28, days: '14 days', time: '20-30 mins' },
    { title: 'Strength Building', image: image23, days: '30 days', time: '35-50 mins' }
  ];

  const weightLossWorkouts = [
    { title: 'Fat Burn Challenge', image: Group99, days: '21 days', time: '30-45 mins' },
    { title: 'Cardio Blast Program', image: group88, days: '14 days', time: '25-40 mins' },
    { title: 'Metabolic Boost', image: group100, days: '28 days', time: '35-50 mins' }
  ];

  const StrengthTraining = [
    { title: 'Fat Burn Challenge', image: image100, days: '21 days', time: '30-45 mins' },
    { title: 'Cardio Blast Program', image: group77, days: '14 days', time: '25-40 mins' },
    { title: 'Metabolic Boost', image: group202, days: '28 days', time: '35-50 mins' }
  ];

  const workoutDays = [
    { day: 1, active: true },
    { day: 2, active: true },
    { day: 3, active: true },
    { day: 4, active: false },
    { day: 5, active: false },
    { day: 6, active: false },
    { day: 7, active: false },
  ];

  const dayWorkouts = {
    1: [
      {
        id: 1,
        title: "5 min warm up",
        subtitle: "Easy Warm-up Workout",
        description: "An easy set of movements to make you\nready to go warm-ups and better\nactivating of muscles",
        image: contactImage,
        category: "WARM UP",
        duration: "5 min",
        isOptional: false
      },
      {
        id: 2,
        title: "Total Core Workout",
        subtitle: "Full Core Workout",
        description: "An easy set of movements to make you\nready to go warm-ups and better\nactivating of muscles",
        image: Group,
        category: "TOTAL CORE WORKOUT",
        isOptional: false
      }
    ],
    2: [
      {
        id: 3,
        title: "Leg Burn Starter",
        subtitle: "Leg Focus",
        description: "Basic leg movements to improve strength and flexibility.",
        image: Cardio,
        category: "LEG WORKOUT",
        duration: "20 min",
        isOptional: false
      }
    ],
    3: [
      {
        id: 4,
        title: "Upper Body Stretch",
        subtitle: "Stretching",
        description: "Relaxing stretches for recovery and flexibility.",
        image: Group,
        category: "STRETCHING",
        duration: "10 min",
        isOptional: true
      }
    ]
  };

  const faqData = [
    {
      question: "What is the goal of this program ?",
      answer: "This program is designed to help you build core strength, improve flexibility, and establish a consistent fitness routine. Perfect for beginners looking to start their fitness journey."
    },
    {
      question: "How much weight will I lose on this program",
      answer: "Weight loss varies by individual, but most people see 1-2 pounds per week when combining this program with a healthy diet. Results depend on your starting point, consistency, and nutrition."
    },
    {
      question: "What if I find the exercise too easy or too hard ?",
      answer: "Each exercise has modifications! If it's too easy, try the advanced variation. If it's too hard, use the beginner modification. Listen to your body and progress at your own pace."
    },
    {
      question: "What should I eat during this program?",
      answer: "Focus on whole foods: lean proteins, vegetables, fruits, and whole grains. Stay hydrated and eat balanced meals. We recommend consulting with a nutritionist for personalized advice."
    },
    {
      question: "It's too hard! Can I split the workout up or skip some videos ?",
      answer: "Absolutely! It's better to do something than nothing. You can split workouts into smaller sessions or modify exercises. The key is consistency, not perfection."
    }
  ];

  return (
    <WorkoutContext.Provider value={{
      freeWorkouts,
      beginnerWorkouts,
      moderateWorkouts,
      weightLossWorkouts,
      StrengthTraining,
      workoutDays,
      dayWorkouts,
      faqData
    }}>
      {children}
    </WorkoutContext.Provider>
  );
}

export function useWorkouts() {
  return useContext(WorkoutContext);
}
