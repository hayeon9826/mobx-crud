// cypress/utils/dom/index.ts

export const getByTestId = (value: string) => cy.get(`[id=${value}]`);

export const getByClassName = (value: string) => cy.get(`[class*="${value}"]`);

export const getByName = (value: string) => cy.get(`[name="${value}"]`);

export const getByXpath = (value: string) => cy.xpath(value);
