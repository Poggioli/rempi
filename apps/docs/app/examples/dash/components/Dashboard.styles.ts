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

export const StyledDownloadButton = styled.div`
  background-color: ${({ theme }) => theme.colors.primary12};
  gap: ${({ theme }) => theme.spaces[2]};
`;

export const StyledContainerCalendarDownload = styled.div`
  gap: ${({ theme }) => theme.spaces[4]};
`;

export const StyledContainerHeader = styled.div`
  width: 100%;
  gap: ${({ theme }) => theme.spaces[4]};
`;

export const StyledCalendarWithoutBorder = styled.div`
  .sc-fwdjSP__months {
    border: 0;
    padding: 0;
  }
`;

export const StyledTabsList = styled.div`
  width: fit-content;
  flex-wrap: wrap;
`;

export const StyledCardContainer = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spaces[4]};
  grid-template-columns: repeat(1, minmax(0, 1fr));

  ${({ theme }) => theme.breakpoints[1]} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${({ theme }) => theme.breakpoints[3]} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const StyledCardHeader = styled.div`
  gap: ${({ theme }) => theme.spaces[4]};
  width: 100%;
`;

export const StyledCardContent = styled.div`
  gap: 0;
`;
