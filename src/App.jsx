import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  About,
  Events,
  Whoops404,
  Company,
  Services,
  Location,
} from './pages';
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="company" element={<Company />} />
          <Route path="services" element={<Services />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route path="/events" element={<Events />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}
