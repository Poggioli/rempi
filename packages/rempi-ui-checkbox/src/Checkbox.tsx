import * as Checkbox from "@radix-ui/react-checkbox";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import { Label, LabelContext, LabelProps } from "@rempi-ui/label";
import { Check } from "lucide-react";
import { useContext, useEffect } from "react";
import { StyledCheckboxIndicator, StyledCheckboxRoot } from "./Checkbox.styles";

export type CheckboxRootProps = Omit<
  HTMLRempiProps<typeof StyledCheckboxRoot>,
  "as"
> &
  Checkbox.CheckboxProps &
  Checkbox.CheckboxIndicatorProps;

export const CheckboxRoot = forwardRef<
  typeof StyledCheckboxRoot,
  CheckboxRootProps
>(({ children, forceMount, asChild, ...props }, ref) => {
  const { setAttrs: setLabelAttrs } = useContext(LabelContext);

  useEffect(() => {
    setLabelAttrs((currentValue: any) => ({
      ...currentValue,
      "data-disabled": props.disabled,
      "data-invalid": props["aria-invalid"],
    }));
  }, [props.disabled, props["aria-invalid"]]);

  useEffect(() => {
    setLabelAttrs((currentValue: any) => ({
      ...currentValue,
      "data-state": props.checked || props.defaultChecked,
    }));
  }, []);

  function handleOnCheckedChange(checked: boolean | "indeterminate") {
    props.onCheckedChange?.(checked);
    setLabelAttrs((currentValue: any) => ({
      ...currentValue,
      "data-state": checked,
    }));
  }

  return (
    <StyledCheckboxRoot
      {...props}
      onCheckedChange={handleOnCheckedChange}
      ref={ref}
    >
      <StyledCheckboxIndicator forceMount={forceMount} asChild={asChild}>
        <Check size={12} />
      </StyledCheckboxIndicator>
    </StyledCheckboxRoot>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type CheckboxLabelProps = LabelProps;

export const CheckboxLabel = Label;
