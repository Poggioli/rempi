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
import "./layout.scss";

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
    <Tooltip.Provider>
      <Toast.Provider>
        <html lang="en" className={`${className} ${inter.className}`}>
          <head>
            <style
              id="rempi"
              dangerouslySetInnerHTML={{ __html: getCssText() }}
            ></style>
          </head>
          <body className="body">
            <NavigationMenu />
            <Container variant="md" centered className="layout__container-body">
              <div className="layout__content">{children}</div>
              <Footer />
            </Container>
          </body>
        </html>
      </Toast.Provider>
    </Tooltip.Provider>
  );
};
