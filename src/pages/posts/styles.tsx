import styled from 'styled-components';

export const Container = styled.div`
  --bg-opacity: 1;
  background-color: #f5f6fa;
  height: 150vh;
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

export const PostDiv = styled.div`
  margin-top: 4rem;
`;

export const FormDiv = styled.div`
  margin-top: 4rem;
`;

export const FormBox = styled.div`
  background: white;
  width: 580px;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  margin: 0 auto;
  padding: 20px;
`;

export const FormGroup = styled.div`
  margin: 0 auto;
  display: block;
  width: 480px;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  padding: 20px 10px;
`;

export const Label = styled.label`
  margin-bottom: 0.2em;
  display: block;
  font-weight: 700;
`;

export const Input = styled.input.attrs((props) => ({
  id: props.id
}))`
  width: 100%;
  height: 45px;
  border: none;
  border-bottom: 1px solid #d5d5d5;
`;

export const TextArea = styled.textarea.attrs(() => ({
  id: 'body-input'
}))`
  width: 100%;
  height: 100px;
  border: none;
  border-bottom: 1px solid #d5d5d5;
`;

export const Message = styled.label`
  margin-bottom: 0.5em;
  display: block;
  color: palevioletred;
  font-size: 14px;
`;

export const SubmitBox = styled.div`
  margin-top: 40px;
  text-align: center;
`;

export const SubmitButton = styled.button`
  width: 150px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    font-size: 14px;
  }
  height: 48px;
  line-height: 47px;
  font-size: 16px;
  color: #fff;
  border-color: #4f63d2;
  background-color: #4f63d2;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

export const PostTitle = styled.div.attrs(() => ({
  className: 'post-title'
}))`
  color: #767676;
  margin-top: 10px;
`;

export const PostBody = styled.div.attrs(() => ({
  className: 'post-body'
}))`
  margin-top: 18px;
  line-height: 1.6;
  overflow: hidden;
  padding-bottom: 20px;
`;

export const PostCard = styled.div`
  box-shadow: 0 16px 28px hsl(0deg 0% 92% / 80%);
  margin: 0 auto !important;
  width: 580px;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  min-height: 400px;
  height: 100%;
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

export const More = styled.div`
  right: 1.5rem;
  top: 1.5rem;
  position: absolute;
  align-items: center;
  display: flex;
  color: #a1a1a1;
  margin-right: 0.125rem;
  font-size: 13px;
  text-decoration: none;
  a {
    color: #a1a1a1;
    text-decoration: none;
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

export const SmallText = styled.div`
  color: #767676;
  font-size: 12px;
  margin: 0 auto;
`;
