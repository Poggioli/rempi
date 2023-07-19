import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import { Label, LabelContext, LabelProps } from "@rempi-ui/label";
import classNames from "classnames";
import { useContext, useEffect } from "react";
import "./Textarea.scss";

export type TextareaProps = Omit<HTMLRempiProps<"textarea">, "as">;

export const Textarea = forwardRef<"textarea", TextareaProps>(
  ({ className, ...props }, ref) => {
    const { setAttrs: setLabelAttrs } = useContext(LabelContext);

    useEffect(() => {
      setLabelAttrs((currentValue: any) => ({
        ...currentValue,
        "data-disabled": props.disabled,
        "data-invalid": props["aria-invalid"],
      }));
    }, [props.disabled, props["aria-invalid"]]);

    return (
      <textarea
        {...props}
        ref={ref}
        data-disabled={props.disabled}
        className={classNames("rempi-textarea", className)}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type TextareaLabelProps = LabelProps;

export const TextareaLabel = Label;
