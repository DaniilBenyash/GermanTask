import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MainPage } from "../../../src/pages/main-page";
import renderer from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react";
import { CardProps } from "../../../src/components";
import { ButtonProps } from "../../../src/pages/main-page/components/Button";
import { ModalProps } from "../../../src/components";

const queryClient = new QueryClient();

it("renders correctly", () => {
  const tree = renderer
    .create(
      <QueryClientProvider client={queryClient}>
        <MainPage />
      </QueryClientProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// jest.mock("../../../src/pages/main-page/api", () => ({
//   useGetUsers: jest.fn(() => ({
//     isLoading: false,
//     data: [{ id: "1", firstname: "A", lastname: "B", email: "AB@gmail.com" }],
//   })),
//   useAddUser: jest.fn(() => ({ mutate: jest.fn() })),
//   useUpdateUser: jest.fn(() => ({ mutate: jest.fn() })),
//   useDeleteUser: jest.fn(() => ({ mutate: jest.fn() })),
// }));

// jest.mock("../../../src/components", () => ({
//   Header: () => <div>Header Mock</div>,
// }));

// jest.mock("../../../src/components", () => ({
//   Card: ({ onClick, title }: CardProps) => <div onClick={onClick}>{title}</div>,
// }));

// jest.mock("../../../src/pages/main-page/components/Button", () => ({
//   Button: ({ onClick }: ButtonProps) => <button onClick={onClick}>Open Modal</button>,
// }));

// jest.mock("../../../src/components", () => ({
//   Modal: ({ isOpen, children }: ModalProps) => (isOpen ? <div>{children}</div> : null),
// }));

// jest.mock("../../../src/pages/main-page/components/Form", () => ({
//   Form: () => <div>Form Content</div>,
// }));

// jest.mock("../../../src/components", () => ({
//   Modal: ({ isOpen, onClose, children }: ModalProps) =>
//     isOpen ? (
//       <div
//         onClick={(event) => {
//           if (event.target === event.currentTarget) onClose();
//         }}
//         data-testid="modal-backdrop"
//       >
//         {children}
//       </div>
//     ) : null,
// }));

// describe("MainPage Modal", () => {
//   it("open modal without data", () => {
//     render(
//       <QueryClientProvider client={queryClient}>
//         <MainPage />
//       </QueryClientProvider>,
//     );
//     fireEvent.click(screen.getAllByText("Open Modal")[0]);
//     expect(screen.getByTestId("modal-backdrop")).toBeInTheDocument();
//   });

//   it("close modal", () => {
//     render(
//       <QueryClientProvider client={queryClient}>
//         <MainPage />
//       </QueryClientProvider>,
//     );
//     fireEvent.click(screen.getAllByText("Open Modal")[0]);
//     const modalBackdrop = screen.getByTestId("modal-backdrop");
//     fireEvent.click(modalBackdrop);
//     expect(screen.queryByTestId("modal-backdrop")).not.toBeInTheDocument();
//   });

//   it("open modal", () => {
//     render(
//       <QueryClientProvider client={queryClient}>
//         <MainPage />
//       </QueryClientProvider>,
//     );
//     fireEvent.click(screen.getByText("A B"));
//     expect(screen.getByTestId("modal-backdrop")).toBeInTheDocument();
//     expect(screen.getByText("Form Content")).toBeInTheDocument();
//   });
// });
