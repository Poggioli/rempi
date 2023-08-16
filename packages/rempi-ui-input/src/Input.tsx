import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import { Label, LabelContext, LabelProps } from "@rempi-ui/label";
import { useContext, useEffect } from "react";
import { StyledInput } from "./Input.styles";

export type Size = "small" | "standard" | "large";

export type InputProps = Omit<HTMLRempiProps<"input">, "as"> & {
  inputSize?: Size;
};

export const Input = forwardRef<"input", InputProps>(
  ({ inputSize = "standard", ...props }, ref) => {
    const { setAttrs: setLabelAttrs } = useContext(LabelContext);

    useEffect(() => {
      setLabelAttrs((currentValue: any) => ({
        ...currentValue,
        "data-disabled": props.disabled,
        "data-invalid": props["aria-invalid"],
      }));
    }, [props.disabled, props["aria-invalid"]]);

    return (
      <StyledInput
        {...props}
        ref={ref}
        data-disabled={props.disabled}
        $size={inputSize}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type InputLabelProps = LabelProps;

export const InputLabel = Label;
