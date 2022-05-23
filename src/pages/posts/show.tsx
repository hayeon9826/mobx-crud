import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { BASE_URL } from '../../../src/lib/api';
import { useStores } from '../../store/rootContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const PostShow: React.FC = () => {
  // URL 인자들의 key/value(키/값) 짝들의 객체를 반환
  const params = useParams();
  const navigate = useNavigate();
  const { postStore } = useStores();
  const { error } = postStore;

  const [post, setPost] = useState({
    id: 0,
    user: '',
    title: '',
    body: '',
    date: ''
  });

  useEffect(() => {
    const fetch = async () => {
      // rtk query 사용해서 가져오기로 변경 필요
      const res = await axios({
        url: `${BASE_URL}/post/${params.id}`
      });
      await setPost(res.data);
    };
    if (params.id) {
      fetch();
    }
    window.scrollTo(0, 0);
  }, [params]);

  const handleDelete = async () => {
    try {
      post && post.id !== 0 && (await postStore.removePost(post.id!!));
      toast.success('후기를 삭제했습니다.', {
        autoClose: 1000
      });
      navigate('/', { replace: true });
    } catch (e) {
      console.log(e);
      navigate('/', { replace: true });
    }
  };

  return (
    <div className="screen_md">
      <div className="pb-14 screen_padding">
        <div className="flex_div">
          <h2 className="page_title">후기 상세</h2>
        </div>
        <div className="mt-16">
          <div className="w-100 post_show_box">
            {post ? (
              <>
                <div className="flex_div">
                  <div className="post-user user_text">{post?.user}</div>
                  <span className="date_text font-normal post-date">{post?.date}</span>
                  <div className="absolute items-center flex text-gray-500 text-xs right-5 top-5">
                    <Link to={`/posts/edit/${post?.id}`} id="post-edit-btn">
                      <u>수정</u>
                    </Link>
                    ·
                    <u onClick={() => handleDelete()} id="post-delete-btn">
                      삭제
                    </u>
                  </div>
                </div>
                <div className="text-gray-600 mt-2 post-title">{post?.title}</div>
                <div className="mt-4 overflow-hidden pb-5 leading-7 post-body">{post?.body}</div>
                <></>
              </>
            ) : (
              <>
                <div className="no_content">후기가 없습니다. 다시 시도해주세요.</div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostShow;
