import React, { useRef, useEffect, useState } from 'react';
import { Observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import { useStores } from '../../store/rootContext';

const PostNew: React.FC = () => {
  const [form, setForm] = useState({
    title: '',
    body: '',
    user: '',
    date: dayjs().format('YYYY-MM-DD')
  });
  const { postStore } = useStores();
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const navigate = useNavigate();

  const handleChange =
    (prop: string) =>
    (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      setForm({ ...form, [prop]: event.target.value });
    };

  const handleSubmit = async () => {
    try {
      // form validation
      if (form.user && form.title && form.body) {
        postStore.addPost(form.title, form.body, form.user, form.date);
        navigate('/', { replace: true });
      } else {
        // form validation
        await toast.warning('모든 필드를 채워주세요.', {
          autoClose: 1000
        });
      }
    } catch (e) {
      console.log(e);
      navigate('/', { replace: true });
    }
  };

  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Observer>
      {() => {
        return (
          <div className="screen_md">
            <div className="screen_padding">
              <div className="flex_div">
                <h2 className="page_title">후기 작성</h2>
              </div>
              <div className="mt-16">
                <div className="w-100 form_div">
                  <div className="w-100 form_group">
                    <label className="block font-bold mb-1" htmlFor="label">
                      사용자
                    </label>
                    <input
                      className="w-full h-12 border-b border-b-slate-200"
                      placeholder="사용자 이름을 입력해 주세요"
                      ref={inputRef}
                      id="user-input"
                      onChange={handleChange('user')}
                    />
                  </div>
                  <div className="w-100 form_group">
                    <label className="block font-bold mb-1" htmlFor="label">
                      제목
                    </label>
                    <input
                      className="w-full h-12 border-b border-b-slate-200"
                      placeholder="제목을 입력해 주세요"
                      onChange={handleChange('title')}
                      id="title-input"
                    />
                  </div>
                  <div className="w-100 form_group">
                    <label className="block font-bold mb-1">내용</label>
                    <textarea
                      className="w-full h-24 border-b border-b-slate-200"
                      placeholder="내용을 입력해 주세요"
                      id="body-input"
                      onChange={handleChange('body')}
                    />
                  </div>
                  <div className="mt-10 text-center">
                    <button className="w-100 submit_btn" onClick={() => handleSubmit()}>
                      작성하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Observer>
  );
};

export default PostNew;
