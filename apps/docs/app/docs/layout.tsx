"use client";

import { MDXProviderDocs } from "@/components/MDXProviderDocs";
import { Container } from "@rempi-ui/container";
import { styled } from "@rempi-ui/core";

const StyledContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${(props) => props.theme.spaces[13]};
  min-height: 100vh;
`;

export default function DocsPage({ children }) {
  return (
    <StyledContainerBody>
      <Container variant="sm">
        <MDXProviderDocs>{children}</MDXProviderDocs>
      </Container>
    </StyledContainerBody>
  );
}
