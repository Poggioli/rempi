import * as Radio from "@radix-ui/react-radio-group";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import { Label, LabelContext, LabelProps } from "@rempi-ui/label";
import { useContext, useEffect } from "react";
import { StyledRadioIndicator, StyledRadioItem } from "./Radio.styles";

export type RadioRootProps = Omit<HTMLRempiProps<typeof Radio.Root>, "as"> &
  Radio.RadioGroupProps;

export const RadioRoot = forwardRef<typeof Radio.Root, RadioRootProps>(
  ({ ...props }, ref) => {
    return <Radio.Root {...props} ref={ref} />;
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type RadioItemProps = Omit<
  HTMLRempiProps<typeof StyledRadioItem>,
  "as"
> &
  Radio.RadioGroupItemProps &
  Radio.RadioGroupIndicatorProps;

export const RadioItem = forwardRef<typeof StyledRadioItem, RadioItemProps>(
  ({ forceMount, ...props }, ref) => {
    const { setAttrs: setLabelAttrs } = useContext(LabelContext);

    useEffect(() => {
      setLabelAttrs((currentValue: any) => ({
        ...currentValue,
        "data-disabled": props.disabled,
        "data-invalid": props["aria-invalid"],
      }));
    }, [props.disabled, props["aria-invalid"]]);

    return (
      <StyledRadioItem {...props} ref={ref}>
        <StyledRadioIndicator forceMount={forceMount} />
      </StyledRadioItem>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type RadioLabelProps = LabelProps;

export const RadioLabel = Label;
