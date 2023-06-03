// import React, { useState } from "react";
// import { EditApi } from "./put/EditApi";

// const Edit = ({ postId, initialTitle, initialContent, onUpdate }) => {
//   const [title, setTitle] = useState(initialTitle);
//   const [content, setContent] = useState(initialContent);

//   const handleTitleChange = (event) => {
//     setTitle(event.target.value);
//   };

//   const handleContentChange = (event) => {
//     setContent(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const newData = {
//       title,
//       content,
//     };

//     try {
//       onUpdate(postId, newData);
//       await EditApi(postId, newData);
//       // 게시글 수정 후 업데이트 처리
//     } catch (error) {
//       console.log("게시글 수정에 실패했습니다.", error);
//       // 에러 처리
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={title} onChange={handleTitleChange} />
//       <textarea value={content} onChange={handleContentChange} />
//       <button type="submit">수정</button>
//     </form>
//   );
// };

// export default Edit;
