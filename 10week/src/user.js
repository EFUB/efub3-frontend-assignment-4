import client from "./Api.js";

export const RegisterApi = async () => {
  try {
    const res = await client.post("users/register", {
      userName: "yejin",
      password: "4566",
      nickname : "jifdjew",
    });
    console.log("registerApi", res);
  } catch(err){
    console.log(err);
  }
}

export const LoginApi = async () => {
  try {
    const res = await client.post("users/login", {
      userName: "yejin",
      password: "4566",
    });
    console.log(res);

    const token = res.data.accessToken;
    localStorage.setItem('efubtoken', token);
    console.log(res.data.accessToken);
  } catch(err){
    console.log(err);
  }
};

export const TestApi = async () => {
  try{
    const res = await client.get("users/test");
    console.log(res);
  } catch(err){
    console.log(err)
  }
  }
