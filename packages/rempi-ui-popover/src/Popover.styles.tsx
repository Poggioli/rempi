import * as Popover from "@radix-ui/react-popover";
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

export const StyledPopoverCloseCross = styled(Popover.Close)`
  font-family: inherit;
  border-radius: ${(props) => props.theme.radii.pill};
  height: ${(props) => props.theme.spaces[6]};
  width: ${(props) => props.theme.spaces[6]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.grey11};
  position: absolute;
  top: ${(props) => props.theme.spaces[1]};
  right: ${(props) => props.theme.spaces[1]};

  &:hover {
    background-color: ${(props) => props.theme.colors.grey4};
  }

  &:focus-visible,
  &:focus {
    outline-color: ${(props) => props.theme.colors.info9};
    outline-style: solid;
    outline-width: ${(props) => props.theme.borderWidths[1]};
  }
`;

export const StyledPopoverContent = styled(Popover.Content)`
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  background-color: ${(props) => props.theme.colors.grey2};
  border: ${(props) => props.theme.borderWidths[1]} solid
    ${(props) => props.theme.colors.grey6};
  border-radius: ${(props) => props.theme.radii[2]};
  box-shadow: ${(props) => props.theme.shadows[1]};
  min-width: 220px;
  padding: ${(props) => props.theme.spaces[4]};
  position: relative;
  will-change: transform, opacity;

  &:has(${StyledPopoverCloseCross.toString()}) {
    padding: ${(props) => props.theme.spaces[7]}
      ${(props) => props.theme.spaces[7]} ${(props) => props.theme.spaces[4]}
      ${(props) => props.theme.spaces[4]};
  }

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

export const StyledPopoverArrow = styled(Popover.Arrow)`
  fill: ${(props) => props.theme.colors.grey6};
`;
