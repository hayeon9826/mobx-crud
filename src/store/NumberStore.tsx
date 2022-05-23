import { makeObservable, observable, action } from 'mobx';
import { NumberStoreType } from 'src/interface';

export class NumberStore implements NumberStoreType {
  rootStore;
  num = 0;
  error: string | unknown = '';

  constructor(root: any) {
    makeObservable(this, {
      num: observable,
      increaseAction: action,
      decreaseAction: action,
      updateError: action
    });
    this.rootStore = root;
    this.num = this.num;
    this.error = '';
  }

  increaseAction(num: number) {
    try {
      this.num = this.num + num;
    } catch (e) {
      console.log(e);
      this.updateError({ error: '다시 시도해주세요.' });
    }
  }

  decreaseAction(num: number) {
    try {
      this.num = this.num - num;
    } catch (e) {
      console.log(e);
      this.updateError({ error: '다시 시도해주세요.' });
    }
  }

  updateError({ error }: { error: string }) {
    this.error = error;
  }
}
