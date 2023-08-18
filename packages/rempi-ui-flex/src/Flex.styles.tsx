import {
  ApplyResponsiveVariant,
  css,
  RempiConfig,
  RuleSet,
  styled,
} from "@rempi-ui/core";
import {
  AlignContent,
  AlignItems,
  AlignSelf,
  FlexDirection,
  FlexWrap,
  JustifyContent,
} from "./Flex";

const flexDirection: Record<FlexDirection, RuleSet<object>> = {
  column: css`
    flex-direction: column;
  `,
  "column-reverse": css`
    flex-direction: column-reverse;
  `,
  inherit: css`
    flex-direction: inherit;
  `,
  initial: css`
    flex-direction: initial;
  `,
  revert: css`
    flex-direction: revert;
  `,
  row: css`
    flex-direction: row;
  `,
  "row-reverse": css`
    flex-direction: row-reverse;
  `,
  unset: css`
    flex-direction: unset;
  `,
};

const flexWrap: Record<FlexWrap, RuleSet<object>> = {
  inherit: css`
    flex-wrap: inherit;
  `,
  initial: css`
    flex-wrap: initial;
  `,
  nowrap: css`
    flex-wrap: nowrap;
  `,
  revert: css`
    flex-wrap: revert;
  `,
  unset: css`
    flex-wrap: unset;
  `,
  wrap: css`
    flex-wrap: wrap;
  `,
  "wrap-reverse": css`
    flex-wrap: wrap-reverse;
  `,
};

const justifyContent: Record<JustifyContent, RuleSet<object>> = {
  center: css`
    justify-content: center;
  `,
  end: css`
    justify-content: end;
  `,
  "flex-end": css`
    justify-content: flex-end;
  `,
  "flex-start": css`
    justify-content: flex-start;
  `,
  inherit: css`
    justify-content: inherit;
  `,
  initial: css`
    justify-content: initial;
  `,
  left: css`
    justify-content: left;
  `,
  normal: css`
    justify-content: normal;
  `,
  revert: css`
    justify-content: revert;
  `,
  right: css`
    justify-content: right;
  `,
  "space-around": css`
    justify-content: space-around;
  `,
  "space-between": css`
    justify-content: space-between;
  `,
  "space-evenly": css`
    justify-content: space-evenly;
  `,
  start: css`
    justify-content: start;
  `,
  stretch: css`
    justify-content: stretch;
  `,
  unset: css`
    justify-content: unset;
  `,
};

const alignItems: Record<AlignItems, RuleSet<object>> = {
  baseline: css`
    align-items: baseline;
  `,
  center: css`
    align-items: center;
  `,
  end: css`
    align-items: end;
  `,
  "flex-end": css`
    align-items: flex-end;
  `,
  "flex-start": css`
    align-items: flex-start;
  `,
  inherit: css`
    align-items: inherit;
  `,
  initial: css`
    align-items: initial;
  `,
  normal: css`
    align-items: normal;
  `,
  revert: css`
    align-items: revert;
  `,
  "self-end": css`
    align-items: self-end;
  `,
  "self-start": css`
    align-items: self-start;
  `,
  start: css`
    align-items: start;
  `,
  stretch: css`
    align-items: stretch;
  `,
  unset: css`
    align-items: unset;
  `,
};

const alignContents: Record<AlignContent, RuleSet<object>> = {
  baseline: css`
    align-content: baseline;
  `,
  center: css`
    align-content: center;
  `,
  end: css`
    align-content: end;
  `,
  "flex-end": css`
    align-content: flex-end;
  `,
  "flex-start": css`
    align-content: flex-start;
  `,
  inherit: css`
    align-content: inherit;
  `,
  initial: css`
    align-content: initial;
  `,
  normal: css`
    align-content: normal;
  `,
  revert: css`
    align-content: revert;
  `,
  "space-around": css`
    align-content: space-around;
  `,
  "space-between": css`
    align-content: space-between;
  `,
  "space-evenly": css`
    align-content: space-evenly;
  `,
  start: css`
    align-content: start;
  `,
  stretch: css`
    align-content: stretch;
  `,
  unset: css`
    align-content: unset;
  `,
};

const alignSelf: Record<AlignSelf, RuleSet<object>> = {
  auto: css`
    align-self: auto;
  `,
  baseline: css`
    align-self: baseline;
  `,
  center: css`
    align-self: center;
  `,
  end: css`
    align-self: end;
  `,
  "flex-end": css`
    align-self: flex-end;
  `,
  "flex-start": css`
    align-self: flex-start;
  `,
  inherit: css`
    align-self: inherit;
  `,
  initial: css`
    align-self: initial;
  `,
  normal: css`
    align-self: normal;
  `,
  revert: css`
    align-self: revert;
  `,
  "self-end": css`
    align-self: self-end;
  `,
  "self-start": css`
    align-self: self-start;
  `,
  start: css`
    align-self: start;
  `,
  stretch: css`
    align-self: stretch;
  `,
  unset: css`
    align-self: unset;
  `,
};

export const StyledFlex = styled.div<{
  $flexDirection?: FlexDirection;
  $flexWrap?: FlexWrap;
  $justifyContent?: JustifyContent;
  $alignItems?: AlignItems;
  $alignContents?: AlignContent;
  $alignSelf?: AlignSelf;
}>`
  box-sizing: border-box;
  display: flex;

  ${(props) => {
    const apply = (value: FlexDirection) => {
      return value && flexDirection[value];
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$flexDirection
    );
  }};

  ${(props) => {
    const apply = (value: FlexWrap) => {
      return value && flexWrap[value];
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$flexWrap
    );
  }};

  ${(props) => {
    const apply = (value: JustifyContent) => {
      return value && justifyContent[value];
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$justifyContent
    );
  }};

  ${(props) => {
    const apply = (value: AlignItems) => {
      return value && alignItems[value];
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$alignItems
    );
  }};

  ${(props) => {
    const apply = (value: AlignContent) => {
      return value && alignContents[value];
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$alignContents
    );
  }};

  ${(props) => {
    const apply = (value: AlignSelf) => {
      return value && alignSelf[value];
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$alignSelf
    );
  }};
`;
