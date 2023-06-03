import "./App.css";
import CreatePage from "./CreatePage";
import { Routes, Route } from "react-router-dom";
import { postDetail } from "./get/postDetail";
import Home from "./Home";
import Detail from "./Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CreatePage />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
