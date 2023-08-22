import * as Menubar from "@radix-ui/react-menubar";
import {
  ApplyResponsiveVariant,
  css,
  RempiConfig,
  styled,
} from "@rempi-ui/core";

export const StyledMenuBarRoot = styled(Menubar.Root)`
  background-color: ${({ theme }) => theme.colors.primary2};
  border: ${({ theme }) => theme.borderWidths[1]} solid
    ${({ theme }) => theme.colors.grey6};
  border-radius: ${({ theme }) => theme.radii[1]};
  display: flex;
  padding: ${({ theme }) => theme.spaces[1]};
`;

export const StyledMenuBarTrigger = styled(Menubar.Trigger)`
  align-items: center;
  border-radius: ${({ theme }) => theme.radii[1]};
  color: ${({ theme }) => theme.colors.grey11};
  cursor: pointer;
  display: flex;
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  gap: calc(${({ theme }) => theme.spaces[1]} / 2);
  justify-content: space-between;
  line-height: ${({ theme }) => theme.lineHeights[1]};
  outline: none;
  padding: ${({ theme }) => theme.spaces[2]} ${({ theme }) => theme.spaces[3]};
  transition: background-color 200ms ease, color 200ms ease;
  user-select: none;

  &[data-highlighted],
  &[data-state="open"] {
    color: ${({ theme }) => theme.colors.grey12};
    background-color: ${({ theme }) => theme.colors.primary4};
  }

  &[data-disabled] {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.grey8};
  }
`;

const styledOfItems = css`
  align-items: center;
  border-radius: ${({ theme }) => theme.radii[1]};
  color: ${({ theme }) => theme.colors.grey11};
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  height: ${({ theme }) => theme.spaces[9]};
  justify-content: space-between;
  line-height: ${({ theme }) => theme.lineHeights[2]};
  padding: 0 ${({ theme }) => theme.spaces[1]} 0
    ${({ theme }) => theme.spaces[6]};
  position: relative;
  user-select: none;
  outline: none;
  transition: background-color 200ms ease, color 200ms ease;

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
    background-color: ${({ theme }) => theme.colors.grey6};
    color: ${({ theme }) => theme.colors.grey12};

    svg {
      stroke: ${({ theme }) => theme.colors.grey12};
    }

    &,
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
          ${StyledMenubarItem.toString()},
          ${StyledMenubarCheckboxItem.toString()},
          ${StyledMenubarRadioItem.toString()},
          ${StyledMenubarSubMenuTrigger.toString()} {
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

export const StyledMenubarSeparator = styled(Menubar.Separator)`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.grey6};
  margin: ${({ theme }) => theme.spaces[1]};
`;

export const StyledMenubarItemIndicator = styled(Menubar.ItemIndicator)`
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
