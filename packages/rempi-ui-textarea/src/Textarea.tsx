import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import { Label, LabelContext, LabelProps } from "@rempi-ui/label";
import { useContext, useEffect } from "react";
import { StyledTextArea } from "./Textarea.styles";

export type TextareaProps = Omit<HTMLRempiProps<"textarea">, "as">;

export const Textarea = forwardRef<"textarea", TextareaProps>(
  ({ ...props }, ref) => {
    const { setAttrs: setLabelAttrs } = useContext(LabelContext);

    useEffect(() => {
      setLabelAttrs((currentValue: any) => ({
        ...currentValue,
        "data-disabled": props.disabled,
        "data-invalid": props["aria-invalid"],
      }));
    }, [props.disabled, props["aria-invalid"]]);

    return (
      <StyledTextArea {...props} ref={ref} data-disabled={props.disabled} />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type TextareaLabelProps = LabelProps;

export const TextareaLabel = Label;
