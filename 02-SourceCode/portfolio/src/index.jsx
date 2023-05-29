import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';

import Header from './pages/includes/Header';
import Footer from './pages/includes/Footer';
import Nav from './pages/includes/Nav';
import Lang from './pages/includes/Lang';

import Home from './pages/views/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Nav />
            <Lang />
            <Routes>
                <Route path='/' element={<Home />}/>
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
);
