import { Card } from "../../modules/Card";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Card
        title={""}
        email={""}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
