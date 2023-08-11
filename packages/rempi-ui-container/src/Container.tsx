import { HTMLRempiProps } from "@rempi-ui/core";
import { forwardRef } from "react";
import { StyledContainer } from "./Container.styles";

export type Variant = "sm" | "md" | "lg" | "xlg" | "2xlg" | "fluid";

export type ContainerProps = HTMLRempiProps<"div"> & {
  variant?: Variant;
  centered?: boolean;
};

export const Container = forwardRef<"div", ContainerProps>(
  ({ variant, centered = true, ...props }, ref) => {
    return (
      <StyledContainer
        {...props}
        ref={ref}
        $variant={variant}
        $centered={centered}
      />
    );
  }
);
