import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Advantages from '../components/Advantages';
import Technology from '../components/Technology';
import Benefits from '../components/Benefits';
import WhyChoose from '../components/WhyChoose';
import Stats from '../components/Stats';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Advantages />
        <Technology />
        <Benefits />
        <WhyChoose />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
