import * as Switch from "@radix-ui/react-switch";
import { styled } from "@rempi-ui/core";

export const StyledSwitchRoot = styled(Switch.Root)`
  background-color: ${(props) => props.theme.colors.grey[3]};
  border-color: ${(props) => props.theme.colors.grey[7]};
  border-radius: ${(props) => props.theme.radiis.pill};
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
    outline-color: ${(props) => props.theme.colors.info[9]};
    outline-style: solid;
    outline-width: ${(props) => props.theme.borderWidths[1]};
  }

  &[data-state="checked"] {
    background-color: ${(props) => props.theme.colors.primary[8]};
  }

  &[data-disabled] {
    border-color: ${(props) => props.theme.colors.grey[6]};
    cursor: not-allowed;
    background-color: ${(props) => props.theme.colors.grey[3]};

    &[data-state="checked"] {
      background-color: ${(props) => props.theme.colors.primary[5]};
    }
  }
`;

export const StyledSwitchThumb = styled(Switch.Thumb)`
  display: block;
  background-color: ${(props) => props.theme.colors.primary[9]};
  border-radius: ${(props) => props.theme.radiis.pill};
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
    background-color: ${(props) => props.theme.colors.primary[7]};
  }

  &[data-state="checked"] {
    transform: translateX(
      calc(
        ${(props) => props.theme.spaces[5]} +
          ${(props) => props.theme.spaces[1]} / 2
      )
    );
    background-color: ${(props) => props.theme.colors.primary[11]};

    &[data-disabled] {
      background-color: ${(props) => props.theme.colors.primary[8]};
    }
  }
`;
