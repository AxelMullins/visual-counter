/* eslint-disable react/prop-types */
import { Col, Container, Row } from "react-bootstrap";
import settings from "../../assets/img/settings.svg";
import { useState } from "react";

const DeviceConfiguration = ({ handleDraw, handleErase, handleExport }) => {
  const [isDrawing, setIsDrawing] = useState(false);

  return (
    <>
      <h3 style={styles.title}>Device Configuration</h3>
      <Container>
        <Row style={styles.row} className="gap-3">
          <Col xs={1} style={styles.bgGreyIcon}>
            <img src={settings} alt="" />
          </Col>
          <Col
            style={!isDrawing ? styles.bgGrey : styles.bgGreyDrawing}
            onClick={() => {
              handleDraw();
              setIsDrawing(!isDrawing);
            }}
          >
            <button style={styles.btn}>Draw Line</button>
          </Col>
          <Col style={styles.bgGrey} onClick={handleErase}>
            <button style={styles.btn}>Delete drawing</button>
          </Col>
          <Col style={styles.bgGrey} onClick={handleExport}>
            <button style={styles.btn}>Export</button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DeviceConfiguration;
const styles = {
  title: {
    fontSize: "24px",
    color: "#313131",
    fontWeight: "500",
    marginTop: "25px",
  },
  row: {
    padding: "20px",
    border: "1px solid #CBCBCB",
    borderRadius: "4px",
  },
  bgGreyIcon: {
    background: "#B0B0B0",
    width: "80px",
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100px",
  },
  bgGrey: {
    background: "#B0B0B0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "7px",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    cursor: "pointer",
  },
  bgGreyDrawing: {
    background: "#d1d1d1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "7px",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    cursor: "pointer",
  },
  btn: {
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "16px",
  },
};
