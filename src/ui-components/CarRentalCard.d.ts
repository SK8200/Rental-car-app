/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { RentalCar } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CarRentalCardOverridesProps = {
    CarRentalCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group"?: PrimitiveOverrideProps<FlexProps>;
    "$99 USD/day"?: PrimitiveOverrideProps<TextProps>;
    "Car Model - Name"?: PrimitiveOverrideProps<TextProps>;
    "Car Description"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CarRentalCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    rentalCar?: RentalCar;
} & {
    overrides?: CarRentalCardOverridesProps | undefined | null;
}>;
export default function CarRentalCard(props: CarRentalCardProps): React.ReactElement;
