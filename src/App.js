import React from 'react';
import { Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';
import Inventory from "./components/Inventory/Inventory";
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shipping from './components/Shipping/Shipping';
import Orders from './components/Orders/Orders';
import Footer from './components/Shered/Footer/Footer';
import Header from './components/Shered/Header/Header';
import PrivacyPolicy from './components/Shered/PrivacyPolicy/PrivacyPolicy';
import About from './components/Shered/About/About';
import Contact from './components/Shered/Contact/Contact';

const App = () => {
  return (
    <div>
      <Header />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="shop" element={<Shop />} />
          <Route path="order_review" element={<OrderReview />} />
          <Route path="manage" element={<PrivateRoute><Inventory /></PrivateRoute>} />
          <Route path="place_order" element={<PrivateRoute><PlaceOrder /></PrivateRoute>} />
          <Route path="shipping" element={<PrivateRoute><Shipping /></PrivateRoute>} />
          <Route path="orders" element={<PrivateRoute><Orders /></PrivateRoute>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about_us" element={<About />} />
          <Route path="contact_us" element={<Contact />} />
          <Route path="privacy_policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
      <Footer />
    </div>
  );
};

export default App;