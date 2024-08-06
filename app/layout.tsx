"use client";

import StyledComponentsRegistry from "./lib/registry";
import { ThemeProvider } from "styled-components";
import "./globals.css";
import theme from "./constants/theme";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <ThemeProvider theme={theme}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
