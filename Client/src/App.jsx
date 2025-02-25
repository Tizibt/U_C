import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Screens/Home";
// import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css'; // Import default CSS for toastify
import UserHomeScreen from "./Screens/UserHomeScreen";

const Login = lazy(() => import("./Screens/Login"));
const Signup = lazy(() => import("./Screens/Signup"));
const NotFound = lazy(() => import("./Screens/NotFound"));

const App = () => {
  return (
    <Router>
      <Header/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/homeScreen" element={<UserHomeScreen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <ToastContainer 
        position="top-center" 
        autoClose={1000} 
        hideProgressBar={true} 
        closeOnClick 
        // pauseOnHover  
        theme="colored" 
      />
    </Router>
  );
};

export default App;
