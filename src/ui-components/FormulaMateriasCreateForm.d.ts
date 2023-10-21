/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FormulaMateriasCreateFormInputValues = {
    quantidade?: number;
};
export declare type FormulaMateriasCreateFormValidationValues = {
    quantidade?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormulaMateriasCreateFormOverridesProps = {
    FormulaMateriasCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    quantidade?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FormulaMateriasCreateFormProps = React.PropsWithChildren<{
    overrides?: FormulaMateriasCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FormulaMateriasCreateFormInputValues) => FormulaMateriasCreateFormInputValues;
    onSuccess?: (fields: FormulaMateriasCreateFormInputValues) => void;
    onError?: (fields: FormulaMateriasCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FormulaMateriasCreateFormInputValues) => FormulaMateriasCreateFormInputValues;
    onValidate?: FormulaMateriasCreateFormValidationValues;
} & React.CSSProperties>;
export default function FormulaMateriasCreateForm(props: FormulaMateriasCreateFormProps): React.ReactElement;
