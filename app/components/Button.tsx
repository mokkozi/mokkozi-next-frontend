"use client";

import { InputHTMLAttributes } from "react";
import styled from "styled-components";

export const PrimaryButton = styled.button`
  font-size: ${(props) => props.theme.fonts.size.medium};
  background-color: ${(props) => props.theme.colors.highlight};
  color: ${(props) => props.theme.colors.white};
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  width: 100%;
`;

const ToggleButtonContainer = styled.label`
  position: relative;
  display: inline-block;
`;

const ToggleButtonInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const ToggleButtonStyle = styled.div`
  text-align: center;
  font-size: ${(props) => props.theme.fonts.size.medium};
  background-color: ${(props) => props.theme.colors.white};
  padding: 10px;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.gray};
  border: 1px solid ${(props) => props.theme.colors.darkWhite};
  cursor: pointer;
  input:checked + & {
    color: ${(props) => props.theme.colors.highlight};
    border: 1px solid ${(props) => props.theme.colors.highlight};
  }
`;

export const ToggleButton = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const { style, children, ...rest } = props;
  return (
    <ToggleButtonContainer style={{
      width: style?.width,
      height: style?.height,
    }}>
      <ToggleButtonInput type="checkbox" {...rest} />
      <ToggleButtonStyle style={style}>{children}</ToggleButtonStyle>
    </ToggleButtonContainer>
  )
}

export const FloatingButton = styled.button`
  position: fixed;
  bottom: 120px;
  right: 20px;
  background-color: ${(props) => props.theme.colors.highlight};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 17px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

export default {
  Primary: PrimaryButton,
  Toggle: ToggleButton,
  Floating: FloatingButton,
}