"use client";

import { MDXProviderDocs } from "@/components/MDXProviderDocs";
import { Container } from "@rempi-ui/container";
import { styled } from "@rempi-ui/core";

const StyledContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${({ theme }) => theme.spaces[13]};
  min-height: 100vh;
  width: 100%;
`;

const StyledContainer = styled.div`
  width: min(860px, 100%);

  ${({ theme }) => theme.breakpoints.initial} {
    padding: 0 ${({ theme }) => theme.spaces[6]};
  }
`;

export default function DocsPage({ children }) {
  return (
    <StyledContainerBody>
      <StyledContainer
        as={(props: any) => <Container {...props} as="section" />}
        variant="sm"
      >
        <MDXProviderDocs>{children}</MDXProviderDocs>
      </StyledContainer>
    </StyledContainerBody>
  );
}
