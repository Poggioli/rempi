import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import * as AspectRatioRadix from "@radix-ui/react-aspect-ratio";
import { StyledAspectRatio } from "./AspectRatio.styles";

export type AspectRatioProps = HTMLRempiProps<typeof StyledAspectRatio> &
  AspectRatioRadix.AspectRatioProps;

export const AspectRatio = forwardRef<
  typeof StyledAspectRatio,
  AspectRatioProps
>(({ ratio = 16 / 9, ...props }, ref) => {
  return <StyledAspectRatio {...props} ratio={ratio} ref={ref} />;
});
