import * as Slider from "@radix-ui/react-slider";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import classNames from "classnames";
import "./Slider.scss";

export type SliderRootProps = HTMLRempiProps<typeof Slider.Root> &
  Slider.SliderProps;

export const SliderRoot = forwardRef<typeof Slider.Root, SliderRootProps>(
  ({ className, as: Component = Slider.Root, children, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-slider", className)}
      >
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type SliderTrackProps = Omit<HTMLRempiProps<typeof Slider.Track>, "as"> &
  Slider.SliderTrackProps;

const SliderTrack = forwardRef<typeof Slider.Track, SliderTrackProps>(
  ({ ...props }, ref) => {
    return (
      <Slider.Track {...props} ref={ref} className="rempi-slider__track" />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type SliderRangeProps = Omit<
  HTMLRempiProps<typeof Slider.Range>,
  "as" | "children"
> &
  Slider.SliderRangeProps;

const SliderRange = forwardRef<typeof Slider.Range, SliderRangeProps>(
  ({ ...props }, ref) => {
    return (
      <Slider.Range {...props} ref={ref} className="rempi-slider__range" />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type SliderThumbProps = HTMLRempiProps<typeof Slider.Thumb> &
  Slider.SliderThumbProps;

export const SliderThumb = forwardRef<typeof Slider.Thumb, SliderThumbProps>(
  ({ className, as: Component = Slider.Thumb, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-slider__thumb", className)}
      />
    );
  }
);
