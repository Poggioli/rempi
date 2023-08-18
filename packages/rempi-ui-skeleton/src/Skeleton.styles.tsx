import { keyframes, styled } from "@rempi-ui/core";

const pulse = keyframes`
  50% {
    opacity: .5
  }
`;

export const StyledSkeleton = styled.div`
  box-sizing: border-box;
  display: flex;
  background-color: ${({ theme }) => theme.colors.grey6};
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;
