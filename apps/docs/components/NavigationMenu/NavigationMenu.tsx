import { SocialMedias } from "@/components/SocialMedias";
import { Button, IconButton } from "@rempi-ui/button";
import { styled } from "@rempi-ui/core";
import { Dialog } from "@rempi-ui/dialog";
import { Flex } from "@rempi-ui/flex";
import { Typography } from "@rempi-ui/typography";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { DocsNavigationMenu } from "@/components/DocsNavigationMenu";
import {
  StyledMarginLeftAuto,
  StyledNavigationMenuHeader,
} from "./NavigationMenu.styles";
import { Menu } from "lucide-react";

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
  const pathname = usePathname();
  const isDocPages = pathname.includes("docs");

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
            Documentação
          </Typography>
        </nav>
      ) : (
        <>
          <Dialog.Root>
            <HideInDesktop as={Dialog.Trigger}>
              <IconButton
                shape="rounded"
                size="small"
                aria-label="Abrir menu de navegação"
                variant="text"
                style={{ padding: 8 }}
              >
                <Menu size={18} />
              </IconButton>
            </HideInDesktop>
            <Dialog.Portal>
              <Dialog.Overlay blur />
              <StyledFillAllAvailableHeight as={Dialog.Content}>
                <HideInTablet
                  as={Dialog.CloseCross}
                  aria-label="Fechar menu de navegação"
                />
                <StyledContainer>
                  <DocsNavigationMenu />
                </StyledContainer>
              </StyledFillAllAvailableHeight>
            </Dialog.Portal>
          </Dialog.Root>
        </>
      )}

      <StyledMarginLeftAuto>
        <SocialMedias />
      </StyledMarginLeftAuto>
    </StyledNavigationMenuHeader>
  );
};
