import { makeObservable, observable, action, flow } from 'mobx';
import { Post, PostStoreType } from 'src/interface';
import * as API from '../lib/api';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';

export class PostStore implements PostStoreType {
  rootStore;
  posts: Post[] = [];
  id = 0;
  title = '';
  body = '';
  user = '';
  date = dayjs().format('YYYY-MM-DD');
  error: string | unknown = '';

  constructor(root: any) {
    makeObservable(this, {
      posts: observable,
      id: observable,
      title: observable,
      body: observable,
      user: observable,
      date: observable,
      error: observable,
      getPosts: flow,
      addPost: flow,
      removePost: flow,
      updatePost: flow
    });
    this.rootStore = root;
    this.posts = [];
    this.id = 0;
    this.title = '';
    this.body = '';
    this.user = '';
    this.date = dayjs().format('YYYY-MM-DD');
  }

  *getPosts() {
    try {
      const response: AxiosResponse = yield API.getPosts();
      const post = response.data;
      this.posts = post;
    } catch (e) {
      console.log(e);
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
      this.error = e;
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
      this.error = e;
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
      this.error = e;
    }
  }
}
