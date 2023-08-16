import * as Toast from "@radix-ui/react-toast";
import { keyframes, styled } from "@rempi-ui/core";

const slideIn = (val: any) => keyframes`
  from {
    transform: translateX(calc(100% + ${val}));
  }

  to {
    transform: translateX(0);
  }
`;

const swipeOut = (val: any) => keyframes`
  from {
    transform: translateX(var(--radix-toast-swipe-end-x));
  }

  to {
    transform: translateX(calc(100% + ${val}));
  }
`;

export const StyledToastCloseCross = styled(Toast.Close)`
  font-family: inherit;
  border-radius: ${(props) => props.theme.radii.pill};
  height: ${(props) => props.theme.spaces[6]};
  width: ${(props) => props.theme.spaces[6]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.grey11};
  opacity: 0;
  position: absolute;
  top: ${(props) => props.theme.spaces[7]};
  transition: opacity 200ms ease-out;
  right: ${(props) => props.theme.spaces[7]};

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

export const StyledToastRoot = styled(Toast.Root)`
  align-items: center;
  background-color: ${(props) => props.theme.colors.grey2};
  border: ${(props) => props.theme.borderWidths[1]} solid
    ${(props) => props.theme.colors.grey6};
  border-radius: ${(props) => props.theme.radii[2]};
  box-shadow: ${(props) => props.theme.shadows[1]};
  column-gap: ${(props) => props.theme.spaces[4]};
  display: grid;
  grid-template-areas: "title action" "description action";
  grid-template-columns: auto max-content;
  padding: ${(props) => props.theme.spaces[4]}
    ${(props) => props.theme.spaces[5]} ${(props) => props.theme.spaces[4]}
    ${(props) => props.theme.spaces[4]};
  row-gap: ${(props) => props.theme.spaces[1]};

  &:hover {
    ${StyledToastCloseCross.toString()} {
      opacity: 1;
    }
  }

  &[data-state="open"] {
    animation: ${props => slideIn(props.theme.spaces[6])} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  &[data-state="closed"] {
    animation: ${props => swipeOut(props.theme.spaces[6])} 200ms ease-out;
  }

  &[data-swipe="move"] {
    transform: translateX(var(--radix-toast-swipe-move-x));
  }

  &[data-swipe="cancel"] {
    transform: translateX(0);
    transition: transform 200ms ease-out;
  }

  &[data-swipe="end"] {
    animation: ${props => swipeOut(props.theme.spaces[6])} 200ms ease-out;
  }
`;

export const StyledToastViewport = styled(Toast.Viewport)`
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spaces[4]};
  list-style: none;
  margin: 0;
  max-width: 100vw;
  outline: none;
  padding: ${(props) => props.theme.spaces[6]};
  position: fixed;
  right: 0;
  z-index: ${(props) => props.theme.zIndices[12]};
`;

export const StyledToastTitle = styled(Toast.Title)`
  color: ${(props) => props.theme.colors.grey12};
  font-weight: ${(props) => props.theme.fontWeights[3]};
  font-size: ${(props) => props.theme.fontSizes[4]};
  grid-area: title;
  line-height: ${(props) => props.theme.lineHeights[1]};
`;

export const StyledToastDescription = styled(Toast.Description)`
  color: ${(props) => props.theme.colors.grey12};
  font-weight: ${(props) => props.theme.fontWeights[2]};
  font-size: ${(props) => props.theme.fontSizes[3]};
  grid-area: description;
  line-height: ${(props) => props.theme.lineHeights[2]};
`;

export const StyledToastAction = styled(Toast.Action)`
  grid-area: action;
`;
