// Dans le fichier src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import NotFound from './views/NotFound';
import Header from './components/Header';  
import Footer from './components/Footer';  
import './assets/styles/style.scss';
import AppartementDetail from './components/AppartementDetail'; 


function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/appartement/:id" element={<AppartementDetail />} /> 
                


            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
