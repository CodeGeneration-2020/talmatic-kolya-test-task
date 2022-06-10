import { render } from "@testing-library/react";
import Header from "./index";

const setup = () => {
  return <Header />;
};

describe("Header", () => {
  it("is exist title", () => {
    const component = render(setup());

    component.getByText("Demdx-challange");
  });
});
