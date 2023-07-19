import { HTMLRempiProps, forwardRef } from "@rempi-ui/core";
import classNames from "classnames";
import "./Skeleton.scss";

export type SkeletonProps = HTMLRempiProps<"div">

export const Skeleton = forwardRef<"div", SkeletonProps>(
  ({ as: Component = "div", className, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-skeleton", className)}
      />
    );
  }
);
