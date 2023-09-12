import { FC, Fragment } from "react";

import { Heading } from "@rempi-ui/heading";
import { ScrollArea } from "@rempi-ui/scroll-area";
import { Separator } from "@rempi-ui/separator";
import { Typography } from "@rempi-ui/typography";
import { usePathname } from "next/navigation";
import {
  LinkStyled,
  ListHeadingStyled,
  ListItemStyled,
  ListStyled,
  SeparatorStyled,
} from "./DocsNavigationMenu.styles";
import { useTranslations } from "next-intl";

type MenuItem = {
  label: string;
  href: string;
};

type Menu = {
  title: string;
  items: MenuItem[];
};

const menus: Menu[] = [
  {
    title: "0.title",
    items: [
      {
        label: "0.items.0",
        href: "/docs/overview/introduction",
      },
      {
        label: "0.items.1",
        href: "/docs/overview/getting-started",
      },
      {
        label: "0.items.2",
        href: "/docs/overview/tokens",
      },
      {
        label: "0.items.3",
        href: "/docs/overview/customization",
      },
    ],
  },
  {
    title: "1.title",
    items: [
      { label: "1.items.0", href: "/docs/components/accordion" },
      { label: "1.items.1", href: "/docs/components/alert-dialog" },
      { label: "1.items.2", href: "/docs/components/aspect-ratio" },
      { label: "1.items.3", href: "/docs/components/avatar" },
      { label: "1.items.4", href: "/docs/components/badge" },
      { label: "1.items.5", href: "/docs/components/blockquote" },
      { label: "1.items.6", href: "/docs/components/button" },
      { label: "1.items.7", href: "/docs/components/calendar" },
      { label: "1.items.8", href: "/docs/components/callout" },
      { label: "1.items.9", href: "/docs/components/card" },
      { label: "1.items.10", href: "/docs/components/checkbox" },
      { label: "1.items.11", href: "/docs/components/code" },
      { label: "1.items.12", href: "/docs/components/collapsible" },
      { label: "1.items.13", href: "/docs/components/combobox" },
      { label: "1.items.14", href: "/docs/components/container" },
      { label: "1.items.15", href: "/docs/components/context-menu" },
      { label: "1.items.16", href: "/docs/components/dialog" },
      { label: "1.items.17", href: "/docs/components/drawer" },
      { label: "1.items.18", href: "/docs/components/dropdown-menu" },
      { label: "1.items.19", href: "/docs/components/flex" },
      { label: "1.items.20", href: "/docs/components/heading" },
      { label: "1.items.21", href: "/docs/components/hover-card" },
      { label: "1.items.22", href: "/docs/components/input" },
      { label: "1.items.23", href: "/docs/components/label" },
      { label: "1.items.24", href: "/docs/components/menubar" },
      { label: "1.items.25", href: "/docs/components/navigation-menu" },
      { label: "1.items.26", href: "/docs/components/popover" },
      { label: "1.items.27", href: "/docs/components/progress" },
      { label: "1.items.28", href: "/docs/components/radio" },
      { label: "1.items.29", href: "/docs/components/scroll-area" },
      { label: "1.items.30", href: "/docs/components/select" },
      { label: "1.items.31", href: "/docs/components/separator" },
      { label: "1.items.32", href: "/docs/components/skeleton" },
      { label: "1.items.33", href: "/docs/components/slider" },
      { label: "1.items.34", href: "/docs/components/switch" },
      { label: "1.items.35", href: "/docs/components/table" },
      { label: "1.items.36", href: "/docs/components/tabs" },
      { label: "1.items.37", href: "/docs/components/textarea" },
      { label: "1.items.38", href: "/docs/components/toast" },
      { label: "1.items.39", href: "/docs/components/toggle" },
      { label: "1.items.40", href: "/docs/components/tooltip" },
      { label: "1.items.41", href: "/docs/components/typography" },
    ],
  },
];

export const DocsNavigationMenu: FC = () => {
  const pathname = usePathname();
  const t = useTranslations("docs-navigation-menu");

  return (
    <ScrollArea.Root
      style={{
        height: "100%",
      }}
    >
      <ScrollArea.Viewport>
        <ListStyled>
          {menus.map(({ title, items }, index) => (
            <Fragment key={title}>
              <ListHeadingStyled
                as={Heading}
                variant="6"
                fontSize="xlg"
                fontWeight="semi-bold"
              >
                {t(title)}
              </ListHeadingStyled>
              {items.map(({ label, href }) => (
                <LinkStyled
                  as={(props: any) => <Typography {...props} as="a" />}
                  fontSize="sm"
                  href={href}
                >
                  <ListItemStyled key={href} $active={pathname.includes(href)}>
                    {t(label)}
                  </ListItemStyled>
                </LinkStyled>
              ))}
              {index !== menus.length - 1 ? (
                <SeparatorStyled as={Separator} />
              ) : null}
            </Fragment>
          ))}
        </ListStyled>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
};
