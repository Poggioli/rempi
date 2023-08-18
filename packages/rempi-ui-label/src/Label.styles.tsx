import * as Label from "@radix-ui/react-label";
import { styled } from "@rempi-ui/core";

export const StyledLabel = styled(Label.Root)`
  border-radius: ${({ theme }) => theme.radii[1]};
  color: ${({ theme }) => theme.colors.grey12};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  gap: ${({ theme }) => theme.spaces[2]};
  line-height: ${({ theme }) => theme.lineHeights[1]};
  transition: color 300ms ease;
  width: fit-content;
  cursor: pointer;

  &[data-disabled] {
    color: ${({ theme }) => theme.colors.grey8};
    cursor: not-allowed;
  }

  &[data-invalid]:not([data-disabled]) {
    color: ${({ theme }) => theme.colors.error9};
  }
`;
