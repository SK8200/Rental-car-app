import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerRentalCar = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RentalCar, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly price?: string | null;
  readonly description?: string | null;
  readonly imageUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRentalCar = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RentalCar, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly price?: string | null;
  readonly description?: string | null;
  readonly imageUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RentalCar = LazyLoading extends LazyLoadingDisabled ? EagerRentalCar : LazyRentalCar

export declare const RentalCar: (new (init: ModelInit<RentalCar>) => RentalCar) & {
  copyOf(source: RentalCar, mutator: (draft: MutableModel<RentalCar>) => MutableModel<RentalCar> | void): RentalCar;
}