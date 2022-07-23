import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import FlatList from "../src/components/FlatList";

const data = [
  {
    id: 1,
    value: "bird",
  },
  {
    id: 2,
    value: "goat",
  },
  {
    id: 3,
    value: "fist",
  },
];

describe("Running Test for Flatlist Button", () => {
  test("3 divs rendered", () => {
    render(
      <FlatList
        data={data}
        listEmptyComponent={() => <div>Hello world</div>}
        renderItem={({ id, value }) => <div key={id}>{value}</div>}
      />
    );
    const flatlist = screen.getByPlaceholderText(
      "marbella"
    ) as HTMLInputElement;
    userEvent.type(flatlist, "goat");
    expect(flatlist.value).toBe("goat");
  });
});
