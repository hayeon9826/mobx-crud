import { makeObservable, observable, flow, action } from 'mobx';
import { Post, PostStoreType } from 'src/interface';
import * as API from '../lib/api';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';

export class PostStore implements PostStoreType {
  rootStore;
  posts: Post[] = [];
  error: string | null = null;

  constructor(root: any) {
    makeObservable(this, {
      posts: observable,
      error: observable,
      getPosts: flow,
      addPost: flow,
      removePost: flow,
      updatePost: flow,
      updateError: action
    });
    this.rootStore = root;
    this.posts = [];
    this.error = null;
  }

  *getPosts() {
    try {
      const response: AxiosResponse = yield API.getPosts();
      const post = response.data;
      this.posts = post;
    } catch (e) {
      console.log(e);
      this.updateError({ error: '후기 리스트를 가져올 수 없습니다. 다시 시도해주세요.' });
    }
  }

  *addPost(title: string, body: string, user: string, date: string) {
    try {
      yield API.createPost({ title: title, body: body, user: user, date: date });
      toast.success('후기를 작성했습니다.', {
        autoClose: 1000
      });
      this.getPosts();
    } catch (e) {
      console.log(e);
      this.updateError({ error: '후기를 생성할 수 없습니다. 다시 시도해주세요.' });
    }
  }

  *removePost(id: number) {
    try {
      yield API.deletePost(id);
      toast.success('후기를 삭제했습니다.', {
        autoClose: 1000
      });
      this.getPosts();
    } catch (e) {
      console.log(e);
      this.updateError({ error: '후기를 삭제할 수 없습니다. 다시 시도해주세요.' });
    }
  }

  *updatePost(id: number, post: Post) {
    try {
      yield API.updatePost({ id: id, post: post });
      toast.success('후기를 수정했습니다.', {
        autoClose: 1000
      });
      this.getPosts();
    } catch (e) {
      console.log(e);
      this.updateError({ error: '후기를 수정할 수 없습니다. 다시 시도해주세요.' });
    }
  }

  updateError({ error }: { error: string }) {
    this.error = error;
  }
}
