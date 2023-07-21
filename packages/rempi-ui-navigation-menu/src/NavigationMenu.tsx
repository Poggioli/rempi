import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import classNames from "classnames";
import { ChevronDown } from "lucide-react";
import "./NavigationMenu.scss";

export type NavigationMenuRootProps = HTMLRempiProps<
  typeof NavigationMenu.Root
> &
  NavigationMenu.NavigationMenuProps &
  NavigationMenuViewportProps;

export const NavigationMenuRoot = forwardRef<
  typeof NavigationMenu.Root,
  NavigationMenuRootProps
>(
  (
    {
      className,
      forceMount,
      as: Component = NavigationMenu.Root,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-navigation-menu__root", className)}
      >
        <NavigationMenuList>{children}</NavigationMenuList>
        <NavigationMenuViewport forceMount={forceMount} />
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type NavigationMenuListProps = HTMLRempiProps<typeof NavigationMenu.List> &
  NavigationMenu.NavigationMenuListProps;

const NavigationMenuList = forwardRef<
  typeof NavigationMenu.List,
  NavigationMenuListProps
>(({ className, as: Component = NavigationMenu.List, ...props }, ref) => {
  return (
    <Component
      {...props}
      ref={ref}
      className={classNames("rempi-navigation-menu__list", className)}
    />
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type NavigationMenuItemProps = HTMLRempiProps<
  typeof NavigationMenu.Item
> &
  NavigationMenu.NavigationMenuItemProps;

export const NavigationMenuItem = forwardRef<
  typeof NavigationMenu.Item,
  NavigationMenuItemProps
>(({ className, as: Component = NavigationMenu.Item, ...props }, ref) => {
  return (
    <Component
      {...props}
      ref={ref}
      className={classNames("rempi-navigation-menu__item", className)}
    />
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type NavigationMenuTriggerProps = HTMLRempiProps<
  typeof NavigationMenu.Trigger
> &
  NavigationMenu.NavigationMenuTriggerProps;

export const NavigationMenuTrigger = forwardRef<
  typeof NavigationMenu.Trigger,
  NavigationMenuTriggerProps
>(
  (
    { className, as: Component = NavigationMenu.Trigger, children, ...props },
    ref
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-navigation-menu__trigger", className)}
      >
        {children}
        <ChevronDown
          className="rempi-navigation-menu__trigger__chevron-down"
          size={16}
        />
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type NavigationMenuContentProps = HTMLRempiProps<
  typeof NavigationMenu.Content
> &
  NavigationMenu.NavigationMenuContentProps;

export const NavigationMenuContent = forwardRef<
  typeof NavigationMenu.Content,
  NavigationMenuContentProps
>(({ className, as: Component = NavigationMenu.Content, ...props }, ref) => {
  return (
    <Component
      {...props}
      ref={ref}
      className={classNames("rempi-navigation-menu__content", className)}
    />
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type NavigationMenuLinkProps = HTMLRempiProps<
  typeof NavigationMenu.Link
> &
  NavigationMenu.NavigationMenuLinkProps;

export const NavigationMenuLink = forwardRef<
  typeof NavigationMenu.Link,
  NavigationMenuLinkProps
>(({ className, as: Component = NavigationMenu.Link, ...props }, ref) => {
  return (
    <Component
      {...props}
      ref={ref}
      className={classNames("rempi-navigation-menu__link", className)}
    />
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type NavigationMenuViewportProps = HTMLRempiProps<
  typeof NavigationMenu.Viewport
> &
  NavigationMenu.NavigationMenuViewportProps;

const NavigationMenuViewport = forwardRef<
  typeof NavigationMenu.Viewport,
  NavigationMenuViewportProps
>(({ className, as: Component = NavigationMenu.Viewport, ...props }, ref) => {
  return (
    <div className="rempi-navigation-menu__viewport-position">
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-navigation-menu__viewport", className)}
      />
    </div>
  );
});
