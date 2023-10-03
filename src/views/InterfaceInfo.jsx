import { Accordion, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import Language from "../components/InterfaceInfo/Language";

const help = [{ name: "Help", component: "Help" }];
const licenseInfo = [{ name: "License", component: "License info" }];
const language = [{ name: "English", component: <Language /> }];

const InterfaceInfo = () => {
  return (
    <Container fluid className="p-2">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="g-5">
          <Col xs={5}>
            <h2 style={styles.title}>INTERFACE INFO</h2>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header style={styles.accordionTitle}>
                  Help
                </Accordion.Header>
                <Accordion.Body>
                  <Nav variant="pills" className="flex-column">
                    {help.map((item, i) => (
                      <Nav.Item key={i}>
                        <Nav.Link eventKey={item.name}>{item.name}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header style={styles.accordionTitle}>
                  Language
                </Accordion.Header>
                <Accordion.Body>
                  <Nav variant="pills" className="flex-column">
                    {language.map((item, i) => (
                      <Nav.Item key={i}>
                        <Nav.Link eventKey={item.name}>{item.name}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header style={styles.accordionTitle}>
                  Licence info
                </Accordion.Header>
                <Accordion.Body>
                  <Nav variant="pills" className="flex-column">
                    {licenseInfo.map((item, i) => (
                      <Nav.Item key={i}>
                        <Nav.Link eventKey={item.name}>{item.name}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col xs={6}>
            <Tab.Content>
              {help.map((item, i) => (
                <Tab.Pane key={i} eventKey={item.name}>
                  {item.component}
                </Tab.Pane>
              ))}
              {language.map((item, i) => (
                <Tab.Pane key={i} eventKey={item.name}>
                  {item.component}
                </Tab.Pane>
              ))}
              {licenseInfo.map((item, i) => (
                <Tab.Pane key={i} eventKey={item.name}>
                  {item.component}
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default InterfaceInfo;

const styles = {
  title: {
    fontSize: "24px",
    color: "#206FE5",
    fontWeight: "800",
  },
  accordionTitle: {
    fontSize: "24px",
    fontWeight: "500",
    color: "#000",
  },
};
