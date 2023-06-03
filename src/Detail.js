import { useParams } from "react-router-dom";
import { postDetail } from "./get/postDetail";
import { useState, useEffect } from "react";
import { EditApi } from "./put/EditApi";

const Detail = () => {
  const { id } = useParams();
  const [alldata, setAllData] = useState([]);
  const [content, setContent] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await EditApi(id, { content });
      // 게시글 수정 후 업데이트 처리
    } catch (error) {
      console.log("게시글 수정에 실패했습니다.", error);
      // 에러 처리
    }
  };

  return (
    <div>
      <h2>detail</h2>
      <p>post Id: {id}</p>
      <div>
        <p>{alldata.content}</p>
        <input
          type="text"
          placeholder="수정하기"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={handleSubmit}>수정하기</button>
      </div>
      <img
        src={alldata.image}
        alt="Post"
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  );
};

export default Detail;
