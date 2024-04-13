import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from "./components/HomePage";
import Header from "./components/header";
import Footer from "./components/footer";
import Manufacturing from "./components/Manufacturing";


function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path="/products" />
        <Route path="/manufacturing" element={<Manufacturing />} />
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
