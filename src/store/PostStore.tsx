import { observable, runInAction, action } from 'mobx';
import { Post, PostStoreType } from 'src/interface';
import * as API from '../lib/api';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';

const PostStore: PostStoreType = observable({
  // state
  posts: [] as Post[],
  id: 0,
  title: '',
  body: '',
  user: '',
  date: dayjs().format('YYYY-MM-DD'),
  error: null as string | unknown,
  // action
  async getPosts() {
    try {
      const response = await API.getPosts();
      const post = response.data;
      runInAction(() => {
        this.posts = post;
      });
    } catch (e) {
      console.log(e);
    }
  },

  async addPost(title: string, body: string, user: string, date: string) {
    try {
      await API.createPost({ title: title, body: body, user: user, date: date });
      toast.success('후기를 작성했습니다.', {
        autoClose: 1000
      });
      this.getPosts();
    } catch (e) {
      console.log(e);
      this.error = e;
    }
  },

  async removePost(id: number) {
    try {
      await API.deletePost(id);
      toast.success('후기를 삭제했습니다.', {
        autoClose: 1000
      });
      this.getPosts();
    } catch (e) {
      console.log(e);
      this.error = e;
    }
  },

  async updatePost(id: number, post: Post) {
    try {
      await API.updatePost({ id: id, post: post });
      toast.success('후기를 수정했습니다.', {
        autoClose: 1000
      });
      this.getPosts();
    } catch (e) {
      console.log(e);
      this.error = e;
    }
  }
});

export default PostStore;
