import { SocialMedias } from "@/components/SocialMedias";
import { IconButton } from "@rempi-ui/button";
import { Container } from "@rempi-ui/container";
import { NavigationMenu as RempiNavigationMenu } from "@rempi-ui/navigation-menu";
import { Popover } from "@rempi-ui/popover";
import { Collapsible } from "@rempi-ui/collpasible";
import { Menu } from "lucide-react";
import { FC } from "react";
import {
  StyledNavigationMenuHeader,
  StyledNavigationMenuHeaderContainer,
  StyledNavigationMenuHeaderMenuDesktop,
  StyledNavigationMenuHeaderMenuMobile,
  StyledNavigationMenuHeaderPopoverContent,
  StyledNavigationMenuHeaderPopoverTrigger,
} from "./NavigationMenu.styles";

export const NavigationMenu: FC = () => {
  return (
    <StyledNavigationMenuHeader>
      <StyledNavigationMenuHeaderContainer
        as={(props: any) => <Container {...props} as="header" />}
        variant="md"
        centered
      >
        <Collapsible.Root>
          <StyledNavigationMenuHeaderPopoverTrigger as={Collapsible.Trigger}>
            <IconButton
              size="small"
              variant="text"
              aria-label="Menu de navegação"
            >
              <Menu size={24} />
            </IconButton>
          </StyledNavigationMenuHeaderPopoverTrigger>
          <StyledNavigationMenuHeaderPopoverContent as={Collapsible.Content}>
            <StyledNavigationMenuHeaderMenuMobile as={RempiNavigationMenu.Root}>
              <RempiNavigationMenu.Item>
                <RempiNavigationMenu.Link href="/">
                  Rempi-UI
                </RempiNavigationMenu.Link>
              </RempiNavigationMenu.Item>
              <RempiNavigationMenu.Item>
                <RempiNavigationMenu.Link href="/docs/components/accordion">
                  Documentation
                </RempiNavigationMenu.Link>
              </RempiNavigationMenu.Item>
              <RempiNavigationMenu.Item>
                <RempiNavigationMenu.Link href="/components">
                  Components
                </RempiNavigationMenu.Link>
              </RempiNavigationMenu.Item>
              <RempiNavigationMenu.Item>
                <RempiNavigationMenu.Link href="/examples">
                  Examples
                </RempiNavigationMenu.Link>
              </RempiNavigationMenu.Item>
            </StyledNavigationMenuHeaderMenuMobile>
          </StyledNavigationMenuHeaderPopoverContent>
        </Collapsible.Root>

        <StyledNavigationMenuHeaderMenuDesktop as={RempiNavigationMenu.Root}>
          <RempiNavigationMenu.Item>
            <RempiNavigationMenu.Link href="/">
              Rempi-UI
            </RempiNavigationMenu.Link>
          </RempiNavigationMenu.Item>
          <RempiNavigationMenu.Item>
            <RempiNavigationMenu.Link href="/docs/components/accordion">
              Documentation
            </RempiNavigationMenu.Link>
          </RempiNavigationMenu.Item>
          <RempiNavigationMenu.Item>
            <RempiNavigationMenu.Link href="/components">
              Components
            </RempiNavigationMenu.Link>
          </RempiNavigationMenu.Item>
          <RempiNavigationMenu.Item>
            <RempiNavigationMenu.Link href="/examples">
              Examples
            </RempiNavigationMenu.Link>
          </RempiNavigationMenu.Item>
        </StyledNavigationMenuHeaderMenuDesktop>
        <div>
          <SocialMedias />
        </div>
      </StyledNavigationMenuHeaderContainer>
    </StyledNavigationMenuHeader>
  );
};
