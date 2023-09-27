import { forwardRef, HTMLRempiProps, RempiVariant } from "@rempi-ui/core";
import { StyledCounter, StyledCounterWrapper } from "./Counter.styles";

export type Color =
  | "primary"
  | "secondary"
  | "success"
  | "notification"
  | "warning";

export type PositionX = "left" | "right";

export type PositionY = "bottom" | "top";

export type CounterProps = Omit<
  HTMLRempiProps<typeof StyledCounter>,
  "$color" | "$dot" | "$positionX" | "$positionY"
> & {
  color?: RempiVariant<Color>;
  positionX?: RempiVariant<PositionX>;
  positionY?: RempiVariant<PositionY>;
  maxCounter?: number;
  counter: number;
  showZero?: boolean;
  dot?: RempiVariant<boolean>;
};

export const Counter = forwardRef<"span", CounterProps>(
  (
    {
      color = "notification",
      positionX = "right",
      positionY = "top",
      maxCounter = 99,
      counter: counterProps,
      showZero = false,
      dot = false,
      children,
      ...props
    },
    ref
  ) => {
    const counter = counterProps > maxCounter ? `${maxCounter}+` : counterProps;
    const showCounter = showZero || dot || !!counterProps;

    return (
      <StyledCounterWrapper>
        {showCounter ? (
          <StyledCounter
            $color={color}
            $dot={dot}
            $positionX={positionX}
            $positionY={positionY}
            {...props}
            ref={ref}
          >
            {!dot ? counter : null}
          </StyledCounter>
        ) : null}
        {children}
      </StyledCounterWrapper>
    );
  }
);
