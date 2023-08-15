import * as Switch from "@radix-ui/react-switch";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import { Label, LabelContext, LabelProps } from "@rempi-ui/label";
import { useContext, useEffect } from "react";
import { StyledSwitchRoot, StyledSwitchThumb } from "./Switch.styles";

export type SwitchRootProps = Omit<
  HTMLRempiProps<typeof StyledSwitchRoot>,
  "children" | "as"
> &
  Switch.SwitchProps;

export const SwitchRoot = forwardRef<typeof StyledSwitchRoot, SwitchRootProps>(
  ({ ...props }, ref) => {
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
      <StyledSwitchRoot
        {...props}
        onCheckedChange={handleOnCheckedChange}
        ref={ref}
      >
        <SwitchThumb />
      </StyledSwitchRoot>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type SwitchThumbProps = HTMLRempiProps<typeof StyledSwitchThumb> &
  Switch.SwitchThumbProps;

const SwitchThumb = forwardRef<typeof StyledSwitchThumb, SwitchThumbProps>(
  ({ ...props }, ref) => {
    return <StyledSwitchThumb {...props} ref={ref} />;
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type SwitchLabelProps = LabelProps;

export const SwitchLabel = Label;
