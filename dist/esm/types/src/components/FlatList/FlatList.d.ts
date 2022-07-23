import React from "react";
import { FlatListProps } from "./FlatList.types";
declare function FlatList<T>({ data, listEmptyComponent, renderItem, }: React.PropsWithChildren<FlatListProps<T>>): JSX.Element;
export default FlatList;
