// Importation des bibliothèques et composants nécessaires
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import NotFound from './views/NotFound';
import Header from './components/Header';  
import Footer from './components/Footer';  
import './assets/styles/style.scss';
import AppartementDetail from './components/AppartementDetail'; 

// Définition du composant fonctionnel App
function App() {
    return (
        // Utilisation du composant Router pour gérer la navigation
        <Router>
            {/* Inclusion du composant Header en haut de la page */}
            <Header />
            {/* Utilisation du composant Routes pour définir les différentes routes de l'application */}
            <Routes>
                {/* Route pour la page d'accueil */}
                <Route path="/" element={<Home />} />
                {/* Route pour la page À Propos */}
                <Route path="/about" element={<About />} />
                {/* Route pour gérer les pages non trouvées */}
                <Route path="*" element={<NotFound />} />
                {/* Route dynamique pour afficher les détails d'un appartement en fonction de son ID */}
                <Route path="/appartement/:id" element={<AppartementDetail />} /> 
            </Routes>
            {/* Inclusion du composant Footer en bas de la page */}
            <Footer />
        </Router>
    );
}

// Exportation du composant App pour une utilisation dans d'autres fichiers
export default App;
