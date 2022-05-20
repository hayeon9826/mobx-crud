import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFoundPage from './components/NotFound';
import List from './components/List';
import CounterPage from './pages/counters/index';
import PostNew from '../src/pages/posts/new';
import PostEdit from '../src/pages/posts/edit';
import PostShow from '../src/pages/posts/show';
import { Route, Routes, Navigate } from 'react-router-dom';
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
          <Route path="/counters" element={<CounterPage />} />
          <Route path="/" element={<List />} />
          <Route path="/posts/new" element={<PostNew />} />
          <Route path="/posts/:id" element={<PostShow />} />
          <Route path="/posts/edit/:id" element={<PostEdit />} />

          <Route path="/404" element={<NotFoundPage />} />
          <Route path="" element={<Navigate replace to="/404" />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
