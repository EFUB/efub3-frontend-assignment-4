import "./App.css";
import CreatePage from "./CreatePage";
import { Routes, Route } from "react-router-dom";
import { postDetail } from "./get/postDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CreatePage />} />
        <Route path="/detail/:id" element={<postDetail />} />
      </Routes>
    </div>
  );
}

export default App;
