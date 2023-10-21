/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMateria = /* GraphQL */ `
  query GetMateria($id: ID!) {
    getMateria(id: $id) {
      id
      nome
      custo
      fornecedor
      formulas {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMaterias = /* GraphQL */ `
  query ListMaterias(
    $filter: ModelMateriaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMaterias(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nome
        custo
        fornecedor
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getFormula = /* GraphQL */ `
  query GetFormula($id: ID!) {
    getFormula(id: $id) {
      id
      nome
      custo
      observacao
      total
      materias {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listFormulas = /* GraphQL */ `
  query ListFormulas(
    $filter: ModelFormulaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFormulas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nome
        custo
        observacao
        total
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getFormulaMaterias = /* GraphQL */ `
  query GetFormulaMaterias($id: ID!) {
    getFormulaMaterias(id: $id) {
      id
      quantidade
      createdAt
      updatedAt
      materiaFormulasId
      formulaMateriasId
      __typename
    }
  }
`;
export const listFormulaMaterias = /* GraphQL */ `
  query ListFormulaMaterias(
    $filter: ModelFormulaMateriasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFormulaMaterias(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        quantidade
        createdAt
        updatedAt
        materiaFormulasId
        formulaMateriasId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
