import { useState } from 'react';
import { X, Heart } from 'lucide-react';
import './Swap.css';

const SWAP_POOL = [
  { id: 101, title: 'Carhartt WIP Jacka', size: 'M', brand: 'Carhartt', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80', user: '@erik_vintage' },
  { id: 102, title: 'Dr. Martens 1460', size: '42', brand: 'Dr. Martens', img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614c3a?auto=format&fit=crop&w=600&q=80', user: '@sneakerhead' },
  { id: 103, title: 'Ganni Klänning', size: '38', brand: 'Ganni', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80', user: '@fashionista' }
];

const Swap = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('');

  const handleSwipe = (dir: 'left' | 'right') => {
    setDirection(dir);
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
      setDirection('');
    }, 300); // match CSS animation
  };

  if (currentIndex >= SWAP_POOL.length) {
    return (
      <div className="swap-empty">
        <header className="page-header">
          <h1>Upptäck</h1>
        </header>
        <div className="empty-state">
          <Heart size={48} color="#ddd" />
          <p>Inga fler plagg i din storlek just nu!</p>
          <button className="btn btn-primary" onClick={() => setCurrentIndex(0)}>Börja om</button>
        </div>
      </div>
    );
  }

  const currentItem = SWAP_POOL[currentIndex];

  return (
    <div className="swap-container">
      <header className="page-header">
        <h1>Upptäck</h1>
      </header>

      <div className="swipe-area">
        <div className={`swipe-card ${direction}`}>
          <img src={currentItem.img} alt={currentItem.title} className="card-img" />
          <div className="card-overlay">
            <div className="card-info">
              <h2>{currentItem.brand}</h2>
              <p>{currentItem.title} • {currentItem.size}</p>
              <span className="card-user">{currentItem.user}</span>
            </div>
          </div>
        </div>

        <div className="swipe-controls">
          <button className="swipe-btn pass-btn" onClick={() => handleSwipe('left')}>
            <X size={32} />
          </button>
          <button className="swipe-btn like-btn" onClick={() => handleSwipe('right')}>
            <Heart size={32} fill="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Swap;
