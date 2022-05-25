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

### 0) node_modules 설치

```
yarn
```

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
5. 카운터 예제 구현
6. To-do 리스트 예제 구현

## 사진 첨부

#### PC 버전

<table >
  <thead>
    <tr>
      <th style="text-align: center">메인 리스트</th>
      <th style="text-align: center">메인 리스트 하단</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> 
        <img src="https://user-images.githubusercontent.com/38210233/169699095-4701280c-f31c-4e2d-813f-b2d3ec472909.png"  alt="finda pc main" >
      </td>
       <td>
        <img src="https://user-images.githubusercontent.com/38210233/169699111-50b967c0-8647-440a-8a1d-062cc514168e.png" alt="finda pc footer">
      </td>
    </tr> 
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th style="text-align: center">후기 작성 폼</th>
      <th style="text-align: center">후기 상세 페이지</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> <img src="https://user-images.githubusercontent.com/38210233/169699139-8b9a770e-f3e1-455e-9bf0-2b7d799babf8.png"  alt="finda pc show" ></td>
       <td><img src="https://user-images.githubusercontent.com/38210233/169699171-27bd831f-7dd8-4599-bd46-f7180b790d8d.png" alt="finda pc edit"></td>
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
      <td> <img src="https://user-images.githubusercontent.com/38210233/169699195-ce3e3a2d-c24a-4b12-a29a-68f3bdd9e42f.png"  alt="finda pc update" ></td>
       <td><img src="https://user-images.githubusercontent.com/38210233/169699256-d82373f2-0ee2-4565-99bf-0defc33a8ba4.png" alt="finda pc remove"></td>
    </tr> 
  </tbody>
</table>
<table>
  <thead>
    <tr>
      <th style="text-align: center">to-do 리스트</th>
      <th style="text-align: center">카운터 페이지</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> <img src="https://user-images.githubusercontent.com/38210233/169699288-514a3be2-4904-4b68-98fb-844aed3521a3.png"  alt="finda todo list" ></td>
       <td><img src="https://user-images.githubusercontent.com/38210233/169699308-e4db8444-159f-47a1-a484-b010ff713e72.png" alt="finda counter"></td>
    </tr> 
  </tbody>
</table>

#### Cypress 테스트

![react-crud-cypress](https://user-images.githubusercontent.com/38210233/168766643-09825126-e4b7-4f4a-9501-65b0f8492cf6.gif)
