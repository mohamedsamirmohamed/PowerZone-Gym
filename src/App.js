import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import PricingPlans from './components/PricingPlans/PricingPlans';
import Layout from './components/Layout/Layout';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Profile from './components/Profile';
import { ThemeProvider } from './components/Context/ThemeContext';
import About from './components/About/About';
import WorkoutPrograms from './components/WorkoutPrograms/WorkoutPrograms';
import WorkoutDetails from './components/WorkoutDetails/WorkoutDetails';
import Recipies from './components/Recipies/Recipies';
import Store from './components/Store/Store';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {


  const routers = createBrowserRouter([
    // ✅ أول ما تفتح الموقع يظهر PricingPlans بدون Navbar/Footer
    {path: '/',element: <PricingPlans />},
    {path: '/register',element: <Register />},
    {path: '/login',element: <Login />},

    // ✅ المسارات اللي فيها Navbar/Footer
    {path: '/',element: <Layout />,children: [
        // حط صفحات تانية هنا جوه Layout
         { path: 'home', element: <Home /> },
         { path: 'profile', element: <Profile /> },
         { path: 'about', element: <About /> },
         { path: 'Programs', element: <WorkoutPrograms /> },
         { path: 'workoutDetails', element: <WorkoutDetails/> },
         { path: 'recipies', element: <Recipies/> },
         { path: 'store', element: <Store/> },
         { path: 'cart', element: <Cart/> },
         { path: 'checkout', element: <Checkout/> },
      ]
    }
  ]);

  return (
    <>
     <ThemeProvider>
<RouterProvider router={routers} />
     </ThemeProvider>
      
    </>
  );
}

export default App;
