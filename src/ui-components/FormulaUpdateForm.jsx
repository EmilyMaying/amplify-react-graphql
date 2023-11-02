/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getFormula } from "../graphql/queries";
import { updateFormula } from "../graphql/mutations";
export default function FormulaUpdateForm(props) {
  const {
    id: idProp,
    formula: formulaModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nome: "",
    custo: "",
    observacao: "",
    total: "",
  };
  const [nome, setNome] = React.useState(initialValues.nome);
  const [custo, setCusto] = React.useState(initialValues.custo);
  const [observacao, setObservacao] = React.useState(initialValues.observacao);
  const [total, setTotal] = React.useState(initialValues.total);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = formulaRecord
      ? { ...initialValues, ...formulaRecord }
      : initialValues;
    setNome(cleanValues.nome);
    setCusto(cleanValues.custo);
    setObservacao(cleanValues.observacao);
    setTotal(cleanValues.total);
    setErrors({});
  };
  const [formulaRecord, setFormulaRecord] = React.useState(formulaModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getFormula.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getFormula
        : formulaModelProp;
      setFormulaRecord(record);
    };
    queryData();
  }, [idProp, formulaModelProp]);
  React.useEffect(resetStateValues, [formulaRecord]);
  const validations = {
    nome: [{ type: "Required" }],
    custo: [],
    observacao: [],
    total: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          nome,
          custo: custo ?? null,
          observacao: observacao ?? null,
          total: total ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updateFormula.replaceAll("__typename", ""),
            variables: {
              input: {
                id: formulaRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "FormulaUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nome"
        isRequired={true}
        isReadOnly={false}
        value={nome}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome: value,
              custo,
              observacao,
              total,
            };
            const result = onChange(modelFields);
            value = result?.nome ?? value;
          }
          if (errors.nome?.hasError) {
            runValidationTasks("nome", value);
          }
          setNome(value);
        }}
        onBlur={() => runValidationTasks("nome", nome)}
        errorMessage={errors.nome?.errorMessage}
        hasError={errors.nome?.hasError}
        {...getOverrideProps(overrides, "nome")}
      ></TextField>
      <TextField
        label="Custo"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={custo}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              nome,
              custo: value,
              observacao,
              total,
            };
            const result = onChange(modelFields);
            value = result?.custo ?? value;
          }
          if (errors.custo?.hasError) {
            runValidationTasks("custo", value);
          }
          setCusto(value);
        }}
        onBlur={() => runValidationTasks("custo", custo)}
        errorMessage={errors.custo?.errorMessage}
        hasError={errors.custo?.hasError}
        {...getOverrideProps(overrides, "custo")}
      ></TextField>
      <TextField
        label="Observacao"
        isRequired={false}
        isReadOnly={false}
        value={observacao}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome,
              custo,
              observacao: value,
              total,
            };
            const result = onChange(modelFields);
            value = result?.observacao ?? value;
          }
          if (errors.observacao?.hasError) {
            runValidationTasks("observacao", value);
          }
          setObservacao(value);
        }}
        onBlur={() => runValidationTasks("observacao", observacao)}
        errorMessage={errors.observacao?.errorMessage}
        hasError={errors.observacao?.hasError}
        {...getOverrideProps(overrides, "observacao")}
      ></TextField>
      <TextField
        label="Total"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={total}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              nome,
              custo,
              observacao,
              total: value,
            };
            const result = onChange(modelFields);
            value = result?.total ?? value;
          }
          if (errors.total?.hasError) {
            runValidationTasks("total", value);
          }
          setTotal(value);
        }}
        onBlur={() => runValidationTasks("total", total)}
        errorMessage={errors.total?.errorMessage}
        hasError={errors.total?.hasError}
        {...getOverrideProps(overrides, "total")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || formulaModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || formulaModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
