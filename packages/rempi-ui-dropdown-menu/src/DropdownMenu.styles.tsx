import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  ApplyResponsiveVariant,
  css,
  RempiConfig,
  styled,
} from "@rempi-ui/core";

const styledOfItems = css`
  border-radius: ${({ theme }) => theme.radii[1]};
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.spaces[9]};
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spaces[1]} 0
    ${({ theme }) => theme.spaces[6]};
  position: relative;
  user-select: none;
  outline: none;
  transition: background-color 200ms ease, color 200ms ease;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  line-height: ${({ theme }) => theme.lineHeights[2]};
  color: ${({ theme }) => theme.colors.grey11};

  * {
    font-size: ${({ theme }) => theme.fontSizes[3]};
    line-height: ${({ theme }) => theme.lineHeights[2]};
    color: ${({ theme }) => theme.colors.grey11};
  }

  &[data-disabled] {
    color: ${({ theme }) => theme.colors.grey8};
    pointer-events: "none";

    svg {
      stroke: ${({ theme }) => theme.colors.grey8};
    }

    * {
      color: ${({ theme }) => theme.colors.grey8};
      pointer-events: "none";

      svg {
        stroke: ${({ theme }) => theme.colors.grey8};
      }
    }
  }

  &[data-highlighted] {
    background-color: ${({ theme }) => theme.colors.grey12};
    color: ${({ theme }) => theme.colors.grey1};

    svg {
      stroke: ${({ theme }) => theme.colors.grey1};
    }

    * {
      color: ${({ theme }) => theme.colors.grey1};

      svg {
        stroke: ${({ theme }) => theme.colors.grey1};
      }
    }
  }
`;

export const StyledDropdownMenuItem = styled(DropdownMenu.Item)`
  ${styledOfItems}
`;

export const StyledDropdownMenuCheckboxItem = styled(DropdownMenu.CheckboxItem)`
  ${styledOfItems}
`;

export const StyledDropdownMenuRadioItem = styled(DropdownMenu.RadioItem)`
  ${styledOfItems}
`;

export const StyledDropdownMenuSubMenuTrigger = styled(DropdownMenu.SubTrigger)`
  ${styledOfItems}

  &[data-state='open'] {
    background-color: ${({ theme }) => theme.colors.grey6};
    color: ${({ theme }) => theme.colors.grey12};

    svg {
      stroke: ${({ theme }) => theme.colors.grey12};
    }

    * {
      color: ${({ theme }) => theme.colors.grey12};

      svg {
        stroke: ${({ theme }) => theme.colors.grey12};
      }
    }
  }
`;

const styleOfContentAndSubContent = css<{ $condensed?: boolean }>`
  min-width: 220px;
  background-color: ${({ theme }) => theme.colors.grey2};
  border-radius: ${({ theme }) => theme.radii[2]};
  overflow: hidden;
  padding: ${({ theme }) => theme.spaces[2]};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  border: ${({ theme }) => theme.borderWidths[1]} solid
    ${({ theme }) => theme.colors.grey6};
  z-index: ${({ theme }) => theme.zIndices[12]};

  ${(props) => {
    const apply = (value: boolean) => {
      return (
        value &&
        css`
          ${StyledDropdownMenuItem.toString()},
          ${StyledDropdownMenuCheckboxItem.toString()},
          ${StyledDropdownMenuRadioItem.toString()},
          ${StyledDropdownMenuSubMenuTrigger.toString()} {
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

export const StyledDropdownMenuLabel = styled(DropdownMenu.Label)`
  padding-left: ${({ theme }) => theme.spaces[4]};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: ${({ theme }) => theme.lineHeights[2]};
  color: ${({ theme }) => theme.colors.grey11};

  * {
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: ${({ theme }) => theme.lineHeights[2]};
    color: ${({ theme }) => theme.colors.grey11};
  }
`;

export const StyledDropdownMenuSeparator = styled(DropdownMenu.Separator)`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.grey6};
  margin: ${({ theme }) => theme.spaces[1]};
`;

export const StyledDropdownMenuItemIndicator = styled(
  DropdownMenu.ItemIndicator
)`
  position: absolute;
  left: 0;
  width: ${({ theme }) => theme.spaces[6]};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    stroke: ${({ theme }) => theme.colors.grey11};
    stroke-width: 3;
  }
`;

export const StyledDropdownMenuContent = styled(DropdownMenu.Content)<{
  $condensed?: boolean;
}>`
  ${styleOfContentAndSubContent}
`;

export const StyledDropdownMenuSubContent = styled(DropdownMenu.SubContent)<{
  $condensed?: boolean;
}>`
  ${styleOfContentAndSubContent}
`;
