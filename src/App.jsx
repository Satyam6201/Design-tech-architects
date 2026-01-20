import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main className="transition-colors duration-500">
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <Booking />
      <Contact />
      <Footer />
    </main>
  );
}
export default App;