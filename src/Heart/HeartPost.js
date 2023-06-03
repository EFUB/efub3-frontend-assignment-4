import axios from "axios";
import { useEffect, useState } from "react";

const HeartPost = () => {
  const [heart, setHeart] = useState();

  // heart POST : 서버 에러 발생으로 일시 중단
  const heartPost = async () => {
    const token = localStorage.getItem("efubtoken");

    const res = await axios.post("https://frontserver.efub.co.kr/hearts/9", {
      header: { Authorization: `${token}` },
    });
    console.log(res);
    // setHeart(res.data);
  };

  useEffect(() => {
    heartPost();
  }, []);

  return <button onClick={heartPost}>좋아요</button>;
};

export default HeartPost;
