import { createTheme, rempiDefaultConfig } from "@rempi-ui/core";
import { Inter } from "next/font/google";
import "@rempi-ui/core/src/config/global-reset.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { className, getCssText } = createTheme("dark-theme", {});

  return (
    <html lang="en" className={`${className} ${inter.className}`}>
      <head>
        <style
          id="#rempi"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        ></style>
      </head>
      <body>{children}</body>
    </html>
  );
}
