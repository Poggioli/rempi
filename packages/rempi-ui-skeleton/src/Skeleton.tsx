import { HTMLRempiProps, forwardRef } from "@rempi-ui/core";
import { StyledSkeleton } from "./Skeleton.styles";

export type SkeletonProps = HTMLRempiProps<typeof StyledSkeleton>;

export const Skeleton = forwardRef<typeof StyledSkeleton, SkeletonProps>(
  ({ ...props }, ref) => {
    return <StyledSkeleton {...props} ref={ref} />;
  }
);
