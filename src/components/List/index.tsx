import React, { useEffect } from 'react';
import Button from '../Button';
import { Observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Post } from '../../interface';
import rootStore from '../../store/rootStore';

const List: React.FC = () => {
  const { postStore } = rootStore();

  useEffect(() => {
    // page mount시 mobX 데이터 fetching
    postStore.getPosts();
  }, []);

  return (
    <Observer>
      {() => {
        return (
          <>
            <div className="min-h-screen bg-slate-50 pb-32">
              <div className="pt-14 relative pl-2.5 pr-2.5 max-w-screen-xl mx-auto mt-0 mb-0">
                <div className="flex justify-between">
                  <h2 className="lg:text-xl md:text-xl xl:text-xl text-md font-semibold">
                    전체 후기
                  </h2>
                  <Link to="/posts/new" id="post-new-btn">
                    <Button buttonText={'후기 작성하기'} />
                  </Link>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mt-16 gap-4">
                  {postStore.posts && postStore.posts.length ? (
                    postStore.posts.map((data: Post) => (
                      <div
                        className="shadow-md hover:shadow-xl cursor-pointer bg-white rounded-lg relative flex p-6 items-start flex-col md:w-[380px] lg:w-[380px] xl:w-[380px] w-full h-[300px]"
                        key={data.id}>
                        <div className="flex justify-between">
                          <h2 className="post-user text-lg sm:text-xl md:text-xl lg:text-xl font-bold">
                            {data.user}
                          </h2>
                          <span className="text-gray-600 text-sm ml-2 leading-5 post-date">
                            {data.date}
                          </span>
                          <Link to={`/posts/${data.id}`} className="post-show-btn">
                            <div className="absolute items-center flex text-gray-500 text-xs underline right-5 top-5">
                              더보기
                            </div>
                          </Link>
                        </div>
                        <div className="text-gray-600 mt-2 post-title">{data.title}</div>
                        <div className="mt-4 overflow-hidden post-body leading-7">{data.body}</div>
                      </div>
                    ))
                  ) : (
                    <div className="shadow-md col-span-3 w-100 cursor-pointer bg-white rounded-lg relative block p-6">
                      <div className="text-gray-600 text-center text-sm">
                        등록된 후기가 없습니다.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        );
      }}
    </Observer>
  );
};

export default List;
