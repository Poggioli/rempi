import * as ContextMenu from "@radix-ui/react-context-menu";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import classNames from "classnames";
import { Check, ChevronRight, Dot } from "lucide-react";
import "./ContextMenu.scss";

export type ContextMenuRootProps = ContextMenu.ContextMenuProps;

export const ContextMenuRoot = ContextMenu.Root;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuTriggerProps = HTMLRempiProps<
  typeof ContextMenu.Trigger
> &
  ContextMenu.ContextMenuTriggerProps;

export const ContextMenuTrigger = forwardRef<
  typeof ContextMenu.Trigger,
  ContextMenuTriggerProps
>(({ className, as: Component = ContextMenu.Trigger, ...props }, ref) => {
  return (
    <Component
      {...props}
      ref={ref}
      className={classNames("rempi-context-menu__trigger", className)}
    />
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type ContextMenuPortalProps = ContextMenu.ContextMenuPortalProps;

const ContextMenuPortal = ContextMenu.Portal;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuContentProps = HTMLRempiProps<
  typeof ContextMenu.Content
> &
  ContextMenu.ContextMenuContentProps &
  ContextMenuPortalProps;

export const ContextMenuContent = forwardRef<
  typeof ContextMenu.Content,
  ContextMenuContentProps
>(
  (
    {
      children,
      className,
      forceMount,
      container,
      as: Component = ContextMenu.Content,
      collisionPadding = 16,
      ...props
    },
    ref
  ) => {
    return (
      <ContextMenuPortal forceMount={forceMount} container={container}>
        <Component
          {...props}
          ref={ref}
          collisionPadding={collisionPadding}
          className={classNames("rempi-context-menu__content", className)}
        >
          {children}
        </Component>
      </ContextMenuPortal>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuItemProps = HTMLRempiProps<typeof ContextMenu.Item> &
  ContextMenu.ContextMenuItemProps;

export const ContextMenuItem = forwardRef<
  typeof ContextMenu.Item,
  ContextMenuItemProps
>(({ className, as: Component = ContextMenu.Item, ...props }, ref) => {
  return (
    <Component
      {...props}
      ref={ref}
      className={classNames("rempi-context-menu__item", className)}
    />
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuGroupProps = ContextMenu.ContextMenuGroupProps;

export const ContextMenuGroup = ContextMenu.Group;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuLabelProps = HTMLRempiProps<typeof ContextMenu.Label> &
  ContextMenu.ContextMenuLabelProps;

export const ContextMenuLabel = forwardRef<
  typeof ContextMenu.Label,
  ContextMenuLabelProps
>(({ className, as: Component = ContextMenu.Label, ...props }, ref) => {
  return (
    <Component
      {...props}
      ref={ref}
      className={classNames("rempi-context-menu__label", className)}
    />
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuCheckboxItemProps = HTMLRempiProps<
  typeof ContextMenu.CheckboxItem
> &
  ContextMenu.ContextMenuCheckboxItemProps;

export const ContextMenuCheckboxItem = forwardRef<
  typeof ContextMenu.CheckboxItem,
  ContextMenuCheckboxItemProps
>(
  (
    { children, className, as: Component = ContextMenu.CheckboxItem, ...props },
    ref
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-context-menu__checkbox-item", className)}
      >
        <ContextMenuItemIndicator>
          <Check size={12} />
        </ContextMenuItemIndicator>
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuRadioGroupProps = HTMLRempiProps<
  typeof ContextMenu.RadioGroup
> &
  ContextMenu.ContextMenuRadioGroupProps;

export const ContextMenuRadioGroup = forwardRef<
  typeof ContextMenu.RadioGroup,
  ContextMenuRadioGroupProps
>(({ className, as: Component = ContextMenu.RadioGroup, ...props }, ref) => {
  return (
    <Component
      {...props}
      ref={ref}
      className={classNames("rempi-context-menu__radio-group", className)}
    />
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuRadioItemProps = HTMLRempiProps<
  typeof ContextMenu.RadioItem
> &
  ContextMenu.ContextMenuRadioItemProps;

export const ContextMenuRadioItem = forwardRef<
  typeof ContextMenu.RadioItem,
  ContextMenuRadioItemProps
>(
  (
    { children, className, as: Component = ContextMenu.RadioItem, ...props },
    ref
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-context-menu__radio-item", className)}
      >
        <ContextMenuItemIndicator>
          <Dot size={24} />
        </ContextMenuItemIndicator>
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type ContextMenuItemIndicatorProps = Omit<
  HTMLRempiProps<typeof ContextMenu.ItemIndicator>,
  "as"
> &
  ContextMenu.ContextMenuItemIndicatorProps;

const ContextMenuItemIndicator = forwardRef<
  typeof ContextMenu.ItemIndicator,
  ContextMenuItemIndicatorProps
>(({ className, ...props }, ref) => {
  return (
    <ContextMenu.ItemIndicator
      {...props}
      ref={ref}
      className={classNames("rempi-context-menu__item-indicator", className)}
    />
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuSeparatorProps = HTMLRempiProps<
  typeof ContextMenu.Separator
> &
  ContextMenu.ContextMenuSeparatorProps;

export const ContextMenuSeparator = forwardRef<
  typeof ContextMenu.Separator,
  ContextMenuSeparatorProps
>(({ className, as: Component = ContextMenu.Separator, ...props }, ref) => {
  return (
    <Component
      {...props}
      ref={ref}
      className={classNames("rempi-context-menu__separator", className)}
    />
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuSubMenuProps = ContextMenu.ContextMenuSubProps;

export const ContextMenuSubMenu = ContextMenu.Sub;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuSubMenuTriggerProps = HTMLRempiProps<
  typeof ContextMenu.SubTrigger
> &
  ContextMenu.ContextMenuSubTriggerProps;

export const ContextMenuSubMenuTrigger = forwardRef<
  typeof ContextMenu.SubTrigger,
  ContextMenuSubMenuTriggerProps
>(
  (
    { className, as: Component = ContextMenu.SubTrigger, children, ...props },
    ref
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames(
          "rempi-context-menu__sub-menu__trigger",
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

export type ContextMenuSubMenuContentProps = HTMLRempiProps<
  typeof ContextMenu.SubContent
> &
  ContextMenu.ContextMenuSubContentProps &
  ContextMenuPortalProps;

export const ContextMenuSubMenuContent = forwardRef<
  typeof ContextMenu.SubContent,
  ContextMenuSubMenuContentProps
>(
  (
    {
      children,
      className,
      forceMount,
      container,
      as: Component = ContextMenu.SubContent,
      ...props
    },
    ref
  ) => {
    return (
      <ContextMenuPortal forceMount={forceMount} container={container}>
        <Component
          {...props}
          ref={ref}
          className={classNames(
            "rempi-context-menu__sub-menu__content",
            className
          )}
        >
          {children}
        </Component>
      </ContextMenuPortal>
    );
  }
);
