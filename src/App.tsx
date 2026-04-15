import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Showroom from './pages/Showroom';
import Swap from './pages/Swap';
import Inbox from './pages/Inbox';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Navigate to="/showroom" replace />} />
          <Route path="/showroom" element={<Showroom />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/inbox" element={<Inbox />} />
        </Routes>
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
