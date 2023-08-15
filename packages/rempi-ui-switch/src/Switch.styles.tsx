import * as Switch from "@radix-ui/react-switch";
import { styled } from "@rempi-ui/core";

export const StyledSwitchRoot = styled(Switch.Root)`
  background-color: ${(props) => props.theme.colors.grey3};
  border-color: ${(props) => props.theme.colors.grey7};
  border-radius: ${(props) => props.theme.radii.pill};
  border-style: solid;
  border-width: ${(props) => props.theme.borderWidths[1]};
  box-sizing: border-box;
  cursor: pointer;
  height: ${(props) => props.theme.spaces[6]};
  position: relative;
  transition: background-color 200ms ease;
  width: ${(props) => props.theme.spaces[11]};

  &:focus,
  &:focus-visible {
    outline-color: ${(props) => props.theme.colors.info9};
    outline-style: solid;
    outline-width: ${(props) => props.theme.borderWidths[1]};
  }

  &[data-state="checked"] {
    background-color: ${(props) => props.theme.colors.primary8};
  }

  &[data-disabled] {
    border-color: ${(props) => props.theme.colors.grey6};
    cursor: not-allowed;
    background-color: ${(props) => props.theme.colors.grey3};

    &[data-state="checked"] {
      background-color: ${(props) => props.theme.colors.primary5};
    }
  }
`;

export const StyledSwitchThumb = styled(Switch.Thumb)`
  display: block;
  background-color: ${(props) => props.theme.colors.primary9};
  border-radius: ${(props) => props.theme.radii.pill};
  height: calc(
    ${(props) => props.theme.spaces[5]} - ${(props) => props.theme.spaces[1]} /
      2
  );
  transform: translateX(2px);
  transition: transform 200ms ease, background-color 200ms ease;
  width: calc(
    ${(props) => props.theme.spaces[5]} - ${(props) => props.theme.spaces[1]} /
      2
  );
  will-change: transform;

  &[data-disabled] {
    background-color: ${(props) => props.theme.colors.primary7};
  }

  &[data-state="checked"] {
    transform: translateX(
      calc(
        ${(props) => props.theme.spaces[5]} +
          ${(props) => props.theme.spaces[1]} / 2
      )
    );
    background-color: ${(props) => props.theme.colors.primary11};

    &[data-disabled] {
      background-color: ${(props) => props.theme.colors.primary8};
    }
  }
`;
