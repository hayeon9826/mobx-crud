import React, { useRef, useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFormSlice } from '../../slices/form';
import { createPost, addPost } from '../../slices/post';
import dayjs from 'dayjs';
import { RootState, AppDispatch } from '../../../src/store';
import { toast } from 'react-toastify';
import { sagaActions } from '../../../src/sagas/sagaAction';

const PostNew: React.FC = () => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const navigate = useNavigate();
  const form = useSelector((state: RootState) => state.form);
  // dispatchs는 액션 객체를 넘겨줘서 상태를 업데이트 하는 유일한 방법 (= 이벤트 트리거)
  const dispatch: AppDispatch = useDispatch();

  const handleChange =
    (prop: string) =>
    (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(setFormSlice({ ...form, [prop]: event.target.value }));
    };

  const handleSubmit = async () => {
    try {
      // form validation
      if (form.user && form.title && form.body) {
        form.id === 0 &&
          (await dispatch(
            createPost({
              user: form.user,
              title: form.title,
              body: form.body,
              date: dayjs().format('YYYY-MM-DD')
            })
          ));
        // 후기 생성 후 form 리셋
        await dispatch({ type: sagaActions.RESET_FORM });
        navigate('/', { replace: true });
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

  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

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
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="label">제목</Label>
                <Input
                  placeholder="제목을 입력해 주세요"
                  onChange={handleChange('title')}
                  id="title-input"
                />
              </FormGroup>
              <FormGroup>
                <Label>내용</Label>
                <TextArea placeholder="내용을 입력해 주세요" onChange={handleChange('body')} />
              </FormGroup>
              <SubmitBox>
                <SubmitButton onClick={() => handleSubmit()}>작성하기</SubmitButton>
              </SubmitBox>
            </FormBox>
          </FormDiv>
        </PaddingContainer>
      </Container>
    </div>
  );
};

export default PostNew;
