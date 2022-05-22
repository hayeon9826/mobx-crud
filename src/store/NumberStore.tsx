import { observable } from 'mobx';
import { NumberStoreType } from 'src/interface';

const NumberStore: NumberStoreType = observable({
  // state
  num: 0,
  // action
  increaseAction(num: number) {
    this.num = this.num + num;
  },
  decreaseAction(num: number) {
    this.num = this.num - num;
  }
});

export default NumberStore;
