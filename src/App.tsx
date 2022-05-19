import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import List from './components/List';
import PostNew from '../src/pages/posts/new';
import PostEdit from '../src/pages/posts/edit';
import PostShow from '../src/pages/posts/show';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
};

export default App;
