import './Inbox.css';

const CONVERSATIONS = [
  { id: 1, user: '@vintage_lover', avatar: 'V', type: 'hybrid', summary: 'Erbjuder: Levi\'s 501 + 200 kr', status: 'Väntar på dig', unread: true },
  { id: 2, user: '@anna_p', avatar: 'A', type: 'swap', summary: 'Ren bytesförfrågan (Ganni)', status: 'Avslutad', unread: false },
  { id: 3, user: '@sneakerhead', avatar: 'S', type: 'buy', summary: 'Vill köpa din Skinnjacka (800 kr)', status: 'Accepterad', unread: false },
];

const Inbox = () => {
  return (
    <div>
      <header className="page-header">
        <h1>Meddelanden</h1>
      </header>
      
      <div className="inbox-list">
        {CONVERSATIONS.map(conv => (
          <div key={conv.id} className={`inbox-item ${conv.unread ? 'unread' : ''}`}>
            <div className="inbox-avatar">{conv.avatar}</div>
            
            <div className="inbox-content">
              <div className="inbox-header-row">
                <h3>{conv.user}</h3>
                {conv.type === 'hybrid' && <span className="type-badge hybrid">Byte+Cash</span>}
                {conv.type === 'swap' && <span className="type-badge swap">Rakt Byte</span>}
                {conv.type === 'buy' && <span className="type-badge buy">Köp</span>}
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
