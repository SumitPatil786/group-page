import { Button, Container } from 'react-bootstrap';
import './Hero.css';        // create this CSS file for the background image & overlay
import heroBg from '../assets/hero-bg.jpg';
import './Hero.css';


export default function Hero() {
  return (
   <header
  className="hero-image d-flex flex-column justify-content-end text-white"
  style={{ '--hero-bg': `url(${heroBg}) center/cover no-repeat` }}
>

      <Container className="pb-5">
        <h1 className="display-5 fw-bold">Computer Engineering</h1>
        <p>142,765 Computer Engineers follow this</p>
        <Button variant="light" className="d-lg-none fw-semibold">
          Join Group
        </Button>
      </Container>
    </header>
  );
}
