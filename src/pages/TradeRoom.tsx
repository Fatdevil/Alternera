import { useState } from 'react';
import { ArrowLeft, Plus, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './TradeRoom.css';

const TradeRoom = () => {
  const navigate = useNavigate();
  // Mock data för hushållens inventarier
  const [myItems] = useState([
    { id: 1, title: 'Leos Pjäxor (Stl 30)', price: 200, img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=150&q=80' },
    { id: 2, title: 'Leos Vinteroverall', price: 400, img: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=150&q=80' }
  ]);
  
  const [theirItems] = useState([
    { id: 3, title: 'Damtopp Ganni (Stl M)', price: 350, img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=150&q=80' },
    { id: 4, title: 'Keps', price: 100, img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=150&q=80' }
  ]);

  // Varukorgen
  const [myOffer, setMyOffer] = useState<{ id: number; title: string; price: number; img: string }[]>([]);
  const [theirOffer, setTheirOffer] = useState<{ id: number; title: string; price: number; img: string }[]>([]);
  
  const [myCash, setMyCash] = useState(0);
  const [theirCash, setTheirCash] = useState(0);

  const toggleItem = (item: any, isMine: boolean) => {
    if (isMine) {
      setMyOffer(prev => prev.includes(item) ? prev.filter(i => i.id !== item.id) : [...prev, item]);
    } else {
      setTheirOffer(prev => prev.includes(item) ? prev.filter(i => i.id !== item.id) : [...prev, item]);
    }
  };

  const myTotalValue = myOffer.reduce((acc, curr) => acc + curr.price, 0) + myCash;
  const theirTotalValue = theirOffer.reduce((acc, curr) => acc + curr.price, 0) + theirCash;

  return (
    <div className="trade-room">
      <header className="trade-header">
        <button className="back-btn" onClick={() => navigate(-1)}><ArrowLeft size={24} /></button>
        <div className="trade-peer">
          <div className="peer-avatar">A</div>
          <div>
            <h2>@anna_p's Hushåll</h2>
            <span>Förhandling pågår</span>
          </div>
        </div>
      </header>

      <div className="trade-table">
        <div className="trade-side mine">
          <div className="side-header">
            <h3>Vi Ger</h3>
            <span className="value-badge">{myTotalValue} kr</span>
          </div>
          <div className="offer-zone">
            {myOffer.map(item => (
              <img key={item.id} src={item.img} alt={item.title} className="offered-item" />
            ))}
            {myCash > 0 && <div className="cash-badge">+{myCash} kr</div>}
            
            <div className="inventory-drawer">
              <span className="drawer-label">Våra plagg:</span>
              <div className="drawer-items">
                {myItems.map(item => (
                  <div key={item.id} className={\`drawer-item \${myOffer.includes(item) ? 'selected' : ''}\`} onClick={() => toggleItem(item, true)}>
                    <img src={item.img} />
                    {myOffer.includes(item) && <div className="selected-overlay"><Check size={16}/></div>}
                  </div>
                ))}
                <button className="add-cash-btn" onClick={() => setMyCash(prev => prev + 50)}>+50 kr</button>
              </div>
            </div>
          </div>
        </div>

        <div className="trade-divider">
          <RefreshIcon />
        </div>

        <div className="trade-side theirs">
          <div className="side-header">
            <h3>De Ger</h3>
            <span className="value-badge">{theirTotalValue} kr</span>
          </div>
          <div className="offer-zone">
            {theirOffer.map(item => (
              <img key={item.id} src={item.img} alt={item.title} className="offered-item" />
            ))}
            
            <div className="inventory-drawer">
               <span className="drawer-label">Att plocka från Anna:</span>
               <div className="drawer-items">
                {theirItems.map(item => (
                  <div key={item.id} className={\`drawer-item \${theirOffer.includes(item) ? 'selected' : ''}\`} onClick={() => toggleItem(item, false)}>
                    <img src={item.img} />
                    {theirOffer.includes(item) && <div className="selected-overlay"><Check size={16}/></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="trade-actions">
        <div className="balance-info">
          {myTotalValue === theirTotalValue ? (
            <span className="balance-ok">Erbjudandet är jämnt!</span>
          ) : (
            <span className="balance-warn">Värdeskillnad: {Math.abs(myTotalValue - theirTotalValue)} kr</span>
          )}
        </div>
        <button className="btn btn-primary submit-offer-btn">Skicka Erbjudande</button>
      </div>
    </div>
  );
};

const RefreshIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
    <path d="M16 21v-5h5" />
  </svg>
);

export default TradeRoom;
