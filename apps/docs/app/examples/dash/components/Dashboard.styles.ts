import { styled } from "@rempi-ui/core";

export const StyledDashboard = styled.div`
  border: ${({ theme }) => theme.borderWidths[1]} solid
    ${({ theme }) => theme.colors.grey6};
  border-radius: ${({ theme }) => theme.radii[2]};
`;

export const StyledDashboardSearch = styled.div`
  gap: ${({ theme }) => theme.spaces[2]};
`;

export const StyledDashboardHeader = styled.div`
  border-bottom: ${({ theme }) => theme.borderWidths[1]} solid
    ${({ theme }) => theme.colors.grey6};
  padding: ${({ theme }) => theme.spaces[3]} ${({ theme }) => theme.spaces[4]};
  width: 100%;
  gap: ${({ theme }) => theme.spaces[3]};
`;

export const StyledDashboardBody = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spaces[6]};
  gap: ${({ theme }) => theme.spaces[6]};
`;

export const StyledCardHeader = styled.div`
  gap: ${({ theme }) => theme.spaces[4]};
  width: 100%;
`;

export const StyledCardContent = styled.div`
  gap: 0;
`;
