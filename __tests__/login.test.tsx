import "@testing-library/jest-dom";
import LoginPage from "login/page";
import { useRouter } from "next/navigation";
import { fireEvent, render, screen, waitFor, axiosMock, pushMock } from "utils/test-utils";

describe("로그인 페이지", () => {
  beforeEach(() => {
    localStorage.clear();
    axiosMock.reset();
    window.alert = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock
    });
  });

  it("필수 요소 렌더링 확인", () => {
    render(<LoginPage />);
    expect(screen.getByRole("heading", { name: "로그인" })).toBeInTheDocument();
    expect(screen.getByPlaceholderText("아이디")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("비밀번호")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "로그인" })).toBeInTheDocument();
  });

  it("required 속성 확인", () => {
    render(<LoginPage />);
    expect(screen.getByPlaceholderText("아이디")).toHaveAttribute("required");
    expect(screen.getByPlaceholderText("비밀번호")).toHaveAttribute("required");
  })

  it("로그인 성공 시 메인 페이지로 이동 및 로컬스토리지에 토큰 저장", async () => {
    axiosMock.onPost("/api/members/login").reply(200, { data: "token" });

    render(<LoginPage />);

    const loginId = screen.getByPlaceholderText("아이디");
    const password = screen.getByPlaceholderText("비밀번호");
    const submitButton = screen.getByRole("button", { name: "로그인" });

    fireEvent.change(loginId, { target: { value: 'test@test.com' } });
    fireEvent.change(password, { target: { value: 'password' } });
    fireEvent.submit(submitButton);

    await waitFor(() => {
      expect(localStorage.getItem("accessToken")).toBe("token");
      expect(pushMock).toHaveBeenCalledWith("/");
    });
  });

  it("로그인 실패 시 alert 호출", async () => {
    axiosMock.onPost("/api/members/login").reply(400);

    render(<LoginPage />);

    const loginId = screen.getByPlaceholderText("아이디");
    const password = screen.getByPlaceholderText("비밀번호");
    const submitButton = screen.getByRole("button", { name: "로그인" });

    fireEvent.change(loginId, { target: { value: 'test@test.com' } });
    fireEvent.change(password, { target: { value: 'password' } });
    fireEvent.submit(submitButton);

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith("로그인에 실패했습니다.");
    });
  });
});
