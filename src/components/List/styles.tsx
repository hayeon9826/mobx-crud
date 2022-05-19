import styled from 'styled-components';

export const Container = styled.div`
  --bg-opacity: 1;
  background-color: #f5f6fa;
  min-height: 150vh;
`;

export const PaddingContainer = styled.div`
  padding-top: 3.5rem;
  position: relative;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 0;
`;

export const Title = styled.h2.attrs((props) => ({
  className: props.className || 'title'
}))`
  font-size: 21px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
  font-weight: 700;
`;

export const FlexDiv = styled.div`
  justify-content: space-between;
  display: flex;
`;

export const GridDiv = styled.div`
  justify-content: space-between;
  display: flex;
  flex-flow: row wrap;
  margin-top: 4rem;
  &::after {
    content: '';
    flex: 0 0 32%;
    max-width: 480px;
  }
`;

export const Date = styled.span.attrs(() => ({
  className: 'post-date'
}))`
  color: #767676;
  font-size: 14px;
  margin-left: 10px;
  line-height: 21px;
  font-weight: 400;
  @media only screen and (max-width: 600px) {
    line-height: 16px;
  }
`;

export const PostTitle = styled.div.attrs(() => ({
  className: 'post-title'
}))`
  color: #767676;
  margin-top: 10px;
`;

export const CenterText = styled.div`
  color: #767676;
  text-align: center;
  font-size: 14px;
`;

export const PostBody = styled.div.attrs(() => ({
  className: 'post-body'
}))`
  margin-top: 18px;
  line-height: 1.6;
  overflow: hidden;
`;

export const PostCard = styled.div`
  box-shadow: 0 16px 28px hsl(0deg 0% 92% / 80%);
  margin: 0 0 1.25rem !important;
  width: 380px !important;
  @media only screen and (max-width: 800px) {
    width: 100% !important;
  }
  height: 300px;
  cursor: pointer;
  background: white;
  border-radius: 0.5rem;
  position: relative;
  display: block;
  outline: 2px solid transparent;
  outline-offset: 2px;
  padding: 1.5rem;
  align-items: flex-start;
  flex-direction: column;
  display: flex;
`;

export const BlankCard = styled.div`
  box-shadow: 0 16px 28px hsl(0deg 0% 92% / 80%);
  margin: 0 auto !important;
  width: 100% !important;
  @media only screen and (max-width: 800px) {
    width: 100% !important;
  }
  cursor: pointer;
  background: white;
  border-radius: 0.5rem;
  --bg-opacity: 1;
  position: relative;
  display: block;
  outline: 2px solid transparent;
  outline-offset: 2px;
  padding: 1.5rem;
`;

export const More = styled.div`
  right: 1.5rem;
  top: 1.5rem;
  position: absolute;
  align-items: center;
  display: flex;
  color: #a1a1a1;
  margin-right: 0.125rem;
  font-size: 13px;
  text-decoration: underline;
`;
