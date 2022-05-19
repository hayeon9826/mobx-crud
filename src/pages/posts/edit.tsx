import React, { useEffect, useRef } from 'react';
import {
  Container,
  PaddingContainer,
  Title,
  FlexDiv,
  FormDiv,
  FormBox,
  FormGroup,
  Label,
  Input,
  TextArea,
  SubmitBox,
  SubmitButton
} from './styles';
import { useParams } from 'react-router';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFormSlice } from '../../slices/form';
import { updatePost } from '../../slices/post';
import { RootState, AppDispatch } from '../../../src/store';
import { useGetPostQuery } from '../../../src/lib/api';
import { toast } from 'react-toastify';
import { sagaActions } from '../../../src/sagas/sagaAction';

const PostEdit: React.FC = () => {
  // URL 인자들의 key/value(키/값) 짝들의 객체를 반환
  const params = useParams();
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const navigate = useNavigate();
  const form = useSelector((state: RootState) => state.form);
  const dispatch: AppDispatch = useDispatch();

  const handleChange =
    (prop: string) =>
    (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(setFormSlice({ ...form, [prop]: event.target.value }));
    };

  const { data: post } = useGetPostQuery(params?.id || '', {
    refetchOnMountOrArgChange: true,
    skip: !params?.id
  });

  useEffect(() => {
    if (post?.id) {
      dispatch(setFormSlice({ ...post }));
    }
    // scroll to top
    window.scrollTo(0, 0);
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, [post]);

  const handleSubmit = async () => {
    try {
      // form validation
      if (form.user && form.title && form.body) {
        form.id !== 0 &&
          (await dispatch(
            updatePost({
              id: post?.id!,
              post: {
                user: form.user,
                title: form.title,
                body: form.body,
                date: dayjs().format('YYYY-MM-DD')
              }
            })
          ));
        // 후기 수정 후 form 리셋
        await dispatch({ type: sagaActions.RESET_FORM });
        navigate(`/posts/${post?.id}`, { replace: true });
      } else {
        // form validation
        await toast.warning('모든 필드를 채워주세요.', {
          autoClose: 1000
        });
      }
    } catch (e) {
      console.log(e);
      navigate('/', { replace: true });
    }
  };

  return (
    <div>
      <Container>
        <PaddingContainer>
          <FlexDiv>
            <Title>후기 작성</Title>
          </FlexDiv>
          <FormDiv>
            <FormBox>
              <FormGroup>
                <Label htmlFor="label">사용자</Label>
                <Input
                  placeholder="사용자 이름을 입력해 주세요"
                  ref={inputRef}
                  id="user-input"
                  onChange={handleChange('user')}
                  defaultValue={post?.user}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="label">제목</Label>
                <Input
                  placeholder="제목을 입력해 주세요"
                  defaultValue={post?.title}
                  id="title-input"
                  onChange={handleChange('title')}
                />
              </FormGroup>
              <FormGroup>
                <Label>내용</Label>
                <TextArea
                  placeholder="내용을 입력해 주세요"
                  defaultValue={post?.body}
                  onChange={handleChange('body')}
                />
              </FormGroup>
              <SubmitBox>
                <SubmitButton onClick={() => handleSubmit()}>수정하기</SubmitButton>
              </SubmitBox>
            </FormBox>
          </FormDiv>
        </PaddingContainer>
      </Container>
    </div>
  );
};

export default PostEdit;
