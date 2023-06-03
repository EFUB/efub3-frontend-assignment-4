import { useEffect, useState } from "react";
import { SignApi } from "./post/Sign";
import { LoginApi } from "./post/LoginApi";
import { Submit } from "./post/Submit";
import { postAll } from "./get/postAll";
import { EditApi } from "./put/EditApi";
import { Link } from "react-router-dom";
import { postDetail } from "./get/postDetail";
import List from "./List";
import Edit from "./put/Edit";

const CreatePage = () => {
  //회원 가입용
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  //로그인 용
  const [id1, setId1] = useState("");
  const [password1, setPassword1] = useState("");
  //게시글 업로드용
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  //세부 게시글용
  const [postkey, setPostkey] = useState("");

  //전체 게시글용
  const [alldata, setAllData] = useState([]);

  const [newCon, setNewCon] = useState("");

  //좋아요
  const [like, setLike] = useState(0);

  //전체 게시글 가져오기
  const allData = async () => {
    try {
      const res = await postAll();
      const data = res.data;
      const dataArr = data.map((it) => ({
        postId: it.postId,
        nickname: it.nickname,
        title: it.title,
        content: it.content,
        image: it.image,
      }));
      setAllData(dataArr);
    } catch (err) {
      console.log(err);
    }
    console.log(alldata);
  };

  useEffect(() => {
    allData();
  }, []);

  //회원가입하기
  const Sign = async (e) => {
    e.preventDefault();
    const res = await SignApi(id, password, nickname);
    console.log(res);
    setId("");
    setPassword("");
    setNickname("");
  };

  //로그인하기
  const Login = async (e) => {
    e.preventDefault();
    const res = await LoginApi(id1, password1);
    console.log(res);
    setId1("");
    setPassword1("");
  };

  //게시글 올리기
  const onUploadImage = (e) => {
    setFile(e.target.files[0]);
  };
  const onUploadImageButtonClick = async () => {
    const request = {
      title: title,
      content: content,
    };
    await Submit(request, file);
    allData();
    //이거 없으면 post 해도 안 뜸 (정보 받아온 다음에 띄워야하므로 async 사용)
  };

  return (
    <div>
      <div>
        <form onSubmit={Login}>
          <input
            type="text"
            placeholder="ID"
            value={id1}
            onChange={(e) => setId1(e.target.value)}
          />
          <input
            type="text"
            placeholder="password"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
          />
          <button>로그인하기</button>
        </form>
      </div>

      <form onSubmit={Sign}>
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="text"
          placeholder="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />

        <button>회원가입하기</button>
      </form>
      {/* 글 게시하기 */}
      <form onSubmit={onUploadImageButtonClick}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input type="file" accept="image/*" onChange={onUploadImage} />
        <button label="이미지 업로드" onClick={onUploadImageButtonClick}>
          게시하기
        </button>
      </form>
      {/* 게시글 상세 조회하기 */}
      <form>
        <input
          type="text"
          placeholder="PostId"
          value={postkey}
          onChange={(e) => setPostkey(e.target.value)}
        />

        <button>
          <Link to={`detail/${postkey}`}>확인</Link>
        </button>
      </form>

      {/* 수정하기
      <form>
        {/* <input
          type="text"
          placeholder="postId"
          value={postkey}
          onChange={(e) => setPostkey(e.target.value)}
        /> */}
      {/* <input
          type="text"
          placeholder="바꿀내용"
          value={newCon}
          onChange={(e) => setNewCon(e.target.value)}
        />
        <button onClick={() => handleUpdate(postkey, newCon)}>수정하기</button>
      </form> */}

      {/* 전체 게시글 보기 */}
      <div>
        {alldata.map((item) => (
          <div key={item.postId} style={{ backgroundColor: "lightgray" }}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>

            <img src={item.image} style={{ width: "100px", height: "100px" }} />
            <button>
              <Link to={`detail/${item.postId}`}>상세조회</Link>
            </button>
            {/* <button onClick={}>좋아요</button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatePage;
