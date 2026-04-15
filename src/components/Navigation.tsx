import { NavLink } from 'react-router-dom';
import { Shirt, RefreshCw, MessageCircle } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="bottom-nav">
      <NavLink to="/showroom" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <Shirt size={24} />
        <span>Garderob</span>
      </NavLink>
      <NavLink to="/swap" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <div className="swap-icon-wrapper">
          <RefreshCw size={24} color="white" />
        </div>
        <span>Byt</span>
      </NavLink>
      <NavLink to="/inbox" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <MessageCircle size={24} />
        <span>Chatt</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;
