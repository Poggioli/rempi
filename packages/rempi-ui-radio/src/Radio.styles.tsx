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
    width: ${({ theme }) => theme.spaces[2]};
    height: ${({ theme }) => theme.spaces[2]};
    border-radius: ${({ theme }) => theme.radii.pill};
  }
`;

export const StyledRadioItem = styled(Radio.Item)`
  align-items: center;
  background-color: transparent;
  border-color: ${({ theme }) => theme.colors.grey11};
  border-radius: ${({ theme }) => theme.radii.pill};
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

  &[data-state="checked"] {
    border-color: ${({ theme }) => theme.colors.grey12};

    ${StyledRadioIndicator.toString()}::after {
      background-color: ${({ theme }) => theme.colors.grey12};
    }
  }

  &[data-disabled] {
    border-color: ${({ theme }) => theme.colors.grey8};
    cursor: not-allowed;

    &[data-state="checked"] {
      border-color: ${({ theme }) => theme.colors.grey8};

      ${StyledRadioIndicator.toString()}::after {
        background-color: ${({ theme }) => theme.colors.grey8};
      }
    }
  }

  &:focus,
  &:focus-visible {
    outline-color: ${({ theme }) => theme.colors.info9};
    outline-offset: 1px;
    outline-style: solid;
    outline-width: ${({ theme }) => theme.borderWidths[1]};
    z-index: 1;
  }
`;
