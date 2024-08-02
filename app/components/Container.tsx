import React from "react";
import styled from "styled-components";

export const Container = styled.div<{
  gap?: number
  align?: string
  justify?: string
  width?: string
  height?: string
  padding?: string
  margin?: string
}>`
  display: flex;
  flex-direction: ${props => props.align || "column"};
  align-items: ${props => props.justify || "center"};
  justify-content: ${props => props.justify || "center"};
  width: ${props => props.width || "auto"};
  height: ${props => props.height || "auto"};
  gap: ${props => props.gap || 16}px;
  padding: ${props => props.padding || "0px"};
`;

export const CenterContainer = ({ children }: { children: React.ReactNode }) => (
  <Container
    width="100vw"
    height="100vh"
    align="column"
    justify="center"
    padding="0px 40px"
  >
    {children}
  </Container>
)

export const WallPaperContainer = ({ children }: { children: React.ReactNode }) => (
  <Container
    width="100vw"
    height="100vh"
    align="column"
    justify="center"
    padding="0px 40px"
    style={{
      backgroundImage: "url(/img/background.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {children}
  </Container>
)

export default Container;