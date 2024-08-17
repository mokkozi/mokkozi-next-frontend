"use client";

import { useRouter } from "next/navigation";
import { Bold, SubTitle, Title } from "@/components/Typo";
import { PrimaryButton } from "@/components/Button";
import Container, { WallPaperContainer } from "@/components/Container";
import BorderedInput from "@/components/BorderedInput";
import formToObject from "@/utils/formToObject";
import { postLogin } from "@/api/membersAPI";
import { ROUTES_HOME, ROUTES_SIGNUP } from "@/constants/routes";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const body = formToObject(event.currentTarget as HTMLFormElement);

    try {
      const response = await postLogin(body.loginId, body.password);
      localStorage.setItem("accessToken", response.data);
      router.push(ROUTES_HOME);
    } catch (error) {
      alert("로그인에 실패했습니다.");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <WallPaperContainer>
        <Title>로그인</Title>
        <SubTitle>서비스 이용시 로그인이 필요합니다</SubTitle>
        <BorderedInput required placeholder="아이디" type="text" name="loginId" />
        <BorderedInput required placeholder="비밀번호" type="password" name="password" />
        {/* 비밀번호 찾기 기능 개발 시 주석 해제 예정 */}
        {/* 
        <Container width="100%" justify="end">
          <SubTitle>
            <Bold>비밀번호</Bold>를 잊으셨나요?
          </SubTitle>
        </Container>
         */}
        <PrimaryButton type="submit">로그인</PrimaryButton>
        <SubTitle>
          계정이 아직 없으신가요? <Link href={ROUTES_SIGNUP}><Bold>회원가입</Bold></Link>
        </SubTitle>
      </WallPaperContainer>
    </form>
  );
}
