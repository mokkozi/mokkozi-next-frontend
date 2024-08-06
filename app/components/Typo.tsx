"use client";

import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fonts.size.large};
  margin: 0;
  color: ${(props) => props.theme.colors.black};
  font-weight: ${(props) => props.theme.fonts.weight.bold};
`;

export const SubTitle = styled.h2`
  font-size: ${(props) => props.theme.fonts.size.small};
  margin: 0;
  color: ${(props) => props.theme.colors.gray};
`;

export const Bold = styled.span`
  font-weight: ${(props) => props.theme.fonts.weight.bold};
`;
