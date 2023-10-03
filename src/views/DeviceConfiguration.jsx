import { Accordion, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import CountryUnitsLanguage from "../components/DeviceConfigurations/GeneralSettings/CountryUnitsLanguage";
import Network from "../components/DeviceConfigurations/GeneralSettings/Network";
import AdvancedNetwork from "../components/DeviceConfigurations/GeneralSettings/AdvancedNetwork";
import DateAndTime from "../components/DeviceConfigurations/GeneralSettings/DateAndTime";
import RemoteConnection from "../components/DeviceConfigurations/GeneralSettings/RemoteConnection";
import UserManagement from "../components/DeviceConfigurations/GeneralSettings/UserManagement";
import WirelessMonitoring from "../components/DeviceConfigurations/GeneralSettings/WirelessMonitoring";
import AdvancedNetworkProperties from "../components/DeviceConfigurations/GeneralSettings/AdvancedNetworkProperties";
import Extensions from "../components/DeviceConfigurations/GeneralSettings/Extensions";
import LegacySupport from "../components/DeviceConfigurations/GeneralSettings/LegacySupport";

const generalSettings = [
  { name: "Country, Units, Language", component: <CountryUnitsLanguage /> },
  { name: "Date & Time", component: <DateAndTime /> },
  { name: "Network", component: <Network /> },
  { name: "Advanced Network", component: <AdvancedNetwork /> },
  { name: "Remote Connection", component: <RemoteConnection /> },
  { name: "User Management", component: <UserManagement /> },
  { name: "Wireless Monitoring", component: <WirelessMonitoring /> },
  {
    name: "Advanced Network Properties",
    component: <AdvancedNetworkProperties />,
  },
  { name: "Extensions", component: <Extensions /> },
  { name: "Legacy Support", component: <LegacySupport /> },
];

const dataSettings = [{ name: "Empty", component: null }];
const coreSettings = [{ name: "Empty", component: null }];
const singleDeviceScenario = [{ name: "Empty", component: null }];
const multiDeviceScenario = [{ name: "Empty", component: null }];

const DeviceConfiguration = () => {
  return (
    <Container fluid className="p-2">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="g-5">
          <Col xs={5}>
            <h2 style={styles.title}>DEVICE CONFIGURATION</h2>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header style={styles.accordionTitle}>
                  General Settings
                </Accordion.Header>
                <Accordion.Body>
                  <Nav variant="pills" className="flex-column">
                    {generalSettings.map((item, i) => (
                      <Nav.Item key={i}>
                        <Nav.Link eventKey={item.name}>{item.name}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header style={styles.accordionTitle}>
                  Data Settings
                </Accordion.Header>
                <Accordion.Body>
                  <Nav variant="pills" className="flex-column">
                    {dataSettings.map((item, i) => (
                      <Nav.Item key={i}>
                        <Nav.Link eventKey={item.name}>{item.name}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header style={styles.accordionTitle}>
                  Core Settings
                </Accordion.Header>
                <Accordion.Body>
                  <Nav variant="pills" className="flex-column">
                    {coreSettings.map((item, i) => (
                      <Nav.Item key={i}>
                        <Nav.Link eventKey={item.name}>{item.name}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header style={styles.accordionTitle}>
                  Single Device Scenario
                </Accordion.Header>
                <Accordion.Body>
                  <Nav variant="pills" className="flex-column">
                    {singleDeviceScenario.map((item, i) => (
                      <Nav.Item key={i}>
                        <Nav.Link eventKey={item.name}>{item.name}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header style={styles.accordionTitle}>
                  Multi Device Scenario
                </Accordion.Header>
                <Accordion.Body>
                  <Nav variant="pills" className="flex-column">
                    {multiDeviceScenario.map((item, i) => (
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
              {generalSettings.map((item, i) => (
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

export default DeviceConfiguration;

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
