import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

export default function TopBar() {
  return (
    <Navbar expand="lg" bg="white" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/">
          <img src="/logo192.png" alt="Logo" height="32" />
        </Navbar.Brand>

        <Form className="d-flex mx-auto w-50 d-none d-lg-flex">
          <FormControl
            type="search"
            placeholder="Search for your favorite groups..."
            className="me-2 rounded-pill bg-light"
            aria-label="Search"
          />
          <Button variant="outline-secondary" className="rounded-pill">
            <FaSearch />
          </Button>
        </Form>

        <Nav>
          <Nav.Link href="#login" className="fw-bold text-primary">
            Create account
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
