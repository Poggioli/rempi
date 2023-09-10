import { styled } from "@rempi-ui/core";

export const StyledBody = styled.body`
  background-color: ${({ theme }) => theme.colors.grey1};
`;

export const StyledContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const StyledContent = styled.div`
  padding-top: ${({ theme }) => theme.spaces[13]};
  flex: 1;
`;
