import SignIn from "../pages/account/signin";
import { render, screen } from "../utils/test-utils";
import userEvent from "@testing-library/user-event";
import { useInsert } from "../hooks";

jest.mock("../hooks/useInsert");

describe("Render SignIn", () => {
  beforeAll(() => {
    (useInsert as jest.Mock).mockReturnValue({
      mutate: jest.fn(),
    });
  });

  it("should render the SignIn page", () => {
    render(<SignIn />);
    const signinPage = screen.getByRole("main");
    expect(signinPage).toBeInTheDocument();
  });

  it("should render the SignIn page with the correct title", () => {
    render(<SignIn />);
    const signinTitle = screen.getByRole("heading", {
      name: /Sign in/i,
    });
    expect(signinTitle).toBeInTheDocument();
  });

  it("should render the SignIn page with the correct form", () => {
    render(<SignIn />);
    const signinForm = screen.getByRole("form");
    expect(signinForm).toBeInTheDocument();
  });

  it("should render the SignIn page with the correct form email input", () => {
    render(<SignIn />);
    const signinFormEmailInput = screen.getByLabelText(/Email Address/i);
    expect(signinFormEmailInput).toBeInTheDocument();
  });

  it("should render the SignIn page with the correct form password input", () => {
    render(<SignIn />);
    const signinFormPasswordInput = screen.getByLabelText(/Password/i);
    expect(signinFormPasswordInput).toBeInTheDocument();
  });

  it("should render the SignIn page with the correct form remember me checkbox", () => {
    render(<SignIn />);
    const signinFormRememberMeCheckbox = screen.getByLabelText(/Remember me/i);
    expect(signinFormRememberMeCheckbox).toBeInTheDocument();
  });

  it("should render the SignIn page with the correct form submit button", () => {
    render(<SignIn />);
    const signinFormSubmitButton = screen.getByRole("button", {
      name: /Sign In/i,
    });
    expect(signinFormSubmitButton).toBeInTheDocument();
  });

  it("should render the SignIn page with the correct form forgot password link", () => {
    render(<SignIn />);
    const signinFormForgotPasswordLink = screen.getByRole("link", {
      name: /Forgot password?/i,
    });
    expect(signinFormForgotPasswordLink).toBeInTheDocument();
  });

  it("should render the SignIn page with the correct form sign up link", () => {
    render(<SignIn />);
    const signinFormSignUpLink = screen.getByRole("link", {
      name: /don't have an account\? sign up/i,
    });
    expect(signinFormSignUpLink).toBeInTheDocument();
  });

  it("should render the SignIn page with the correct footer", () => {
    render(<SignIn />);
    const signinFooter = screen.getByText(/copyright © 2023\./i);
    expect(signinFooter).toBeInTheDocument();
  });
});

describe("SignIn Interaction", () => {
  beforeAll(() => {
    (useInsert as jest.Mock).mockReturnValue({
      mutate: jest.fn(),
    });
    userEvent.setup();
  });

  it("should allow the user to type in the email input", async () => {
    render(<SignIn />);
    const signinFormEmailInput = screen.getByLabelText(/Email Address/i);
    await userEvent.type(signinFormEmailInput, "mamadouniakate@yahoo.fr");
    expect(signinFormEmailInput).toHaveValue("mamadouniakate@yahoo.fr");
  });

  it("should allow the user to type in the password input", async () => {
    render(<SignIn />);
    const signinFormPasswordInput = screen.getByLabelText(/Password/i);
    await userEvent.type(signinFormPasswordInput, "password");
    expect(signinFormPasswordInput).toHaveValue("password");
  });

  it("should allow the user to click on the remember me checkbox", async () => {
    render(<SignIn />);
    const signinFormRememberMeCheckbox = screen.getByLabelText(/Remember me/i);
    await userEvent.click(signinFormRememberMeCheckbox);
    expect(signinFormRememberMeCheckbox).toBeChecked();
  });

  it("should allow the user to click on the submit button", async () => {
    render(<SignIn />);
    const signinFormSubmitButton = screen.getByRole("button", {
      name: /Sign In/i,
    });
    await userEvent.click(signinFormSubmitButton);
    expect(signinFormSubmitButton).toBeEnabled();
  });
});
