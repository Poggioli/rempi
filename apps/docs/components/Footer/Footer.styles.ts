import { styled } from "@rempi-ui/core";

export const StyledFooter = styled.footer`
  margin-top: ${({ theme }) => theme.spaces[18]};
  min-height: ${({ theme }) => theme.spaces[18]};
`;

export const StyledFooterLink = styled.div`
  text-underline-offset: 4px;
  text-decoration-line: underline;
`;
