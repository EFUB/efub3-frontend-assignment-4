// import client from "../Client";
// import React, { useState, useEffect } from "react";

// const postDetail = (postkey) => {
//   const [deData, setDeData] = useState([]);

//   const getDetail = async () => {
//     const res = await client.get(`/posts/${postkey}`);
//     console.log(res);

//     const token = res.data.accessToken;
//     localStorage.setItem("efubtoken", token);

//     const detaildata = res.data;
//     setDeData(detaildata);
//   };

//   useEffect(() => {
//     getDetail();
//   }, []);

//   return (
//     <div>
//       {deData.map((item) => (
//         <div key={item.postId} style={{ backgroundColor: "lightgray" }}>
//           <h3>{item.title}</h3>
//           <p>{item.content}</p>
//           <img src={item.image} style={{ width: "100px", height: "100px" }} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default postDetail;
