import { Col, Form } from "react-bootstrap";

const Network = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mb-5">
      <small>General Settings / Network</small>
      <h3 style={styles.h3}>Network</h3>
      <form className="row" onSubmit={handleSubmit}>
        <Col xs={12} className="mt-3">
          <h4 style={styles.h4}>IPv4</h4>
          <p style={styles.p}>
            IPv4 with DHCP is the default network setting. Please be aware, if
            you change your IP setting here, you will lose access to the current
            view. In that case, please be prepared to re-open the sensor
            web-interface by typing in the new IP address in your web browser.
          </p>
        </Col>
        <Col xs={6} className="mt-3">
          <Form.Check type="switch" id="dhcp" label="DHCP" />
        </Col>
        <Col xs={6} className="mt-3">
          <Form.Check
            type="switch"
            id="fallback"
            label="Fallback to 192.168.1.168"
          />
        </Col>
        <Col xs={12} className=" mt-3">
          <p style={styles.p}>
            Configure your network parameters according your network standards.
            After pressing the ´Save´ button, the sensor will be accessible
            under the specified IP address.
          </p>
        </Col>
        <Col xs={4} className="d-flex flex-column mt-3">
          <label>
            IP Address <span style={styles.required}>*</span>
          </label>
          <Form.Control type="text" value={"192.168.5.55"} />
        </Col>
        <Col xs={4} className="d-flex flex-column mt-3">
          <label>
            Subnetmask <span style={styles.required}>*</span>
          </label>
          <Form.Control type="text" value={"255.255.0.0"} />
        </Col>
        <Col xs={4} className="d-flex flex-column mt-3">
          <label>Default Gateway</label>
          <Form.Control type="text" value={"192.168.1.1"} />
        </Col>
        <Col xs={4} className="d-flex flex-column mt-3">
          <label>
            Primary DNS <span style={styles.required}>*</span>
          </label>
          <Form.Control type="text" value={"192.168.1.1"} />
        </Col>
        <Col xs={4} className="d-flex flex-column mt-3">
          <label>
            Secondary DNS <span style={styles.required}>*</span>
          </label>
          <Form.Control type="text" value={""} />
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

export default Network;

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
