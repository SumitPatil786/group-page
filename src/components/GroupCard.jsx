import { Nav, Button, Row, Col, Dropdown } from 'react-bootstrap';
import { FaUserPlus, FaEllipsisH } from 'react-icons/fa';

export default function GroupCard() {
  return (
    <>
      {/* Tabs row */}
      <Nav variant="underline" defaultActiveKey="all" className="border-bottom mb-3">
        {['All Posts(32)', 'Article', 'Event', 'Education', 'Job'].map((t) => (
          <Nav.Item key={t}>
            <Nav.Link eventKey={t}>{t}</Nav.Link>
          </Nav.Item>
        ))}

        <div className="ms-auto d-flex gap-2">
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary" className="rounded">
              Filter: All
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Article</Dropdown.Item>
              <Dropdown.Item>Event</Dropdown.Item>
              <Dropdown.Item>Education</Dropdown.Item>
              <Dropdown.Item>Job</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button variant="primary" className="d-none d-lg-flex align-items-center gap-1">
            <FaUserPlus />
            Join Group
          </Button>
        </div>
      </Nav>
    </>
  );
}
