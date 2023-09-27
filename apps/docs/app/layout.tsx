import {
  extractAcceptedLanguage,
  getCurrentLocale,
  getMessagesBundle,
} from "i18n";
import { headers } from "next/headers";
import { RootLayout as RootLayoutComp } from "@/components/RootLayout";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Rempi-UI",
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const reqHeader = headers();
  extractAcceptedLanguage(reqHeader);
  const locale = getCurrentLocale();
  const messages = await getMessagesBundle();

  return (
    <RootLayoutComp locale={locale} messages={messages}>
      {children}
    </RootLayoutComp>
  );
}
