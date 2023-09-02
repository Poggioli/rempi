import { styled } from "@rempi-ui/core";

export const StyledNavigationMenuHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.primary1};
  border-bottom: ${({ theme }) => theme.borderWidths[1]} solid
    ${({ theme }) => theme.colors.grey6};
  padding: ${({ theme }) => theme.spaces[2]} ${({ theme }) => theme.spaces[4]};
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`;

export const StyledMarginLeftAuto = styled.div`
  margin-left: auto;
`;
