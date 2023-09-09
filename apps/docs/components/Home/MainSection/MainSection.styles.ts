import { styled } from "@rempi-ui/core";

export const StyledMainSection = styled.div`
  max-width: calc(${({ theme }) => theme.spaces[4]} * 61);
  padding: ${({ theme }) => theme.spaces[12]}
    ${({ theme }) => theme.spaces[4]} ${({ theme }) => theme.spaces[8]}
    ${({ theme }) => theme.spaces[4]};
  gap: ${({ theme }) => theme.spaces[4]};
`;

export const StyledMainSectionTitle = styled.div`
  letter-spacing: -0.05rem;
`;

export const StyledMainSectionLead = styled.div`
  max-width: calc(${({ theme }) => theme.spaces[4]} * 40);
`;

export const StyledMainSectionButtons = styled.div`
  gap: ${({ theme }) => theme.spaces[4]};
  padding-bottom: ${({ theme }) => theme.spaces[9]};
`;

export const StyledMainSectionGithubIconLink = styled.div`
  margin-right: ${({ theme }) => theme.spaces[2]};
`;

export const StyledMainSectionStartLink = styled.div`
  background-color: ${({ theme }) => theme.colors.primary12};
`;
