import { SocialMedias } from "@/components/SocialMedias";
import { IconButton } from "@rempi-ui/button";
import { Container } from "@rempi-ui/container";
import { NavigationMenu as RempiNavigationMenu } from "@rempi-ui/navigation-menu";
import { Popover } from "@rempi-ui/popover";
import { Menu } from "lucide-react";
import { FC } from "react";
import "./NavigationMenu.scss";

export const NavigationMenu: FC = () => {
  return (
    <div className="navigation-menu-header">
      <Container
        as="header"
        variant="md"
        centered
        className="navigation-menu-header__container"
      >
        <Popover.Root>
          <Popover.Trigger className="navigation-menu-header__popover-trigger">
            <IconButton
              size="small"
              variant="text"
              aria-label="Menu de navegação"
            >
              <Menu size={24} />
            </IconButton>
          </Popover.Trigger>
          <Popover.Content className="navigation-menu-header__popover-content">
            <RempiNavigationMenu.Root className="navigation-menu-header__menu--mobile">
              <RempiNavigationMenu.Item>
                <RempiNavigationMenu.Link href="/">
                  Rempi-UI
                </RempiNavigationMenu.Link>
              </RempiNavigationMenu.Item>
              <RempiNavigationMenu.Item>
                <RempiNavigationMenu.Link href="/docs">
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
            </RempiNavigationMenu.Root>
          </Popover.Content>
        </Popover.Root>

        <RempiNavigationMenu.Root className="navigation-menu-header__menu--desktop">
          <RempiNavigationMenu.Item>
            <RempiNavigationMenu.Link href="/">
              Rempi-UI
            </RempiNavigationMenu.Link>
          </RempiNavigationMenu.Item>
          <RempiNavigationMenu.Item>
            <RempiNavigationMenu.Link href="/docs">
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
        </RempiNavigationMenu.Root>
        <SocialMedias />
      </Container>
    </div>
  );
};
