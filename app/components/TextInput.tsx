import { styled } from "styled-components";

const Bordered = styled.input`
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.colors.darkWhite};
  color: ${(props) => props.theme.colors.gray};
  border-radius: 5px;
  padding: 12px;
  font-size: ${(props) => props.theme.fonts.size.small};
  width: 100%;
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.highlight};
  }
`
const GrayBackground = styled.input`
  box-sizing: border-box;
  border: none;
  background-color: ${(props) => props.theme.colors.lightGray};
  color: ${(props) => props.theme.colors.gray};
  border-radius: 5px;
  padding: 12px;
  font-size: ${(props) => props.theme.fonts.size.small};
  width: 100%;
  &:focus {
    outline: none;
    color: ${(props) => props.theme.colors.black};
  }
`
const Underscore = styled.input`
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid  ${(props) => props.theme.colors.gray};
  background-color: transparent;
  color: ${(props) => props.theme.colors.black};
  padding: 6px;
  font-size: ${(props) => props.theme.fonts.size.small};
  width: 100%;
  transition: border-color 0.3s;
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.highlight};
  }
`
export default {
  Bordered,
  GrayBackground,
  Underscore
}