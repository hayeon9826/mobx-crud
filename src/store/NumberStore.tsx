import { makeObservable, observable, action } from 'mobx';
import { NumberStoreType } from 'src/interface';

export class NumberStore implements NumberStoreType {
  rootStore;
  num = 0;

  constructor(root: any) {
    makeObservable(this, {
      num: observable,
      increaseAction: action,
      decreaseAction: action
    });
    this.rootStore = root;
    this.num = this.num;
  }

  increaseAction(num: number) {
    this.num = this.num + num;
  }

  decreaseAction(num: number) {
    this.num = this.num - num;
  }
}
