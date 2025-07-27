import React from 'react'
import { BrowserRouter as Router, Routes, Route,   useLocation } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import SignUpForm from "./pages/SignUpForm";
import PrivateRoute from './utils/PrivateRoute';
import Gallery from './pages/Gallery';
import MoviesDetail from './pages/MoviesDetail';


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute><Gallery /></PrivateRoute>} />
         <Route path="/movies/:id" element={<PrivateRoute><MoviesDetail /></PrivateRoute>} />
        <Route path="/login/page/" element={<LoginForm /> } />
        <Route path="/signup/page/" element={<SignUpForm/> } />
        

      </Routes>
    </Router>
  );
}

export default App