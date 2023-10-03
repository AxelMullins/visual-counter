import { useEffect, useState } from "react";
import DrawingCanvas from "./DrawingCanvas ";
import axios from "axios";

const LiveCamera = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [isMounted, setIsMounted] = useState(true);
  const SITE_ENDPOINT = "http://192.168.17.86:5000/";

  const getData = async () => {
    setIsMounted(true);
    setIsLoading(true);
    try {
      const res = await axios(`${SITE_ENDPOINT}/api/camera/stream`, {
        headers: {
          "Cache-Control": "no-cache",
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      });
      isMounted && res.status === 200 && setData(res.data);
      isMounted && res.status === 200 && console.log(res.data);
    } catch (error) {
      isMounted && setErrMsg(true);
    } finally {
      isMounted && setIsLoading(false);
    }
  };

  useEffect(() => {
    isMounted && getData();

    return () => {
      setIsMounted(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3 style={styles.title}>Live Camera</h3>
      <DrawingCanvas data={data} isLoading={isLoading} errMsg={errMsg} />
    </>
  );
};

export default LiveCamera;

const styles = {
  title: {
    fontSize: "24px",
    color: "#313131",
    fontWeight: "500",
  },
  img: {
    width: "100%",
  },
};
