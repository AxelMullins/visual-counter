import { Col, Container, Row } from "react-bootstrap";
import LiveCamera from "../components/LiveView/LiveCamera";
import SensorOverview from "../components/LiveView/SensorOverview";

const LiveView = () => {
  return (
    <Container fluid className="p-2">
      <h2 style={styles.title}>LIVE VIEW</h2>
      <Row>
        <Col xs={6}>
          <LiveCamera />          
        </Col>
        <Col xs={6}>
          <SensorOverview />
        </Col>
      </Row>
    </Container>
  );
};

export default LiveView;

const styles = {
  title: {
    fontSize: "24px",
    color: "#206FE5",
    fontWeight: "800",
    marginBottom: "33px",
  },
};
