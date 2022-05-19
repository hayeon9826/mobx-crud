import React, { useEffect } from 'react';
import {
  Container,
  PaddingContainer,
  Title,
  FlexDiv,
  PostDiv,
  PostCard,
  Date,
  PostTitle,
  PostBody,
  More,
  SmallText
} from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { useGetPostQuery } from '../../../src/lib/api';
import { deletePost } from '../../slices/post';
import { AppDispatch } from 'src/store';

const PostShow: React.FC = () => {
  // URL 인자들의 key/value(키/값) 짝들의 객체를 반환
  const params = useParams();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: post,
    isFetching,
    isLoading
  } = useGetPostQuery(params?.id || '', {
    refetchOnMountOrArgChange: true,
    skip: !params?.id
  });

  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);
  }, []);

  const handleDelete = async () => {
    try {
      // sagas.ts의 removePostSaga 호출
      post && post.id !== 0 && (await dispatch(deletePost(post.id!!)));
      navigate('/', { replace: true });
    } catch (e) {
      navigate('/', { replace: true });
    }
  };
  return (
    <div>
      <Container>
        <PaddingContainer>
          <FlexDiv>
            <Title>후기 상세</Title>
          </FlexDiv>
          <PostDiv>
            {isFetching || isLoading ? (
              <small>잠시만 기다려 주세요...</small>
            ) : (
              <PostCard>
                {post ? (
                  <>
                    <FlexDiv>
                      <Title className="post-user">{post?.user}</Title>
                      <Date>{post?.date}</Date>
                      <More>
                        <Link to={`/posts/edit/${post?.id}`} id="post-edit-btn">
                          <u>수정</u>
                        </Link>
                        ·
                        <u onClick={() => handleDelete()} id="post-delete-btn">
                          삭제
                        </u>
                      </More>
                    </FlexDiv>
                    <PostTitle>{post?.title}</PostTitle>
                    <PostBody>{post?.body}</PostBody>
                    <></>
                  </>
                ) : (
                  <>
                    <SmallText>후기가 없습니다. 다시 시도해주세요.</SmallText>
                  </>
                )}
              </PostCard>
            )}
          </PostDiv>
        </PaddingContainer>
      </Container>
    </div>
  );
};

export default PostShow;
