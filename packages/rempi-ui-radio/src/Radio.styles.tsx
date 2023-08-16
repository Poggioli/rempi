import * as Radio from "@radix-ui/react-radio-group";
import { styled } from "@rempi-ui/core";

export const StyledRadioIndicator = styled(Radio.Indicator)`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: ${(props) => props.theme.spaces[2]};
    height: ${(props) => props.theme.spaces[2]};
    border-radius: ${(props) => props.theme.radii.pill};
  }
`;

export const StyledRadioItem = styled(Radio.Item)`
  align-items: center;
  background-color: transparent;
  border-color: ${(props) => props.theme.colors.grey11};
  border-radius: ${(props) => props.theme.radii.pill};
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

  &[data-state="checked"] {
    border-color: ${(props) => props.theme.colors.grey12};

    ${StyledRadioIndicator.toString()}::after {
      background-color: ${(props) => props.theme.colors.grey12};
    }
  }

  &[data-disabled] {
    border-color: ${(props) => props.theme.colors.grey8};
    cursor: not-allowed;

    &[data-state="checked"] {
      border-color: ${(props) => props.theme.colors.grey8};

      ${StyledRadioIndicator.toString()}::after {
        background-color: ${(props) => props.theme.colors.grey8};
      }
    }
  }

  &:focus,
  &:focus-visible {
    outline-color: ${(props) => props.theme.colors.info9};
    outline-offset: 1px;
    outline-style: solid;
    outline-width: ${(props) => props.theme.borderWidths[1]};
    z-index: 1;
  }
`;
