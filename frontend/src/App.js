import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/header';

import Accueil from './pages/accueil';
import Menu from './pages/menu';
import Contact from './pages/contact';

import './App.css';


function App() {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            
        </Router>
    );
}

export default App;
