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
    title: "Overview",
    items: [
      {
        label: "Introduction",
        href: "/docs/overview/introduction",
      },
      {
        label: "Getting started",
        href: "/docs/overview/getting-started",
      },
    ],
  },
  {
    title: "Components",
    items: [
      { label: "Accordion", href: "/docs/components/accordion" },
      { label: "Alert Dialog", href: "/docs/components/alert-dialog" },
      { label: "Aspect Ratio", href: "/docs/components/aspect-ratio" },
      { label: "Avatar", href: "/docs/components/avatar" },
      { label: "Badge", href: "/docs/components/badge" },
      { label: "Blockquote", href: "/docs/components/blockquote" },
      { label: "Button", href: "/docs/components/button" },
      { label: "Calendar", href: "/docs/components/calendar" },
      { label: "Callout", href: "/docs/components/callout" },
      { label: "Card", href: "/docs/components/card" },
      { label: "Checkbox", href: "/docs/components/checkbox" },
      { label: "Code", href: "/docs/components/code" },
      { label: "Collapsible", href: "/docs/components/collapsible" },
      { label: "Combobox", href: "/docs/components/combobox" },
      { label: "Container", href: "/docs/components/container" },
      { label: "Context Menu", href: "/docs/components/context-menu" },
      { label: "Dialog", href: "/docs/components/dialog" },
      { label: "Drawer", href: "/docs/components/drawer" },
      { label: "Dropdown Menu", href: "/docs/components/dropdown-menu" },
      { label: "Flex", href: "/docs/components/flex" },
      { label: "Heading", href: "/docs/components/heading" },
      { label: "Hover Card", href: "/docs/components/hover-card" },
      { label: "Input", href: "/docs/components/input" },
      { label: "Label", href: "/docs/components/label" },
      { label: "Menubar", href: "/docs/components/menubar" },
      { label: "Navigation Menu", href: "/docs/components/navigation-menu" },
      { label: "Popover", href: "/docs/components/popover" },
      { label: "Progress", href: "/docs/components/progress" },
      { label: "Radio", href: "/docs/components/radio" },
      { label: "Scroll Area", href: "/docs/components/scroll-area" },
      { label: "Select", href: "/docs/components/select" },
      { label: "Separator", href: "/docs/components/separator" },
      { label: "Skeleton", href: "/docs/components/skeleton" },
      { label: "Slider", href: "/docs/components/slider" },
      { label: "Switch", href: "/docs/components/switch" },
      { label: "Table", href: "/docs/components/table" },
      { label: "Tabs", href: "/docs/components/tabs" },
      { label: "Textarea", href: "/docs/components/textarea" },
      { label: "Toast", href: "/docs/components/toast" },
      { label: "Toggle", href: "/docs/components/toggle" },
      { label: "Tooltip", href: "/docs/components/tooltip" },
      { label: "Typography", href: "/docs/components/typography" },
    ],
  },
];

export const DocsNavigationMenu: FC = () => {
  const pathname = usePathname();

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
                {title}
              </ListHeadingStyled>
              {items.map(({ label, href }) => (
                <LinkStyled
                  as={(props: any) => <Typography {...props} as="a" />}
                  fontSize="sm"
                  href={href}
                >
                  <ListItemStyled key={href} $active={pathname.includes(href)}>
                    {label}
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
