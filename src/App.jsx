import React from 'react'
import { BrowserRouter as Router, Routes, Route,   useLocation } from "react-router-dom";
import LoginForm from "./components/forms/LoginForm";
import SignUpForm from "./components/forms/SignUpForm";
import PrivateRoute from './utils/PrivateRoute';
import Gallery from './pages/Gallery';
import Movies from './pages/Gallery';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute><Gallery /></PrivateRoute>} />
         <Route path="/movies" element={<PrivateRoute><Movies /></PrivateRoute>} />
        <Route path="/login/page/" element={<LoginForm /> } />
        <Route path="/signup/page/" element={<SignUpForm/> } />
        

      </Routes>
    </Router>
  );
}

export default App