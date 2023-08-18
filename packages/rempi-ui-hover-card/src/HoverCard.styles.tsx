import * as HoverCard from "@radix-ui/react-hover-card";
import { keyframes, styled } from "@rempi-ui/core";

const slideUpAndFade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(2px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideRightAndFade = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-2px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideDownAndFade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-2px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideLeftAndFade = keyframes`
  0% {
    opacity: 0;
    transform: translateX(2px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const StyledHoverCardContent = styled(HoverCard.Content)`
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  background-color: ${({ theme }) => theme.colors.grey2};
  border: ${({ theme }) => theme.borderWidths[1]} solid
    ${({ theme }) => theme.colors.grey6};
  border-radius: ${({ theme }) => theme.radii[2]};
  box-shadow: ${({ theme }) => theme.shadows[1]}
  min-width: 220px;
  padding: ${({ theme }) => theme.spaces[4]};
  will-change: transform, opacity;

  &[data-side="top"] {
    animation-name: ${slideDownAndFade};
  }

  &[data-side="right"] {
    animation-name: ${slideLeftAndFade};
  }

  &[data-side="bottom"] {
    animation-name: ${slideUpAndFade};
  }

  &[data-side="left"] {
    animation-name: ${slideRightAndFade};
  }
`;

export const StyledHoverCardArrow = styled(HoverCard.Arrow)`
  fill: ${({ theme }) => theme.colors.grey6};
`;
