import { render } from "@testing-library/react";
import AutoCompleteComponent from "./index";

const mockedOptions = { listOfSuggestions: ["test", "word"] };
const mockedSelected = ["case 1", "case 2", "case 3"];

const setup = () => {
  return (
    <AutoCompleteComponent
      options={mockedOptions}
      selectedValues={mockedSelected}
      onUpdateSelected={() => {}}
    />
  );
};

describe("AutocompleteComponent", () => {
  it("is passed props", () => {
    const component = setup();

    expect(component.props.options).toBe(mockedOptions);
    expect(component.props.selectedValues).toBe(mockedSelected);
  });

  it("is succesfully rendered selected", () => {
    const renderComponent = render(setup());

    mockedSelected.forEach((item) => renderComponent.getByText(item));
  });
});
