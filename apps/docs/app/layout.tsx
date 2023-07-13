import { createTheme, rempiDefaultConfig } from "@rempi-ui/core";
import { Inter } from "next/font/google";
import "@rempi-ui/core/src/config/global-reset.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { className: darkClassName, getCssText: getCssTextDarkTheme } =
    createTheme("dark-theme", {});

  const { className: lightClassName, getCssText: getCssTextLightTheme } =
    createTheme("light-theme", {
      colors: {
        error1: "#fffcfc",
        error2: "#fff8f8",
        error3: "#ffefef",
        error4: "#ffe5e5",
        error5: "#fdd8d8",
        error6: "#f9c6c6",
        error7: "#f3aeaf",
        error8: "#eb9091",
        error9: "#e5484d",
        error10: "#dc3d43",
        error11: "#cd2b31",
        error12: "#381316",

        primary1: "#fdfcfd",
        primary2: "#f9f8f9",
        primary3: "#f4f2f4",
        primary4: "#eeedef",
        primary5: "#e9e8ea",
        primary6: "#e4e2e4",
        primary7: "#dcdbdd",
        primary8: "#c8c7cb",
        primary9: "#908e96",
        primary10: "#86848d",
        primary11: "#6f6e77",
        primary12: "#1a1523",

        secondary1: "#fdfcfe",
        secondary2: "#fbfaff",
        secondary3: "#f5f2ff",
        secondary4: "#ede9fe",
        secondary5: "#e4defc",
        secondary6: "#d7cff9",
        secondary7: "#c4b8f3",
        secondary8: "#aa99ec",
        secondary9: "#6e56cf",
        secondary10: "#644fc1",
        secondary11: "#5746af",
        secondary12: "#20134b",

        success1: "#fbfefb",
        success2: "#f3fcf3",
        success3: "#ebf9eb",
        success4: "#dff3df",
        success5: "#ceebcf",
        success6: "#b7dfba",
        success7: "#97cf9c",
        success8: "#65ba75",
        success9: "#46a758",
        success10: "#3d9a50",
        success11: "#297c3b",
        success12: "#1b311e",

        warning1: "#fefcfb",
        warning2: "#fef8f4",
        warning3: "#fff1e7",
        warning4: "#ffe8d7",
        warning5: "#ffdcc3",
        warning6: "#ffcca7",
        warning7: "#ffb381",
        warning8: "#fa934e",
        warning9: "#f76808",
        warning10: "#ed5f00",
        warning11: "#bd4b00",
        warning12: "#451e11",

        info1: "#fbfdff",
        info2: "#f5faff",
        info3: "#edf6ff",
        info4: "#e1f0ff",
        info5: "#cee7fe",
        info6: "#b7d9f8",
        info7: "#96c7f2",
        info8: "#5eb0ef",
        info9: "#0091ff",
        info10: "#0081f1",
        info11: "#006adc",
        info12: "#00254d",

        grey1: "#fdfcfd",
        grey2: "#f9f8f9",
        grey3: "#f4f2f4",
        grey4: "#eeedef",
        grey5: "#e9e8ea",
        grey6: "#e4e2e4",
        grey7: "#dcdbdd",
        grey8: "#c8c7cb",
        grey9: "#908e96",
        grey10: "#86848d",
        grey11: "#6f6e77",
        grey12: "#1a1523",
      },
    });

  return (
    <html lang="en" className={`${darkClassName} ${inter.className}`}>
      <head>
        <style
          id="#rempi"
          dangerouslySetInnerHTML={{ __html: getCssTextDarkTheme() }}
        ></style>
      </head>
      <body>{children}</body>
    </html>
  );
}
