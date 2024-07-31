"use client";

import { InputHTMLAttributes, useState } from "react";
import styled from "styled-components";
import EyeIcon from "../svgs/eye.svg";

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const BorderedInputStyle = styled.input`
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 12px;
  font-size: 12px;
  width: 100%;
  &:focus {
    outline: none;
    border: 1px solid #fc9700;
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
  console.log(EyeIcon);
  return (
    <Container>
      <BorderedInputStyle {...props} type={isShow ? "text" : props.type} />
      {isPassword && (
        <ShowPassword onClick={(e) => setIsShow((prev) => !prev)}>
          <EyeIcon fill={isShow ? "#FC9700" : "#CCCCCC"} />
        </ShowPassword>
      )}
    </Container>
  );
};

export default BorderedInput;
