import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/header';
import Accueil from './pages/accueil';
import Menu from './pages/menu';
import Contact from './pages/contact';
import Footer from './pages/footer';

import './App.css';



function App() {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
