"use client";

import { Bold, SubTitle, Title } from "../components/Typo";
import { PrimaryButton } from "../components/Button";
import Container, { WallPaperContainer } from "../components/Container";
import BorderedInput from "../components/BorderedInput";

export default function LoginPage() {
  return (
    <WallPaperContainer>
      <Title>로그인</Title>
      <SubTitle>서비스 이용시 로그인이 필요합니다</SubTitle>
      <BorderedInput placeholder="이메일" type="email" />
      <BorderedInput placeholder="비밀번호" type="password" />
      <Container width="100%" justify="end">
        <SubTitle><Bold>비밀번호</Bold>를 잊으셨나요?</SubTitle>
      </Container>
      <PrimaryButton>로그인</PrimaryButton>
      <SubTitle>계정이 아직 없으신가요? <Bold>회원가입</Bold></SubTitle>
    </WallPaperContainer>
  );
}