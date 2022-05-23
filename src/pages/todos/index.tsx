import { useState, useEffect } from 'react';
import { Observer } from 'mobx-react';
import { Todo } from 'src/interface';
import { toast } from 'react-toastify';
import { useStores } from '../../store/rootContext';
import dayjs from 'dayjs';

const TodoPage = () => {
  const [title, setTitle] = useState('');
  const { todoStore } = useStores();

  const onClickAdd = () => {
    try {
      todoStore.addTodo(title);
      setTitle('');
      toast.success('할일을 추가했습니다.', {
        autoClose: 1000
      });
    } catch (e) {
      console.log(e);
    }
  };

  const onClickRemove = (id: number) => {
    try {
      todoStore.removeTodo(id);
      toast.success('할일을 삭제했습니다.', {
        autoClose: 1000
      });
    } catch (e) {
      console.log(e);
    }
  };

  const onClickToggle = (id: number) => {
    try {
      todoStore.toggle(id);
      toast.info('상태를 변경했습니다.', {
        autoClose: 1000
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    todoStore.getTodos();
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
                    Todo 리스트
                  </h2>
                </div>
                <div className="mt-16 max-w-md mx-auto bg-white rounded-lg border border-gray-200 shadow-md">
                  <div className="p-6">
                    <h1 className="text-grey-darkest font-semibold text-xl">
                      {dayjs().format('YYYY년 MM월 DD일')}
                    </h1>
                    <div className="text-gray-400 text-sm mt-2">할일 목록</div>
                    <div className="flex items-center mt-6">
                      <label className="sr-only">Search</label>
                      <div className="relative w-full">
                        <input
                          type="text"
                          value={title}
                          onChange={(e) => {
                            setTitle(e.target.value);
                          }}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 p-2.5 "
                          placeholder="30자 이내로 입력"
                          required
                          maxLength={30}
                        />
                      </div>
                      <button
                        onClick={() => onClickAdd()}
                        className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-indigo-500 rounded-lg border border-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 ">
                        Add
                      </button>
                    </div>
                  </div>
                  <div className="p-6 border-t border-slate-200">
                    {todoStore.todos.length > 0 ? (
                      todoStore.todos.map((todo: Todo) => (
                        <div className="flex mb-2 items-center" key={todo.id}>
                          <p
                            className={`flex items-center w-full ${
                              todo.finished ? 'text-gray-400 line-through' : ''
                            }`}>
                            <input
                              onClick={() => onClickToggle(todo.id!!)}
                              className="appearance-none checkboxField"
                              type="checkbox"
                              defaultChecked={todo.finished}
                              value=""
                            />
                            <span className="ml-2">{todo.title}</span>
                          </p>
                          <button
                            onClick={() => onClickRemove(todo.id!!)}
                            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            Remove
                          </button>
                        </div>
                      ))
                    ) : (
                      <div className="text-gray-500 text-xs m-auto">오늘의 할일이 없습니다.</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      }}
    </Observer>
  );
};

export default TodoPage;
