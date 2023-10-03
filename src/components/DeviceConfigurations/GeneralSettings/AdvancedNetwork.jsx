import { Col, Form } from "react-bootstrap";

const AdvancedNetwork = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mb-5">
      <small>General Settings / Advanced Network</small>
      <h3 style={styles.h3}>Advanced Network</h3>
      <form className="row" onSubmit={handleSubmit}>
        <Col xs={12} className="mt-3">
          <h4 style={styles.h4}>Network identification</h4>
          <p style={styles.p}>
            Specify your network settings and, if desired, sensor naming and
            group here.
          </p>
        </Col>
        <Col xs={4} className="d-flex flex-column mt-3">
          <label>Sensor name</label>
          <Form.Control type="text" defaultValue={""} />
        </Col>
        <Col xs={4} className="d-flex flex-column mt-3">
          <label>Sensor group</label>
          <Form.Control type="text" defaultValue={""} />
        </Col>
        <Col xs={4} className="d-flex flex-column mt-3">
          <label>Hostname</label>
          <Form.Control type="text" defaultValue={"XS-SENSOR-B663A2"} />
        </Col>
        <Col xs={12} className="mt-4">
          <h4 style={styles.h4}>Advanced network properties</h4>
          <p style={styles.p}>
            Manage advanced properties of how this device communicates within
            and beyond the local network. Configure ports for the connections,
            manage certificates and trusted authorities for a secure operation.
          </p>
          <h5 style={styles.h5}>Proxy configuration</h5>
          <hr />
          <p style={styles.p}>
            Configure a proxy server. Use Proxy for data pushes, remote
            connections and custom connections.
          </p>
        </Col>
        <Col xs={6} className="d-flex flex-column mt-3">
          <label>
            Proxy hostname <span style={styles.required}>*</span>
          </label>
          <Form.Control type="text" defaultValue={""} />
        </Col>
        <Col xs={6} className="d-flex flex-column mt-3">
          <label>
            Port <span style={styles.required}>*</span>
          </label>
          <Form.Control type="text" defaultValue={""} />
        </Col>
        <Col xs={12} className="mt-3 d-flex align-items-center">
          <Form.Check
            type="switch"
            id="proxy"
            label="Use proxy with authentication."
          />
        </Col>
        <Col xs={6} className="d-flex flex-column mt-3">
          <label>
            User <span style={styles.required}>*</span>
          </label>
          <Form.Control type="text" defaultValue={""} />
        </Col>
        <Col xs={6} className="d-flex flex-column mt-3">
          <label>
            Password <span style={styles.required}>*</span>
          </label>
          <Form.Control type="password" defaultValue={""} />
        </Col>
        <Col xs={12} className="d-flex flex-row-reverse mt-5">
          <button type="submit" style={styles.btn}>
            Save
          </button>
        </Col>
      </form>
    </div>
  );
};

export default AdvancedNetwork;

const styles = {
  h3: {
    fontSize: "24px",
    fontWeight: "900",
    color: "#313131",
    marginTop: "30px",
  },
  h4: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#313131",
  },
  h5: {
    fontSize: "18px",
    fontWeight: "500",
    color: "#313131",
  },
  p: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#313131",
  },
  btn: {
    borderRadius: "10px",
    border: "1px solid #E0E0E0",
    background: "linear-gradient(180deg, #206FE5 0%, #2FE3EE 100%)",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    padding: "12px 19px",
    color: "#fff",
    width: "auto",
  },
  required: {
    color: "red",
  },
};
