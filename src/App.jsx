import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GroupCard from './components/GroupCard';
import Post from './components/Post';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <Container className="py-4">
        <Row className="g-4">
          {/* Main feed */}
          <Col lg={8}>
            <GroupCard />
            <Post />
            <Post />
            <Post />
          </Col>

          {/* Right‑hand sidebar (hidden on <lg) */}
          <Col lg={4} className="d-none d-lg-block">
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
}
