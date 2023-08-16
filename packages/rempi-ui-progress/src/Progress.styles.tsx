import * as Progress from "@radix-ui/react-progress";
import { css, RuleSet, styled } from "@rempi-ui/core";
import { Size } from "./Progress";

const sizes: Record<Size, RuleSet<object>> = {
  small: css`
    height: ${(props) => props.theme.spaces[1]};
  `,
  standard: css`
    height: ${(props) => props.theme.spaces[2]};
  `,
  large: css`
    height: ${(props) => props.theme.spaces[4]};
  `,
};

export const StyledProgessRoot = styled(Progress.Root)<{ $size: Size }>`
  background-color: ${(props) => props.theme.colors.black6};
  border-radius: ${(props) => props.theme.radii.pill};
  overflow: hidden;
  position: relative;
  transform: translateZ(0);
  width: 100%;

  ${(props) => sizes[props.$size]}
`;

export const StyledProgressBar = styled(Progress.Indicator)`
  background-color: ${(props) => props.theme.colors.secondary9};
  height: 100%;
  transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);
  width: 100%;
`;
