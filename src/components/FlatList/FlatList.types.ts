export interface FlatListProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => JSX.Element;
  listEmptyComponent: () => JSX.Element;
}
