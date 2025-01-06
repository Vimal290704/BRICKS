declare module "next-themes" {
  import * as React from "react";

  export interface ThemeProviderProps {
    children?: React.ReactNode;
    attribute?: string;
    defaultTheme?: string;
    enableSystem?: boolean;
    enableColorScheme?: boolean;
    forcedTheme?: string;
    themes?: string[];
    value?: string;
    storageKey?: string;
  }

  export const ThemeProvider: React.FC<ThemeProviderProps>;

  export function useTheme(): {
    theme: string | undefined;
    setTheme: (theme: string) => void;
    systemTheme: "light" | "dark" | undefined;
  };
}
