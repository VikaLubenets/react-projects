import { Route, BrowserRouter, Routes } from 'react-router-dom';
import BookingPage from './pages/BookingPage/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking/ConfirmedBooking';
import HomePage from './pages/HomePage/HomePage';
import UnderConstruction from './pages/UnderConstruction/UnderConstruction';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmation" element={<ConfirmedBooking />} />
          <Route path="/underconstruction" element={<UnderConstruction />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
