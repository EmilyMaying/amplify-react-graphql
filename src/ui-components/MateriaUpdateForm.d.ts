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
export declare type MateriaUpdateFormInputValues = {
    nome?: string;
    custo?: number;
    fornecedor?: string;
};
export declare type MateriaUpdateFormValidationValues = {
    nome?: ValidationFunction<string>;
    custo?: ValidationFunction<number>;
    fornecedor?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MateriaUpdateFormOverridesProps = {
    MateriaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nome?: PrimitiveOverrideProps<TextFieldProps>;
    custo?: PrimitiveOverrideProps<TextFieldProps>;
    fornecedor?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MateriaUpdateFormProps = React.PropsWithChildren<{
    overrides?: MateriaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    materia?: any;
    onSubmit?: (fields: MateriaUpdateFormInputValues) => MateriaUpdateFormInputValues;
    onSuccess?: (fields: MateriaUpdateFormInputValues) => void;
    onError?: (fields: MateriaUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MateriaUpdateFormInputValues) => MateriaUpdateFormInputValues;
    onValidate?: MateriaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MateriaUpdateForm(props: MateriaUpdateFormProps): React.ReactElement;
