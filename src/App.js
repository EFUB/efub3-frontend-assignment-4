import NavBar from "./NavBar";
import SignUpForm from "./User/SignUpForm";
import LoginForm from "./User/LoginForm";
import PostPosts from "./Post/AddPost";
import PostDetail from "./Post/PostDetail";
import Comment from "./Comment/Comment";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<SignUpForm />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/posts" element={<PostPosts />}></Route>
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/comment/:id" element={<Comment />}></Route>
      </Routes>
    </>
  );
}

export default App;
