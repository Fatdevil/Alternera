import { useState } from 'react';
import { ChevronDown, User, Baby, Activity } from 'lucide-react';
import './Header.css';

const PROFILES = [
  { id: 'mom', name: 'Mamma', icon: User, type: 'Vuxen (M)' },
  { id: 'leo', name: 'Leo', icon: Baby, type: 'Barn (110)' },
  { id: 'sport', name: 'Sport & Fritid', icon: Activity, type: 'Utrustning' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProfile, setActiveProfile] = useState(PROFILES[0]);

  return (
    <div className="global-header-wrapper">
      <header className="page-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="active-profile">
          <div className="profile-icon">
             <activeProfile.icon size={20} />
          </div>
          <div className="profile-text">
            <h1>{activeProfile.name}</h1>
            <span>Swipar just nu som</span>
          </div>
          <ChevronDown size={20} className={\`chevron \${isOpen ? 'open' : ''}\`} />
        </div>
      </header>

      {isOpen && (
        <div className="profile-dropdown">
          <div className="dropdown-overlay" onClick={() => setIsOpen(false)} />
          <div className="dropdown-menu">
            <h3>Välj Profil för hushållet</h3>
            {PROFILES.map((prof) => (
              <div 
                key={prof.id} 
                className={\`dropdown-item \${activeProfile.id === prof.id ? 'active' : ''}\`}
                onClick={() => { setActiveProfile(prof); setIsOpen(false); }}
              >
                <div className="profile-icon">
                  <prof.icon size={20} />
                </div>
                <div className="dropdown-text">
                  <strong>{prof.name}</strong>
                  <span>{prof.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
