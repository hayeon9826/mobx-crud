## 프로젝트 설명

- react 게시판 프로젝트 (1단계 게시판 만들기)
- 배포 링크: https://react-crud-finda.vercel.app/
- 온보딩 참고: https://findainc.atlassian.net/wiki/spaces/FF/pages/2121170954/OnBoarding

## 사용 스택

- TypeScript
- babel + webpack + React
- Redux + Redux-saga + RTK Query
- styled-components
- json-server
- cypress

## 로컬 실행

### 1) 프로젝트 실행

- 프론트
  클론 후, 아래 명령어 입력. localhost:8080 접속

```
yarn install
yarn start
```

- 아래 명령어로 json-server 실행. localhost:3000 포트에 REST API 서버가 실행됨

```
npx json-server --watch db.json
```

### 2) 프로젝트 빌드

아래 명령어 입력 시, build 폴더에 빌드된 파일 (bundle.js) 생성됨

```
yarn build
```

### 3) E2E 테스트

- 프론트, 백 실행 후 아래 명령어 입력

```
yarn cypress
```

- `crud_spec.js` 파일 선택 후 테스트 확인

## 구현된 기능

1. Redux, Redux-Toolkit를 이용한 상태 관리
2. json-server를 이용한 mock 데이터 세팅
3. Redux-saga를 이용한 사이드 이펙트 관리
4. 게시글(후기) 생성 / 수정 / 삭제 기능 작업
5. RTK Query 적용

## 주요 기능별 설명

### 1) 게시글 생성

- `posts/new.tsx` 페이지의 `handleSubmit` 확인
- 폼에 값 입력시 마다 handleChange함수 호출. setFormSlice 리듀서를 호출해서 해당 값을 store (form)에 저장
- '작성하기' 버튼 입력 시 폼의 모든 값이 저장되어 있는지 확인 후, post/createPost 액션을 호출함
- saga.ts에서 createPostSaga를 통해 데이터를 생성하고, store(post)에도 해당 데이터 추가함
- 성공시, FETCH_POSTS saga를 디스패치 하고 resetFormSaga 호출해서 폼 데이터 리셋함
- 에러가 나면 toast를 띄워서 알려줌

### 2) 게시글 수정

- `posts/edit.tsx` 페이지의 `handleSubmit` 확인
- 폼에 값 입력시 마다 handleChange함수 호출. setFormSlice 리듀서를 호출해서 해당 값을 store (form)에 저장
- '수정하기' 버튼 입력 시 폼의 모든 값이 저장되어 있는지 확인 후, post/updatePost 액션을 호출함
- saga.ts에서 updatePostSaga 통해 데이터를 생성하고, store(post)에도 해당 데이터 수정함
- 성공시, FETCH_POSTS saga를 디스패치 하고 resetFormSaga 호출해서 폼 데이터 리셋함
- 에러가 나면 toast를 띄워서 알려줌

### 3) 게시글 삭제

- `posts/show.tsx`의 `handleDelete` 함수 확인
- '삭제' 버튼 클릭 시 handleDelete 함수 호출
- slices/post에서 deletePost 액션을 호출함
- saga.ts에서 removePostSaga를 통해 데이터를 삭제하고, store(post)에서도 해당 데이터 제거
- 에러가 나면 toast를 띄워서 알려줌

### 4) 게시글 가져오기

- `list/index.tsx`, `posts/show.tsx` 페이지 확인
- `list/index`의 경우, useEffect를 이용해 page mount시 FETCH_POSTS saga를 디스패치 한다.
- saga.ts에서 getPostsSaga를 통해 모든 후기 데이터를 가져오고, store(post)에 모든 데이터 업데이트 함
- useSelector를 이용해 store에서 posts 데이터를 가져와 화면에 보여줌
- `posts/show`의 경우, url params로 현재 페이지의 id 값을 확인함. 그리고 rtk-query를 사용해서 데이터를 가져옴
- lib/api.ts에 rtk-query 적용

## 파일별 설명

### src/

