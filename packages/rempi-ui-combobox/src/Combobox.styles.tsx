import { css, styled } from "@rempi-ui/core";
import { Input } from "@rempi-ui/input";
import { Popover } from "@rempi-ui/popover";
import { Separator } from "@rempi-ui/separator";
import { ChevronDown, Search } from "lucide-react";

export const StyledComboboxChevron = styled(ChevronDown)`
  color: ${(props) => props.theme.colors.grey8};
`;

export const StyledComboboxTrigger = styled(Popover.Trigger)`
  align-items: center;
  background-color: transparent;
  border: ${(props) => props.theme.borderWidths[1]} solid
    ${(props) => props.theme.colors.grey9};
  border-radius: ${(props) => props.theme.radii[2]};
  color: ${(props) => props.theme.colors.grey11};
  display: inline-flex;
  font-size: ${(props) => props.theme.fontSizes[4]};
  gap: ${(props) => props.theme.spaces[1]};
  justify-content: space-between;
  min-width: calc(${(props) => props.theme.spaces[18]} * 1.5);
  line-height: ${(props) => props.theme.lineHeights[1]};
  padding: ${(props) => props.theme.spaces[2]}
    ${(props) => props.theme.spaces[2]} ${(props) => props.theme.spaces[2]}
    ${(props) => props.theme.spaces[4]};

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
  }

  &[data-placeholder] {
    color: ${(props) => props.theme.colors.grey9};

    &[data-disabled] {
      color: ${(props) => props.theme.colors.grey8};
    }
  }

  &:focus-visible,
  &:focus {
    outline-color: ${(props) => props.theme.colors.info9};
    outline-style: solid;
    outline-width: ${(props) => props.theme.borderWidths[1]};
  }
`;

export const StyledComboboxIndicator = styled.span`
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

export const StyledComboboxSearchWrapper = styled.div`
  position: relative;
  margin-bottom: ${(props) => props.theme.spaces[2]};
`;

export const StyledComboboxSearchIcon = styled(Search)`
  position: absolute;
  right: ${(props) => props.theme.spaces[2]};
  top: 50%;
  transform: translateY(-50%);
  color: ${(props) => props.theme.colors.grey11};
`;

export const StyledComboboxSearchInput = styled(Input.Root)`
  max-width: inherit;
  padding-right: ${(props) => props.theme.spaces[10]};
`;

export const StyledComboboxItem = styled.div`
  align-items: center;
  border-radius: ${(props) => props.theme.radii[1]};
  color: ${(props) => props.theme.colors.grey11};
  display: flex;
  font-size: ${(props) => props.theme.fontSizes[3]};
  height: ${(props) => props.theme.spaces[9]};
  line-height: ${(props) => props.theme.lineHeights[2]};
  outline: none;
  padding: 0 ${(props) => props.theme.spaces[1]} 0
    ${(props) => props.theme.spaces[6]};
  position: relative;
  user-select: none;
  transition: background-color 200ms ease, color 200ms ease;

  &[data-disabled] {
    color: ${(props) => props.theme.colors.grey8};
    cursor: not-allowed;

    svg {
      stroke: ${(props) => props.theme.colors.grey8};
    }
  }

  &[data-highlighted]:not([data-disabled]) {
    background-color: ${(props) => props.theme.colors.grey12};
    color: ${(props) => props.theme.colors.grey1};

    svg {
      stroke: ${(props) => props.theme.colors.grey1};
    }
  }
`;

export const StyledComboboxLabel = styled.span`
  padding-left: ${(props) => props.theme.spaces[4]};
  margin-bottom: ${(props) => props.theme.spaces[2]};

  &,
  * {
    color: ${(props) => props.theme.colors.grey11};
    font-size: ${(props) => props.theme.fontSizes[2]};
    line-height: ${(props) => props.theme.lineHeights[2]};
  }
`;

export const StyledComboboxSeparator = styled(Separator)`
  margin: ${(props) => props.theme.spaces[1]} 0;
`;

export const StyledComboboxValue = styled.span`
  overflow: hidden;
  pointer-events: none;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const StyledComboboxEmpty = styled.div`
  color: ${(props) => props.theme.colors.grey11};
  font-size: ${(props) => props.theme.fontSizes[4]};
  line-height: ${(props) => props.theme.lineHeights[2]};
  margin: 0 auto;
  padding: ${(props) => props.theme.spaces[6]};
  text-align: center;
`;

export const StyledComboboxContent = styled(Popover.Content)<{
  $condensed?: boolean;
}>`
  background-color: ${(props) => props.theme.colors.grey2};
  border: ${(props) => props.theme.borderWidths[1]} solid
    ${(props) => props.theme.colors.grey6};
  border-radius: ${(props) => props.theme.radii[2]};
  box-shadow: ${(props) => props.theme.shadows[1]};
  max-height: var(--radix-popover-content-available-height);
  min-width: 220px;
  overflow: auto;
  padding: ${(props) => props.theme.spaces[2]};

  ${(props) =>
    props.$condensed &&
    css`
      ${StyledComboboxItem.toString()} {
        height: ${(props) => props.theme.spaces[7]};
      }
    `}
`;
