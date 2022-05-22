import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { BASE_URL } from '../../../src/lib/api';
import rootStore from '../../store/rootStore';
import axios from 'axios';

const PostShow: React.FC = () => {
  // URL 인자들의 key/value(키/값) 짝들의 객체를 반환
  const params = useParams();
  const navigate = useNavigate();
  const { postStore } = rootStore();

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
      navigate('/', { replace: true });
    } catch (e) {
      navigate('/', { replace: true });
    }
  };
  return (
    <div className="min-h-[80vh] bg-slate-50">
      <div className="pt-14 pb-14 relative pl-2.5 pr-2.5 max-w-screen-xl mx-auto mt-0 mb-0">
        <div className="flex justify-between">
          <h2 className="lg:text-xl md:text-xl xl:text-xl text-md font-semibold">후기 상세</h2>
        </div>
        <div className="mt-16">
          <div className="w-100 h-full cursor-pointer bg-white rounded-lg relative flex p-6 items-start flex-col sm:w-[580px] md:w-[580px] lg:w-[580px] min-h-[400px] shadow-md m-auto">
            {post ? (
              <>
                <div className="flex justify-between">
                  <div className="post-user text-lg sm:text-xl md:text-xl lg:text-xl font-bold">
                    {post?.user}
                  </div>
                  <span className="text-gray-600 text-sm ml-2 leading-5 font-normal">
                    {post?.date}
                  </span>
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
                <div className="text-gray-600 mt-2">{post?.title}</div>
                <div className="mt-4 overflow-hidden pb-5 leading-7">{post?.body}</div>
                <></>
              </>
            ) : (
              <>
                <div className="text-gray-600 text-xs m-auto">
                  후기가 없습니다. 다시 시도해주세요.
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostShow;
