import { useState } from 'react';
import Header from '../components/Header';
import './Showroom.css';

const MOCK_ITEMS = [
  { id: 1, profile: 'mom', title: 'Acne T-shirt', brand: 'Acne', size: 'M', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80' },
  { id: 2, profile: 'mom', title: 'Levi\'s 501', brand: 'Levi\'s', size: 'W30', img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=400&q=80' },
  { id: 3, profile: 'leo', title: 'Vinteroverall', brand: 'Polarn O. Pyret', size: '110', img: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=400&q=80' },
  { id: 4, profile: 'sport', title: 'Hockeyrör', brand: 'Bauer', size: '36', img: 'https://images.unsplash.com/photo-1510006851064-e6056cd0e3a8?auto=format&fit=crop&w=400&q=80' },
];

const Showroom = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredItems = activeTab === 'all' 
    ? MOCK_ITEMS 
    : MOCK_ITEMS.filter(i => i.profile === activeTab);

  return (
    <div>
      <Header />

      <div className="profile-banner">
        <div className="profile-avatar">F</div>
        <div className="profile-info">
          <h2>Familjen Borg</h2>
          <p>Stockholm • 12 plagg uppe för byte</p>
        </div>
        <button className="btn btn-outline" style={{marginLeft: 'auto'}}>Konto</button>
      </div>

      <div className="showroom-tabs">
        <button className={`tab ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>Hela Hushållet</button>
        <button className={`tab ${activeTab === 'mom' ? 'active' : ''}`} onClick={() => setActiveTab('mom')}>Mamma</button>
        <button className={`tab ${activeTab === 'leo' ? 'active' : ''}`} onClick={() => setActiveTab('leo')}>Leo</button>
        <button className={`tab ${activeTab === 'sport' ? 'active' : ''}`} onClick={() => setActiveTab('sport')}>Sport</button>
      </div>

      <div className="showroom-grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="item-card">
            <div className="image-container">
              <img src={item.img} alt={item.title} />
              <span className="badge badge-swap">Bytes</span>
            </div>
            <div className="item-details">
              <span className="price-tag">Öppen</span>
              <p className="item-brand">{item.brand}</p>
              <p className="item-size">{item.size}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showroom;
