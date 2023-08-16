import * as Tooltip from "@radix-ui/react-tooltip";
import { keyframes, styled } from "@rempi-ui/core";

const slideUpAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(2px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideRightAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(-2px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideDownAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideLeftAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(2px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const StyledTooltipContent = styled(Tooltip.Content)`
  background-color: ${(props) => props.theme.colors.grey2};
  border-radius: ${(props) => props.theme.radii[2]};
  color: ${(props) => props.theme.colors.grey12};
  font-size: ${(props) => props.theme.fontSizes[3]};
  line-height: ${(props) => props.theme.lineHeights[1]};
  overflow: hidden;
  padding: ${(props) => props.theme.spaces[2]};
  box-shadow: ${(props) => props.theme.shadows[1]};
  border: ${(props) => props.theme.borderWidths[1]} solid
    ${(props) => props.theme.colors.grey6};

  * {
    font-size: ${(props) => props.theme.fontSizes[3]};
    line-height: ${(props) => props.theme.lineHeights[1]};
  }

  &[data-state="delayed-open"][data-side="top"] {
    animation-name: ${slideDownAndFade};
  }

  &[data-state="delayed-open"][data-side="right"] {
    animation-name: ${slideLeftAndFade};
  }

  &[data-state="delayed-open"][data-side="bottom"] {
    animation-name: ${slideUpAndFade};
  }

  &[data-state="delayed-open"][data-side="left"] {
    animation-name: ${slideRightAndFade};
  }
`;

export const StyledTooltipArrow = styled(Tooltip.Arrow)`
  fill: ${(props) => props.theme.colors.grey6};
`;
