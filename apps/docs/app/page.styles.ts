import { styled } from "@rempi-ui/core";

export const StyledContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: ${({ theme }) => theme.spaces[13]};
`;

export const StyledContent = styled.div`
  padding-top: ${({ theme }) => theme.spaces[13]};
  flex: 1;
`;
