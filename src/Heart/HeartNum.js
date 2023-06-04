import axios from "axios";
import { useEffect, useState } from "react";

const HeartNum = ({ id }) => {
  const [heart, setHeart] = useState();

  // heart GET
  const heartApi = async () => {
    const res = await axios.get(`https://frontserver.efub.co.kr/hearts/${id}`);
    // console.log(res);

    setHeart(res.data);
  };

  useEffect(() => {
    heartApi();
  }, []);

  return <p style={{ margin: 0 }}>{heart}</p>;
};

export default HeartNum;
