import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from "./pages/Main";
import './App.css'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import PostDetail from './pages/PostDetail';
import PostForm from './pages/PostForm';
import Bookmark from './pages/Bookmark';
import Faq from './pages/Faq';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='post/:id' element={<PostDetail />} />
          <Route path='postform' element={<PostForm />} />
          <Route path='bookmark' element={<Bookmark />} />
          <Route path='faq' element={<Faq />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
