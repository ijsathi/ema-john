import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';
import Inventory from "./components/Inventory/Inventory";
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="shop" element={<Shop />} />
        <Route path="order_review" element={<OrderReview />} />
        <Route path="manage" element={<Inventory />} />
        <Route path="place_order" element={<PlaceOrder />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;