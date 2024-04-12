import { Form } from "../../ui-kit";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Form onSubmit={function (): void {
      throw new Error("Function not implemented.");
  } }/>).toJSON();
  expect(tree).toMatchSnapshot();
});
