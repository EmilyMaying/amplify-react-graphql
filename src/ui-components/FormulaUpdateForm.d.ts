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
export declare type FormulaUpdateFormInputValues = {
    nome?: string;
    custo?: number;
    observacao?: string;
    total?: number;
};
export declare type FormulaUpdateFormValidationValues = {
    nome?: ValidationFunction<string>;
    custo?: ValidationFunction<number>;
    observacao?: ValidationFunction<string>;
    total?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormulaUpdateFormOverridesProps = {
    FormulaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nome?: PrimitiveOverrideProps<TextFieldProps>;
    custo?: PrimitiveOverrideProps<TextFieldProps>;
    observacao?: PrimitiveOverrideProps<TextFieldProps>;
    total?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FormulaUpdateFormProps = React.PropsWithChildren<{
    overrides?: FormulaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    formula?: any;
    onSubmit?: (fields: FormulaUpdateFormInputValues) => FormulaUpdateFormInputValues;
    onSuccess?: (fields: FormulaUpdateFormInputValues) => void;
    onError?: (fields: FormulaUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FormulaUpdateFormInputValues) => FormulaUpdateFormInputValues;
    onValidate?: FormulaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FormulaUpdateForm(props: FormulaUpdateFormProps): React.ReactElement;
