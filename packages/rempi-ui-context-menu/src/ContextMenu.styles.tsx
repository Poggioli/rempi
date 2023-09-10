import * as ContextMenu from "@radix-ui/react-context-menu";
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

export const StyledContextMenuItem = styled(ContextMenu.Item)`
  ${styledOfItems}
`;

export const StyledContextMenuCheckboxItem = styled(ContextMenu.CheckboxItem)`
  ${styledOfItems}
`;

export const StyledContextMenuRadioItem = styled(ContextMenu.RadioItem)`
  ${styledOfItems}
`;

export const StyledContextMenuSubMenuTrigger = styled(ContextMenu.SubTrigger)`
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
          ${StyledContextMenuItem.toString()},
          ${StyledContextMenuCheckboxItem.toString()},
          ${StyledContextMenuRadioItem.toString()},
          ${StyledContextMenuSubMenuTrigger.toString()} {
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

export const StyledContextMenuLabel = styled(ContextMenu.Label)`
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

export const StyledContextMenuSeparator = styled(ContextMenu.Separator)`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.grey6};
  margin: ${({ theme }) => theme.spaces[1]};
`;

export const StyledContextMenuItemIndicator = styled(ContextMenu.ItemIndicator)`
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

export const StyledContextMenuContent = styled(ContextMenu.Content)<{
  $condensed?: boolean;
}>`
  ${styleOfContentAndSubContent}
`;

export const StyledContextMenuSubContent = styled(ContextMenu.SubContent)<{
  $condensed?: boolean;
}>`
  ${styleOfContentAndSubContent}
`;
