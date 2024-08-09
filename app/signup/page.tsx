"use client";

import { useRouter } from "next/navigation";
import { Bold, SubTitle, Title } from "@/components/Typo";
import { PrimaryButton } from "@/components/Button";
import { WallPaperContainer } from "@/components/Container";
import BorderedInput from "@/components/BorderedInput";
import formToObject from "@/utils/formToObject";
import { postSignup } from "@/api/membersAPI";

export default function SignupPage() {
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const body = formToObject(event.currentTarget as HTMLFormElement);
    const { name, loginId, password, passwordConfirm } = body;

    try {
      const response = await postSignup(name, loginId, password, passwordConfirm);
      router.push("/login");
    } catch (error) {
      alert("회원가입에 실패했습니다.");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <WallPaperContainer>
        <Title>회원가입</Title>
        <SubTitle>정보를 기입해주시고 회원가입을 진행해주세요</SubTitle>
        <BorderedInput required placeholder="이름" type="text" name="name" />
        <BorderedInput required placeholder="아이디" type="text" name="loginId" />
        <BorderedInput required placeholder="비밀번호 6~20자" type="password" name="password" minLength={6} maxLength={20} />
        <BorderedInput required placeholder="비밀번호 확인" type="password" name="passwordConfirm" minLength={6} maxLength={20} />
        <PrimaryButton type="submit">회원가입</PrimaryButton>
        <SubTitle>
          이미 회원이신가요? <Bold>로그인</Bold>
        </SubTitle>
      </WallPaperContainer>
    </form>
  );
}
