import * as Radio from "@radix-ui/react-radio-group";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import { Label, LabelContext, LabelProps } from "@rempi-ui/label";
import classnames from "classnames";
import { useContext, useEffect } from "react";
import "./Radio.scss";

export type RadioRootProps = Omit<HTMLRempiProps<typeof Radio.Root>, "as"> &
  Radio.RadioGroupProps;

export const RadioRoot = forwardRef<typeof Radio.Root, RadioRootProps>(
  ({ className, ...props }, ref) => {
    return (
      <Radio.Root
        {...props}
        ref={ref}
        className={`rempi-radio ${classnames(className)}`}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type RadioItemProps = Omit<HTMLRempiProps<typeof Radio.Item>, "as"> &
  Radio.RadioGroupItemProps &
  Radio.RadioGroupIndicatorProps;

export const RadioItem = forwardRef<typeof Radio.Item, RadioItemProps>(
  ({ className, forceMount, ...props }, ref) => {
    const { setAttrs: setLabelAttrs } = useContext(LabelContext);

    useEffect(() => {
      setLabelAttrs((currentValue: any) => ({
        ...currentValue,
        "data-disabled": props.disabled,
        "data-invalid": props["aria-invalid"],
      }));
    }, [props.disabled, props["aria-invalid"]]);

    return (
      <Radio.Item
        {...props}
        ref={ref}
        className={`rempi-radio__item ${classnames(className)}`}
      >
        <Radio.Indicator
          forceMount={forceMount}
          className="rempi-radio__indicator"
        />
      </Radio.Item>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type RadioLabelProps = LabelProps;

export const RadioLabel = Label;
