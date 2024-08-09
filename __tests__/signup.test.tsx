import "@testing-library/jest-dom";
import SignupPage from "signup/page";
import { fireEvent, render, screen, waitFor, axiosMock } from "utils/test-utils";

describe("회원가입 페이지", () => {
  beforeEach(() => {
    localStorage.clear();
    axiosMock.reset();
    window.alert = jest.fn();
  });

  it("필수 요소 렌더링 확인", () => {
    render(<SignupPage />);

    const heading = screen.getByRole("heading", { name: "회원가입" });
    const nameField = screen.getByPlaceholderText("이름");
    const idField = screen.getByPlaceholderText("아이디");
    const passwordField = screen.getByPlaceholderText("비밀번호 6~20자");
    const passwordConfirmField = screen.getByPlaceholderText("비밀번호 확인");
    const submitButton = screen.getByRole("button", { name: "회원가입" });

    expect(heading).toBeInTheDocument();
    expect(nameField).toBeInTheDocument();
    expect(nameField).toHaveAttribute("required");
    expect(idField).toBeInTheDocument();
    expect(idField).toHaveAttribute("required");
    expect(passwordField).toBeInTheDocument();
    expect(passwordField).toHaveAttribute("required");
    expect(passwordField).toHaveAttribute("type", "password");
    expect(passwordField).toHaveAttribute("minLength", "6");
    expect(passwordField).toHaveAttribute("maxLength", "20");
    expect(passwordConfirmField).toBeInTheDocument();
    expect(passwordConfirmField).toHaveAttribute("required");
    expect(passwordConfirmField).toHaveAttribute("type", "password");
    expect(passwordConfirmField).toHaveAttribute("minLength", "6");
    expect(passwordConfirmField).toHaveAttribute("maxLength", "20");
    expect(submitButton).toBeInTheDocument();
  });

  it("회원가입 성공 시 로그인 페이지로 이동", async () => {
    axiosMock.onPost("/api/members").reply(200, { code: 200, message: "회원가입 성공" });

    render(<SignupPage />);

    const nameField = screen.getByPlaceholderText("이름");
    const idField = screen.getByPlaceholderText("아이디");
    const passwordField = screen.getByPlaceholderText("비밀번호 6~20자");
    const passwordConfirmField = screen.getByPlaceholderText("비밀번호 확인");
    const submitButton = screen.getByRole("button", { name: "회원가입" });

    fireEvent.change(nameField, { target: { value: '모꼬지' } });
    fireEvent.change(idField, { target: { value: 'mokkozi' } });
    fireEvent.change(passwordField, { target: { value: 'password' } });
    fireEvent.change(passwordConfirmField, { target: { value: 'password' } });
    fireEvent.submit(submitButton);

    await waitFor(() => {
      expect(window.location.pathname).toBe("/login");
    });
  });
});
