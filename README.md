## 프로젝트 설명

- react 게시판 프로젝트 (2단계 게시판 만들기)
- 온보딩 참고: https://findainc.atlassian.net/wiki/spaces/FF/pages/2121170954/OnBoarding
- 기존 Redux를 Mobx로 변경
- 기존 styled-components를 postcss, tailwind로 변경

## 사용 스택

- TypeScript
- React
- babel, webpack, eslint
- MobX
- postcss, tailwind CSS
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

## 구현 기능

1. 게시글(Post) 작성
2. 게시글 리스트 및 상세 페이지
3. 게시글 수정
4. 게시글 삭제

## 주요 기능별 설명

### 1) 게시글 생성

- 내용이 들어갑니다.

### 2) 게시글 가져오기

- 내용이 들어갑니다.

### 3) 게시글 수정

- 내용이 들어갑니다.

### 4) 게시글 삭제

- 내용이 들어갑니다.

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

## 회고
