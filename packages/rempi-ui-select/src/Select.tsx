import * as SelectRadix from "@radix-ui/react-select";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import classnames from "classnames";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import "./Select.scss";

export type SelectRootProps = SelectRadix.SelectProps;

export const SelectRoot = SelectRadix.Root;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type SelectTriggerProps = HTMLRempiProps<typeof SelectRadix.Trigger> &
  SelectRadix.SelectTriggerProps;

export const SelectTrigger = forwardRef<
  typeof SelectRadix.Trigger,
  SelectTriggerProps
>(({ className, children, as: Component = SelectRadix.Trigger, ...props }, ref) => {
  return (
    <Component
      {...props}
      ref={ref}
      className={`rempi-select__trigger ${classnames(className)}`}
    >
      {children}
      <SelectIcon />
    </Component>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type SelectValueProps = HTMLRempiProps<typeof SelectRadix.Value> &
  SelectRadix.SelectValueProps;

export const SelectValue = forwardRef<
  typeof SelectRadix.Value,
  SelectValueProps
>(({ className, as: Component = SelectRadix.Value, ...props }, ref) => {
  return (
    <Component
      {...props}
      ref={ref}
      className={`rempi-select__value ${classnames(className)}`}
    />
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type SelectIconProps = Omit<
  HTMLRempiProps<typeof SelectRadix.Icon>,
  "as" | "children"
> &
  SelectRadix.SelectIconProps;

const SelectIcon = forwardRef<typeof SelectRadix.Icon, SelectIconProps>(
  ({ className, ...props }, ref) => {
    return (
      <SelectRadix.Icon
        {...props}
        ref={ref}
        className={`rempi-select__icon ${classnames(className)}`}
      >
        <ChevronDown size={18} />
      </SelectRadix.Icon>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type SelectPortalProps = SelectRadix.SelectPortalProps;

const SelectPortal = SelectRadix.Portal;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type SelectContentProps = Omit<
  HTMLRempiProps<typeof SelectRadix.Content>,
  "as"
> &
  SelectRadix.SelectContentProps &
  SelectPortalProps;

export const SelectContent = forwardRef<
  typeof SelectRadix.Content,
  SelectContentProps
>(({ className, children, container, ...props }, ref) => {
  return (
    <SelectPortal container={container}>
      <SelectRadix.Content
        {...props}
        ref={ref}
        className={`rempi-select__content ${classnames(className)}`}
      >
        <SelectScrollUpButton />
        {children}
        <SelectScrollDownButton />
      </SelectRadix.Content>
    </SelectPortal>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type SelectViewportProps = HTMLRempiProps<typeof SelectRadix.Viewport> &
  SelectRadix.SelectViewportProps;

export const SelectViewport = forwardRef<
  typeof SelectRadix.Viewport,
  SelectViewportProps
>(({ className, as: Component = SelectRadix.Viewport, ...props }, ref) => {
  return (
    <Component
      {...props}
      ref={ref}
      className={`rempi-select__view-port ${classnames(className)}`}
    />
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type SelectItemProps = HTMLRempiProps<typeof SelectRadix.Item> &
  SelectRadix.SelectItemProps;

export const SelectItem = forwardRef<typeof SelectRadix.Item, SelectItemProps>(
  (
    { className, children, as: Component = SelectRadix.Item, ...props },
    ref
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-select__item ${classnames(className)}`}
      >
        <SelectItemIndicator />
        <SelectItemText>{children}</SelectItemText>
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type SelectItemTextProps = HTMLRempiProps<typeof SelectRadix.ItemText> &
  SelectRadix.SelectItemTextProps;

const SelectItemText = forwardRef<
  typeof SelectRadix.ItemText,
  SelectItemTextProps
>(({ className, as: Component = SelectRadix.ItemText, ...props }, ref) => {
  return (
    <Component
      {...props}
      ref={ref}
      className={`rempi-select__item-text ${classnames(className)}`}
    />
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type SelectItemIndicatorProps = Omit<
  HTMLRempiProps<typeof SelectRadix.ItemIndicator>,
  "as" | "children"
> &
  SelectRadix.SelectItemIndicatorProps;

const SelectItemIndicator = forwardRef<
  typeof SelectRadix.ItemIndicator,
  SelectItemIndicatorProps
>(({ className, ...props }, ref) => {
  return (
    <SelectRadix.ItemIndicator
      {...props}
      ref={ref}
      className={`rempi-select__item-indicator ${classnames(className)}`}
    >
      <Check size={12} />
    </SelectRadix.ItemIndicator>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type SelectScrollUpButtonProps = Omit<
  HTMLRempiProps<typeof SelectRadix.ScrollUpButton>,
  "as" | "children"
> &
  SelectRadix.SelectScrollUpButtonProps;

const SelectScrollUpButton = forwardRef<
  typeof SelectRadix.ScrollUpButton,
  SelectScrollUpButtonProps
>(({ className, ...props }, ref) => {
  return (
    <SelectRadix.ScrollUpButton
      {...props}
      ref={ref}
      className={`rempi-select__scroll-up-button ${classnames(className)}`}
    >
      <ChevronUp size={18} />
    </SelectRadix.ScrollUpButton>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type SelectScrollDownButtonProps = Omit<
  HTMLRempiProps<typeof SelectRadix.ScrollDownButton>,
  "as" | "children"
> &
  SelectRadix.SelectScrollDownButtonProps;

const SelectScrollDownButton = forwardRef<
  typeof SelectRadix.ScrollDownButton,
  SelectScrollDownButtonProps
>(({ className, ...props }, ref) => {
  return (
    <SelectRadix.ScrollDownButton
      {...props}
      ref={ref}
      className={`rempi-select__scroll-down-button ${classnames(className)}`}
    >
      <ChevronDown size={18} />
    </SelectRadix.ScrollDownButton>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type SelectGroupProps = SelectRadix.SelectGroupProps;

export const SelectGroup = SelectRadix.Group;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type SelectLabelProps = HTMLRempiProps<typeof SelectRadix.Label> &
  SelectRadix.SelectLabelProps;

export const SelectLabel = forwardRef<
  typeof SelectRadix.Label,
  SelectLabelProps
>(({ className, as: Component = SelectRadix.Label, ...props }, ref) => {
  return (
    <Component
      {...props}
      ref={ref}
      className={`rempi-select__label ${classnames(className)}`}
    />
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type SelectSeparatorProps = HTMLRempiProps<
  typeof SelectRadix.Separator
> &
  SelectRadix.SelectSeparatorProps;

export const SelectSeparator = forwardRef<
  typeof SelectRadix.Separator,
  SelectSeparatorProps
>(({ className, as: Component = SelectRadix.Separator, ...props }, ref) => {
  return (
    <Component
      {...props}
      ref={ref}
      className={`rempi-select__separator ${classnames(className)}`}
    />
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type SelectArrowProps = SelectRadix.SelectArrowProps;

export const SelectArrow = SelectRadix.Arrow;
