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
  background-color: ${({ theme }) => theme.colors.grey2};
  border-radius: ${({ theme }) => theme.radii[2]};
  color: ${({ theme }) => theme.colors.grey12};
  font-size: ${({ theme }) => theme.fontSizes[3]};
  line-height: ${({ theme }) => theme.lineHeights[1]};
  overflow: hidden;
  padding: ${({ theme }) => theme.spaces[2]};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  border: ${({ theme }) => theme.borderWidths[1]} solid
    ${({ theme }) => theme.colors.grey6};
  z-index: ${({ theme }) => theme.zIndices[12]};

  * {
    font-size: ${({ theme }) => theme.fontSizes[3]};
    line-height: ${({ theme }) => theme.lineHeights[1]};
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
  fill: ${({ theme }) => theme.colors.grey6};
`;
