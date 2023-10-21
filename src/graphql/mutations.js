/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMateria = /* GraphQL */ `
  mutation CreateMateria(
    $input: CreateMateriaInput!
    $condition: ModelMateriaConditionInput
  ) {
    createMateria(input: $input, condition: $condition) {
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
export const updateMateria = /* GraphQL */ `
  mutation UpdateMateria(
    $input: UpdateMateriaInput!
    $condition: ModelMateriaConditionInput
  ) {
    updateMateria(input: $input, condition: $condition) {
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
export const deleteMateria = /* GraphQL */ `
  mutation DeleteMateria(
    $input: DeleteMateriaInput!
    $condition: ModelMateriaConditionInput
  ) {
    deleteMateria(input: $input, condition: $condition) {
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
export const createFormula = /* GraphQL */ `
  mutation CreateFormula(
    $input: CreateFormulaInput!
    $condition: ModelFormulaConditionInput
  ) {
    createFormula(input: $input, condition: $condition) {
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
export const updateFormula = /* GraphQL */ `
  mutation UpdateFormula(
    $input: UpdateFormulaInput!
    $condition: ModelFormulaConditionInput
  ) {
    updateFormula(input: $input, condition: $condition) {
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
export const deleteFormula = /* GraphQL */ `
  mutation DeleteFormula(
    $input: DeleteFormulaInput!
    $condition: ModelFormulaConditionInput
  ) {
    deleteFormula(input: $input, condition: $condition) {
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
export const createFormulaMaterias = /* GraphQL */ `
  mutation CreateFormulaMaterias(
    $input: CreateFormulaMateriasInput!
    $condition: ModelFormulaMateriasConditionInput
  ) {
    createFormulaMaterias(input: $input, condition: $condition) {
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
export const updateFormulaMaterias = /* GraphQL */ `
  mutation UpdateFormulaMaterias(
    $input: UpdateFormulaMateriasInput!
    $condition: ModelFormulaMateriasConditionInput
  ) {
    updateFormulaMaterias(input: $input, condition: $condition) {
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
export const deleteFormulaMaterias = /* GraphQL */ `
  mutation DeleteFormulaMaterias(
    $input: DeleteFormulaMateriasInput!
    $condition: ModelFormulaMateriasConditionInput
  ) {
    deleteFormulaMaterias(input: $input, condition: $condition) {
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
