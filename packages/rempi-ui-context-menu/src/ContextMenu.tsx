import * as ContextMenu from "@radix-ui/react-context-menu";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import classnames from "classnames";
import "./ContextMenu.scss";


export type ContextMenuRootProps = ContextMenu.ContextMenuProps;

export const ContextMenuRoot = ContextMenu.Root;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuTriggerProps = HTMLRempiProps<typeof ContextMenu.Trigger> & ContextMenu.ContextMenuTriggerProps

export const ContextMenuTrigger = forwardRef<typeof ContextMenu.Trigger, ContextMenuTriggerProps>(
  ({ children, className, as: Component = ContextMenu.Trigger, asChild = true, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        asChild={asChild}
        className={`rempi-context-menu__trigger ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuPortalProps = HTMLRempiProps<typeof ContextMenu.Portal> & ContextMenu.ContextMenuPortalProps

export const ContextMenuPortal = forwardRef<typeof ContextMenu.Portal, ContextMenuPortalProps>(
  ({ children, className, as: Component = ContextMenu.Portal, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-context-menu__portal ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuContentProps = HTMLRempiProps<typeof ContextMenu.Content> & ContextMenu.ContextMenuContentProps

export const ContextMenuContent = forwardRef<typeof ContextMenu.Content, ContextMenuContentProps>(
  ({ children, className, as: Component = ContextMenu.Content, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-context-menu__content ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuArrowProps = HTMLRempiProps<typeof ContextMenu.Arrow> & ContextMenu.ContextMenuArrowProps

export const ContextMenuArrow = forwardRef<typeof ContextMenu.Arrow, ContextMenuArrowProps>(
  ({ children, className, as: Component = ContextMenu.Arrow, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-context-menu__arrow ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuItemProps = HTMLRempiProps<typeof ContextMenu.Item> & ContextMenu.ContextMenuItemProps

export const ContextMenuItem = forwardRef<typeof ContextMenu.Item, ContextMenuItemProps>(
  ({ children, className, as: Component = ContextMenu.Item, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-context-menu__item ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuGroupProps = HTMLRempiProps<typeof ContextMenu.Group> & ContextMenu.ContextMenuGroupProps

export const ContextMenuGroup = forwardRef<typeof ContextMenu.Group, ContextMenuGroupProps>(
  ({ children, className, as: Component = ContextMenu.Group, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-context-menu__group ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuLabelProps = HTMLRempiProps<typeof ContextMenu.Label> & ContextMenu.ContextMenuLabelProps

export const ContextMenuLabel = forwardRef<typeof ContextMenu.Label, ContextMenuLabelProps>(
  ({ children, className, as: Component = ContextMenu.Label, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-context-menu__label ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuCheckboxItemProps = HTMLRempiProps<typeof ContextMenu.CheckboxItem> & ContextMenu.ContextMenuCheckboxItemProps

export const ContextMenuCheckboxItem = forwardRef<typeof ContextMenu.CheckboxItem, ContextMenuCheckboxItemProps>(
  ({ children, className, as: Component = ContextMenu.CheckboxItem, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-context-menu__checkbox-item ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuRadioGroupProps = HTMLRempiProps<typeof ContextMenu.RadioGroup> & ContextMenu.ContextMenuRadioGroupProps

export const ContextMenuRadioGroup = forwardRef<typeof ContextMenu.RadioGroup, ContextMenuRadioGroupProps>(
  ({ children, className, as: Component = ContextMenu.RadioGroup, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-context-menu__radio-group ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuRadioItemProps = HTMLRempiProps<typeof ContextMenu.RadioItem> & ContextMenu.ContextMenuRadioItemProps

export const ContextMenuRadioItem = forwardRef<typeof ContextMenu.RadioItem, ContextMenuRadioItemProps>(
  ({ children, className, as: Component = ContextMenu.RadioItem, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-context-menu__radio-item ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuItemIndicatorProps = HTMLRempiProps<typeof ContextMenu.ItemIndicator> & ContextMenu.ContextMenuItemIndicatorProps

export const ContextMenuItemIndicator = forwardRef<typeof ContextMenu.ItemIndicator, ContextMenuItemIndicatorProps>(
  ({ children, className, as: Component = ContextMenu.ItemIndicator, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-context-menu__item-indicator ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuSeparatorProps = HTMLRempiProps<typeof ContextMenu.Separator> & ContextMenu.ContextMenuSeparatorProps

export const ContextMenuSeparator = forwardRef<typeof ContextMenu.Separator, ContextMenuSeparatorProps>(
  ({ children, className, as: Component = ContextMenu.Separator, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-context-menu__separator ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuSubMenuProps = ContextMenu.ContextMenuSubProps;

export const ContextMenuSubMenu = ContextMenu.Sub;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuSubMenuTriggerProps = HTMLRempiProps<typeof ContextMenu.SubTrigger> & ContextMenu.ContextMenuSubTriggerProps

export const ContextMenuSubMenuTrigger = forwardRef<typeof ContextMenu.SubTrigger, ContextMenuSubMenuTriggerProps>(
  ({ children, className, as: Component = ContextMenu.SubTrigger, asChild = true, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        asChild={asChild}
        className={`rempi-context-menu__sub-menu__trigger ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuSubMenuContentProps = HTMLRempiProps<typeof ContextMenu.SubContent> & ContextMenu.ContextMenuSubContentProps

export const ContextMenuSubMenuContent = forwardRef<typeof ContextMenu.SubContent, ContextMenuSubMenuContentProps>(
  ({ children, className, as: Component = ContextMenu.SubContent, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-context-menu__sub-menu__content ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);
