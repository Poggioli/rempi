import { styled } from "@rempi-ui/core";

export const StyledDashboard = styled.div`
  border: ${(props) => props.theme.borderWidths[1]} solid
    ${(props) => props.theme.colors.grey6};
  border-radius: ${(props) => props.theme.radii[2]};
`;

export const StyledDashboardSearch = styled.div`
  gap: ${(props) => props.theme.spaces[2]};
`;

export const StyledDashboardHeader = styled.div`
  border-bottom: ${(props) => props.theme.borderWidths[1]} solid
    ${(props) => props.theme.colors.grey6};
  padding: ${(props) => props.theme.spaces[3]}
    ${(props) => props.theme.spaces[4]};
  width: 100%;
  gap: ${(props) => props.theme.spaces[3]};
`;

export const StyledDashboardBody = styled.div`
  padding: ${(props) => props.theme.spaces[6]};
`;
