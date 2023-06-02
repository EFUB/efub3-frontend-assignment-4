import logo from "./logo.svg";
import "./App.css";
import {
  SignUpForm,
  LoginForm,
  JWTForm,
  PostDetail,
  Post,
  NewPost,
  ChangePost,
  DeletePost,
} from "./components/SignUpForm";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <SignUpForm /> */}
      <LoginForm />
      {/* <JWTForm /> */}
      <Post />
      {/* <PostDetail /> */}
      <NewPost />
      <ChangePost />
      <DeletePost />
    </div>
  );
}

export default App;
