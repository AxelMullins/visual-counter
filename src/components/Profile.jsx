const Profile = () => {
  return (
    <div style={styles.container}>
      <p style={styles.p}>Username</p>
      <div style={styles.bgImg}>O</div>
    </div>
  );
};

export default Profile;

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
  p: {
    color: "#929292",
    fontSize: "16px",
    fontWeight: "400",
    marginBottom: 0
  },
  bgImg: {
    width: "55px",
    height: "55px",
    borderRadius: "55px",
    background: "#D9D9D9",
    boxShadow: "3px 3px 4px rgba(0, 0, 0, 0.25)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
