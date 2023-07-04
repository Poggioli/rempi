import { HTMLRempiProps } from "@rempi-ui/core";
import classnames from "classnames";
import { forwardRef } from "react";
import "./Flex.scss";

type FlexDirection =
  | "column"
  | "column-reverse"
  | "inherit"
  | "initial"
  | "revert"
  | "row"
  | "row-reverse"
  | "unset";
const flexDirectionClasses: Record<FlexDirection, string> = {
  column: "rempi-flex--direction-column",
  "column-reverse": "rempi-flex--direction-column-reverse",
  inherit: "rempi-flex--direction-inherit",
  initial: "rempi-flex--direction-initial",
  revert: "rempi-flex--direction-revert",
  row: "rempi-flex--direction-row",
  "row-reverse": "rempi-flex--direction-row-reverse",
  unset: "rempi-flex--direction-unset",
};

type FlexWrap =
  | "inherit"
  | "initial"
  | "nowrap"
  | "revert"
  | "unset"
  | "wrap"
  | "wrap-reverse";
const flexWrapClasses: Record<FlexWrap, string> = {
  inherit: "rempi-flex--wrap-inherit",
  initial: "rempi-flex--wrap-initial",
  nowrap: "rempi-flex--wrap-nowrap",
  revert: "rempi-flex--wrap-revert",
  unset: "rempi-flex--wrap-unset",
  wrap: "rempi-flex--wrap-wrap",
  "wrap-reverse": "rempi-flex--wrap-wrap-reverse",
};

type JustifyContent =
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
const flexJustifyContentClasses: Record<JustifyContent, string> = {
  center: "rempi-flex--justify-content-center",
  end: "rempi-flex--justify-content-end",
  "flex-end": "rempi-flex--justify-content-flex-end",
  "flex-start": "rempi-flex--justify-content-flex-start",
  inherit: "rempi-flex--justify-content-inherit",
  initial: "rempi-flex--justify-content-initial",
  left: "rempi-flex--justify-content-left",
  normal: "rempi-flex--justify-content-normal",
  revert: "rempi-flex--justify-content-revert",
  right: "rempi-flex--justify-content-right",
  "space-around": "rempi-flex--justify-content-space-around",
  "space-between": "rempi-flex--justify-content-space-between",
  "space-evenly": "rempi-flex--justify-content-space-evenly",
  start: "rempi-flex--justify-content-start",
  stretch: "rempi-flex--justify-content-stretch",
  unset: "rempi-flex--justify-content-unset",
};

type AlignItems =
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
const flexAlignItemsClasses: Record<AlignItems, string> = {
  baseline: "rempi-flex--align-items-baseline",
  center: "rempi-flex--align-items-center",
  end: "rempi-flex--align-items-end",
  "flex-end": "rempi-flex--align-items-flex-end",
  "flex-start": "rempi-flex--align-items-flex-start",
  inherit: "rempi-flex--align-items-inherit",
  initial: "rempi-flex--align-items-initial",
  normal: "rempi-flex--align-items-normal",
  revert: "rempi-flex--align-items-revert",
  "self-end": "rempi-flex--align-items-self-end",
  "self-start": "rempi-flex--align-items-self-start",
  start: "rempi-flex--align-items-start",
  stretch: "rempi-flex--align-items-stretch",
  unset: "rempi-flex--align-items-unset",
};

type AlignContent =
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
const flexAlignContentClasses: Record<AlignContent, string> = {
  baseline: "rempi-flex--align-content-baseline",
  center: "rempi-flex--align-content-center",
  end: "rempi-flex--align-content-end",
  "flex-end": "rempi-flex--align-content-flex-end",
  "flex-start": "rempi-flex--align-content-flex-start",
  inherit: "rempi-flex--align-content-inherit",
  initial: "rempi-flex--align-content-initial",
  normal: "rempi-flex--align-content-normal",
  revert: "rempi-flex--align-content-revert",
  "space-around": "rempi-flex--align-content-space-around",
  "space-between": "rempi-flex--align-content-space-between",
  "space-evenly": "rempi-flex--align-content-space-evenly",
  start: "rempi-flex--align-content-start",
  stretch: "rempi-flex--align-content-stretch",
  unset: "rempi-flex--align-content-unset",
};

type AlignSelf =
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
const flexAlignSelfClasses: Record<AlignSelf, string> = {
  auto: "rempi-flex--align-self-auto",
  baseline: "rempi-flex--align-self-baseline",
  center: "rempi-flex--align-self-center",
  end: "rempi-flex--align-self-end",
  "flex-end": "rempi-flex--align-self-flex-end",
  "flex-start": "rempi-flex--align-self-flex-start",
  inherit: "rempi-flex--align-self-inherit",
  initial: "rempi-flex--align-self-initial",
  normal: "rempi-flex--align-self-normal",
  revert: "rempi-flex--align-self-revert",
  "self-end": "rempi-flex--align-self-self-end",
  "self-start": "rempi-flex--align-self-self-start",
  start: "rempi-flex--align-self-start",
  stretch: "rempi-flex--align-self-stretch",
  unset: "rempi-flex--align-self-unset",
};

export type FlexProps = HTMLRempiProps<"div"> & {
  direction?: FlexDirection;
  wrap?: FlexWrap;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  alignContents?: AlignContent;
  alignSelf?: AlignSelf;
};

export const Flex = forwardRef<"div", FlexProps>(
  (
    {
      children,
      direction = "row",
      wrap,
      justifyContent = "flex-start",
      alignItems = "flex-start",
      alignContents,
      alignSelf,
      as: Component = "div",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-flex ${classnames(
          flexDirectionClasses[direction],
          flexAlignItemsClasses[alignItems],
          flexJustifyContentClasses[justifyContent],
          wrap && flexWrapClasses[wrap],
          alignContents && flexAlignContentClasses[alignContents],
          alignSelf && flexAlignSelfClasses[alignSelf],
          className
        )}`}
      >
        {children}
      </Component>
    );
  }
);
