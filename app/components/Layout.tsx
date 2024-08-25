import { styled } from "styled-components";

export const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 18px;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
`;