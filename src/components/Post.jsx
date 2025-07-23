import { Card, Button, Dropdown } from 'react-bootstrap';
import { FaShareAlt } from 'react-icons/fa';

export default function Post() {
  return (
    <Card className="mb-3">
      <Card.Img
        variant="top"
        src="https://source.unsplash.com/random/900×400?tech"
        alt="post cover"
      />
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">✍️ Article</Card.Subtitle>
        <Card.Title className="fw-bold">
          What if famous brands had regular fonts? Meet RegulaBrands!
        </Card.Title>
        <Card.Text className="text-truncate">
          I’ve worked in UX for the better part of a decade. From now on, I plan to...
        </Card.Text>

        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex gap-2 align-items-center">
            <img
              src="https://randomuser.me/api/portraits/men/31.jpg"
              alt=""
              width="48"
              height="48"
              className="rounded-circle"
            />
            <div>
              <h6 className="m-0">Sarthak Kamra</h6>
              <small className="text-muted">1.4k views</small>
            </div>
          </div>

          <Button variant="outline-secondary" className="rounded-pill">
            <FaShareAlt className="me-1" />
            Share
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
