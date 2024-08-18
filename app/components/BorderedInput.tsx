"use client";

import { InputHTMLAttributes, useState } from "react";
import styled from "styled-components";
import theme from "@/constants/theme";
import Icon from "./Icon";

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const BorderedInputStyle = styled.input`
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.colors.darkWhite};
  border-radius: 5px;
  padding: 12px;
  font-size: ${(props) => props.theme.fonts.size.small};
  width: 100%;
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.highlight};
  }
`;

const ShowPassword = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  padding: 0;
  margin: 0;
  border: none;
  width: 20px;
  height: 14px;
  background-color: transparent;
  cursor: pointer;
`;

const BorderedInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const isPassword = props.type === "password";
  const [isShow, setIsShow] = useState(false);
  return (
    <Container>
      <BorderedInputStyle {...props} type={isShow ? "text" : props.type} />
      {isPassword && (
        <ShowPassword type="button" onClick={(e) => setIsShow((prev) => !prev)}>
          <Icon.Eye
            fill={isShow ? theme.colors.highlight : theme.colors.darkWhite}
          />
        </ShowPassword>
      )}
    </Container>
  );
};

export default BorderedInput;
