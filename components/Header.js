import Image from 'next/image';
import logo from '../public/assets/logo.jpg';

export default function Header() {
  return (
    <header>
      <div className="nav">
        <a href="#top" className="brand">
          <Image src={logo} alt="Java Fruit and CV Intiplant Agro Lestari logo" width={42} height={42} />
          <div className="brand-text">
            <strong>Java Fruit</strong>
            <span>CV Intiplant Agro Lestari</span>
          </div>
        </a>
        <nav className="links">
          <a href="#about">About</a>
          <a href="#advantages">Advantages</a>
          <a href="#technology">Technology</a>
          <a href="#why">Why Us</a>
          <a href="#plantation">Plantation</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="btn">Contact Us</a>
      </div>
    </header>
  );
}
