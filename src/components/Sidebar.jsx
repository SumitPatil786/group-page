import { Form, InputGroup } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPen } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="sticky-top" style={{ top: '80px' }}>
      <InputGroup className="mb-3">
        <InputGroup.Text>
          <FaMapMarkerAlt />
        </InputGroup.Text>
        <Form.Control defaultValue="Noida, India" aria-label="location" />
        <InputGroup.Text>
          <FaPen />
        </InputGroup.Text>
      </InputGroup>

      <small className="text-muted d-block mb-4">
        <strong>Your location will help us serve better and extend a personalised experience.</strong>
      </small>

      <hr />

      <p className="text-muted small">
        <strong>Recommended Groups</strong>
      </p>
      {/* Add mini-list of groups if desired */}
    </div>
  );
}
