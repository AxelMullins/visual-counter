const WirelessMonitoring = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mb-5">
      <small>General Settings / Wireless Monitoring</small>
      <h3 style={styles.h3}>Wireless Monitoring</h3>
      <form className="row" onSubmit={handleSubmit}>
        {/* <Col xs={6} className="d-flex flex-row-reverse mt-5">
          <button type="submit" style={styles.btn}>
            Save
          </button>
        </Col> */}
      </form>
    </div>
  );
};

export default WirelessMonitoring;

const styles = {
  h3: {
    fontSize: "24px",
    fontWeight: "900",
    color: "#313131",
    marginTop: "30px",
  },
  btn: {
    borderRadius: "10px",
    border: "1px solid #E0E0E0",
    background: "linear-gradient(180deg, #206FE5 0%, #2FE3EE 100%)",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    padding: "12px 19px",
    color: "#fff",
    width: "auto",
  },
};
