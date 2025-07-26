import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { AuthProvider } from './components/Context/Auth.js';
import { ProductsProvider } from './components/Context/ProductsContext.js';
import { RecipesProvider } from './components/Context/RecipesContext.js';
import { WorkoutProvider } from './components/Context/WorkoutContext.js';
import { CaloriesProvider } from './components/Context/CaloriesContext.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RecipesProvider>
  <CaloriesProvider>
   <WorkoutProvider>
<ProductsProvider>
<AuthProvider>
 <App />
  </AuthProvider>
 </ProductsProvider>
    </WorkoutProvider>
  </CaloriesProvider>

   </RecipesProvider>


  
   
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
