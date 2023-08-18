import * as Toggle from "@radix-ui/react-toggle";
import { styled } from "@rempi-ui/core";

export const StyledToggleRoot = styled(Toggle.Root)`
  align-items: center;
  background-color: transparent;
  border-color: ${({ theme }) => theme.colors.grey11};
  border-radius: ${({ theme }) => theme.radii[1]};
  border-style: solid;
  border-width: ${({ theme }) => theme.borderWidths[1]};
  color: ${({ theme }) => theme.colors.grey11};
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes[4]};
  justify-content: center;
  line-height: ${({ theme }) => theme.lineHeights[1]};
  padding: ${({ theme }) => theme.spaces[2]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey2};
  }

  &:focus-visible,
  &:focus {
    outline-color: ${({ theme }) => theme.colors.info9};
    outline-style: solid;
    outline-width: ${({ theme }) => theme.borderWidths[1]};
  }

  &[data-state="on"] {
    background-color: ${({ theme }) => theme.colors.grey4};
    border-color: ${({ theme }) => theme.colors.grey12};
    color: ${({ theme }) => theme.colors.grey12};
  }

  &[data-disabled] {
    color: ${({ theme }) => theme.colors.grey6};
    border-color: ${({ theme }) => theme.colors.grey8};
    cursor: not-allowed;

    &[data-state="on"] {
      background-color: ${({ theme }) => theme.colors.grey3};
      color: ${({ theme }) => theme.colors.grey10};
    }
  }
`;
