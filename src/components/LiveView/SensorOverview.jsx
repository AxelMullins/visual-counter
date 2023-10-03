import { Col, Container, Row } from "react-bootstrap";
import sensorPerson from "../../assets/img/sensor-person.png";
import sensorBike from "../../assets/img/sensor-bike.png";
import sensorWheelchair from "../../assets/img/sensor-wheelchair.png";
import sensorBaby from "../../assets/img/sensor-baby.png";

const SensorOverview = () => {
  return (
    <>
      <h3 style={styles.title}>Sensor Overview</h3>
      <Container>
        <Row className="gap-4">
          <Col xs={4} style={styles.col1}>
            <div style={styles.bgGrey}>
              {/* Row 1 */}
              <h4 style={{ ...styles.titleIn, fontSize: "20px" }}>IN</h4>
              <p style={{ ...styles.titleIn, fontSize: "36px" }}>6676</p>
              <div style={styles.colData}>
                <span>3481</span>
                <img src={sensorPerson} alt="Sensor person" />
              </div>
              <div style={styles.colData}>
                <span>3481</span>
                <img src={sensorBike} alt="Sensor bike" />
              </div>
              <div style={styles.colData}>
                <span>3481</span>
                <img src={sensorWheelchair} alt="Sensor Wheelchair" />
              </div>
              <div style={styles.colData}>
                <span>3481</span>
                <img src={sensorBaby} alt="Sensor baby" />
              </div>
              <hr style={styles.hr} />
              {/* Row 2 */}
              <h4 style={{ ...styles.titleOut, fontSize: "20px" }}>OUT</h4>
              <p style={{ ...styles.titleOut, fontSize: "36px" }}>4456</p>
              <div style={styles.colData}>
                <span>3481</span>
                <img src={sensorPerson} alt="Sensor person" />
              </div>
              <div style={styles.colData}>
                <span>3481</span>
                <img src={sensorBike} alt="Sensor bike" />
              </div>
              <div style={styles.colData}>
                <span>3481</span>
                <img src={sensorWheelchair} alt="Sensor Wheelchair" />
              </div>
              <div style={styles.colData}>
                <span>3481</span>
                <img src={sensorBaby} alt="Sensor baby" />
              </div>
            </div>
            <button style={styles.btn}>Reset Count</button>
          </Col>
          <Col style={styles.col2}>
            <h4 style={styles.titleH4}>Monitor</h4>
            <label>
              <input type="checkbox" id="showMonitor" value="showMonitor" />{" "}
              Show
            </label>
            <br />
            {/*  */}
            <h4 style={styles.titleH4}>U Zone</h4>
            <label>
              <input type="checkbox" id="showUZone" value="showUZone" /> Show
            </label>
            <br />
            {/*  */}
            <h4 style={styles.titleH4}>Cross Area</h4>
            <label>
              <input type="checkbox" id="showCrossArea" value="showCrossArea" />{" "}
              Show
            </label>
            <br />
            <br />
            {/*  */}
            <label>
              <input type="checkbox" id="fullScreen" value="fullScreen" /> Full
              screen mode
            </label>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SensorOverview;

const styles = {
  title: {
    fontSize: "24px",
    color: "#313131",
    fontWeight: "500",
  },
  col1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    margin: 0,
  },
  bgGrey: {
    background: "#575757",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: "7px",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    padding: "20px 0",
  },
  btn: {
    background: "linear-gradient(180deg, #575757 0%, #313131 100%)",
    border: "none",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "400",
    marginTop: "10px",
    padding: "5px",
    width: "100%",
  },
  titleIn: {
    color: "#55FDC1",
    fontWeight: "900",
    textAlign: "center",
    padding: "0",
    margin: "0",
  },
  titleOut: {
    color: "#79AFFF",
    fontWeight: "900",
    textAlign: "center",
    padding: "0",
    margin: "0",
  },
  hr: {
    border: "1px solid #D9D9D9",
    width: "80%",
    opacity: "1",
  },
  colData: {
    color: "#fff",
    fontSize: "20px",
    fontWeight: "400",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
  col2: {
    display: "flex",
    flexDirection: "column",
    padding: 0,
  },
  titleH4: {
    color: "#929292",
    fontSize: "16px",
    fontWeight: "900",
    borderBottom: "1px solid #D9D9D9",
    width: "fit-content",
  },
};
