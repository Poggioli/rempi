import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import classNames from "classnames";
import { Check, ChevronRight, Dot } from "lucide-react";
import "./DropdownMenu.scss";

export type DropdownMenuRootProps = DropdownMenu.DropdownMenuProps;

export const DropdownMenuRoot = DropdownMenu.Root;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DropdownMenuTriggerProps = HTMLRempiProps<
  typeof DropdownMenu.Trigger
> &
  DropdownMenu.DropdownMenuTriggerProps;

export const DropdownMenuTrigger = forwardRef<
  typeof DropdownMenu.Trigger,
  DropdownMenuTriggerProps
>(
  (
    {
      className,
      as: Component = DropdownMenu.Trigger,
      asChild = true,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        asChild={asChild}
        className={classNames("rempi-dropdown-menu__trigger", className)}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type DropdownMenuPortalProps = DropdownMenu.DropdownMenuPortalProps;

const DropdownMenuPortal = DropdownMenu.Portal;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DropdownMenuContentProps = HTMLRempiProps<
  typeof DropdownMenu.Content
> &
  DropdownMenu.DropdownMenuContentProps &
  DropdownMenuPortalProps & {
    condensed?: boolean;
  };

export const DropdownMenuContent = forwardRef<
  typeof DropdownMenu.Content,
  DropdownMenuContentProps
>(
  (
    {
      children,
      className,
      forceMount,
      container,
      as: Component = DropdownMenu.Content,
      sideOffset = 5,
      collisionPadding = 16,
      condensed = true,
      ...props
    },
    ref
  ) => {
    return (
      <DropdownMenuPortal forceMount={forceMount} container={container}>
        <Component
          {...props}
          ref={ref}
          sideOffset={sideOffset}
          collisionPadding={collisionPadding}
          className={classNames(
            "rempi-dropdown-menu__content",
            { "rempi-dropdown-menu__content--condensed": condensed },
            className
          )}
        >
          {children}
        </Component>
      </DropdownMenuPortal>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DropdownMenuItemProps = HTMLRempiProps<typeof DropdownMenu.Item> &
  DropdownMenu.DropdownMenuItemProps;

export const DropdownMenuItem = forwardRef<
  typeof DropdownMenu.Item,
  DropdownMenuItemProps
>(({ className, as: Component = DropdownMenu.Item, ...props }, ref) => {
  return (
    <Component
      {...props}
      ref={ref}
      className={classNames("rempi-dropdown-menu__item", className)}
    />
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DropdownMenuGroupProps = DropdownMenu.DropdownMenuGroupProps;

export const DropdownMenuGroup = DropdownMenu.Group;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DropdownMenuLabelProps = HTMLRempiProps<typeof DropdownMenu.Label> &
  DropdownMenu.DropdownMenuLabelProps;

export const DropdownMenuLabel = forwardRef<
  typeof DropdownMenu.Label,
  DropdownMenuLabelProps
>(({ className, as: Component = DropdownMenu.Label, ...props }, ref) => {
  return (
    <Component
      {...props}
      ref={ref}
      className={classNames("rempi-dropdown-menu__label", className)}
    />
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DropdownMenuCheckboxItemProps = HTMLRempiProps<
  typeof DropdownMenu.CheckboxItem
> &
  DropdownMenu.DropdownMenuCheckboxItemProps;

export const DropdownMenuCheckboxItem = forwardRef<
  typeof DropdownMenu.CheckboxItem,
  DropdownMenuCheckboxItemProps
>(
  (
    {
      children,
      className,
      as: Component = DropdownMenu.CheckboxItem,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-dropdown-menu__checkbox-item", className)}
      >
        <DropdownMenuItemIndicator>
          <Check size={12} />
        </DropdownMenuItemIndicator>
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DropdownMenuRadioGroupProps = HTMLRempiProps<
  typeof DropdownMenu.RadioGroup
> &
  DropdownMenu.DropdownMenuRadioGroupProps;

export const DropdownMenuRadioGroup = forwardRef<
  typeof DropdownMenu.RadioGroup,
  DropdownMenuRadioGroupProps
>(({ className, as: Component = DropdownMenu.RadioGroup, ...props }, ref) => {
  return (
    <Component
      {...props}
      ref={ref}
      className={classNames("rempi-dropdown-menu__radio-group", className)}
    />
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DropdownMenuRadioItemProps = HTMLRempiProps<
  typeof DropdownMenu.RadioItem
> &
  DropdownMenu.DropdownMenuRadioItemProps;

export const DropdownMenuRadioItem = forwardRef<
  typeof DropdownMenu.RadioItem,
  DropdownMenuRadioItemProps
>(
  (
    { children, className, as: Component = DropdownMenu.RadioItem, ...props },
    ref
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-dropdown-menu__radio-item", className)}
      >
        <DropdownMenuItemIndicator>
          <Dot size={24} />
        </DropdownMenuItemIndicator>
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type DropdownMenuItemIndicatorProps = Omit<
  HTMLRempiProps<typeof DropdownMenu.ItemIndicator>,
  "as"
> &
  DropdownMenu.DropdownMenuItemIndicatorProps;

const DropdownMenuItemIndicator = forwardRef<
  typeof DropdownMenu.ItemIndicator,
  DropdownMenuItemIndicatorProps
>(({ className, ...props }, ref) => {
  return (
    <DropdownMenu.ItemIndicator
      {...props}
      ref={ref}
      className={classNames("rempi-dropdown-menu__item-indicator", className)}
    />
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DropdownMenuSeparatorProps = HTMLRempiProps<
  typeof DropdownMenu.Separator
> &
  DropdownMenu.DropdownMenuSeparatorProps;

export const DropdownMenuSeparator = forwardRef<
  typeof DropdownMenu.Separator,
  DropdownMenuSeparatorProps
>(({ className, as: Component = DropdownMenu.Separator, ...props }, ref) => {
  return (
    <Component
      {...props}
      ref={ref}
      className={classNames("rempi-dropdown-menu__separator", className)}
    />
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DropdownMenuSubMenuProps = DropdownMenu.DropdownMenuSubProps;

export const DropdownMenuSubMenu = DropdownMenu.Sub;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DropdownMenuSubMenuTriggerProps = HTMLRempiProps<
  typeof DropdownMenu.SubTrigger
> &
  DropdownMenu.DropdownMenuSubTriggerProps;

export const DropdownMenuSubMenuTrigger = forwardRef<
  typeof DropdownMenu.SubTrigger,
  DropdownMenuSubMenuTriggerProps
>(
  (
    { className, as: Component = DropdownMenu.SubTrigger, children, ...props },
    ref
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames(
          "rempi-dropdown-menu__sub-menu__trigger",
          className
        )}
      >
        {children}
        <ChevronRight size={16} />
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DropdownMenuSubMenuContentProps = HTMLRempiProps<
  typeof DropdownMenu.SubContent
> &
  DropdownMenu.DropdownMenuSubContentProps &
  DropdownMenuPortalProps;

export const DropdownMenuSubMenuContent = forwardRef<
  typeof DropdownMenu.SubContent,
  DropdownMenuSubMenuContentProps
>(
  (
    {
      children,
      className,
      forceMount,
      container,
      as: Component = DropdownMenu.SubContent,
      ...props
    },
    ref
  ) => {
    return (
      <DropdownMenuPortal forceMount={forceMount} container={container}>
        <Component
          {...props}
          ref={ref}
          className={classNames(
            "rempi-dropdown-menu__sub-menu__content",
            className
          )}
        >
          {children}
        </Component>
      </DropdownMenuPortal>
    );
  }
);
