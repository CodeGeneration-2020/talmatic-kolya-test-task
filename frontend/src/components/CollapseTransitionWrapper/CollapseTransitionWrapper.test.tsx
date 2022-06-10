import CollapseTransitionWrapper from "./index";

const conditionProp = true;

const setup = () => {
  return (
    <CollapseTransitionWrapper condition={conditionProp}>
      <div>
        <p>test case</p>
      </div>
    </CollapseTransitionWrapper>
  );
};

describe("CollapseTransitionWrapper", () => {
  it("is prop condition correctly passed", () => {
    const renderedField = setup();
    expect(renderedField.props.condition).toBe(conditionProp);
  });
});
