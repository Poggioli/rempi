import * as Switch from "@radix-ui/react-switch";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import { Label, LabelContext, LabelProps } from "@rempi-ui/label";
import classnames from "classnames";
import { useContext, useEffect } from "react";
import "./Switch.scss";

export type SwitchRootProps = Omit<
  HTMLRempiProps<typeof Switch.Root>,
  "children" | "as"
> &
  Switch.SwitchProps;

export const SwitchRoot = forwardRef<typeof Switch.Root, SwitchRootProps>(
  ({ className, ...props }, ref) => {
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

    function handleOnCheckedChange(checked: boolean) {
      props.onCheckedChange?.(checked);
      setLabelAttrs((currentValue: any) => ({
        ...currentValue,
        "data-checked": checked,
      }));
    }

    return (
      <Switch.Root
        {...props}
        onCheckedChange={handleOnCheckedChange}
        ref={ref}
        className={`rempi-switch__root ${classnames(className)}`}
      >
        <SwitchThumb />
      </Switch.Root>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type SwitchThumbProps = HTMLRempiProps<typeof Switch.Thumb> &
  Switch.SwitchThumbProps;

const SwitchThumb = forwardRef<typeof Switch.Thumb, SwitchThumbProps>(
  ({ ...props }, ref) => {
    return (
      <Switch.Thumb {...props} ref={ref} className="rempi-switch__thumb" />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type SwitchLabelProps = LabelProps;

export const SwitchLabel = Label;
