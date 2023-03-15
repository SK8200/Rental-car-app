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
export declare type RentalCarCreateFormInputValues = {
    name?: string;
    price?: string;
    description?: string;
    imageUrl?: string;
};
export declare type RentalCarCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    price?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RentalCarCreateFormOverridesProps = {
    RentalCarCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RentalCarCreateFormProps = React.PropsWithChildren<{
    overrides?: RentalCarCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RentalCarCreateFormInputValues) => RentalCarCreateFormInputValues;
    onSuccess?: (fields: RentalCarCreateFormInputValues) => void;
    onError?: (fields: RentalCarCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RentalCarCreateFormInputValues) => RentalCarCreateFormInputValues;
    onValidate?: RentalCarCreateFormValidationValues;
} & React.CSSProperties>;
export default function RentalCarCreateForm(props: RentalCarCreateFormProps): React.ReactElement;
