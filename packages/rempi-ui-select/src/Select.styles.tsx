import * as Select from "@radix-ui/react-select";
import { css, styled } from "@rempi-ui/core";

export const StyledSelectItemIndicator = styled(Select.ItemIndicator)`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  left: 0;
  position: absolute;
  width: ${(props) => props.theme.spaces[6]};

  svg {
    stroke: ${(props) => props.theme.colors.grey11};
    stroke-width: 3;
  }
`;

export const StyledSelectItem = styled(Select.Item)`
  align-items: center;
  border-radius: ${(props) => props.theme.radii[1]};
  color: ${(props) => props.theme.colors.grey11};
  display: flex;
  font-size: ${(props) => props.theme.fontSizes[3]};
  height: ${(props) => props.theme.spaces[9]};
  line-height: ${(props) => props.theme.lineHeights[2]};
  outline: none;
  padding: 0 ${(props) => props.theme.spaces[1]} 0 ${(props) => props.theme.spaces[6]};
  position: relative;
  user-select: none;
  transition: background-color 200ms ease,
      color 200ms ease;


  &[data-disabled] {
    color: ${(props) => props.theme.colors.grey8};
    pointer-events: 'none';

    svg {
      stroke: ${(props) => props.theme.colors.grey8};
    }
  }

  &[data-highlighted] {
    background-color: ${(props) => props.theme.colors.grey12};
    color: ${(props) => props.theme.colors.grey1};

    svg {
      stroke: ${(props) => props.theme.colors.grey1};
    }
  }
`;

export const StyledSelectTriggerIcon = styled(Select.Icon)`
  align-items: center;
  color: ${(props) => props.theme.colors.grey11};
  display: inline-flex;
  justify-content: center;
`;

export const StyledSelectTrigger = styled(Select.Trigger)`
  align-items: center;
  background-color: transparent;
  border: ${(props) => props.theme.borderWidths[1]} solid ${(props) => props.theme.colors.grey9};
  border-radius: ${(props) => props.theme.radii[2]};
  color: ${(props) => props.theme.colors.grey11};
  display: inline-flex;
  font-size: ${(props) => props.theme.fontSizes[4]};
  gap: ${(props) => props.theme.spaces[1]};
  justify-content: space-between;
  min-width: calc(${(props) => props.theme.spaces[18]} * 1.5);
  line-height: ${(props) => props.theme.lineHeights[1]};
  padding: ${(props) => props.theme.spaces[2]} ${(props) => props.theme.spaces[2]} ${(props) => props.theme.spaces[2]} ${(props) => props.theme.spaces[4]};

  &:hover {
    cursor: pointer;

    &[data-disabled] {
      cursor: not-allowed;
    }
  }

  &[data-disabled] {
    background-color: ${(props) => props.theme.colors.grey2};
    border-color: ${(props) => props.theme.colors.grey7};
    color: ${(props) => props.theme.colors.grey8};

    ${StyledSelectTriggerIcon.toString()} {
      color: ${(props) => props.theme.colors.grey8};
    }
  }

  &:focus-visible,
  &:focus {
    outline-color: ${(props) => props.theme.colors.info9};
    outline-style: solid;
    outline-width: ${(props) => props.theme.borderWidths[1]};
  }

  &[data-placeholder] {
    color: ${(props) => props.theme.colors.grey9};
  }  
`;

export const StyledSelectContent = styled(Select.Content) <{ $condensed: boolean }>`
  background-color: ${(props) => props.theme.colors.grey2};
  border: ${(props) => props.theme.borderWidths[1]} solid ${(props) => props.theme.colors.grey6};
  border-radius: ${(props) => props.theme.radii[2]};
  box-shadow: ${(props) => props.theme.shadows[1]};
  min-width: 220px;
  overflow: hidden;

  ${(props) => props.$condensed &&
    css`
      ${StyledSelectItem.toString()} {
        height: ${(props) => props.theme.spaces[7]};
      }
    `
  }
`;

export const StyledSelectViewport = styled(Select.Viewport)`
  padding: ${(props) => props.theme.spaces[2]};
`;

export const StyledSelectLabel = styled(Select.Label)`
  color: ${(props) => props.theme.colors.grey11};
  font-size: ${(props) => props.theme.fontSizes[2]};
  line-height: ${(props) => props.theme.lineHeights[2]};
  padding-left: ${(props) => props.theme.spaces[4]};

  * {
    color: ${(props) => props.theme.colors.grey11};
    font-size: ${(props) => props.theme.fontSizes[2]};
    line-height: ${(props) => props.theme.lineHeights[2]};
  }
`;

export const StyledSelectSeparator = styled(Select.Separator)`
  background-color: ${(props) => props.theme.colors.grey6};
  height: 1px;
  margin: ${(props) => props.theme.spaces[1]};
`;

const styleOfScrollUpAndDown = css`
  align-items: center;
  color: ${(props) => props.theme.colors.grey11};
  cursor: default;
  display: flex;
  height: ${(props) => props.theme.spaces[6]};
  justify-content: center;
`;

export const StyledSelectScrollUpButton = styled(Select.ScrollUpButton)`
  ${styleOfScrollUpAndDown}
  border-bottom: ${(props) => props.theme.borderWidths[1]} solid ${(props) => props.theme.colors.grey6};
`;

export const StyledSelectScrollDownButton = styled(Select.ScrollDownButton)`
  ${styleOfScrollUpAndDown}
  border-top: ${(props) => props.theme.borderWidths[1]} solid ${(props) => props.theme.colors.grey6};
`;