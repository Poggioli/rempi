import { forwardRef, HTMLRempiProps, RempiVariant } from "@rempi-ui/core";
import { StyledFlex } from "./Flex.styles";

export type FlexDirection =
  | "column"
  | "column-reverse"
  | "inherit"
  | "initial"
  | "revert"
  | "row"
  | "row-reverse"
  | "unset";

export type FlexWrap =
  | "inherit"
  | "initial"
  | "nowrap"
  | "revert"
  | "unset"
  | "wrap"
  | "wrap-reverse";

export type JustifyContent =
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "inherit"
  | "initial"
  | "left"
  | "normal"
  | "revert"
  | "right"
  | "space-around"
  | "space-between"
  | "space-evenly"
  | "start"
  | "stretch"
  | "unset";

export type AlignItems =
  | "baseline"
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "inherit"
  | "initial"
  | "normal"
  | "revert"
  | "self-end"
  | "self-start"
  | "start"
  | "stretch"
  | "unset";

export type AlignContent =
  | "baseline"
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "inherit"
  | "initial"
  | "normal"
  | "revert"
  | "space-around"
  | "space-between"
  | "space-evenly"
  | "start"
  | "stretch"
  | "unset";

export type AlignSelf =
  | "auto"
  | "baseline"
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "inherit"
  | "initial"
  | "normal"
  | "revert"
  | "self-end"
  | "self-start"
  | "start"
  | "stretch"
  | "unset";

export type FlexProps = Omit<
  HTMLRempiProps<typeof StyledFlex>,
  | "$flexDirection"
  | "$flexWrap"
  | "$justifyContent"
  | "$alignItems"
  | "$alignContents"
  | "$alignSelf"
> & {
  flexDirection?: RempiVariant<FlexDirection>;
  flexWrap?: RempiVariant<FlexWrap>;
  justifyContent?: RempiVariant<JustifyContent>;
  alignItems?: RempiVariant<AlignItems>;
  alignContents?: RempiVariant<AlignContent>;
  alignSelf?: RempiVariant<AlignSelf>;
};

export const Flex = forwardRef<"div", FlexProps>(
  (
    {
      flexDirection = "row",
      flexWrap = "wrap",
      justifyContent = "flex-start",
      alignItems = "flex-start",
      alignContents,
      alignSelf,
      ...props
    },
    ref
  ) => {
    return (
      <StyledFlex
        {...props}
        ref={ref}
        $flexDirection={flexDirection}
        $flexWrap={flexWrap}
        $justifyContent={justifyContent}
        $alignItems={alignItems}
        $alignContents={alignContents}
        $alignSelf={alignSelf}
      />
    );
  }
);
