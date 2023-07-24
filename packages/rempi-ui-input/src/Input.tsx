import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import { Label, LabelContext, LabelProps } from "@rempi-ui/label";
import classNames from "classnames";
import { useContext, useEffect } from "react";
import "./Input.scss";

type Size = "small" | "standard" | "large";
const sizeClasses: Record<Size, string> = {
  small: "rempi-input--size-small",
  standard: "rempi-input--size-standard",
  large: "rempi-input--size-large",
};

export type InputProps = Omit<HTMLRempiProps<"input">, "as"> & {
  inputSize?: Size;
};

export const Input = forwardRef<"input", InputProps>(
  ({ className, inputSize = "standard", ...props }, ref) => {
    const { setAttrs: setLabelAttrs } = useContext(LabelContext);

    useEffect(() => {
      setLabelAttrs((currentValue: any) => ({
        ...currentValue,
        "data-disabled": props.disabled,
        "data-invalid": props["aria-invalid"],
      }));
    }, [props.disabled, props["aria-invalid"]]);

    return (
      <input
        {...props}
        ref={ref}
        data-disabled={props.disabled}
        className={classNames(
          "rempi-input",
          sizeClasses[inputSize],
          className
        )}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type InputLabelProps = LabelProps;

export const InputLabel = Label;
