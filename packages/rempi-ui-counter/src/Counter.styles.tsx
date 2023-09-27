import {
  ApplyResponsiveVariant,
  css,
  RempiConfig,
  RempiVariant,
  RuleSet,
  styled,
} from "@rempi-ui/core";
import { Color, PositionX, PositionY } from "./Counter";

const color: Record<Color, RuleSet<object>> = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary9};
    color: ${({ theme }) => theme.colors.primary12};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary9};
    color: ${({ theme }) => theme.colors.secondary12};
  `,
  success: css`
    background-color: ${({ theme }) => theme.colors.success9};
    color: ${({ theme }) => theme.colors.success12};
  `,
  notification: css`
    background-color: ${({ theme }) => theme.colors.error9};
    color: ${({ theme }) => theme.colors.error12};
  `,
  warning: css`
    background-color: ${({ theme }) => theme.colors.warning9};
    color: ${({ theme }) => theme.colors.warning12};
  `,
};

const positionX: Record<PositionX, RuleSet<object>> = {
  left: css`
    left: 0;
  `,

  right: css`
    right: 0;
  `,
};

const positionY: Record<PositionY, RuleSet<object>> = {
  bottom: css`
    bottom: 0;
  `,

  top: css`
    top: 0;
  `,
};

const translate: Record<string, RuleSet<object>> = {
  "top-right": css`
    transform: translate(50%, -50%);
  `,

  "top-left": css`
    transform: translate(-50%, -50%);
  `,

  "bottom-right": css`
    transform: translate(50%, 50%);
  `,

  "bottom-left": css`
    transform: translate(-50%, 50%);
  `,
};

export const StyledCounterWrapper = styled.span`
  position: relative;
`;

export const StyledCounter = styled.span<{
  $color?: RempiVariant<Color>;
  $dot?: RempiVariant<boolean>;
  $positionX?: RempiVariant<PositionX>;
  $positionY?: RempiVariant<PositionY>;
}>`
  align-items: center;
  letter-spacing: -1px;
  border-radius: ${({ theme }) => theme.radii.pill};
  display: inline-flex;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  height: ${({ theme }) => theme.spaces[5]};
  justify-content: center;
  line-height: 1;
  min-width: ${({ theme }) => theme.spaces[5]};
  padding: 0 ${({ theme }) => theme.spaces[2]};
  position: absolute;

  ${(props) => {
    const apply = (value: boolean) => {
      return (
        value &&
        css`
          height: ${({ theme }) => theme.spaces[3]};
          min-width: initial;
          padding: 0;
          width: ${({ theme }) => theme.spaces[3]};
        `
      );
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$dot
    );
  }};

  ${(props) => {
    const apply = (value: string) => {
      return value && translate[value];
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      `${props.$positionY}-${props.$positionX}`
    );
  }};

${(props) => {
    const apply = (value: Color) => {
      return value && positionX[value];
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$positionX
    );
  }};

  ${(props) => {
    const apply = (value: Color) => {
      return value && positionY[value];
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$positionY
    );
  }};

  ${(props) => {
    const apply = (value: Color) => {
      return value && color[value];
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$color
    );
  }};
`;
