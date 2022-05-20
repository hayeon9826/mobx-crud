import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFormSlice } from '../../slices/form';
import { updatePost } from '../../slices/post';
import { RootState, AppDispatch } from '../../../src/store';
import { useGetPostQuery } from '../../../src/lib/api';
import { toast } from 'react-toastify';
import { sagaActions } from '../../../src/sagas/sagaAction';

const PostEdit: React.FC = () => {
  // URL 인자들의 key/value(키/값) 짝들의 객체를 반환
  const params = useParams();
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const navigate = useNavigate();
  const form = useSelector((state: RootState) => state.form);
  const dispatch: AppDispatch = useDispatch();

  const handleChange =
    (prop: string) =>
    (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(setFormSlice({ ...form, [prop]: event.target.value }));
    };

  const { data: post } = useGetPostQuery(params?.id || '', {
    refetchOnMountOrArgChange: true,
    skip: !params?.id
  });

  useEffect(() => {
    if (post?.id) {
      dispatch(setFormSlice({ ...post }));
    }
    // scroll to top
    window.scrollTo(0, 0);
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, [post]);

  const handleSubmit = async () => {
    try {
      // form validation
      if (form.user && form.title && form.body) {
        form.id !== 0 &&
          (await dispatch(
            updatePost({
              id: post?.id!,
              post: {
                user: form.user,
                title: form.title,
                body: form.body,
                date: dayjs().format('YYYY-MM-DD')
              }
            })
          ));
        // 후기 수정 후 form 리셋
        await dispatch({ type: sagaActions.RESET_FORM });
        navigate(`/posts/${post?.id}`, { replace: true });
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

  return (
    <div className="min-h-[80vh] bg-slate-50">
      <div className="pt-14 relative pl-2.5 pr-2.5 max-w-screen-xl mx-auto mt-0 mb-0">
        <div className="flex justify-between">
          <h2 className="lg:text-xl md:text-xl xl:text-xl text-md font-semibold">후기 작성</h2>
        </div>
        <div className="mt-16">
          <div className="w-100 bg-white p-5 m-auto sm:w-[580px] md:w-[580px] lg:w-[580px]">
            <div className="block m-auto w-100 sm:w-[480px] md:w-[480px] lg:w-[480px] px-5 py-2.5">
              <label className="block font-bold mb-1" htmlFor="label">
                사용자
              </label>
              <input
                className="w-full h-12 border-b border-b-slate-200"
                placeholder="사용자 이름을 입력해 주세요"
                ref={inputRef}
                id="user-input"
                onChange={handleChange('user')}
                defaultValue={post?.user}
              />
            </div>
            <div className="block m-auto w-100 sm:w-[480px] md:w-[480px] lg:w-[480px] px-5 py-2.5">
              <label className="block font-bold mb-1" htmlFor="label">
                제목
              </label>
              <input
                className="w-full h-12 border-b border-b-slate-200"
                placeholder="제목을 입력해 주세요"
                defaultValue={post?.title}
                id="title-input"
                onChange={handleChange('title')}
              />
            </div>
            <div className="block m-auto w-100 sm:w-[480px] md:w-[480px] lg:w-[480px] px-5 py-2.5">
              <label className="block font-bold mb-1">내용</label>
              <textarea
                className="w-full h-24 border-b border-b-slate-200"
                placeholder="내용을 입력해 주세요"
                id="body-input"
                defaultValue={post?.body}
                onChange={handleChange('body')}
              />
            </div>
            <div className="mt-10 text-center">
              <button
                className="w-100 text-sm sm:text-base md:text-base lg:text-base h-12 hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-200 text-white border-indigo-500 bg-indigo-500 rounded cursor-pointer w-40"
                onClick={() => handleSubmit()}>
                수정하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostEdit;
