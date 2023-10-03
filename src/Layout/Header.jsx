import logo from "../assets/img/visual-counter-logo.png";
import Profile from "../components/Profile";

const Header = () => {
  return (
    <header style={styles.header} className="px-4">
      <img src={logo} alt="Logo Visual Counter" style={styles.img} />
      <h1 style={styles.h1}>Divice Web User Interface</h1>
      <Profile />
    </header>
  );
};

export default Header;

const styles = {
  header: {
    height: "80px",
    background: "linear-gradient(90deg, #fff 0%, #d1d1d1 1%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  img: {
    // width: "90px",
  },
  h1: {
    fontSize: "24px",
    color: "#206FE5",
    fontWeight: "800",
    margin: "0",
    padding: "0",
  },
};
