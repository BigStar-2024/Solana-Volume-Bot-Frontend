import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Bot from './pages/Bot';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/memebot' element={<Bot />}  />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
