import React from "react";
import { FlatListProps } from "./FlatList.types";

function FlatList<T>({
  data,
  listEmptyComponent,
  renderItem,
}: React.PropsWithChildren<FlatListProps<T>>): JSX.Element {
  if (Array.isArray(data)) {
    const render = data.map((value, index) => {
      return renderItem(value, index);
    });

    const renderListEmpty = listEmptyComponent;

    if (render.length) {
      return <>{render}</>;
    } else {
      return renderListEmpty();
    }
  }
  return <div></div>;
}

export default FlatList;
