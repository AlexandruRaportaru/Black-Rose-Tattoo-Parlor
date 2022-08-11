import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutUs, Artists, Map, Header, Intro, Reviews, Appointment } from './container';
import { Navbar, Footer } from './components';
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
  </div>
);

const AppointmentPage = () => (
  <div>
    <Navbar />
    <Appointment />
    <Footer />
</div>
);

export default App;
