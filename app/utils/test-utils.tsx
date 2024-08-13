// src/test-utils.tsx
import React, { ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '@/constants/theme';
import MockAdapter from 'axios-mock-adapter';
import axiosInstance from '@/api/axiosInstance';

// Mock axios instance
const axiosMock = new MockAdapter(axiosInstance);

// Mock localStorage
const localStorageMock = (function () {
  let store: { [key: string]: string } = {};
  return {
    getItem(key: string) {
      return store[key] || null;
    },
    setItem(key: string, value: string) {
      store[key] = value;
    },
    clear() {
      store = {};
    },
    removeItem(key: string) {
      delete store[key];
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// Provide theme to all components
const AllProviders = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: AllProviders, ...options });


const pushMock = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}));

export * from '@testing-library/react';
export { customRender as render, axiosMock, pushMock };