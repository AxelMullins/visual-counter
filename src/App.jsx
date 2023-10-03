import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Layout from "./Layout/Layout";
import LiveView from "./views/LiveView";
import DeviceConfiguration from "./views/DeviceConfiguration";
import DeviceInfo from "./views/DeviceInfo";
import InterfaceInfo from "./views/InterfaceInfo";
import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/live-view" element={<LiveView />} />
          <Route
            path="/device-configuration"
            element={<DeviceConfiguration />}
          />
          <Route path="/device-info" element={<DeviceInfo />} />
          <Route path="/interface-info" element={<InterfaceInfo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
     </>
  );
}

export default App;
