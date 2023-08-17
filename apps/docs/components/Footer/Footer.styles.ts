import { styled } from "@rempi-ui/core";

export const StyledFooter = styled.footer`
  min-height: ${(props) => props.theme.spaces[18]};
`;

export const StyledFooterLink = styled.div`
  text-underline-offset: 4px;
  text-decoration-line: underline;
`;
