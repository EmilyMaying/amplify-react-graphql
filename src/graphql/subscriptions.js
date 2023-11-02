/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMateria = /* GraphQL */ `
  subscription OnCreateMateria($filter: ModelSubscriptionMateriaFilterInput) {
    onCreateMateria(filter: $filter) {
      id
      nome
      custo
      fornecedor
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateMateria = /* GraphQL */ `
  subscription OnUpdateMateria($filter: ModelSubscriptionMateriaFilterInput) {
    onUpdateMateria(filter: $filter) {
      id
      nome
      custo
      fornecedor
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteMateria = /* GraphQL */ `
  subscription OnDeleteMateria($filter: ModelSubscriptionMateriaFilterInput) {
    onDeleteMateria(filter: $filter) {
      id
      nome
      custo
      fornecedor
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateFormula = /* GraphQL */ `
  subscription OnCreateFormula($filter: ModelSubscriptionFormulaFilterInput) {
    onCreateFormula(filter: $filter) {
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
export const onUpdateFormula = /* GraphQL */ `
  subscription OnUpdateFormula($filter: ModelSubscriptionFormulaFilterInput) {
    onUpdateFormula(filter: $filter) {
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
export const onDeleteFormula = /* GraphQL */ `
  subscription OnDeleteFormula($filter: ModelSubscriptionFormulaFilterInput) {
    onDeleteFormula(filter: $filter) {
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
export const onCreateFormulaMaterias = /* GraphQL */ `
  subscription OnCreateFormulaMaterias(
    $filter: ModelSubscriptionFormulaMateriasFilterInput
  ) {
    onCreateFormulaMaterias(filter: $filter) {
      id
      quantidade
      createdAt
      updatedAt
      formulaMateriasId
      __typename
    }
  }
`;
export const onUpdateFormulaMaterias = /* GraphQL */ `
  subscription OnUpdateFormulaMaterias(
    $filter: ModelSubscriptionFormulaMateriasFilterInput
  ) {
    onUpdateFormulaMaterias(filter: $filter) {
      id
      quantidade
      createdAt
      updatedAt
      formulaMateriasId
      __typename
    }
  }
`;
export const onDeleteFormulaMaterias = /* GraphQL */ `
  subscription OnDeleteFormulaMaterias(
    $filter: ModelSubscriptionFormulaMateriasFilterInput
  ) {
    onDeleteFormulaMaterias(filter: $filter) {
      id
      quantidade
      createdAt
      updatedAt
      formulaMateriasId
      __typename
    }
  }
`;
