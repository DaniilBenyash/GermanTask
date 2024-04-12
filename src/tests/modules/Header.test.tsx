import { Header } from "../../modules/Header";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});