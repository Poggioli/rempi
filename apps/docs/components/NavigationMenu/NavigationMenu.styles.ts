import { styled } from "@rempi-ui/core";

export const StyledNavigationMenuHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.primary1};
  border-bottom: ${({ theme }) => theme.borderWidths[1]} solid
    ${({ theme }) => theme.colors.grey6};
  padding: calc(
      ${({ theme }) => theme.spaces[2]} +
        calc(${({ theme }) => theme.spaces[1]} / 2)
    )
    0;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const StyledNavigationMenuHeaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const StyledNavigationMenuHeaderPopoverTrigger = styled.div`
  display: block;

  ${({ theme }) => theme.breakpoints[2]} {
    display: none;
  }
`;

export const StyledNavigationMenuHeaderPopoverContent = styled.div`
  padding: ${({ theme }) => theme.spaces[3]};
`;

export const StyledNavigationMenuHeaderMenuDesktop = styled.div`
  display: none;

  ${({ theme }) => theme.breakpoints[2]} {
    display: inherit;
  }

  justify-content: flex-start;
`;

export const StyledNavigationMenuHeaderMenuMobile = styled.div`
  flex-direction: column;

  ul {
    flex-direction: column;
  }
`;
