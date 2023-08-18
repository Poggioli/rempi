import * as Checkbox from "@radix-ui/react-checkbox";
import { styled } from "@rempi-ui/core";

export const StyledCheckboxRoot = styled(Checkbox.Root)`
  align-items: center;
  background-color: transparent;
  border-color: ${({ theme }) => theme.colors.grey11};
  border-radius: ${({ theme }) => theme.radii[1]};
  border-width: ${({ theme }) => theme.borderWidths[1]};
  border-style: solid;
  cursor: pointer;
  display: inline-flex;
  height: calc(
    ${({ theme }) => theme.spaces[4]} +
      calc(${({ theme }) => theme.spaces[1]} / 2)
  );
  justify-content: center;
  line-height: 1;
  transition: background-color 300ms ease, border-color 300ms ease;
  width: calc(
    ${({ theme }) => theme.spaces[4]} +
      calc(${({ theme }) => theme.spaces[1]} / 2)
  );

  &:focus,
  &:focus-visible {
    outline-color: ${({ theme }) => theme.colors.info9};
    outline-offset: 1px;
    outline-style: solid;
    outline-width: ${({ theme }) => theme.borderWidths[1]};
    z-index: 1;
  }

  &[data-state="checked"] {
    border-color: ${({ theme }) => theme.colors.grey12};
  }

  &[data-disabled] {
    cursor: not-allowed;
    background-color: transparent;
    border-color: ${({ theme }) => theme.colors.grey8};

    &[data-state="checked"] {
      border-color: ${({ theme }) => theme.colors.grey8};

      svg {
        stroke: ${({ theme }) => theme.colors.grey8};
      }
    }
  }

  svg {
    stroke-width: 3;
    stroke: ${({ theme }) => theme.colors.grey12};
  }
`;

export const StyledCheckboxIndicator = styled(Checkbox.Indicator)`
  align-items: center;
  display: inline-flex;
  justify-content: center;
`;
