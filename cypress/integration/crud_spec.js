/// <reference types="cypress" />
import dayjs from 'dayjs';

context('React CRUD', () => {
  let url = 'http://localhost:8080';
  let user = '최핀다';
  let title = '핀다 후기입니다.';
  let postCount;
  let body =
    '여러 곳을 알아봐도 핀다에서 조회한 상품이 제일 만족스러워서 진행하였고, 결과 또한 만족스러웠습니다.';
  let date = dayjs().format('YYYY-MM-DD');

  beforeEach(() => {
    cy.viewport('macbook-11');
    cy.visit(url);
    cy.wait(1000);
  });

  it('리스트에서 후기 갯수 확인', () => {
    cy.get('.post-title')
      .should('have.length.greaterThan', 1)
      .its('length')
      .then((n) => {
        postCount = n;
      });
  });

  it('후기 작성하기', () => {
    cy.visit(url);
    cy.get('#post-new-btn').click();
    // 폼 입력
    cy.get('#user-input').type(`${user}{enter}`);
    cy.get('#title-input').type(`${title}{enter}`);
    cy.get('#body-input').type(`${body}{enter}`, { force: true });
    cy.get('button').click();
    cy.wait(1000);

    // 리스트 첫번째 후기가 방금 생성한 후기여야 함
    cy.get('.post-title')
      .first()
      .should(($el) => expect($el.text().trim()).to.equal(title));
    cy.get('.post-body')
      .first()
      .should(($el) => expect($el.text().trim()).to.equal(body));
    cy.get('.post-user')
      .first()
      .should(($el) => expect($el.text().trim()).to.equal(user));
    cy.get('.post-date')
      .first()
      .should(($el) => expect($el.text().trim()).to.equal(date));
  });

  it('상세 페이지 접속', () => {
    cy.get('.post-show-btn').first().click({ force: true });

    // 상세 페이지의 가장 최근 데이터가 방금 생성한 후기여야 함
    cy.wait(1000);
    cy.get('.post-title')
      .first()
      .should(($el) => expect($el.text().trim()).to.equal(title));
    cy.get('.post-body')
      .first()
      .should(($el) => expect($el.text().trim()).to.equal(body));
    cy.get('.post-user')
      .first()
      .should(($el) => expect($el.text().trim()).to.equal(user));
    cy.get('.post-date')
      .first()
      .should(($el) => expect($el.text().trim()).to.equal(date));
  });

  it('후기 수정하기', () => {
    // 상세 페이지 접속
    cy.get('.post-show-btn').first().click({ force: true });
    cy.wait(1000);
    // '수정' 버튼 클릭
    cy.get('#post-edit-btn').click({ force: true });

    // 폼 입력
    cy.get('#user-input').clear();
    cy.get('#user-input').type(`[수정] ${user}{enter}`);
    cy.get('#title-input').clear();
    cy.get('#title-input').type(`[수정] ${title}{enter}`);
    cy.get('#body-input').clear();
    cy.get('#body-input').type(`[수정] ${body}{enter}`);
    cy.get('button').click();
    cy.wait(500);
    cy.visit(url);
    cy.wait(500);
    // 리스트 첫번째 후기가 방금 수정한 후기여야 함
    cy.get('.post-title')
      .first()
      .should(($el) => expect($el.text().trim()).to.equal(`[수정] ${title}`));
    cy.get('.post-body')
      .first()
      .should(($el) => expect($el.text().trim()).to.equal(`[수정] ${body}`));
    cy.get('.post-user')
      .first()
      .should(($el) => expect($el.text().trim()).to.equal(`[수정] ${user}`));
    cy.get('.post-date')
      .first()
      .should(($el) => expect($el.text().trim()).to.equal(`${date}`));
  });

  it('후기 삭제하기', () => {
    // 상세 페이지 접속
    cy.get('.post-show-btn').first().click({ force: true });
    cy.wait(1000);
    // '삭제' 버튼 클릭
    cy.get('#post-delete-btn').click({ force: true });
    cy.wait(500);
    // 데이터 지우고 총 갯수가 처음 리스트 갯수와 같아야 함
    cy.get('.post-title').should('have.length.greaterThan', 1).should('have.length', postCount);
  });
});
