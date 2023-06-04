import axios from "axios";

const client = axios.create();
client.defaults.baseURL ="https://frontserver.efub.co.kr";
client.defaults.withCredentials = true;

const token = localStorage.getItem("efubtoken");
console.log("현재토큰", token);

client.defaults.headers.common["Authorization"] = token ? `${token}` : null;

export default client;




// export const Api = async (request, image) => {
//   try{
//     const formData = new FormData();
//     formData.append('image', image);
//     formData.append(
//       'request',
//       new Blob([JSON.stringify(request)], {type: 'application/json' })
//     );
    
//     //서버요청
//     const res = await client.post('/posts', formData, {
//       headers:{'Content-Type': 'multipart/form-data'},
//     });
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// }