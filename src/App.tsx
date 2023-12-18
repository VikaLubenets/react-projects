import { Route, BrowserRouter, Routes } from 'react-router-dom';
import BookingPage from './pages/BookingPage/BookingPage';
import HomePage from './pages/HomePage/HomePage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
