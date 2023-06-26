import { createTheme, rempiDefaultConfig } from "rempi-core";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const { className, getCssText } = createTheme('dark-theme', rempiDefaultConfig)

  return (
    <html lang="en" className={className}>
      <head>
        <style id="#rempi" dangerouslySetInnerHTML={{ __html: getCssText() }}></style>
      </head>
      <body
        style={{
          color: 'var(--colors-error12)',
          backgroundColor: 'var(--colors-primary2)',
        }}>
          {children}
      </body>
    </html>
  );
}
