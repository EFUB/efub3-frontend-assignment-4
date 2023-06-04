import DetailPost from './api/DetailPost';
import Login from './api/Login';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/:postId' element={<DetailPost />}/>
      </Routes>
    </>
  );
}

export default App;
