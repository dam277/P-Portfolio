// Import libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Import css
import './resources/css/globalStyle.css';

// Import includes
import Header from './pages/includes/Header';
import Footer from './pages/includes/Footer';

// Import views
import Home from './pages/views/home';
import About from './pages/views/home/about';
import Works from './pages/views/works';
import Details from './pages/views/works/details';
import E404 from './pages/views/errors/404';

// Import components
import Competences from './pages/components/about/competences';
import StudyPath from './pages/components/about/studyPath';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}>
                    <Route path='studyPath' element={<StudyPath />} />
                    <Route path='competences' element={<Competences />} />
                </Route>
                <Route path='/works'>
                    <Route index element={<Works />} />
                    <Route path=':id' element={< Details />} />
                </Route>
                <Route path='*' element={<E404 />}/>
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
);
