import * as ContextMenu from "@radix-ui/react-context-menu";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import { Check, ChevronRight, Dot } from "lucide-react";
import {
  StyledContextMenuCheckboxItem,
  StyledContextMenuContent,
  StyledContextMenuItem,
  StyledContextMenuItemIndicator,
  StyledContextMenuLabel,
  StyledContextMenuRadioItem,
  StyledContextMenuSeparator,
  StyledContextMenuSubContent,
  StyledContextMenuSubMenuTrigger,
} from "./ContextMenu.styles";

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
>(({ as: Component = ContextMenu.Trigger, ...props }, ref) => {
  return <Component {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type ContextMenuPortalProps = ContextMenu.ContextMenuPortalProps;

const ContextMenuPortal = ContextMenu.Portal;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuContentProps = Omit<
  HTMLRempiProps<typeof StyledContextMenuContent>,
  "$condensed"
> &
  ContextMenu.ContextMenuContentProps &
  ContextMenuPortalProps & {
    condensed?: boolean;
  };

export const ContextMenuContent = forwardRef<
  typeof StyledContextMenuContent,
  ContextMenuContentProps
>(
  (
    {
      children,
      condensed = true,
      forceMount,
      container,
      collisionPadding = 16,
      ...props
    },
    ref
  ) => {
    return (
      <ContextMenuPortal forceMount={forceMount} container={container}>
        <StyledContextMenuContent
          {...props}
          ref={ref}
          collisionPadding={collisionPadding}
          $condensed={condensed}
        >
          {children}
        </StyledContextMenuContent>
      </ContextMenuPortal>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuItemProps = HTMLRempiProps<
  typeof StyledContextMenuItem
> &
  ContextMenu.ContextMenuItemProps;

export const ContextMenuItem = forwardRef<
  typeof StyledContextMenuItem,
  ContextMenuItemProps
>(({ ...props }, ref) => {
  return <StyledContextMenuItem {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuGroupProps = ContextMenu.ContextMenuGroupProps;

export const ContextMenuGroup = ContextMenu.Group;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuLabelProps = HTMLRempiProps<
  typeof StyledContextMenuLabel
> &
  ContextMenu.ContextMenuLabelProps;

export const ContextMenuLabel = forwardRef<
  typeof StyledContextMenuLabel,
  ContextMenuLabelProps
>(({ ...props }, ref) => {
  return <StyledContextMenuLabel {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuCheckboxItemProps = HTMLRempiProps<
  typeof StyledContextMenuCheckboxItem
> &
  ContextMenu.ContextMenuCheckboxItemProps;

export const ContextMenuCheckboxItem = forwardRef<
  typeof StyledContextMenuCheckboxItem,
  ContextMenuCheckboxItemProps
>(({ children, ...props }, ref) => {
  return (
    <StyledContextMenuCheckboxItem {...props} ref={ref}>
      <ContextMenuItemIndicator>
        <Check size={12} />
      </ContextMenuItemIndicator>
      {children}
    </StyledContextMenuCheckboxItem>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuRadioGroupProps = HTMLRempiProps<
  typeof ContextMenu.RadioGroup
> &
  ContextMenu.ContextMenuRadioGroupProps;

export const ContextMenuRadioGroup = forwardRef<
  typeof ContextMenu.RadioGroup,
  ContextMenuRadioGroupProps
>(({ as: Component = ContextMenu.RadioGroup, ...props }, ref) => {
  return <Component {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuRadioItemProps = HTMLRempiProps<
  typeof StyledContextMenuRadioItem
> &
  ContextMenu.ContextMenuRadioItemProps;

export const ContextMenuRadioItem = forwardRef<
  typeof StyledContextMenuRadioItem,
  ContextMenuRadioItemProps
>(({ children, ...props }, ref) => {
  return (
    <StyledContextMenuRadioItem {...props} ref={ref}>
      <ContextMenuItemIndicator>
        <Dot size={24} />
      </ContextMenuItemIndicator>
      {children}
    </StyledContextMenuRadioItem>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type ContextMenuItemIndicatorProps = Omit<
  HTMLRempiProps<typeof StyledContextMenuItemIndicator>,
  "as"
> &
  ContextMenu.ContextMenuItemIndicatorProps;

const ContextMenuItemIndicator = forwardRef<
  typeof StyledContextMenuItemIndicator,
  ContextMenuItemIndicatorProps
>(({ ...props }, ref) => {
  return <StyledContextMenuItemIndicator {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuSeparatorProps = HTMLRempiProps<
  typeof StyledContextMenuSeparator
> &
  ContextMenu.ContextMenuSeparatorProps;

export const ContextMenuSeparator = forwardRef<
  typeof StyledContextMenuSeparator,
  ContextMenuSeparatorProps
>(({ ...props }, ref) => {
  return <StyledContextMenuSeparator {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuSubMenuProps = ContextMenu.ContextMenuSubProps;

export const ContextMenuSubMenu = ContextMenu.Sub;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuSubMenuTriggerProps = HTMLRempiProps<
  typeof StyledContextMenuSubMenuTrigger
> &
  ContextMenu.ContextMenuSubTriggerProps;

export const ContextMenuSubMenuTrigger = forwardRef<
  typeof StyledContextMenuSubMenuTrigger,
  ContextMenuSubMenuTriggerProps
>(({ children, ...props }, ref) => {
  return (
    <StyledContextMenuSubMenuTrigger {...props} ref={ref}>
      {children}
      <ChevronRight size={16} />
    </StyledContextMenuSubMenuTrigger>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ContextMenuSubMenuContentProps = Omit<
  HTMLRempiProps<typeof StyledContextMenuSubContent>,
  "$condensed"
> &
  ContextMenu.ContextMenuSubContentProps &
  ContextMenuPortalProps;

export const ContextMenuSubMenuContent = forwardRef<
  typeof StyledContextMenuSubContent,
  ContextMenuSubMenuContentProps
>(({ children, forceMount, container, ...props }, ref) => {
  return (
    <ContextMenuPortal forceMount={forceMount} container={container}>
      <StyledContextMenuSubContent {...props} ref={ref}>
        {children}
      </StyledContextMenuSubContent>
    </ContextMenuPortal>
  );
});
