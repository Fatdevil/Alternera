import './Showroom.css';

const MOCK_ITEMS = [
  { id: 1, title: 'Acne Studios T-shirt', brand: 'Acne', size: 'M', status: 'swap', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80' },
  { id: 2, title: 'Levi\'s 501', brand: 'Levi\'s', size: 'W30 L32', status: 'sell', price: '450 kr', img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=400&q=80' },
  { id: 3, title: 'Vintage Skinnjacka', brand: 'Vintage', size: 'L', status: 'swap-sell', price: '800 kr', img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=400&q=80' },
  { id: 4, title: 'COS Tröja', brand: 'COS', size: 'M', status: 'not-for-sale', img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=400&q=80' },
];

const Showroom = () => {
  return (
    <div>
      <header className="page-header">
        <h1>Mitt Showroom</h1>
      </header>

      <div className="profile-banner">
        <div className="profile-avatar">S</div>
        <div className="profile-info">
          <h2>@stellanb</h2>
          <p>Stockholm • 12 plagg online</p>
        </div>
        <button className="btn btn-outline" style={{marginLeft: 'auto'}}>Redigera</button>
      </div>

      <div className="showroom-grid">
        {MOCK_ITEMS.map((item) => (
          <div key={item.id} className="item-card">
            <div className="image-container">
              <img src={item.img} alt={item.title} />
              {item.status === 'sell' && <span className="badge badge-sell">Säljes</span>}
              {item.status === 'swap' && <span className="badge badge-swap">Bytes</span>}
              {item.status === 'swap-sell' && <span className="badge badge-hybrid">Byte / Köp</span>}
              {item.status === 'not-for-sale' && <span className="badge badge-locked">Privat</span>}
            </div>
            <div className="item-details">
              <span className="price-tag">{item.price || 'Bytes'}</span>
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
