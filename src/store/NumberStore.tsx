import { observable } from 'mobx';

const NumberStore = observable({
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
