import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './Inbox.css';

const CONVERSATIONS = [
  { id: 1, user: '@anna_ps Hushåll', avatar: 'A', type: 'hybrid', summary: 'Förhandlar: Pjäxor mot Damtopp', status: 'Väntar på dig', unread: true },
  { id: 2, user: '@vintage_lover', avatar: 'V', type: 'swap', summary: 'Ren bytesförfrågan (Fotbollsskor)', status: 'Avslutad', unread: false },
];

const Inbox = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      
      <div className="inbox-list">
        {CONVERSATIONS.map(conv => (
          <div key={conv.id} className={`inbox-item ${conv.unread ? 'unread' : ''}`} onClick={() => navigate('/trade')}>
            <div className="inbox-avatar">{conv.avatar}</div>
            
            <div className="inbox-content">
              <div className="inbox-header-row">
                <h3>{conv.user}</h3>
                {conv.type === 'hybrid' && <span className="type-badge hybrid">Byte+Cash</span>}
                {conv.type === 'swap' && <span className="type-badge swap">Rakt Byte</span>}
              </div>
              
              <p className="inbox-summary">{conv.summary}</p>
              <p className="inbox-status">{conv.status}</p>
            </div>
            {conv.unread && <div className="unread-dot"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inbox;
