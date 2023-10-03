const Login = () => {
  return (
    <section style={styles.section}>
      <div style={styles.flex}>
        <h2 style={styles.h2}>Device Web User Interface</h2>
        <form style={styles.form}>
          <div style={styles.bg}>
            <div style={styles.formGroup}>
              <label htmlFor="user" style={styles.label}>
                User
              </label>
              <input type="text" style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="password" style={styles.label}>
                Password
              </label>
              <input type="password" style={styles.input} />
            </div>
          </div>
          <button
            type="submit"
            style={{ ...styles.btn, background: "#929292" }}
          >
            Login
          </button>
          <a href="#" style={styles.a}>
            I forgot password
          </a>
        </form>
      </div>
    </section>
  );
};

export default Login;

const styles = {
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  flex: {
    width: "278px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  bg: {
    backgroundImage:
      "linear-gradient(180deg, #206FE5 0%, #2FE3EE 100%), url('/assets/img/bg-login.png')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "3px",
    boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.25)",
    padding: "30px 30px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "#fff",
    fontSize: "12px",
    paddingBottom: "5px",
  },
  input: {
    marginBottom: "10px",
    height: "42px",
    width: "100%",
    border: "none",
    borderRadius: "5px",
  },
  h2: {
    fontSize: "16px",
    color: "#206FE5",
    fontWeight: "500",
    textAlign: "center",
    marginBottom: "10px",
  },
  btn: {
    fontSize: "16px",
    color: "#fff",
    border: "1px solid #E0E0E0",
    boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    padding: "10px 22px",
    fontWeight: "700",
    margin: "20px 0",
  },
  a: {
    fontSize: "12px",
    color: "#929292",
    fontWeight: "500",
    textDecoration: "none",
  },
};
