import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
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
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;