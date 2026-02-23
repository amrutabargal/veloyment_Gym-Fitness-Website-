import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProgramsPage } from './pages/ProgramsPage';
import { AboutContactPage } from './pages/AboutContactPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#0A0A0A]">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/about" element={<AboutContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
