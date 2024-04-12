import { Contact } from "../../../../src";
import { Form } from "../../../../src/pages/main-page/components/Form";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Form
        contact={null}
        onAddUser={function (contact: Contact): void {
          throw new Error("Function not implemented.");
        }}
        onUpdateUser={function (contact: Contact): void {
          throw new Error("Function not implemented.");
        }}
        onDeleteUser={function (id: number): void {
          throw new Error("Function not implemented.");
        }}
        onCloseModal={function (): void {
          throw new Error("Function not implemented.");
        }}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// import { render, fireEvent, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

// describe("Form Component Tests", () => {
//   let mockOnAddUser: jest.Mock;
//   let mockOnUpdateUser: jest.Mock;
//   let mockOnDeleteUser: jest.Mock;
//   let mockOnCloseModal: jest.Mock;

//   beforeEach(() => {
//     mockOnAddUser = jest.fn();
//     mockOnUpdateUser = jest.fn();
//     mockOnDeleteUser = jest.fn();
//     mockOnCloseModal = jest.fn();
//   });

//   it("renders correctly", () => {
//     const tree = renderer
//       .create(
//         <Form
//           contact={null}
//           onAddUser={mockOnAddUser}
//           onUpdateUser={mockOnUpdateUser}
//           onDeleteUser={mockOnDeleteUser}
//           onCloseModal={mockOnCloseModal}
//         />,
//       )
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });

//   it("calls onAddUser when onSubmit is called with a new contact", () => {
//     render(
//       <Form
//         contact={null}
//         onAddUser={mockOnAddUser}
//         onUpdateUser={mockOnUpdateUser}
//         onDeleteUser={mockOnDeleteUser}
//         onCloseModal={mockOnCloseModal}
//       />,
//     );
//     // Assuming 'SPEICHERN' is the text on the submit button
//     userEvent.type(screen.getByPlaceholderText("Vorname*"), "Jane");
//     userEvent.type(screen.getByPlaceholderText("Nachname*"), "Doe");
//     userEvent.type(screen.getByPlaceholderText("E-Mail*"), "jane.doe@example.com");
//     userEvent.click(screen.getByRole("button", { name: /speichern/i }));
//     expect(jest.fn()).toHaveBeenCalled();
//     expect(jest.fn()).toHaveBeenCalled();
//   });

//   it("calls onUpdateUser when onSubmit is called with an existing contact", () => {
//     render(
//       <Form
//         contact={{ id: 1, firstname: "John", lastname: "Doe", email: "john.doe@example.com" }}
//         onAddUser={mockOnAddUser}
//         onUpdateUser={mockOnUpdateUser}
//         onDeleteUser={mockOnDeleteUser}
//         onCloseModal={mockOnCloseModal}
//       />,
//     );
//     userEvent.click(screen.getByRole("button", { name: /speichern/i }));
//     expect(jest.fn()).toHaveBeenCalled();
//     expect(jest.fn()).toHaveBeenCalled();
//   });

//   it("calls onDeleteUser when handleDelete is called", () => {
//     const contactWithId = {
//       id: 1,
//       firstname: "John",
//       lastname: "Doe",
//       email: "john.doe@example.com",
//     };
//     render(
//       <Form
//         contact={contactWithId}
//         onAddUser={mockOnAddUser}
//         onUpdateUser={mockOnUpdateUser}
//         onDeleteUser={mockOnDeleteUser}
//         onCloseModal={mockOnCloseModal}
//       />,
//     );
//     userEvent.click(screen.getByRole("button", { name: /löschen/i }));
//     expect(mockOnDeleteUser).toHaveBeenCalledWith(contactWithId.id);
//     expect(mockOnCloseModal).toHaveBeenCalled();
//   });
// });
