import { Observer } from 'mobx-react';
import rootStore from '../../store/rootStore';

const CounterPage = () => {
  const { numberStore } = rootStore();

  const onClickIncrease = () => {
    numberStore.increaseAction(1);
  };

  const onClickDecrease = () => {
    numberStore.decreaseAction(1);
  };

  return (
    <Observer>
      {() => {
        return (
          <>
            <div className="min-h-screen bg-slate-50 pb-32">
              <div className="pt-14 relative pl-2.5 pr-2.5 max-w-screen-xl mx-auto mt-0 mb-0">
                <div className="flex justify-between">
                  <h2 className="lg:text-xl md:text-xl xl:text-xl text-md font-semibold">카운터</h2>
                </div>
                <div className="mt-16 max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md">
                  <div className="flex flex-col items-center py-10">
                    <h5 className="mb-1 text-xl font-medium text-gray-900">현재 값</h5>
                    <span className="text-sm text-gray-500">{numberStore.num}</span>
                    <div className="flex mt-4 space-x-3 lg:mt-6">
                      <button
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        onClick={onClickDecrease}>
                        감소 -
                      </button>
                      <button
                        className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        onClick={onClickIncrease}>
                        증가 +
                      </button>
                    </div>
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

export default CounterPage;