<table style="max-width: 650px;">
   <tbody>
      <tr>
         <th>파일</th>
         <th>설명</th>
      </tr>
      <tr>
         <td>src/store.ts</td>
         <td> 리덕스 store 세팅</td>
      </tr>
      <tr>
         <td>src/App.tsx</td>
         <td>실제로 화면에 표시되는 컴포넌트 등 정의 </td>
      </tr>
      <tr>
         <td>src/index.tsx</td>
         <td>HTML 템플릿 및 JavaScript의 컴포넌트를 조합하여 렌더링하고 실제 표시 </td>
      </tr>
      <tr>
         <td>src/index.html</td>
         <td>   index.tsx에 대응되는 HTML 템플릿 파일. index.tsx에 의해 읽어 와서 렌더링된 결과가 표시됨</td>
      </tr>
   </tbody>
</table>

### src/components

<table style="max-width: 650px;">
   <tbody>
      <tr>
         <th>파일</th>
         <th>설명</th>
      </tr>
      <tr>
         <td>components/Button/index.tsx</td>
         <td> 메인 페이지의 '후기 작성' 버튼 컴포넌트</td>
      </tr>
      <tr>
         <td>components/List/index.tsx</td>
         <td> 메인 페이지의 '후기 리스트' 컴포넌트. 페이지 마운트시 redux-saga로 데이터 fetching 후, 화면에 표시</td>
      </tr>
      <tr>
         <td>components/Navbar/index.tsx</td>
         <td> 상단 네비게이션 바. 모든 페이지에서 보일 수 있도록 App.tsx에 적용함 </td>
      </tr>
      <tr>
        <td>components/.../styles.tsx</td>
         <td> 위 컴포넌트들에 모두 적용되는 스타일 (styled-component 적용)</td>
      </tr>
   </tbody>
</table>

### src/interface

<table style="max-width: 650px;" >
   <tbody>
      <tr>
         <th>파일</th>
         <th>설명</th>
      </tr>
      <tr>
         <td>interface/index.tsx</td>
         <td> 타입 체크를 위한 인터페이스 정의 (typescript)</td>
      </tr>
   </tbody>
</table>

### src/lib

<table style="max-width: 650px;">
   <tbody>
      <tr>
         <th>파일</th>
         <th>설명</th>
      </tr>
      <tr>
         <td>lib/api.ts</td>
         <td> 데이터 가져오기/수정/생성/삭제 api 정의. axios 및 rtk-query 적용</td>
      </tr>
   </tbody>
</table>

### src/pages

<table style="max-width: 650px;">
   <tbody>
      <tr>
         <th>파일</th>
         <th>설명</th>
      </tr>
      <tr>
         <td>pages/show.tsx, pages/new.tsx, pages/edit.tsx</td>
         <td> 후기 상세페이지, 후기 작성하기 페이지, 수정 페이지 정의</td>
      </tr>
      <tr>
         <td>pages/styles.tsx</td>
         <td> 위 페이지에 공통적으로 적용되는 스타일 (styled-component 적용)</td>
      </tr>
   </tbody>
</table>

### src/sagas

<table style="max-width: 650px;">
   <tbody>
      <tr>
         <th>파일</th>
         <th>설명</th>
      </tr>
      <tr>
         <td>sagas/saga.ts</td>
         <td> redux-saga 적용하는 파일</td>
      </tr>
      <tr>
         <td>sagas/sagaAction.ts</td>
         <td> saga에서 적용되는 액션 정의</td>
      </tr>
   </tbody>
</table>

### src/slices

<table style="max-width: 650px;">
   <tbody>
      <tr>
         <th>파일</th>
         <th>설명</th>
      </tr>
      <tr>
         <td>slices/form.ts</td>
         <td> createSlice API로 폼 관련 액션, 리듀서 정의</td>
      </tr>
      <tr>
         <td>slices/post.ts</td>
         <td> createSlice API로 후기 데이터 관련 액션, 리듀서 정의</td>
      </tr>
   </tbody>
</table>

### src/styles

