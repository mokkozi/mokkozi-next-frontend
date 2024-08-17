import { styled } from "styled-components";

export const Chip = styled.div<{ $isHighlight?: boolean }>`
  display: inline-block;
  font-size: ${(props) => props.theme.fonts.size.xs};
  padding: 4px 8px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.lightGray};
  color: ${(props) => props.theme.colors.gray};
  ${(props) => props.$isHighlight && `
    background-color: ${props.theme.colors.lightHighlight};
    color: ${props.theme.colors.highlight};
  `}
`;