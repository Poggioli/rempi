import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import {
  StyledNavigationMenuChevronDown,
  StyledNavigationMenuContent,
  StyledNavigationMenuLink,
  StyledNavigationMenuList,
  StyledNavigationMenuRoot,
  StyledNavigationMenuTrigger,
  StyledNavigationMenuViewport,
  StyledNavigationMenuViewportPosition,
} from "./NavigationMenu.styles";

export type NavigationMenuRootProps = HTMLRempiProps<
  typeof StyledNavigationMenuRoot
> &
  NavigationMenu.NavigationMenuProps &
  NavigationMenuViewportProps;

export const NavigationMenuRoot = forwardRef<
  typeof StyledNavigationMenuRoot,
  NavigationMenuRootProps
>(({ forceMount, children, ...props }, ref) => {
  return (
    <StyledNavigationMenuRoot {...props} ref={ref}>
      <NavigationMenuList>{children}</NavigationMenuList>
      <NavigationMenuViewport forceMount={forceMount} />
    </StyledNavigationMenuRoot>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type NavigationMenuListProps = HTMLRempiProps<typeof StyledNavigationMenuList> &
  NavigationMenu.NavigationMenuListProps;

const NavigationMenuList = forwardRef<
  typeof StyledNavigationMenuList,
  NavigationMenuListProps
>(({ ...props }, ref) => {
  return <StyledNavigationMenuList {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type NavigationMenuItemProps = HTMLRempiProps<
  typeof NavigationMenu.Item
> &
  NavigationMenu.NavigationMenuItemProps;

export const NavigationMenuItem = forwardRef<
  typeof NavigationMenu.Item,
  NavigationMenuItemProps
>(({ as: Component = NavigationMenu.Item, ...props }, ref) => {
  return <Component {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type NavigationMenuTriggerProps = HTMLRempiProps<
  typeof StyledNavigationMenuTrigger
> &
  NavigationMenu.NavigationMenuTriggerProps;

export const NavigationMenuTrigger = forwardRef<
  typeof StyledNavigationMenuTrigger,
  NavigationMenuTriggerProps
>(({ children, ...props }, ref) => {
  return (
    <StyledNavigationMenuTrigger {...props} ref={ref}>
      {children}
      <StyledNavigationMenuChevronDown size={16} />
    </StyledNavigationMenuTrigger>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type NavigationMenuContentProps = HTMLRempiProps<
  typeof StyledNavigationMenuContent
> &
  NavigationMenu.NavigationMenuContentProps;

export const NavigationMenuContent = forwardRef<
  typeof StyledNavigationMenuContent,
  NavigationMenuContentProps
>(({ ...props }, ref) => {
  return <StyledNavigationMenuContent {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type NavigationMenuLinkProps = HTMLRempiProps<
  typeof StyledNavigationMenuLink
> &
  NavigationMenu.NavigationMenuLinkProps;

export const NavigationMenuLink = forwardRef<
  typeof StyledNavigationMenuLink,
  NavigationMenuLinkProps
>(({ ...props }, ref) => {
  return <StyledNavigationMenuLink {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type NavigationMenuViewportProps = HTMLRempiProps<
  typeof StyledNavigationMenuViewport
> &
  NavigationMenu.NavigationMenuViewportProps;

const NavigationMenuViewport = forwardRef<
  typeof StyledNavigationMenuViewport,
  NavigationMenuViewportProps
>(({ ...props }, ref) => {
  return (
    <StyledNavigationMenuViewportPosition>
      <StyledNavigationMenuViewport {...props} ref={ref} />
    </StyledNavigationMenuViewportPosition>
  );
});
