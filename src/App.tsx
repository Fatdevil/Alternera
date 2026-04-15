import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Showroom from './pages/Showroom';
import Swap from './pages/Swap';
import Inbox from './pages/Inbox';
import TradeRoom from './pages/TradeRoom';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Navigate to="/showroom" replace />} />
          <Route path="/showroom" element={<><Showroom /><Navigation /></>} />
          <Route path="/swap" element={<><Swap /><Navigation /></>} />
          <Route path="/inbox" element={<><Inbox /><Navigation /></>} />
          <Route path="/trade" element={<TradeRoom />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
