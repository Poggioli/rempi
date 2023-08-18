import * as Switch from "@radix-ui/react-switch";
import { styled } from "@rempi-ui/core";

export const StyledSwitchRoot = styled(Switch.Root)`
  background-color: ${({ theme }) => theme.colors.grey3};
  border-color: ${({ theme }) => theme.colors.grey7};
  border-radius: ${({ theme }) => theme.radii.pill};
  border-style: solid;
  border-width: ${({ theme }) => theme.borderWidths[1]};
  box-sizing: border-box;
  cursor: pointer;
  height: ${({ theme }) => theme.spaces[6]};
  position: relative;
  transition: background-color 200ms ease;
  width: ${({ theme }) => theme.spaces[11]};

  &:focus,
  &:focus-visible {
    outline-color: ${({ theme }) => theme.colors.info9};
    outline-style: solid;
    outline-width: ${({ theme }) => theme.borderWidths[1]};
  }

  &[data-state="checked"] {
    background-color: ${({ theme }) => theme.colors.primary8};
  }

  &[data-disabled] {
    border-color: ${({ theme }) => theme.colors.grey6};
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.grey3};

    &[data-state="checked"] {
      background-color: ${({ theme }) => theme.colors.primary5};
    }
  }
`;

export const StyledSwitchThumb = styled(Switch.Thumb)`
  display: block;
  background-color: ${({ theme }) => theme.colors.primary9};
  border-radius: ${({ theme }) => theme.radii.pill};
  height: calc(
    ${({ theme }) => theme.spaces[5]} - ${({ theme }) => theme.spaces[1]} / 2
  );
  transform: translateX(2px);
  transition: transform 200ms ease, background-color 200ms ease;
  width: calc(
    ${({ theme }) => theme.spaces[5]} - ${({ theme }) => theme.spaces[1]} / 2
  );
  will-change: transform;

  &[data-disabled] {
    background-color: ${({ theme }) => theme.colors.primary7};
  }

  &[data-state="checked"] {
    transform: translateX(
      calc(
        ${({ theme }) => theme.spaces[5]} + ${({ theme }) => theme.spaces[1]} /
          2
      )
    );
    background-color: ${({ theme }) => theme.colors.primary11};

    &[data-disabled] {
      background-color: ${({ theme }) => theme.colors.primary8};
    }
  }
`;
