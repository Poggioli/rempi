import * as Progress from "@radix-ui/react-progress";
import {
  ApplyResponsiveVariant,
  css,
  RempiConfig,
  RuleSet,
  styled,
} from "@rempi-ui/core";
import { Size } from "./Progress";

const sizes: Record<Size, RuleSet<object>> = {
  small: css`
    height: ${({ theme }) => theme.spaces[1]};
  `,
  standard: css`
    height: ${({ theme }) => theme.spaces[2]};
  `,
  large: css`
    height: ${({ theme }) => theme.spaces[4]};
  `,
};

export const StyledProgessRoot = styled(Progress.Root)<{ $size: Size }>`
  background-color: ${({ theme }) => theme.colors.black6};
  border-radius: ${({ theme }) => theme.radii.pill};
  overflow: hidden;
  position: relative;
  transform: translateZ(0);
  width: 100%;

  ${(props) => {
    const apply = (value: Size) => {
      return value && sizes[value];
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$size
    );
  }};
`;

export const StyledProgressBar = styled(Progress.Indicator)`
  background-color: ${({ theme }) => theme.colors.secondary9};
  height: 100%;
  transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);
  width: 100%;
`;
