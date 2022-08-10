import React from 'react';

import { AboutUs, Artists, Map, Header, Intro, Reviews, } from './container';
import { Navbar, Footer } from './components';
import './App.css';

const App = () => (
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

export default App;
