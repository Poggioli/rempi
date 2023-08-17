import { styled } from "@rempi-ui/core";

export const StyledMainSection = styled.div`
  max-width: calc(${(props) => props.theme.spaces[4]} * 61);
  padding: ${(props) => props.theme.spaces[12]}
    ${(props) => props.theme.spaces[4]} ${(props) => props.theme.spaces[8]}
    ${(props) => props.theme.spaces[4]};
  gap: ${(props) => props.theme.spaces[4]};
`;

export const StyledMainSectionTitle = styled.div`
  letter-spacing: -0.05rem;
`;

export const StyledMainSectionLead = styled.div`
  max-width: calc(${(props) => props.theme.spaces[4]} * 40);
`;

export const StyledMainSectionButtons = styled.div`
  gap: ${(props) => props.theme.spaces[4]};
  padding-bottom: ${(props) => props.theme.spaces[9]};
`;

export const StyledMainSectionGithubIconLink = styled.div`
  margin-right: ${(props) => props.theme.spaces[2]};
`;

export const StyledMainSectionStartLink = styled.div`
  background-color: ${(props) => props.theme.colors.primary12};
`;
