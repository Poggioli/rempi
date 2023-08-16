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
  background-color: ${(props) => props.theme.colors.grey2};
  border: ${(props) => props.theme.borderWidths[1]} solid
    ${(props) => props.theme.colors.grey6};
  border-radius: ${(props) => props.theme.radii[2]};
  box-shadow: ${(props) => props.theme.shadows[1]}
  min-width: 220px;
  padding: ${(props) => props.theme.spaces[4]};
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
  fill: ${(props) => props.theme.colors.grey6};
`;
