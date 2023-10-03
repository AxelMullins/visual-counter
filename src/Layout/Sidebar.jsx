import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import home from "../assets/img/home.png";
import liveView from "../assets/img/live-view.png";
import deviceConfiguration from "../assets/img/device-configuration.png";
import deviceInfo from "../assets/img/device-info.png";
import interfaceInfo from "../assets/img/interface-info.png";

const navLinks = [
  { text: "Inicio", icon: home, path: "/" },
  { text: "Live View", icon: liveView, path: "/live-view" },
  {
    text: "Device Configuration",
    icon: deviceConfiguration,
    path: "/device-configuration",
  },
  { text: "Device Info", icon: deviceInfo, path: "/device-info" },
  { text: "Interface Info", icon: interfaceInfo, path: "/interface-info" },
];

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div style={styles.hamg}>
        <button style={styles.btn}>
          {!expanded ? (
            <FaBars color="#fff" size={20} onClick={() => setExpanded(true)} />
          ) : (
            <FaXmark
              color="#fff"
              size={25}
              onClick={() => setExpanded(false)}
            />
          )}
        </button>
      </div>
      <nav className="mt-3">
        <ul style={styles.menu}>
          {navLinks.map((item, i) => (
            <NavLink to={item.path} key={i} style={styles.li}>
              <img
                src={item.icon}
                alt={item.text}
                className="p-2"
                style={styles.img}
              />
            </NavLink>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;

const styles = {
  hamg: {
    height: "80px",
    background: "#000",
    boxShadow: "2px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0 6px 6px 0",
  },
  btn: {
    background: "transparent",
    border: "none",
  },
  menu: {
    background: "linear-gradient(270deg, #2FE3EE 0%, #206FE5 100%)",
    boxShadow: "2px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    borderRadius: "0 6px 6px 0",
    padding: 0,
  },
  li: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 0",
    listStyle: "none",
    // cursor: "pointer"
  },
  img: {
    width: "35px",
    height: "35px",
    objectFit: "contain",
  },
};
