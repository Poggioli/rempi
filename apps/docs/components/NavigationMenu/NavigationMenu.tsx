import { DocsNavigationMenu } from "@/components/DocsNavigationMenu";
import { SocialMedias } from "@/components/SocialMedias";
import { IconButton } from "@rempi-ui/button";
import { styled } from "@rempi-ui/core";
import { Drawer } from "@rempi-ui/drawer";
import { Flex } from "@rempi-ui/flex";
import { Typography } from "@rempi-ui/typography";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { FC } from "react";
import {
  StyledMarginLeftAuto,
  StyledNavigationMenuHeader,
} from "./NavigationMenu.styles";

const StyledContainer = styled.div`
  width: calc(100% - ${({ theme }) => theme.spaces[3]});
  height: 100%;
`;

const HideInDesktop = styled.div`
  ${({ theme }) => theme.breakpoints[3]} {
    display: none;
  }
`;

const HideInTablet = styled.div`
  ${({ theme }) => theme.breakpoints[1]} {
    display: none;
  }
`;

const StyledFillAllAvailableHeight = styled.div`
  height: 100%;
`;

export const NavigationMenu: FC = () => {
  const pathname = usePathname() as string;
  const isDocPages = pathname.includes("docs");
  const t = useTranslations("navigation-menu");

  return (
    <StyledNavigationMenuHeader
      as={(props: any) => <Flex {...props} as="header" />}
      justifyContent="space-between"
      alignItems="center"
    >
      {!isDocPages ? (
        <nav>
          <Typography
            as="a"
            href="/docs/overview/getting-started"
            color="low-contrast"
            fontWeight="semi-bold"
          >
            {t("documentation")}
          </Typography>
        </nav>
      ) : (
        <>
          <Drawer.Root>
            <HideInDesktop as={Drawer.Trigger}>
              <IconButton
                shape="rounded"
                size="small"
                aria-label={t("open")}
                variant="text"
                style={{ padding: 8 }}
              >
                <Menu size={18} />
              </IconButton>
            </HideInDesktop>
            <Drawer.Portal>
              <Drawer.Overlay blur />
              <StyledFillAllAvailableHeight as={Drawer.Content}>
                <HideInTablet as={Drawer.CloseCross} aria-label={t("close")} />
                <StyledContainer>
                  <DocsNavigationMenu />
                </StyledContainer>
              </StyledFillAllAvailableHeight>
            </Drawer.Portal>
          </Drawer.Root>
        </>
      )}

      <StyledMarginLeftAuto>
        <SocialMedias />
      </StyledMarginLeftAuto>
    </StyledNavigationMenuHeader>
  );
};
