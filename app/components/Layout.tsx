import { styled } from "styled-components";

export const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 18px;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
`;

export const BottomBar = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 14px 18px;
  box-shadow: 0px -1px 1px rgba(20,20,20,0.02), 0px -2px 8px rgba(20,20,20,0.04);
`;