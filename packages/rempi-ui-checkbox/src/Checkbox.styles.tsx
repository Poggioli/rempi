import * as Checkbox from "@radix-ui/react-checkbox";
import { styled } from "@rempi-ui/core";

export const StyledCheckboxRoot = styled(Checkbox.Root)`
  align-items: center;
  background-color: transparent;
  border-color: ${(props) => props.theme.colors.grey11};
  border-radius: ${(props) => props.theme.radii[1]};
  border-width: ${(props) => props.theme.borderWidths[1]};
  border-style: solid;
  cursor: pointer;
  display: inline-flex;
  height: calc(
    ${(props) => props.theme.spaces[4]} +
      calc(${(props) => props.theme.spaces[1]} / 2)
  );
  justify-content: center;
  line-height: 1;
  transition: background-color 300ms ease, border-color 300ms ease;
  width: calc(
    ${(props) => props.theme.spaces[4]} +
      calc(${(props) => props.theme.spaces[1]} / 2)
  );

  &:focus,
  &:focus-visible {
    outline-color: ${(props) => props.theme.colors.info9};
    outline-offset: 1px;
    outline-style: solid;
    outline-width: ${(props) => props.theme.borderWidths[1]};
    z-index: 1;
  }

  &[data-state="checked"] {
    border-color: ${(props) => props.theme.colors.grey12};
  }

  &[data-disabled] {
    cursor: not-allowed;
    background-color: transparent;
    border-color: ${(props) => props.theme.colors.grey8};

    &[data-state="checked"] {
      border-color: ${(props) => props.theme.colors.grey8};

      svg {
        stroke: ${(props) => props.theme.colors.grey8};
      }
    }
  }

  svg {
    stroke-width: 3;
    stroke: ${(props) => props.theme.colors.grey12};
  }
`;

export const StyledCheckboxIndicator = styled(Checkbox.Indicator)`
  align-items: center;
  display: inline-flex;
  justify-content: center;
`;
