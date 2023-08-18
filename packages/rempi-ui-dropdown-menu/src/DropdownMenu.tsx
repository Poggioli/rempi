import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { forwardRef, HTMLRempiProps, RempiVariant } from "@rempi-ui/core";
import { Check, ChevronRight, Dot } from "lucide-react";
import {
  StyledDropdownMenuCheckboxItem,
  StyledDropdownMenuContent,
  StyledDropdownMenuItem,
  StyledDropdownMenuItemIndicator,
  StyledDropdownMenuLabel,
  StyledDropdownMenuRadioItem,
  StyledDropdownMenuSeparator,
  StyledDropdownMenuSubContent,
  StyledDropdownMenuSubMenuTrigger,
} from "./DropdownMenu.styles";

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
>(({ as: Component = DropdownMenu.Trigger, asChild = true, ...props }, ref) => {
  return <Component {...props} ref={ref} asChild={asChild} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type DropdownMenuPortalProps = DropdownMenu.DropdownMenuPortalProps;

const DropdownMenuPortal = DropdownMenu.Portal;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DropdownMenuContentProps = Omit<
  HTMLRempiProps<typeof StyledDropdownMenuContent>,
  "$condensed"
> &
  DropdownMenu.DropdownMenuContentProps &
  DropdownMenuPortalProps & {
    condensed?: RempiVariant<boolean>;
  };

export const DropdownMenuContent = forwardRef<
  typeof StyledDropdownMenuContent,
  DropdownMenuContentProps
>(
  (
    {
      children,
      forceMount,
      container,
      sideOffset = 5,
      collisionPadding = 16,
      condensed = true,
      ...props
    },
    ref
  ) => {
    return (
      <DropdownMenuPortal forceMount={forceMount} container={container}>
        <StyledDropdownMenuContent
          {...props}
          ref={ref}
          sideOffset={sideOffset}
          collisionPadding={collisionPadding}
          $condensed={condensed}
        >
          {children}
        </StyledDropdownMenuContent>
      </DropdownMenuPortal>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DropdownMenuItemProps = HTMLRempiProps<
  typeof StyledDropdownMenuItem
> &
  DropdownMenu.DropdownMenuItemProps;

export const DropdownMenuItem = forwardRef<
  typeof StyledDropdownMenuItem,
  DropdownMenuItemProps
>(({ ...props }, ref) => {
  return <StyledDropdownMenuItem {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DropdownMenuGroupProps = DropdownMenu.DropdownMenuGroupProps;

export const DropdownMenuGroup = DropdownMenu.Group;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DropdownMenuLabelProps = HTMLRempiProps<
  typeof StyledDropdownMenuLabel
> &
  DropdownMenu.DropdownMenuLabelProps;

export const DropdownMenuLabel = forwardRef<
  typeof StyledDropdownMenuLabel,
  DropdownMenuLabelProps
>(({ ...props }, ref) => {
  return <StyledDropdownMenuLabel {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DropdownMenuCheckboxItemProps = HTMLRempiProps<
  typeof StyledDropdownMenuCheckboxItem
> &
  DropdownMenu.DropdownMenuCheckboxItemProps;

export const DropdownMenuCheckboxItem = forwardRef<
  typeof StyledDropdownMenuCheckboxItem,
  DropdownMenuCheckboxItemProps
>(({ children, ...props }, ref) => {
  return (
    <StyledDropdownMenuCheckboxItem {...props} ref={ref}>
      <DropdownMenuItemIndicator>
        <Check size={12} />
      </DropdownMenuItemIndicator>
      {children}
    </StyledDropdownMenuCheckboxItem>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DropdownMenuRadioGroupProps = HTMLRempiProps<
  typeof DropdownMenu.RadioGroup
> &
  DropdownMenu.DropdownMenuRadioGroupProps;

export const DropdownMenuRadioGroup = forwardRef<
  typeof DropdownMenu.RadioGroup,
  DropdownMenuRadioGroupProps
>(({ as: Component = DropdownMenu.RadioGroup, ...props }, ref) => {
  return <Component {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DropdownMenuRadioItemProps = HTMLRempiProps<
  typeof StyledDropdownMenuRadioItem
> &
  DropdownMenu.DropdownMenuRadioItemProps;

export const DropdownMenuRadioItem = forwardRef<
  typeof StyledDropdownMenuRadioItem,
  DropdownMenuRadioItemProps
>(({ children, ...props }, ref) => {
  return (
    <StyledDropdownMenuRadioItem {...props} ref={ref}>
      <DropdownMenuItemIndicator>
        <Dot size={24} />
      </DropdownMenuItemIndicator>
      {children}
    </StyledDropdownMenuRadioItem>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type DropdownMenuItemIndicatorProps = Omit<
  HTMLRempiProps<typeof StyledDropdownMenuItemIndicator>,
  "as"
> &
  DropdownMenu.DropdownMenuItemIndicatorProps;

const DropdownMenuItemIndicator = forwardRef<
  typeof StyledDropdownMenuItemIndicator,
  DropdownMenuItemIndicatorProps
>(({ ...props }, ref) => {
  return <StyledDropdownMenuItemIndicator {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DropdownMenuSeparatorProps = HTMLRempiProps<
  typeof StyledDropdownMenuSeparator
> &
  DropdownMenu.DropdownMenuSeparatorProps;

export const DropdownMenuSeparator = forwardRef<
  typeof StyledDropdownMenuSeparator,
  DropdownMenuSeparatorProps
>(({ ...props }, ref) => {
  return <StyledDropdownMenuSeparator {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DropdownMenuSubMenuProps = DropdownMenu.DropdownMenuSubProps;

export const DropdownMenuSubMenu = DropdownMenu.Sub;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DropdownMenuSubMenuTriggerProps = HTMLRempiProps<
  typeof StyledDropdownMenuSubMenuTrigger
> &
  DropdownMenu.DropdownMenuSubTriggerProps;

export const DropdownMenuSubMenuTrigger = forwardRef<
  typeof StyledDropdownMenuSubMenuTrigger,
  DropdownMenuSubMenuTriggerProps
>(({ children, ...props }, ref) => {
  return (
    <StyledDropdownMenuSubMenuTrigger {...props} ref={ref}>
      {children}
      <ChevronRight size={16} />
    </StyledDropdownMenuSubMenuTrigger>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DropdownMenuSubMenuContentProps = Omit<
  HTMLRempiProps<typeof StyledDropdownMenuSubContent>,
  "$condensed"
> &
  DropdownMenu.DropdownMenuSubContentProps &
  DropdownMenuPortalProps;

export const DropdownMenuSubMenuContent = forwardRef<
  typeof StyledDropdownMenuSubContent,
  DropdownMenuSubMenuContentProps
>(({ children, forceMount, container, ...props }, ref) => {
  return (
    <DropdownMenuPortal forceMount={forceMount} container={container}>
      <StyledDropdownMenuSubContent {...props} ref={ref}>
        {children}
      </StyledDropdownMenuSubContent>
    </DropdownMenuPortal>
  );
});
