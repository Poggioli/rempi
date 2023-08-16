import * as Slider from "@radix-ui/react-slider";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import {
  StyledSliderRange,
  StyledSliderRoot,
  StyledSliderThumb,
  StyledSliderTrack,
} from "./Slider.styles";

export type SliderRootProps = HTMLRempiProps<typeof StyledSliderRoot> &
  Slider.SliderProps;

export const SliderRoot = forwardRef<typeof StyledSliderRoot, SliderRootProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledSliderRoot {...props} ref={ref}>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        {children}
      </StyledSliderRoot>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type SliderTrackProps = Omit<HTMLRempiProps<typeof StyledSliderTrack>, "as"> &
  Slider.SliderTrackProps;

const SliderTrack = forwardRef<typeof StyledSliderTrack, SliderTrackProps>(
  ({ ...props }, ref) => {
    return <StyledSliderTrack {...props} ref={ref} />;
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type SliderRangeProps = Omit<
  HTMLRempiProps<typeof StyledSliderRange>,
  "as" | "children"
> &
  Slider.SliderRangeProps;

const SliderRange = forwardRef<typeof StyledSliderRange, SliderRangeProps>(
  ({ ...props }, ref) => {
    return <StyledSliderRange {...props} ref={ref} />;
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type SliderThumbProps = HTMLRempiProps<typeof StyledSliderThumb> &
  Slider.SliderThumbProps;

export const SliderThumb = forwardRef<
  typeof StyledSliderThumb,
  SliderThumbProps
>(({ ...props }, ref) => {
  return <StyledSliderThumb {...props} ref={ref} />;
});
