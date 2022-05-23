import { useEffect } from 'react';
import { Observer } from 'mobx-react';
import { useStores } from '../../store/rootContext';
import { toast } from 'react-toastify';

const CounterPage = () => {
  const { numberStore } = useStores();
  const { error } = numberStore;

  const onClickIncrease = () => {
    numberStore.increaseAction(1);
  };

  const onClickDecrease = () => {
    numberStore.decreaseAction(1);
  };

  return (
    <Observer>
      {() => (
        <>
          <div className="screen_bg">
            <div className="screen_padding">
              <div className="flex_div">
                <h2 className="page_title">카운터</h2>
              </div>
              <div className="counter_div">
                <div className="flex flex-col items-center py-10">
                  <h5 className="mb-1 text-xl font-medium text-gray-900">현재 값</h5>
                  <span className="text-sm text-gray-500">{numberStore.num}</span>
                  <div className="flex mt-4 space-x-3 lg:mt-6">
                    <button className="decrease_btn" onClick={onClickDecrease}>
                      감소 -
                    </button>
                    <button className="increase_btn" onClick={onClickIncrease}>
                      증가 +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Observer>
  );
};

export default CounterPage;
