import { Modal } from "../../modules/Modal";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(<Modal isOpen={false} children={undefined} onClose={function (): void {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
