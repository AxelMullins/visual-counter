/* eslint-disable react/prop-types */
import Header from "./Header";
import Sidebar from "./Sidebar";
// import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <div style={styles.container}>
        <div style={styles.colContracted}>
          <Sidebar />
        </div>
        <div style={styles.colContent}>
          <Header />
          <main className="p-3">{props.children}</main>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;

const styles = {
  container: {
    display: "flex",
  },
  colContracted: {
    width: "60px",
    // background: "#EFEFEF",
  },
  colExpanded: {},
  colContent: {
    width: "100%",
  },
};
