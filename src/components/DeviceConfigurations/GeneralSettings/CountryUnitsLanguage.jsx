import { Col, Form } from "react-bootstrap";

const CountryUnitsLanguage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mb-5">
      <small>General Settings / Country, Units, Language</small>
      <h3 style={styles.h3}>Country, Units, Language</h3>
      <form className="row" onSubmit={handleSubmit}>
        <Col xs={6} className="d-flex flex-column mt-3">
          <label htmlFor="country">Country</label>
          <Form.Select>
            <option>Select your country</option>
            <option value="1">España</option>
            <option value="2">Argentina</option>
          </Form.Select>
        </Col>
        <Col xs={6} className="d-flex flex-column mt-3"></Col>
        <Col xs={6} className="d-flex flex-column mt-3">
          <label htmlFor="measuringUnit">Measuring unit</label>
          <Form.Select>
            <option value="1">Metric (cm)</option>
          </Form.Select>
        </Col>
        <Col xs={6} className="d-flex flex-column mt-3">
          <label htmlFor="language">Language</label>
          <Form.Select>
            <option value="1">English</option>
            <option value="2">Spanish</option>
          </Form.Select>
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

export default CountryUnitsLanguage;

const styles = {
  h3: {
    fontSize: "24px",
    fontWeight: "900",
    color: "#313131",
    marginTop: "30px",
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
};
