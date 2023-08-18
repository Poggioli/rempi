import { styled } from "@rempi-ui/core";

export const StyledTextArea = styled.textarea`
  -webkit-font-smoothing: antialiased;
  background-color: transparent;
  border-color: ${({ theme }) => theme.colors.grey11};
  border-radius: ${({ theme }) => theme.radii[1]};
  border-style: solid;
  border-width: ${({ theme }) => theme.borderWidths[1]};
  color: ${({ theme }) => theme.colors.grey12};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  line-height: ${({ theme }) => theme.lineHeights[1]};
  max-width: calc(${({ theme }) => theme.spaces[18]} * 2);
  padding: ${({ theme }) => theme.spaces[2]} ${({ theme }) => theme.spaces[3]};
  transition: background-color 200ms ease, color 200ms ease,
    border-color 200ms ease;
  width: 100%;

  &[data-disabled] {
    color: ${({ theme }) => theme.colors.grey8};
    cursor: not-allowed;
    border-color: ${({ theme }) => theme.colors.grey7};

    &::placeholder {
      color: ${({ theme }) => theme.colors.grey6};
    }
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey9};
  }

  &:focus-visible,
  &:focus {
    outline-color: ${({ theme }) => theme.colors.info9};
    outline-style: solid;
    outline-width: ${({ theme }) => theme.borderWidths[1]};
    border-color: ${({ theme }) => theme.colors.primary10};
    background-color: ${({ theme }) => theme.colors.primary3};
  }
`;
