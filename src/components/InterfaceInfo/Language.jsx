import { Col } from "react-bootstrap";
import eglish from "../../assets/img/english.svg";
import espanol from "../../assets/img/espanol.svg";
import frances from "../../assets/img/frances.svg";
import portugues from "../../assets/img/portugues.svg";
import { useState } from "react";

const lenguages = [
  { name: "English (EN)", icon: `${eglish}` },
  { name: "Español (ES)", icon: `${espanol}` },
  { name: "Français (FR)", icon: `${frances}` },
  { name: "Português (PT)", icon: `${portugues}` },
];

const Language = () => {
  // const [formData, setFormData] = useState([

  // ])
  const [language, setLanguage] = useState("English (EN)");

  //   const handleChange = (e) => {
  //     let value = e.target.value;
  //     let name = e.target.name;

  //     setFormData((prevalue) => {
  //       return {
  //         ...prevalue,
  //         [name]: value,
  //       };
  //     });
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(language);
  };

  return (
    <div className="mb-5">
      <small>Language / English</small>
      <h3 style={styles.h3}>Language</h3>
      <form className="row" onSubmit={handleSubmit}>
        <Col xs={12} className="mt-3">
          <ul style={styles.ul}>
            {lenguages.map((item, i) => (
              <li
                key={i}
                style={styles.li}
                onClick={() => {
                  setLanguage(item.name);
                }}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="me-2"
                  style={{
                    ...styles.img,
                    boxShadow:
                      language === item.name &&
                      "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  }}
                />
                <span
                  style={{
                    padding: "10px 20px",
                    borderRadius: 10,
                    color: language === item.name ? "#fff" : "#d1d1d1",
                    background:
                      language === item.name &&
                      "linear-gradient(180deg, #206FE5 0%, #2FE3EE 100%)",
                    boxShadow:
                      language === item.name &&
                      "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </Col>
        <Col xs={12} className="d-flex flex-row-reverse mt-5">
          <button type="submit" style={styles.btn}>
            Save
          </button>
        </Col>
      </form>
    </div>
  );
};

export default Language;

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
  ul: {
    margin: 0,
    padding: 0,
  },
  li: {
    marginBottom: "10px",
    cursor: "pointer",
  },
  img: {
    width: "40px",
    marginRight: "10px",
    border: "1px solid #d1d1d1",
    borderRadius: "50px",
  },
};
