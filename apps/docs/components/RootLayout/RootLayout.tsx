"use client";

import { NavigationMenu } from "@/components/NavigationMenu";
import {
  GlobalStyles,
  ThemeProvider as ThemeProviderCore,
} from "@rempi-ui/core";
import "@rempi-ui/core/src/config/global-reset.scss";
import { Toast } from "@rempi-ui/toast";
import { Tooltip } from "@rempi-ui/tooltip";
import { ThemeProvider, useThemeProvider } from "app/ThemeProvider";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { Inter } from "next/font/google";
import { FC, PropsWithChildren } from "react";
import { StyledBody } from "./RootLayout.styles";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
  locale: string;
  messages: AbstractIntlMessages;
};

export const RootLayout: FC<PropsWithChildren<RootLayoutProps>> = ({
  children,
  locale,
  messages,
}) => {
  return (
    <ThemeProvider>
      <Html locale={locale} messages={messages}>
        {children}
      </Html>
    </ThemeProvider>
  );
};

const Html: FC<PropsWithChildren<RootLayoutProps>> = ({
  children,
  locale,
  messages,
}) => {
  const {
    theme: { getCssText, className, theme },
  } = useThemeProvider();

  return (
    <ThemeProviderCore theme={theme}>
      <GlobalStyles />
      <Tooltip.Provider>
        <Toast.Provider>
          <html lang={locale} className={`${className} ${inter.className}`}>
            <head>
              <style
                id="rempi"
                dangerouslySetInnerHTML={{ __html: getCssText() }}
              ></style>
            </head>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <StyledBody>
                <NavigationMenu />
                {children}
              </StyledBody>
            </NextIntlClientProvider>
          </html>
        </Toast.Provider>
      </Tooltip.Provider>
    </ThemeProviderCore>
  );
};
