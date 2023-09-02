import { css, styled } from "@rempi-ui/core";

export const ListItemStyled = styled.li<{ $active: boolean }>`
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: ${({ theme }) => theme.spaces[2]} ${({ theme }) => theme.spaces[4]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary3};
  }

  ${({ $active }) =>
    $active &&
    css`
      background-color: ${({ theme }) => theme.colors.primary5};
    `}
`;

export const ListStyled = styled.ul`
  padding: ${({ theme }) => theme.spaces[4]} ${({ theme }) => theme.spaces[8]}
    ${({ theme }) => theme.spaces[4]} ${({ theme }) => theme.spaces[4]};
  max-height: calc(100vh - ${({ theme }) => theme.spaces[12]} + ${({ theme }) => theme.spaces[0]});
  overflow-y: auto;
`;

export const LinkStyled = styled.a`
  display: inline-block;
  white-space: nowrap;
  width: 100%;
`;

export const ListHeadingStyled = styled.h6`
  padding: ${({ theme }) => theme.spaces[2]} ${({ theme }) => theme.spaces[4]};
`;

export const SeparatorStyled = styled.div`
  margin: ${({ theme }) => theme.spaces[3]} auto
    ${({ theme }) => theme.spaces[3]} ${({ theme }) => theme.spaces[4]};
  width: 50% !important;
`;
