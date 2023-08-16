import * as Label from "@radix-ui/react-label";
import { styled } from "@rempi-ui/core";

export const StyledLabel = styled(Label.Root)`
  border-radius: ${(props) => props.theme.radii[1]};
  color: ${(props) => props.theme.colors.grey12};
  font-size: ${(props) => props.theme.fontSizes[4]};
  gap: ${(props) => props.theme.spaces[2]};
  line-height: ${(props) => props.theme.lineHeights[1]};
  transition: color 300ms ease;
  width: fit-content;
  cursor: pointer;

  &[data-disabled] {
    color: ${(props) => props.theme.colors.grey8};
    cursor: not-allowed;
  }

  &[data-invalid]:not([data-disabled]) {
    color: ${(props) => props.theme.colors.error9};
  }
`;
