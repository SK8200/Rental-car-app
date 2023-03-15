/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { RentalCar } from "../models";
import { SortDirection } from "@aws-amplify/datastore";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import CarRentalCard from "./CarRentalCard";
import { Collection } from "@aws-amplify/ui-react";
export default function NewCarsCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = { sort: (s) => s.createdAt(SortDirection.ASCENDING) };
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: RentalCar,
    pagination: itemsPagination,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  console.log(itemsDataStore);
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr 1fr 1fr 1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "NewCarsCollection")}
      {...rest}
    >
      {(item, index) => (
        console.log(item, 47),
        (
          <CarRentalCard
            rentalCar={item}
            height="auto"
            width="auto"
            margin="1rem 1rem 1rem 1rem"
            key={item.id}
            {...(overrideItems && overrideItems({ item, index }))}
          ></CarRentalCard>
        )
      )}
    </Collection>
  );
}
