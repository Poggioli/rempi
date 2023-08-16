import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import * as AspectRatioRadix from "@radix-ui/react-aspect-ratio";

export type AspectRatioProps = HTMLRempiProps<typeof AspectRatioRadix.Root> &
  AspectRatioRadix.AspectRatioProps;

export const AspectRatio = forwardRef<
  typeof AspectRatioRadix.Root,
  AspectRatioProps
>(
  (
    {
      ratio = 16 / 9,
      as: Component = AspectRatioRadix.Root,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        {...props}
        ratio={ratio}
        ref={ref}
      />
    );
  }
);
