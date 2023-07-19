import * as Menubar from "@radix-ui/react-menubar";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import classNames from "classnames";
import { Check, ChevronRight, Dot } from "lucide-react";
import { PointerEvent } from "react";
import "./Menubar.scss";

export type MenubarRootProps = HTMLRempiProps<typeof Menubar.Root> &
  Menubar.MenubarProps;

export const MenubarRoot = forwardRef<typeof Menubar.Root, MenubarRootProps>(
  ({ className, as: Component = Menubar.Root, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-menubar__root", className)}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type MenubarMenuProps = Menubar.MenubarMenuProps;

export const MenubarMenu = Menubar.Menu;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type MenubarTriggerProps = HTMLRempiProps<typeof Menubar.Trigger> &
  Menubar.MenubarTriggerProps;

export const MenubarTrigger = forwardRef<
  typeof Menubar.Trigger,
  MenubarTriggerProps
>(({ className, as: Component = Menubar.Trigger, ...props }, ref) => {
  const handleOnPointerEnter = (event: PointerEvent<HTMLButtonElement>) => {
    if (!!props.disabled) {
      event.preventDefault();
      return;
    }

    props.onPointerEnter?.(event);
  };

  return (
    <Component
      {...props}
      onPointerEnter={handleOnPointerEnter}
      ref={ref}
      className={classNames("rempi-menubar__trigger", className)}
    />
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type MenubarPortalProps = Menubar.MenubarPortalProps;

const MenubarPortal = Menubar.Portal;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type MenubarContentProps = HTMLRempiProps<typeof Menubar.Content> &
  Menubar.MenubarContentProps &
  MenubarPortalProps;

export const MenubarContent = forwardRef<
  typeof Menubar.Content,
  MenubarContentProps
>(
  (
    {
      children,
      className,
      forceMount,
      container,
      as: Component = Menubar.Content,
      sideOffset = 6,
      collisionPadding = 16,
      ...props
    },
    ref
  ) => {
    return (
      <MenubarPortal forceMount={forceMount} container={container}>
        <Component
          {...props}
          ref={ref}
          sideOffset={sideOffset}
          collisionPadding={collisionPadding}
          className={classNames("rempi-menubar__content", className)}
        >
          {children}
        </Component>
      </MenubarPortal>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type MenubarItemProps = HTMLRempiProps<typeof Menubar.Item> &
  Menubar.MenubarItemProps;

export const MenubarItem = forwardRef<typeof Menubar.Item, MenubarItemProps>(
  ({ className, as: Component = Menubar.Item, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-menubar__item", className)}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type MenubarGroupProps = Menubar.MenubarGroupProps;

export const MenubarGroup = Menubar.Group;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type MenubarLabelProps = HTMLRempiProps<typeof Menubar.Label> &
  Menubar.MenubarLabelProps;

export const MenubarLabel = forwardRef<typeof Menubar.Label, MenubarLabelProps>(
  ({ className, as: Component = Menubar.Label, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-menubar__label", className)}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type MenubarCheckboxItemProps = HTMLRempiProps<
  typeof Menubar.CheckboxItem
> &
  Menubar.MenubarCheckboxItemProps;

export const MenubarCheckboxItem = forwardRef<
  typeof Menubar.CheckboxItem,
  MenubarCheckboxItemProps
>(
  (
    { children, className, as: Component = Menubar.CheckboxItem, ...props },
    ref
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-menubar__checkbox-item", className)}
      >
        <MenubarItemIndicator>
          <Check size={12} />
        </MenubarItemIndicator>
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type MenubarRadioGroupProps = HTMLRempiProps<typeof Menubar.RadioGroup> &
  Menubar.MenubarRadioGroupProps;

export const MenubarRadioGroup = forwardRef<
  typeof Menubar.RadioGroup,
  MenubarRadioGroupProps
>(({ className, as: Component = Menubar.RadioGroup, ...props }, ref) => {
  return (
    <Component
      {...props}
      ref={ref}
      className={classNames("rempi-menubar__radio-group", className)}
    />
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type MenubarRadioItemProps = HTMLRempiProps<typeof Menubar.RadioItem> &
  Menubar.MenubarRadioItemProps;

export const MenubarRadioItem = forwardRef<
  typeof Menubar.RadioItem,
  MenubarRadioItemProps
>(
  (
    { children, className, as: Component = Menubar.RadioItem, ...props },
    ref
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-menubar__radio-item", className)}
      >
        <MenubarItemIndicator>
          <Dot size={24} />
        </MenubarItemIndicator>
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type MenubarItemIndicatorProps = Omit<
  HTMLRempiProps<typeof Menubar.ItemIndicator>,
  "as"
> &
  Menubar.MenubarItemIndicatorProps;

const MenubarItemIndicator = forwardRef<
  typeof Menubar.ItemIndicator,
  MenubarItemIndicatorProps
>(({ className, ...props }, ref) => {
  return (
    <Menubar.ItemIndicator
      {...props}
      ref={ref}
      className={classNames("rempi-menubar__item-indicator", className)}
    />
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type MenubarSeparatorProps = HTMLRempiProps<typeof Menubar.Separator> &
  Menubar.MenubarSeparatorProps;

export const MenubarSeparator = forwardRef<
  typeof Menubar.Separator,
  MenubarSeparatorProps
>(({ className, as: Component = Menubar.Separator, ...props }, ref) => {
  return (
    <Component
      {...props}
      ref={ref}
      className={classNames("rempi-menubar__separator", className)}
    />
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type MenubarSubMenuProps = Menubar.MenubarSubProps;

export const MenubarSubMenu = Menubar.Sub;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type MenubarSubMenuTriggerProps = HTMLRempiProps<
  typeof Menubar.SubTrigger
> &
  Menubar.MenubarSubTriggerProps;

export const MenubarSubMenuTrigger = forwardRef<
  typeof Menubar.SubTrigger,
  MenubarSubMenuTriggerProps
>(
  (
    { className, as: Component = Menubar.SubTrigger, children, ...props },
    ref
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-menubar__sub-menu__trigger", className)}
      >
        {children}
        <ChevronRight size={16} />
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type MenubarSubMenuContentProps = HTMLRempiProps<
  typeof Menubar.SubContent
> &
  Menubar.MenubarSubContentProps &
  MenubarPortalProps;

export const MenubarSubMenuContent = forwardRef<
  typeof Menubar.SubContent,
  MenubarSubMenuContentProps
>(
  (
    {
      children,
      className,
      forceMount,
      container,
      as: Component = Menubar.SubContent,
      ...props
    },
    ref
  ) => {
    return (
      <MenubarPortal forceMount={forceMount} container={container}>
        <Component
          {...props}
          ref={ref}
          className={classNames("rempi-menubar__sub-menu__content", className)}
        >
          {children}
        </Component>
      </MenubarPortal>
    );
  }
);
