import * as SelectRadix from "@radix-ui/react-select";
import { forwardRef, HTMLRempiProps, RempiVariant } from "@rempi-ui/core";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import {
  StyledSelectContent,
  StyledSelectItem,
  StyledSelectItemIndicator,
  StyledSelectLabel,
  StyledSelectScrollDownButton,
  StyledSelectScrollUpButton,
  StyledSelectSeparator,
  StyledSelectTrigger,
  StyledSelectTriggerIcon,
  StyledSelectViewport,
} from "./Select.styles";

export type SelectRootProps = SelectRadix.SelectProps;

export const SelectRoot = SelectRadix.Root;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type SelectTriggerProps = HTMLRempiProps<typeof StyledSelectTrigger> &
  SelectRadix.SelectTriggerProps;

export const SelectTrigger = forwardRef<
  typeof StyledSelectTrigger,
  SelectTriggerProps
>(({ children, ...props }, ref) => {
  return (
    <StyledSelectTrigger {...props} ref={ref}>
      {children}
      <SelectIcon />
    </StyledSelectTrigger>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type SelectValueProps = HTMLRempiProps<typeof SelectRadix.Value> &
  SelectRadix.SelectValueProps;

export const SelectValue = forwardRef<
  typeof SelectRadix.Value,
  SelectValueProps
>(({ as: Component = SelectRadix.Value, ...props }, ref) => {
  return <Component {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type SelectIconProps = Omit<
  HTMLRempiProps<typeof StyledSelectTriggerIcon>,
  "as" | "children"
> &
  SelectRadix.SelectIconProps;

const SelectIcon = forwardRef<typeof StyledSelectTriggerIcon, SelectIconProps>(
  ({ ...props }, ref) => {
    return (
      <StyledSelectTriggerIcon {...props} ref={ref}>
        <ChevronDown size={18} />
      </StyledSelectTriggerIcon>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type SelectPortalProps = SelectRadix.SelectPortalProps;

const SelectPortal = SelectRadix.Portal;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type SelectContentProps = Omit<
  HTMLRempiProps<typeof StyledSelectContent>,
  "as" | "$condensed"
> &
  SelectRadix.SelectContentProps &
  SelectPortalProps & {
    condensed?: RempiVariant<boolean>;
  };

export const SelectContent = forwardRef<
  typeof StyledSelectContent,
  SelectContentProps
>(({ children, container, condensed = true, ...props }, ref) => {
  return (
    <SelectPortal container={container}>
      <StyledSelectContent {...props} ref={ref} $condensed={condensed}>
        <SelectScrollUpButton />
        {children}
        <SelectScrollDownButton />
      </StyledSelectContent>
    </SelectPortal>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type SelectViewportProps = HTMLRempiProps<typeof StyledSelectViewport> &
  SelectRadix.SelectViewportProps;

export const SelectViewport = forwardRef<
  typeof StyledSelectViewport,
  SelectViewportProps
>(({ ...props }, ref) => {
  return <StyledSelectViewport {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type SelectItemProps = HTMLRempiProps<typeof StyledSelectItem> &
  SelectRadix.SelectItemProps;

export const SelectItem = forwardRef<typeof StyledSelectItem, SelectItemProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledSelectItem {...props} ref={ref}>
        <SelectItemIndicator />
        <SelectItemText>{children}</SelectItemText>
      </StyledSelectItem>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type SelectItemTextProps = HTMLRempiProps<typeof SelectRadix.ItemText> &
  SelectRadix.SelectItemTextProps;

const SelectItemText = forwardRef<
  typeof SelectRadix.ItemText,
  SelectItemTextProps
>(({ as: Component = SelectRadix.ItemText, ...props }, ref) => {
  return <Component {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type SelectItemIndicatorProps = Omit<
  HTMLRempiProps<typeof StyledSelectItemIndicator>,
  "as" | "children"
> &
  SelectRadix.SelectItemIndicatorProps;

const SelectItemIndicator = forwardRef<
  typeof StyledSelectItemIndicator,
  SelectItemIndicatorProps
>(({ ...props }, ref) => {
  return (
    <StyledSelectItemIndicator {...props} ref={ref}>
      <Check size={12} />
    </StyledSelectItemIndicator>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type SelectScrollUpButtonProps = Omit<
  HTMLRempiProps<typeof StyledSelectScrollUpButton>,
  "as" | "children"
> &
  SelectRadix.SelectScrollUpButtonProps;

const SelectScrollUpButton = forwardRef<
  typeof StyledSelectScrollUpButton,
  SelectScrollUpButtonProps
>(({ ...props }, ref) => {
  return (
    <StyledSelectScrollUpButton {...props} ref={ref}>
      <ChevronUp size={18} />
    </StyledSelectScrollUpButton>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type SelectScrollDownButtonProps = Omit<
  HTMLRempiProps<typeof StyledSelectScrollDownButton>,
  "as" | "children"
> &
  SelectRadix.SelectScrollDownButtonProps;

const SelectScrollDownButton = forwardRef<
  typeof StyledSelectScrollDownButton,
  SelectScrollDownButtonProps
>(({ ...props }, ref) => {
  return (
    <StyledSelectScrollDownButton {...props} ref={ref}>
      <ChevronDown size={18} />
    </StyledSelectScrollDownButton>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type SelectGroupProps = SelectRadix.SelectGroupProps;

export const SelectGroup = SelectRadix.Group;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type SelectLabelProps = HTMLRempiProps<typeof StyledSelectLabel> &
  SelectRadix.SelectLabelProps;

export const SelectLabel = forwardRef<
  typeof StyledSelectLabel,
  SelectLabelProps
>(({ ...props }, ref) => {
  return <StyledSelectLabel {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type SelectSeparatorProps = HTMLRempiProps<
  typeof StyledSelectSeparator
> &
  SelectRadix.SelectSeparatorProps;

export const SelectSeparator = forwardRef<
  typeof StyledSelectSeparator,
  SelectSeparatorProps
>(({ ...props }, ref) => {
  return <StyledSelectSeparator {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type SelectArrowProps = SelectRadix.SelectArrowProps;

export const SelectArrow = SelectRadix.Arrow;
