"use client";

import "@rempi-ui/core/src/config/global-reset.scss";
import { Inter } from "next/font/google";
import { FC, PropsWithChildren, useContext } from "react";
import { ThemeProvider, ThemeProviderContext } from "./ThemeProvider";
import { Tooltip } from "@rempi-ui/tooltip";
import { Toast } from "@rempi-ui/toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <Html>{children}</Html>
    </ThemeProvider>
  );
}

const Html: FC<PropsWithChildren> = ({ children }) => {
  const {
    theme: { getCssText, className },
  } = useContext(ThemeProviderContext);

  return (
    <Tooltip.Provider>
      <Toast.Provider>
        <html lang="en" className={`${className} ${inter.className}`}>
          <head>
            <style
              id="#rempi"
              dangerouslySetInnerHTML={{ __html: getCssText() }}
            ></style>
          </head>
          <body>{children}</body>
        </html>
      </Toast.Provider>
    </Tooltip.Provider>
  );
};
