import * as Checkbox from "@radix-ui/react-checkbox";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import { Label, LabelContext, LabelProps } from "@rempi-ui/label";
import classnames from "classnames";
import { Check } from "lucide-react";
import { useContext, useEffect } from "react";
import "./Checkbox.scss";

export type CheckboxRootProps = Omit<
  HTMLRempiProps<typeof Checkbox.Root>,
  "as"
> &
  Checkbox.CheckboxProps &
  Checkbox.CheckboxIndicatorProps;

export const CheckboxRoot = forwardRef<typeof Checkbox.Root, CheckboxRootProps>(
  ({ children, className, forceMount, asChild, ...props }, ref) => {
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
        "data-checked": props.checked || props.defaultChecked,
      }));
    }, []);

    function handleOnCheckedChange(checked: boolean | "indeterminate") {
      props.onCheckedChange?.(checked);
      setLabelAttrs((currentValue: any) => ({
        ...currentValue,
        "data-checked": checked,
      }));
    }

    return (
      <Checkbox.Root
        {...props}
        onCheckedChange={handleOnCheckedChange}
        ref={ref}
        className={`rempi-checkbox__check ${classnames(className)}`}
      >
        <Checkbox.Indicator
          className="rempi-checkbox__indicator"
          forceMount={forceMount}
          asChild={asChild}
        >
          <Check size={12} />
        </Checkbox.Indicator>
      </Checkbox.Root>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type CheckboxLabelProps = LabelProps;

export const CheckboxLabel = Label;
