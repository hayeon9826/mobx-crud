import React, { useEffect } from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';
import {
  Container,
  PaddingContainer,
  Title,
  FlexDiv,
  GridDiv,
  PostCard,
  Date,
  PostTitle,
  PostBody,
  More,
  BlankCard,
  CenterText
} from './styles';
import { Post } from '../../interface';
import { useDispatch, useSelector } from 'react-redux';
import { sagaActions } from '../../sagas/sagaAction';
import { AppDispatch, RootState } from 'src/store';

const List: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    // page mount시 post 데이터 fetching. reducer로 post 세팅
    dispatch({ type: sagaActions.FETCH_POSTS });
  }, []);

  return (
    <Container>
      <PaddingContainer>
        <FlexDiv>
          <Title>전체 후기</Title>
          <Link to="/posts/new" id="post-new-btn">
            <Button buttonText={'후기 작성하기'} />
          </Link>
        </FlexDiv>
        <GridDiv>
          {posts && posts.length ? (
            posts.map((data: Post) => (
              <PostCard key={data.id}>
                <FlexDiv>
                  <Title className="post-user">{data.user}</Title>
                  <Date>{data.date}</Date>
                  <Link to={`/posts/${data.id}`} className="post-show-btn">
                    <More>더보기</More>
                  </Link>
                </FlexDiv>
                <PostTitle>{data.title}</PostTitle>
                <PostBody>{data.body}</PostBody>
              </PostCard>
            ))
          ) : (
            <BlankCard>
              <CenterText>등록된 후기가 없습니다.</CenterText>
            </BlankCard>
          )}
        </GridDiv>
      </PaddingContainer>
    </Container>
  );
};

export default List;
