import "@rempi-ui/core/src/config/global-reset.scss";
import { extractAcceptedLanguage, getCurrentLocale, getMessagesBundle } from "i18n";
import { headers } from 'next/headers';
import { RootLayout as RootLayoutComp } from '@/components/RootLayout';


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const reqHeader = headers();
  extractAcceptedLanguage(reqHeader)
  const locale = getCurrentLocale();
  const messages = await getMessagesBundle();

  return <RootLayoutComp locale={locale} messages={messages} >{children}</RootLayoutComp>;
}
