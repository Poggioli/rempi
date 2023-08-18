import {
  ApplyResponsiveVariant,
  css,
  RempiConfig,
  styled,
} from "@rempi-ui/core";
import { Popover } from "@rempi-ui/popover";
import { Separator } from "@rempi-ui/separator";
import { ChevronDown, Search } from "lucide-react";

export const StyledComboboxChevron = styled(ChevronDown)`
  color: ${({ theme }) => theme.colors.grey8};
`;

export const StyledComboboxTrigger = styled(Popover.Trigger)`
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
  }

  &[data-placeholder] {
    color: ${({ theme }) => theme.colors.grey9};

    &[data-disabled] {
      color: ${({ theme }) => theme.colors.grey8};
    }
  }

  &:focus-visible,
  &:focus {
    outline-color: ${({ theme }) => theme.colors.info9};
    outline-style: solid;
    outline-width: ${({ theme }) => theme.borderWidths[1]};
  }
`;

export const StyledComboboxIndicator = styled.span`
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

export const StyledComboboxSearchWrapper = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spaces[2]};
`;

export const StyledComboboxSearchIcon = styled(Search)`
  position: absolute;
  right: ${({ theme }) => theme.spaces[2]};
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.grey11};
`;

export const StyledComboboxSearchInput = styled.div`
  max-width: inherit;
  padding-right: ${({ theme }) => theme.spaces[10]};
`;

export const StyledComboboxItem = styled.div`
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
    cursor: not-allowed;

    svg {
      stroke: ${({ theme }) => theme.colors.grey8};
    }
  }

  &[data-highlighted]:not([data-disabled]) {
    background-color: ${({ theme }) => theme.colors.grey12};
    color: ${({ theme }) => theme.colors.grey1};

    svg {
      stroke: ${({ theme }) => theme.colors.grey1};
    }
  }
`;

export const StyledComboboxLabel = styled.span`
  padding-left: ${({ theme }) => theme.spaces[4]};
  margin-bottom: ${({ theme }) => theme.spaces[2]};

  &,
  * {
    color: ${({ theme }) => theme.colors.grey11};
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: ${({ theme }) => theme.lineHeights[2]};
  }
`;

export const StyledComboboxSeparator = styled(Separator)`
  margin: ${({ theme }) => theme.spaces[1]} 0;
`;

export const StyledComboboxValue = styled.span`
  overflow: hidden;
  pointer-events: none;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const StyledComboboxEmpty = styled.div`
  color: ${({ theme }) => theme.colors.grey11};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  line-height: ${({ theme }) => theme.lineHeights[2]};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spaces[6]};
  text-align: center;
`;

export const StyledComboboxContent = styled(Popover.Content)<{
  $condensed?: boolean;
}>`
  background-color: ${({ theme }) => theme.colors.grey2};
  border: ${({ theme }) => theme.borderWidths[1]} solid
    ${({ theme }) => theme.colors.grey6};
  border-radius: ${({ theme }) => theme.radii[2]};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  max-height: var(--radix-popover-content-available-height);
  min-width: 220px;
  overflow: auto;
  padding: ${({ theme }) => theme.spaces[2]};

  ${(props) => {
    const apply = (value: boolean) => {
      return (
        value &&
        css`
          ${StyledComboboxItem.toString()} {
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
  }}
`;
