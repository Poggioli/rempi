import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { css, keyframes, styled } from "@rempi-ui/core";
import { ChevronDown } from "lucide-react";

const enterFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(200px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const enterFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-200px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const exitToRight = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }

  to {
    opacity: 0;
    transform: translateX(200px);
  }
`;

const exitToLeft = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }

  to {
    opacity: 0;
    transform: translateX(-200px);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: rotateX(-30deg) scale(0.9);
  }

  to {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
`;

const scaleOut = keyframes`
  from {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }

  to {
    opacity: 0;
    transform: rotateX(-10deg) scale(0.95);
  }
`;

export const StyledNavigationMenuRoot = styled(NavigationMenu.Root)`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  width: 100%;
`;

export const StyledNavigationMenuList = styled(NavigationMenu.List)`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: ${(props) => props.theme.spaces[1]};
`;

export const StyledNavigationMenuChevronDown = styled(ChevronDown)`
  position: relative;
  color: ${(props) => props.theme.colors.grey10};
  top: 1px;
  transition: transform 250ms ease;
`;

const styledOfTriggerAndLink = css`
  border-radius: ${(props) => props.theme.radii[1]};
  color: ${(props) => props.theme.colors.grey11};
  font-size: ${(props) => props.theme.fontSizes[4]};
  font-weight: ${(props) => props.theme.fontWeights[3]};
  line-height: ${(props) => props.theme.lineHeights[1]};
  outline: none;
  padding: ${(props) => props.theme.spaces[2]} ${(props) => props.theme.spaces[3]};
  user-select: none;

  &:focus-visible,
  &:focus {
    outline-color: ${(props) => props.theme.colors.info9};
    outline-style: solid;
    outline-width: ${(props) => props.theme.borderWidths[1]};
  }

  &:hover:not([data-disabled]) {
    background-color: ${(props) => props.theme.colors.primary3};
  }

  &[data-active] {
    background-color: ${(props) => props.theme.colors.primary2};
    color: ${(props) => props.theme.colors.primary12};
  }
`;

export const StyledNavigationMenuTrigger = styled(NavigationMenu.Trigger)`
  ${styledOfTriggerAndLink};
  align-items: center;
  display: flex;
  gap: ${(props) => props.theme.spaces[2]};
  justify-content: space-between;

  &[data-state="open"] {
    background-color: ${(props) => props.theme.colors.primary3};
    
    ${StyledNavigationMenuChevronDown.toString()} {
      transform: rotate(-180deg);
    }
  }

  &[data-disabled],
  &[data-disabled] * {
    cursor: not-allowed;
    color: ${(props) => props.theme.colors.grey8};
  }
`;

export const StyledNavigationMenuLink = styled(NavigationMenu.Link)`
  ${styledOfTriggerAndLink};
  display: block;
  text-decoration: none;
`;

export const StyledNavigationMenuContent = styled(NavigationMenu.Content)`
  animation-duration: 250ms;
  animation-timing-function: ease;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;

  @media only screen and (min-width: 600px) {
    width: auto;
  }

  &[data-motion="from-start"] {
    animation-name: ${enterFromLeft};
  }

  &[data-motion="from-end"] {
    animation-name: ${enterFromRight};
  }

  &[data-motion="to-start"] {
    animation-name: ${exitToLeft};
  }

  &[data-motion="to-end"] {
    animation-name: ${exitToRight};
  }
`;

export const StyledNavigationMenuViewport = styled(NavigationMenu.Viewport)`
  background-color: ${(props) => props.theme.colors.grey2};
  border: ${(props) => props.theme.borderWidths[1]} solid ${(props) => props.theme.colors.grey6};
  border-radius: ${(props) => props.theme.radii[2]};
  box-shadow: ${(props) => props.theme.shadows[1]};
  height: var(--radix-navigation-menu-viewport-height);
  overflow: hidden;
  position: relative;
  transform-origin: top center;
  transition: width, height, 300ms ease;
  width: 100%;
    
  @media only screen and (min-width: 600px) {
    width: var(--radix-navigation-menu-viewport-width);
  }

  &[data-state="open"] {
    animation: ${scaleIn} 200ms ease;
  }

  &[data-state="closed"] {
    animation: ${scaleOut} 200ms ease;
  }

`;

export const StyledNavigationMenuViewportPosition = styled.div`
  display: flex;
  justify-content: center;
  left: 0;
  perspective: 2000px;
  position: absolute;
  top: 100%;
  width: 100%;
`;
