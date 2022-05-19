import React from 'react';
import GlobalStyle from './styles/global';
import Navbar from './components/Navbar';
import List from './components/List';
import PostNew from '../src/pages/posts/new';
import PostEdit from '../src/pages/posts/edit';
import PostShow from '../src/pages/posts/show';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <>
      {/* 전체 style 적용 */}
      <GlobalStyle />
      {/* 기본 navbar 컴포넌트 상시 띄우기 */}
      <Navbar />
      {/* react-toastify 적용 */}
      <ToastContainer position="top-right" autoClose={1000} />
      {/* routes 정의 */}
      <div className="route">
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/posts/new" element={<PostNew />} />
          <Route path="/posts/:id" element={<PostShow />} />
          <Route path="/posts/edit/:id" element={<PostEdit />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
