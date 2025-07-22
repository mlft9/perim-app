import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ProductListPage from './pages/ProductListPage';
import AddProductPage from './pages/AddProductPage';
import CalendarPage from './pages/CalendarPage';
import './App.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/ajouter" element={<AddProductPage />} />
        <Route path="/calendrier" element={<CalendarPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#1e1e1e',
        padding: '1rem',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#4caf50' : '#fff' })}>📋 Produits</NavLink>
        <NavLink to="/ajouter" style={({ isActive }) => ({ color: isActive ? '#4caf50' : '#fff' })}>➕ Ajouter</NavLink>
        <NavLink to="/calendrier" style={({ isActive }) => ({ color: isActive ? '#4caf50' : '#fff' })}>📆 Calendrier</NavLink>
      </nav>

      <div style={{ padding: '1rem' }}>
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
