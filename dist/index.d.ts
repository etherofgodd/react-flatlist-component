/// <reference types="react" />
import React from 'react';

interface FlatListProps<T> {
    data: T[];
    renderItem: (item: T, index: number) => JSX.Element;
    listEmptyComponent: () => JSX.Element;
}

declare function FlatList<T>({ data, listEmptyComponent, renderItem, }: React.PropsWithChildren<FlatListProps<T>>): JSX.Element;

export { FlatList };
