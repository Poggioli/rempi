"use client";

import { NavigationMenu } from "@/components/NavigationMenu";
import "@rempi-ui/core/src/config/global-reset.scss";
import { Toast } from "@rempi-ui/toast";
import { Tooltip } from "@rempi-ui/tooltip";
import { Inter } from "next/font/google";
import { FC, PropsWithChildren, useContext } from "react";
import { ThemeProvider, ThemeProviderContext } from "./ThemeProvider";
import { Container } from "@rempi-ui/container";
import { Footer } from "@/components/Footer";
import { ThemeProvider as ThemeProviderCore } from "@rempi-ui/core";
import {
  StyledBody,
  StyledContainerBody,
  StyledContent,
} from "./layout.styles";

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
    theme: { getCssText, className, theme },
  } = useContext(ThemeProviderContext);

  return (
    <ThemeProviderCore theme={theme}>
      <Tooltip.Provider>
        <Toast.Provider>
          <html lang="en" className={`${className} ${inter.className}`}>
            <head>
              <style
                id="rempi"
                dangerouslySetInnerHTML={{ __html: getCssText() }}
              ></style>
            </head>
            <StyledBody>
              <NavigationMenu />
              <StyledContainerBody as={Container} variant="md" centered>
                <StyledContent>{children}</StyledContent>
                <Footer />
              </StyledContainerBody>
            </StyledBody>
          </html>
        </Toast.Provider>
      </Tooltip.Provider>
    </ThemeProviderCore>
  );
};
