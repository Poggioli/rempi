import * as Menubar from "@radix-ui/react-menubar";
import { css, styled } from "@rempi-ui/core";

export const StyledMenuBarRoot = styled(Menubar.Root)`
  background-color: ${(props) => props.theme.colors.primary2};
  border: ${(props) => props.theme.borderWidths[1]} solid
    ${(props) => props.theme.colors.grey6};
  border-radius: ${(props) => props.theme.radii[1]};
  display: flex;
  padding: ${(props) => props.theme.spaces[1]};
`;

export const StyledMenuBarTrigger = styled(Menubar.Trigger)`
  align-items: center;
  border-radius: ${(props) => props.theme.radii[1]};
  color: ${(props) => props.theme.colors.grey11};
  cursor: pointer;
  display: flex;
  font-weight: ${(props) => props.theme.fontWeights[3]};
  font-size: ${(props) => props.theme.fontSizes[4]};
  gap: calc(${(props) => props.theme.spaces[1]} / 2);
  justify-content: space-between;
  line-height: ${(props) => props.theme.lineHeights[1]};
  outline: none;
  padding: ${(props) => props.theme.spaces[2]}
    ${(props) => props.theme.spaces[3]};
  transition: background-color 200ms ease, color 200ms ease;
  user-select: none;

  &[data-highlighted],
  &[data-state="open"] {
    color: ${(props) => props.theme.colors.grey12};
    background-color: ${(props) => props.theme.colors.primary4};
  }

  &[data-disabled] {
    cursor: not-allowed;
    color: ${(props) => props.theme.colors.grey8};
  }
`;

const styledOfItems = css`
  align-items: center;
  border-radius: ${(props) => props.theme.radii[1]};
  color: ${(props) => props.theme.colors.grey11};
  display: flex;
  font-size: ${(props) => props.theme.fontSizes[3]};
  height: ${(props) => props.theme.spaces[9]};
  justify-content: space-between;
  line-height: ${(props) => props.theme.lineHeights[2]};
  padding: 0 ${(props) => props.theme.spaces[1]} 0
    ${(props) => props.theme.spaces[6]};
  position: relative;
  user-select: none;
  outline: none;
  transition: background-color 200ms ease, color 200ms ease;

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

export const StyledMenubarItem = styled(Menubar.Item)`
  ${styledOfItems}
`;

export const StyledMenubarCheckboxItem = styled(Menubar.CheckboxItem)`
  ${styledOfItems}
`;

export const StyledMenubarRadioItem = styled(Menubar.RadioItem)`
  ${styledOfItems}
`;

export const StyledMenubarSubMenuTrigger = styled(Menubar.SubTrigger)`
  ${styledOfItems}

  &[data-state='open'] {
    background-color: ${(props) => props.theme.colors.grey6};
    color: ${(props) => props.theme.colors.grey12};

    svg {
      stroke: ${(props) => props.theme.colors.grey12};
    }

    &,
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
      ${StyledMenubarItem.toString()},
      ${StyledMenubarCheckboxItem.toString()},
      ${StyledMenubarRadioItem.toString()},
      ${StyledMenubarSubMenuTrigger.toString()} {
        height: ${(props) => props.theme.spaces[7]};
      }
    `}
`;

export const StyledMenubarContent = styled(Menubar.Content)<{
  $condensed?: boolean;
}>`
  ${styleOfContentAndSubContent}
`;

export const StyledMenubarSubContent = styled(Menubar.SubContent)<{
  $condensed?: boolean;
}>`
  ${styleOfContentAndSubContent}
`;

export const StyledMenubarLabel = styled(Menubar.Label)`
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

export const StyledMenubarSeparator = styled(Menubar.Separator)`
  height: 1px;
  background-color: ${(props) => props.theme.colors.grey6};
  margin: ${(props) => props.theme.spaces[1]};
`;

export const StyledMenubarItemIndicator = styled(Menubar.ItemIndicator)`
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
