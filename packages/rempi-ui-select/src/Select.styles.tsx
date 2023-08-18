import * as Select from "@radix-ui/react-select";
import {
  ApplyResponsiveVariant,
  css,
  RempiConfig,
  styled,
} from "@rempi-ui/core";

export const StyledSelectItemIndicator = styled(Select.ItemIndicator)`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  left: 0;
  position: absolute;
  width: ${({ theme }) => theme.spaces[6]};

  svg {
    stroke: ${({ theme }) => theme.colors.grey11};
    stroke-width: 3;
  }
`;

export const StyledSelectItem = styled(Select.Item)`
  align-items: center;
  border-radius: ${({ theme }) => theme.radii[1]};
  color: ${({ theme }) => theme.colors.grey11};
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  height: ${({ theme }) => theme.spaces[9]};
  line-height: ${({ theme }) => theme.lineHeights[2]};
  outline: none;
  padding: 0 ${({ theme }) => theme.spaces[1]} 0
    ${({ theme }) => theme.spaces[6]};
  position: relative;
  user-select: none;
  transition: background-color 200ms ease, color 200ms ease;

  &[data-disabled] {
    color: ${({ theme }) => theme.colors.grey8};
    pointer-events: "none";

    svg {
      stroke: ${({ theme }) => theme.colors.grey8};
    }
  }

  &[data-highlighted] {
    background-color: ${({ theme }) => theme.colors.grey12};
    color: ${({ theme }) => theme.colors.grey1};

    svg {
      stroke: ${({ theme }) => theme.colors.grey1};
    }
  }
`;

export const StyledSelectTriggerIcon = styled(Select.Icon)`
  align-items: center;
  color: ${({ theme }) => theme.colors.grey11};
  display: inline-flex;
  justify-content: center;
`;

export const StyledSelectTrigger = styled(Select.Trigger)`
  align-items: center;
  background-color: transparent;
  border: ${({ theme }) => theme.borderWidths[1]} solid
    ${({ theme }) => theme.colors.grey9};
  border-radius: ${({ theme }) => theme.radii[2]};
  color: ${({ theme }) => theme.colors.grey11};
  display: inline-flex;
  font-size: ${({ theme }) => theme.fontSizes[4]};
  gap: ${({ theme }) => theme.spaces[1]};
  justify-content: space-between;
  min-width: calc(${({ theme }) => theme.spaces[18]} * 1.5);
  line-height: ${({ theme }) => theme.lineHeights[1]};
  padding: ${({ theme }) => theme.spaces[2]} ${({ theme }) => theme.spaces[2]}
    ${({ theme }) => theme.spaces[2]} ${({ theme }) => theme.spaces[4]};

  &:hover {
    cursor: pointer;

    &[data-disabled] {
      cursor: not-allowed;
    }
  }

  &[data-disabled] {
    background-color: ${({ theme }) => theme.colors.grey2};
    border-color: ${({ theme }) => theme.colors.grey7};
    color: ${({ theme }) => theme.colors.grey8};

    ${StyledSelectTriggerIcon.toString()} {
      color: ${({ theme }) => theme.colors.grey8};
    }
  }

  &:focus-visible,
  &:focus {
    outline-color: ${({ theme }) => theme.colors.info9};
    outline-style: solid;
    outline-width: ${({ theme }) => theme.borderWidths[1]};
  }

  &[data-placeholder] {
    color: ${({ theme }) => theme.colors.grey9};
  }
`;

export const StyledSelectContent = styled(Select.Content)<{
  $condensed?: boolean;
}>`
  background-color: ${({ theme }) => theme.colors.grey2};
  border: ${({ theme }) => theme.borderWidths[1]} solid
    ${({ theme }) => theme.colors.grey6};
  border-radius: ${({ theme }) => theme.radii[2]};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  min-width: 220px;
  overflow: hidden;

  ${(props) => {
    const apply = (value: boolean) => {
      return (
        value &&
        css`
          ${StyledSelectItem.toString()} {
            height: ${({ theme }) => theme.spaces[7]};
          }
        `
      );
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$condensed
    );
  }};
`;

export const StyledSelectViewport = styled(Select.Viewport)`
  padding: ${({ theme }) => theme.spaces[2]};
`;

export const StyledSelectLabel = styled(Select.Label)`
  color: ${({ theme }) => theme.colors.grey11};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: ${({ theme }) => theme.lineHeights[2]};
  padding-left: ${({ theme }) => theme.spaces[4]};

  * {
    color: ${({ theme }) => theme.colors.grey11};
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: ${({ theme }) => theme.lineHeights[2]};
  }
`;

export const StyledSelectSeparator = styled(Select.Separator)`
  background-color: ${({ theme }) => theme.colors.grey6};
  height: 1px;
  margin: ${({ theme }) => theme.spaces[1]};
`;

const styleOfScrollUpAndDown = css`
  align-items: center;
  color: ${({ theme }) => theme.colors.grey11};
  cursor: default;
  display: flex;
  height: ${({ theme }) => theme.spaces[6]};
  justify-content: center;
`;

export const StyledSelectScrollUpButton = styled(Select.ScrollUpButton)`
  ${styleOfScrollUpAndDown}
  border-bottom: ${({ theme }) => theme.borderWidths[1]} solid ${(props) =>
    props.theme.colors.grey6};
`;

export const StyledSelectScrollDownButton = styled(Select.ScrollDownButton)`
  ${styleOfScrollUpAndDown}
  border-top: ${({ theme }) => theme.borderWidths[1]} solid ${(props) =>
    props.theme.colors.grey6};
`;
