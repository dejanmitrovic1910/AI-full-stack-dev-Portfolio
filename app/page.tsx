import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <WhyWorkWithMe />
      <Footer />
    </>
  );
}
