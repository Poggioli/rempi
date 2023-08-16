import * as Toggle from "@radix-ui/react-toggle";
import { styled } from "@rempi-ui/core";

export const StyledToggleRoot = styled(Toggle.Root)`
  align-items: center;
  background-color: transparent;
  border-color: ${(props) => props.theme.colors.grey11};
  border-radius: ${(props) => props.theme.radii[1]};
  border-style: solid;
  border-width: ${(props) => props.theme.borderWidths[1]};
  color: ${(props) => props.theme.colors.grey11};
  cursor: pointer;
  display: flex;
  font-size: ${(props) => props.theme.fontSizes[4]};
  justify-content: center;
  line-height: ${(props) => props.theme.lineHeights[1]};
  padding: ${(props) => props.theme.spaces[2]};

  &:hover {
    background-color: ${(props) => props.theme.colors.grey2};
  }

  &:focus-visible,
  &:focus {
    outline-color: ${(props) => props.theme.colors.info9};
    outline-style: solid;
    outline-width: ${(props) => props.theme.borderWidths[1]};
  }

  &[data-state="on"] {
    background-color: ${(props) => props.theme.colors.grey4};
    border-color: ${(props) => props.theme.colors.grey12};
    color: ${(props) => props.theme.colors.grey12};
  }

  &[data-disabled] {
    color: ${(props) => props.theme.colors.grey6};
    border-color: ${(props) => props.theme.colors.grey8};
    cursor: not-allowed;

    &[data-state="on"] {
      background-color: ${(props) => props.theme.colors.grey3};
      color: ${(props) => props.theme.colors.grey10};
    }
  }
`;