<table style="max-width: 650px;">
   <tbody>
      <tr>
         <th>파일</th>
         <th>설명</th>
      </tr>
      <tr>
         <td>styles/global.ts</td>
         <td> 전체 페이지에 적용되는 공통 스타일 코드 (styled-component 적용)</td>
      </tr>
   </tbody>
</table>

### cypress/

<table style="max-width: 650px;">
   <tbody>
      <tr>
         <th>파일</th>
         <th>설명</th>
      </tr>
      <tr>
         <td>cypress/*</td>
         <td> Cypress 테스트 관련 설정 파일, 실행 파일 등</td>
      </tr>
   </tbody>
</table>

## 사진 첨부

#### PC 버전

<table >
  <thead>
    <tr>
      <th style="text-align: center">메인 리스트</th>
      <th style="text-align: center">후기 작성 폼</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> 
        <img src="https://user-images.githubusercontent.com/38210233/168334232-11a7a4dd-5f58-4eb6-86d9-f0e0cf8acb4e.png"  alt="finda pc main" >
      </td>
       <td>
        <img src="https://user-images.githubusercontent.com/38210233/168334295-9b77eaf6-ba1f-418b-9dfe-437de10b131a.png" alt="finda pc new">
      </td>
    </tr> 
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th style="text-align: center">상세 페이지</th>
      <th style="text-align: center">후기 수정 폼</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> <img src="https://user-images.githubusercontent.com/38210233/168334351-266bae18-a513-466d-8f61-2d13a71cd604.png"  alt="finda pc show" ></td>
       <td><img src="https://user-images.githubusercontent.com/38210233/168334418-9e130916-3265-4e03-9e96-3ebcc8f3a883.png" alt="finda pc edit"></td>
    </tr> 
  </tbody>
</table>
<table>
  <thead>
    <tr>
      <th style="text-align: center">후기 수정</th>
      <th style="text-align: center">후기 삭제</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> <img src="https://user-images.githubusercontent.com/38210233/168334538-ba43b49a-a079-43f0-9aca-4b567af2ae6d.png"  alt="finda pc update" ></td>
       <td><img src="https://user-images.githubusercontent.com/38210233/168334580-02f77fd5-3ac2-4d38-8c86-f6e9c94ab840.png" alt="finda pc remove"></td>
    </tr> 
  </tbody>
</table>

#### 모바일 버전

<table style="max-width: 850px;">
  <tr>
    <td> <img src="https://user-images.githubusercontent.com/38210233/168335076-57470cd2-8dbd-41a6-9446-df3a42866e36.png"  alt="finda mobile main" width="300" ></td>
    <td><img src="https://user-images.githubusercontent.com/38210233/168335171-a351a6ff-6013-4a76-be40-2f6e714d0de7.png" alt="finda mobile show"  width="300" ></td>
    <td><img src="https://user-images.githubusercontent.com/38210233/168335211-9ed89cf5-8c32-4f86-bb1f-4308b1409393.png" alt="finda mobile edit"  width="300" ></td>
  </tr> 
  <tr>
    <td> <img src="https://user-images.githubusercontent.com/38210233/168335255-e70717ce-a24b-42a1-a3e9-3377c804134c.png"  alt="finda mobile new" width="300" ></td>
    <td><img src="https://user-images.githubusercontent.com/38210233/168335292-56a4060e-5a55-4448-806f-61700bee6a49.png" alt="finda mobile create"  width="300" ></td>
    <td><img src="https://user-images.githubusercontent.com/38210233/168335361-116537d6-5ac9-4ed6-b606-d056cf6cbd97.png" alt="finda mobile remove"  width="300" ></td>
  </tr> 
</table>

#### Cypress 테스트

![react-crud-cypress](https://user-images.githubusercontent.com/38210233/168766643-09825126-e4b7-4f4a-9501-65b0f8492cf6.gif)

## 개선점 / 궁금한 점

### 개선점

- redux (slice/post)에서 코드 정리 필요 (createSlice, createAction 둘 다 사용해도 되는지?)
- redux useSelector를 바로 사용하고 있는데, memoization으로 최적화 해야함 [참고](https://kyounghwan01.github.io/blog/React/redux/redux-toolkit/#useselector-%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%90%E1%85%B5%E1%84%91%E1%85%A2%E1%84%90%E1%85%A5%E1%86%AB)
- redux-saga 사이드 이펙트 관련 코드 정리 필요.
- rtk-query mutation 적용 필요
- Cypress에서 rtk-query (post/show.tsx) 가 작동하지 않는 문제
- api.ts 에서 axios 대신 rtk-query로 변경 필요
- 더 구체적인 테스트 케이스 적용, redux 코드 테스트 필요

### 궁금한 점

- api로 데이터를 저장해도 redux store를 통해 데이터를 가져오는 것이 좋을지? 아니면 바로 rtk-query로 백엔드에서 데이터 가져오는게 더 나을지?
- createSlice와 createAction를 하나로 합쳐서 적용이 가능한지?
- axios를 완전히 사용하지 않고, rtk-query로 대체하는게 나을지?
- saga에는 side Effect를 담당하는 액션들을 활용하라고 했는데 단순 fetching만 적용하는게 나을지? (현재는 수정/삭제/생성 모두 적용)
- saga.ts에 rtk-query 적용 가능한지? (함수 안에 적용 하려고 하면 invalid hook call 에러 남)
- json-server와 redux로 store도 같이 관리하고 있는데, 생성/삭제 시 store와 함께 db 업데이트도 같이 하는게 맞을지? 아님 둘 중 하나만 하는게 맞을지?
- api로 생성 요청과 store에 추가 작업 action을 따로 만드는게 맞을지? 아니면 한번에 만드는게 맞을지?
- 웹에서는 [localhost:3000](http://localhost:3000) 띄워서 해당 호스트로 요청 보내면 생성/수정/삭제가 잘 되지만, cypress에서는 network error가 뜨면서 백엔드로 요청이 안간다. 혹시 추가 설정이 필요한지? -> (해결: 크롬 껐다 키면 됨)

## 참고 문서

> 프로젝트를 진행하며 참고했던 문서들입니다.

- [redux 게시판 만들기](https://mjn5027.tistory.com/35)
- [React-router-dom 프로젝트 참고](https://github.com/LeeMir/react-cookie-board)
- [redux 공식 도큐](https://redux-toolkit.js.org/tutorials/quick-start)
- [React-router-dom 설명](https://velog.io/@swanious/React-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%9D%BC%EC%9A%B0%ED%84%B0-%EC%A0%81%EC%9A%A9)
- [Redux-saga 튜토리얼](https://mskims.github.io/redux-saga-in-korean/introduction/BeginnerTutorial.html)
- [Json-server 이해하기](https://redux-advanced.vlpt.us/3/01.html)
- [Redux-Saga 설명 영상 (FE Conference, Toss)](https://www.youtube.com/watch?v=UxpREAHZ7Ck)
- [Redux toolkit 사내 도큐](https://findainc.atlassian.net/wiki/spaces/FF/pages/2689302595/Redux+Toolkit)
- [Redux saga 사내 도큐](https://findainc.atlassian.net/wiki/spaces/FF/pages/2757230660/redux-saga+tutorial)
- [Redux-Saga 공식 문서 (번역)](https://mskims.github.io/redux-saga-in-korean/)
- [Redux toolkit + redux saga](https://blog.logrocket.com/smarter-redux-redux-toolkit/)
- [리액트 Saga + Toolkit](https://mjn5027.tistory.com/39)
- [rtk Query 문서](https://junsangyu.gitbook.io/rtk-query/)
- [Redux 어떻게 써야 잘 썼다고 소문이 날까?](https://velog.io/@velopert/using-redux-in-2021#redux-toolkit%EC%9D%80-%EC%9D%B4%EC%A0%9C-%ED%95%84%EC%88%98%ED%85%9C%EC%9E%85%EB%8B%88%EB%8B%A4)
