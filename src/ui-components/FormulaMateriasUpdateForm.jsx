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
import { getFormulaMaterias } from "../graphql/queries";
import { updateFormulaMaterias } from "../graphql/mutations";
export default function FormulaMateriasUpdateForm(props) {
  const {
    id: idProp,
    formulaMaterias: formulaMateriasModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    quantidade: "",
  };
  const [quantidade, setQuantidade] = React.useState(initialValues.quantidade);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = formulaMateriasRecord
      ? { ...initialValues, ...formulaMateriasRecord }
      : initialValues;
    setQuantidade(cleanValues.quantidade);
    setErrors({});
  };
  const [formulaMateriasRecord, setFormulaMateriasRecord] = React.useState(
    formulaMateriasModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getFormulaMaterias.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getFormulaMaterias
        : formulaMateriasModelProp;
      setFormulaMateriasRecord(record);
    };
    queryData();
  }, [idProp, formulaMateriasModelProp]);
  React.useEffect(resetStateValues, [formulaMateriasRecord]);
  const validations = {
    quantidade: [],
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
          quantidade: quantidade ?? null,
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
            query: updateFormulaMaterias.replaceAll("__typename", ""),
            variables: {
              input: {
                id: formulaMateriasRecord.id,
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
      {...getOverrideProps(overrides, "FormulaMateriasUpdateForm")}
      {...rest}
    >
      <TextField
        label="Quantidade"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={quantidade}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              quantidade: value,
            };
            const result = onChange(modelFields);
            value = result?.quantidade ?? value;
          }
          if (errors.quantidade?.hasError) {
            runValidationTasks("quantidade", value);
          }
          setQuantidade(value);
        }}
        onBlur={() => runValidationTasks("quantidade", quantidade)}
        errorMessage={errors.quantidade?.errorMessage}
        hasError={errors.quantidade?.hasError}
        {...getOverrideProps(overrides, "quantidade")}
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
          isDisabled={!(idProp || formulaMateriasModelProp)}
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
              !(idProp || formulaMateriasModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
