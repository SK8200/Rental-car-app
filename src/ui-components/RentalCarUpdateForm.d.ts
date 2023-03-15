/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { RentalCar } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RentalCarUpdateFormInputValues = {
    name?: string;
    price?: string;
    description?: string;
    imageUrl?: string;
};
export declare type RentalCarUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    price?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RentalCarUpdateFormOverridesProps = {
    RentalCarUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RentalCarUpdateFormProps = React.PropsWithChildren<{
    overrides?: RentalCarUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    rentalCar?: RentalCar;
    onSubmit?: (fields: RentalCarUpdateFormInputValues) => RentalCarUpdateFormInputValues;
    onSuccess?: (fields: RentalCarUpdateFormInputValues) => void;
    onError?: (fields: RentalCarUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RentalCarUpdateFormInputValues) => RentalCarUpdateFormInputValues;
    onValidate?: RentalCarUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RentalCarUpdateForm(props: RentalCarUpdateFormProps): React.ReactElement;
