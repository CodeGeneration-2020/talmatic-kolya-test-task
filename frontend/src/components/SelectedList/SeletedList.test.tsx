import SelectedList from "./index";
import { render } from "@testing-library/react";

let mockedItems = ["item 1", "item 2"];

const setup = () => {
  return render(<SelectedList items={mockedItems} title={"title test case"} />);
};

describe("SelectedList", () => {
  it("title render test", () => {
    const renderedList = setup();

    renderedList.getByText("title test case");
  });

  it("render all elements in selected list", () => {
    const renderedList = setup();

    mockedItems.forEach((item) => renderedList.getByText(item));
  });
});
