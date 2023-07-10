import { createTheme, rempiDefaultConfig } from "@rempi-ui/core";
import { Inter } from "next/font/google";
import "@rempi-ui/core/src/config/global-reset.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { className, getCssText } = createTheme("dark-theme", {
    colors: {
      primary1: "#131620",
      primary2: "#15192d",
      primary3: "#192140",
      primary4: "#1c274f",
      primary5: "#1f2c5c",
      primary6: "#22346e",
      primary7: "#273e89",
      primary8: "#2f4eb2",
      primary9: "#3e63dd",
      primary10: "#5373e7",
      primary11: "#849dff",
      primary12: "#eef1fd",
    },
  });

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
