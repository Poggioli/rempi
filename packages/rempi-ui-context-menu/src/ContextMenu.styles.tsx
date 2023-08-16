import * as ContextMenu from "@radix-ui/react-context-menu";
import { css, styled } from "@rempi-ui/core";

const styledOfItems = css`
  border-radius: ${(props) => props.theme.radii[1]};
  display: flex;
  align-items: center;
  height: ${(props) => props.theme.spaces[9]};
  justify-content: space-between;
  padding: 0 ${(props) => props.theme.spaces[1]} 0
    ${(props) => props.theme.spaces[6]};
  position: relative;
  user-select: none;
  outline: none;
  transition: background-color 200ms ease, color 200ms ease;
  font-size: ${(props) => props.theme.fontSizes[3]};
  line-height: ${(props) => props.theme.lineHeights[2]};
  color: ${(props) => props.theme.colors.grey11};

  * {
    font-size: ${(props) => props.theme.fontSizes[3]};
    line-height: ${(props) => props.theme.lineHeights[2]};
    color: ${(props) => props.theme.colors.grey11};
  }

  &[data-disabled] {
    color: ${(props) => props.theme.colors.grey8};
    pointer-events: "none";

    svg {
      stroke: ${(props) => props.theme.colors.grey8};
    }

    * {
      color: ${(props) => props.theme.colors.grey8};
      pointer-events: "none";

      svg {
        stroke: ${(props) => props.theme.colors.grey8};
      }
    }
  }

  &[data-highlighted] {
    background-color: ${(props) => props.theme.colors.grey12};
    color: ${(props) => props.theme.colors.grey1};

    svg {
      stroke: ${(props) => props.theme.colors.grey1};
    }

    * {
      color: ${(props) => props.theme.colors.grey1};

      svg {
        stroke: ${(props) => props.theme.colors.grey1};
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
    background-color: ${(props) => props.theme.colors.grey6};
    color: ${(props) => props.theme.colors.grey12};

    svg {
      stroke: ${(props) => props.theme.colors.grey12};
    }

    * {
      color: ${(props) => props.theme.colors.grey12};

      svg {
        stroke: ${(props) => props.theme.colors.grey12};
      }
    }
  }
`;

const styleOfContentAndSubContent = css<{ $condensed?: boolean }>`
  min-width: 220px;
  background-color: ${(props) => props.theme.colors.grey2};
  border-radius: ${(props) => props.theme.radii[2]};
  overflow: hidden;
  padding: ${(props) => props.theme.spaces[2]};
  box-shadow: ${(props) => props.theme.shadows[1]};
  border: ${(props) => props.theme.borderWidths[1]} solid
    ${(props) => props.theme.colors.grey6};

  ${(props) =>
    props.$condensed &&
    css`
      ${StyledContextMenuItem.toString()},
      ${StyledContextMenuCheckboxItem.toString()},
      ${StyledContextMenuRadioItem.toString()},
      ${StyledContextMenuSubMenuTrigger.toString()} {
        height: ${(props) => props.theme.spaces[7]};
      }
    `}
`;

export const StyledContextMenuLabel = styled(ContextMenu.Label)`
  padding-left: ${(props) => props.theme.spaces[4]};
  font-size: ${(props) => props.theme.fontSizes[2]};
  line-height: ${(props) => props.theme.lineHeights[2]};
  color: ${(props) => props.theme.colors.grey11};

  * {
    font-size: ${(props) => props.theme.fontSizes[2]};
    line-height: ${(props) => props.theme.lineHeights[2]};
    color: ${(props) => props.theme.colors.grey11};
  }
`;

export const StyledContextMenuSeparator = styled(ContextMenu.Separator)`
  height: 1px;
  background-color: ${(props) => props.theme.colors.grey6};
  margin: ${(props) => props.theme.spaces[1]};
`;

export const StyledContextMenuItemIndicator = styled(ContextMenu.ItemIndicator)`
  position: absolute;
  left: 0;
  width: ${(props) => props.theme.spaces[6]};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    stroke: ${(props) => props.theme.colors.grey11};
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
