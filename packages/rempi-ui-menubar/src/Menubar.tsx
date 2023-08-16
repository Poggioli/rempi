import * as Menubar from "@radix-ui/react-menubar";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import {
  StyledMenuBarRoot,
  StyledMenuBarTrigger,
  StyledMenubarItem,
  StyledMenubarCheckboxItem,
  StyledMenubarRadioItem,
  StyledMenubarSubMenuTrigger,
  StyledMenubarContent,
  StyledMenubarSubContent,
  StyledMenubarLabel,
  StyledMenubarSeparator,
  StyledMenubarItemIndicator,
} from "./Menubar.styles";
import { Check, ChevronRight, Dot } from "lucide-react";
import { PointerEvent } from "react";

export type MenubarRootProps = HTMLRempiProps<typeof StyledMenuBarRoot> &
  Menubar.MenubarProps;

export const MenubarRoot = forwardRef<
  typeof StyledMenuBarRoot,
  MenubarRootProps
>(({ ...props }, ref) => {
  return <StyledMenuBarRoot {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type MenubarMenuProps = Menubar.MenubarMenuProps;

export const MenubarMenu = Menubar.Menu;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type MenubarTriggerProps = HTMLRempiProps<typeof StyledMenuBarTrigger> &
  Menubar.MenubarTriggerProps;

export const MenubarTrigger = forwardRef<
  typeof StyledMenuBarTrigger,
  MenubarTriggerProps
>(({ ...props }, ref) => {
  const handleOnPointerEnter = (event: PointerEvent<HTMLButtonElement>) => {
    if (!!props.disabled) {
      event.preventDefault();
      return;
    }

    props.onPointerEnter?.(event);
  };

  return (
    <StyledMenuBarTrigger
      {...props}
      onPointerEnter={handleOnPointerEnter}
      ref={ref}
    />
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type MenubarPortalProps = Menubar.MenubarPortalProps;

const MenubarPortal = Menubar.Portal;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type MenubarContentProps = Omit<
  HTMLRempiProps<typeof StyledMenubarContent>,
  "$condensed"
> &
  Menubar.MenubarContentProps &
  MenubarPortalProps & {
    condensed?: boolean;
  };

export const MenubarContent = forwardRef<
  typeof StyledMenubarContent,
  MenubarContentProps
>(
  (
    {
      condensed = true,
      children,
      forceMount,
      container,
      sideOffset = 6,
      collisionPadding = 16,
      ...props
    },
    ref
  ) => {
    return (
      <MenubarPortal forceMount={forceMount} container={container}>
        <StyledMenubarContent
          {...props}
          ref={ref}
          sideOffset={sideOffset}
          collisionPadding={collisionPadding}
          $condensed={condensed}
        >
          {children}
        </StyledMenubarContent>
      </MenubarPortal>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type MenubarItemProps = HTMLRempiProps<typeof StyledMenubarItem> &
  Menubar.MenubarItemProps;

export const MenubarItem = forwardRef<
  typeof StyledMenubarItem,
  MenubarItemProps
>(({ ...props }, ref) => {
  return <StyledMenubarItem {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type MenubarGroupProps = Menubar.MenubarGroupProps;

export const MenubarGroup = Menubar.Group;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type MenubarLabelProps = HTMLRempiProps<typeof StyledMenubarLabel> &
  Menubar.MenubarLabelProps;

export const MenubarLabel = forwardRef<
  typeof StyledMenubarLabel,
  MenubarLabelProps
>(({ ...props }, ref) => {
  return <StyledMenubarLabel {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type MenubarCheckboxItemProps = HTMLRempiProps<
  typeof StyledMenubarCheckboxItem
> &
  Menubar.MenubarCheckboxItemProps;

export const MenubarCheckboxItem = forwardRef<
  typeof StyledMenubarCheckboxItem,
  MenubarCheckboxItemProps
>(({ children, ...props }, ref) => {
  return (
    <StyledMenubarCheckboxItem {...props} ref={ref}>
      <MenubarItemIndicator>
        <Check size={12} />
      </MenubarItemIndicator>
      {children}
    </StyledMenubarCheckboxItem>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type MenubarRadioGroupProps = HTMLRempiProps<typeof Menubar.RadioGroup> &
  Menubar.MenubarRadioGroupProps;

export const MenubarRadioGroup = forwardRef<
  typeof Menubar.RadioGroup,
  MenubarRadioGroupProps
>(({ as: Component = Menubar.RadioGroup, ...props }, ref) => {
  return <Component {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type MenubarRadioItemProps = HTMLRempiProps<
  typeof StyledMenubarRadioItem
> &
  Menubar.MenubarRadioItemProps;

export const MenubarRadioItem = forwardRef<
  typeof StyledMenubarRadioItem,
  MenubarRadioItemProps
>(({ children, ...props }, ref) => {
  return (
    <StyledMenubarRadioItem {...props} ref={ref}>
      <MenubarItemIndicator>
        <Dot size={24} />
      </MenubarItemIndicator>
      {children}
    </StyledMenubarRadioItem>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type MenubarItemIndicatorProps = Omit<
  HTMLRempiProps<typeof StyledMenubarItemIndicator>,
  "as"
> &
  Menubar.MenubarItemIndicatorProps;

const MenubarItemIndicator = forwardRef<
  typeof StyledMenubarItemIndicator,
  MenubarItemIndicatorProps
>(({ ...props }, ref) => {
  return <StyledMenubarItemIndicator {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type MenubarSeparatorProps = HTMLRempiProps<
  typeof StyledMenubarSeparator
> &
  Menubar.MenubarSeparatorProps;

export const MenubarSeparator = forwardRef<
  typeof StyledMenubarSeparator,
  MenubarSeparatorProps
>(({ ...props }, ref) => {
  return <StyledMenubarSeparator {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type MenubarSubMenuProps = Menubar.MenubarSubProps;

export const MenubarSubMenu = Menubar.Sub;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type MenubarSubMenuTriggerProps = HTMLRempiProps<
  typeof StyledMenubarSubMenuTrigger
> &
  Menubar.MenubarSubTriggerProps;

export const MenubarSubMenuTrigger = forwardRef<
  typeof StyledMenubarSubMenuTrigger,
  MenubarSubMenuTriggerProps
>(({ children, ...props }, ref) => {
  return (
    <StyledMenubarSubMenuTrigger {...props} ref={ref}>
      {children}
      <ChevronRight size={16} />
    </StyledMenubarSubMenuTrigger>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type MenubarSubMenuContentProps = Omit<
  HTMLRempiProps<typeof StyledMenubarSubContent>,
  "$condensed"
> &
  Menubar.MenubarSubContentProps &
  MenubarPortalProps;

export const MenubarSubMenuContent = forwardRef<
  typeof StyledMenubarSubContent,
  MenubarSubMenuContentProps
>(({ children, forceMount, container, ...props }, ref) => {
  return (
    <MenubarPortal forceMount={forceMount} container={container}>
      <StyledMenubarSubContent {...props} ref={ref}>
        {children}
      </StyledMenubarSubContent>
    </MenubarPortal>
  );
});
