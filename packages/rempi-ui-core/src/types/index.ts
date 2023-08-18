import * as React from "react";
import { css } from "styled-components";
import { RempiConfig } from "../config/rempi.config";

export type Dict<T = any> = Record<string, T>;

export type ReactRef<T> =
  | React.Ref<T>
  | React.RefObject<T>
  | React.MutableRefObject<T>;

export type As<Props = any> = React.ElementType<Props>;

export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As;
};

export type OmitCommonProps<
  Target,
  OmitAdditionalProps extends keyof any = never
> = Omit<Target, "as" | OmitAdditionalProps>;

export type RightJoinProps<
  SourceProps extends object = {},
  OverrideProps extends object = {}
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;

export type MergeWithAs<
  ComponentProps extends object,
  AsProps extends object,
  AdditionalProps extends object = {},
  AsComponent extends As = As
> = RightJoinProps<ComponentProps, AdditionalProps> &
  RightJoinProps<AsProps, AdditionalProps> & {
    as?: AsComponent;
  };

export type RempiComponent<Component extends As, Props extends object = {}> = {
  <AsComponent extends As = Component>(
    props: MergeWithAs<
      React.ComponentProps<Component>,
      React.ComponentProps<AsComponent>,
      Props,
      AsComponent
    >
  ): JSX.Element;
};

export type HTMLRempiProps<T extends As> = Omit<PropsOf<T>, "as"> & {
  as?: As;
};

export const forwardRef = <Component extends As, Props extends object = {}>(
  component: React.ForwardRefRenderFunction<
    any,
    RightJoinProps<PropsOf<Component>, Props> & {
      as?: As;
    }
  >
) => {
  return React.forwardRef(component) as unknown as RempiComponent<
    Component,
    Props
  >;
};

type RempiResponsiveVariant<T> = {
  "@initial": T;
  "@1"?: T;
  "@2"?: T;
  "@3"?: T;
  "@4"?: T;
  "@5"?: T;
};

export type RempiVariant<T> = T | RempiResponsiveVariant<T>;

export const ApplyResponsiveVariant = (
  imp: (...values: any[]) => any,
  theme: RempiConfig,
  variant: RempiVariant<unknown>
) => {
  if (typeof variant === "object") {
    const varianValue: RempiResponsiveVariant<any> = variant as RempiResponsiveVariant<any>;

    const initialValue = varianValue["@initial"];
    const bp1 = varianValue["@1"] ?? varianValue["@initial"];
    const bp2 = varianValue["@2"] ?? bp1;
    const bp3 = varianValue["@3"] ?? bp2;
    const bp4 = varianValue["@4"] ?? bp3;
    const bp5 = varianValue["@5"] ?? bp4;

    return css`
      ${imp(initialValue)};

      ${theme.breakpoints[1]} {
        ${imp(bp1)};
      }

      ${theme.breakpoints[2]} {
        ${imp(bp2)};
      }

      ${theme.breakpoints[3]} {
        ${imp(bp3)};
      }

      ${theme.breakpoints[4]} {
        ${imp(bp4)};
      }

      ${theme.breakpoints[5]} {
        ${imp(bp5)};
      }
    `;
  }

  return imp(variant);
};
