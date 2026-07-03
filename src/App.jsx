import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import VisitUs from './components/VisitUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Reviews />
        <VisitUs />
      </main>
      <Footer />
    </div>
  )
}

export default App
