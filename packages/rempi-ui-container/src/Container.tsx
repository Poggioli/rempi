import { HTMLRempiProps } from "@rempi-ui/core";
import { forwardRef } from "react";
import { StyledContainer } from "./Container.styles";

export type Variant = "sm" | "md" | "lg" | "xlg" | "2xlg" | "fluid";

export type ContainerProps = Omit<
  HTMLRempiProps<typeof StyledContainer>,
  "$variant" | "$centered"
> & {
  variant?: Variant;
  centered?: boolean;
};

export const Container = forwardRef<typeof StyledContainer, ContainerProps>(
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
