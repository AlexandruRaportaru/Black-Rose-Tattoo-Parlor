import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutUs, Artists, Map, Header, Intro, Reviews, Appointment } from './container';
import { Navbar, Footer, Scroll } from './components';

import './App.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DashboardPage />} />
        <Route path='/appointment' element={<AppointmentPage />} />
      </Routes>
    </Router>
  )
}
const DashboardPage = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Artists />
    <Intro />
    <Reviews />
    <Map />
    <Footer />
    <Scroll />
  </div>
);

const AppointmentPage = () => (
  <div>
    <Appointment />
    <Footer />
    <Scroll />
</div>
);

export default App;
