"use client";

/**
 * Wrapper Component
 * -----------------
 * Responsibilities:
 * - Provides Material UI theme to the application
 * - Ensures proper SSR + hydration for MUI styles using App Router
 * - Prevents FOUC (Flash of Unstyled Content) on hard reload
 * - Applies global CSS reset via CssBaseline
 * - Displays a global loading fallback using React Suspense
 * - Renders global toast notifications
 */

import { ThemeProvider, CssBaseline } from "@mui/material";

// MUI official App Router cache provider
// Ensures Emotion cache is synchronized between server and client
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import theme from "@/theme";
import { ToastContainer } from "react-toastify";

export default function Wrapper({ children }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
        <ToastContainer position="top-right" autoClose={3000} />
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
