import { styled } from "@rempi-ui/core";

export const StyledNavigationMenuHeader = styled.div`
  background-color: ${(props) => props.theme.colors.primary1};
  border-bottom: ${(props) => props.theme.borderWidths[1]} solid
    ${(props) => props.theme.colors.grey6};
  height: ${(props) => props.theme.spaces[13]};
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const StyledNavigationMenuHeaderContainer = styled.div`
  align-items: center;
  display: flex;
  height: ${(props) => props.theme.spaces[13]};
  justify-content: space-between;
`;

export const StyledNavigationMenuHeaderPopoverTrigger = styled.div`
  display: block;

  ${({ theme }) => theme.breakpoints[2]} {
    display: none;
  }
`;

export const StyledNavigationMenuHeaderPopoverContent = styled.div`
  padding: ${(props) => props.theme.spaces[3]};
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
