"use client";

import styled from "styled-components";

export const PrimaryButton = styled.button`
  font-size: ${(props) => props.theme.fonts.size.medium};
  background-color: ${(props) => props.theme.colors.highlight};
  color: ${(props) => props.theme.colors.white};
  padding: 10px 0px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  width: 100%;
`;
