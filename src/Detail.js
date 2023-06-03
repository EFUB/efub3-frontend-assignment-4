import { useParams } from "react-router-dom";
import { postDetail } from "./get/postDetail";
import { useState, useEffect } from "react";

const Detail = () => {
  const { id } = useParams();
  const [alldata, setAllData] = useState([]);

  const allData = async () => {
    try {
      const res = await postDetail(id);
      const data = res.data;
      console.log(data);
      setAllData(data);
    } catch (err) {
      console.log(err);
    }
    console.log(alldata);
  };

  useEffect(() => {
    allData();
  }, [id]);

  return (
    <div>
      <h2>detail</h2>
      <p>post Id: {id}</p>
      <p>{alldata.content}</p>
      <img
        src={alldata.image}
        alt="Post"
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  );
};

export default Detail;
