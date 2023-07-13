import * as Radio from "@radix-ui/react-radio-group";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import classnames from "classnames";
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

export type RadioLabelProps = HTMLRempiProps<"label">;

export const RadioLabel = forwardRef<"label", RadioLabelProps>(
  ({ children, as: Component = "label", className, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-radio__label ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type RadioContainerProps = HTMLRempiProps<"div">;

export const RadioContainer = forwardRef<"div", RadioContainerProps>(
  ({ children, as: Component = "div", className, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-radio__container ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);
