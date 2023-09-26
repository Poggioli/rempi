"use client";

import { MDXProviderOverview } from "@/components/MDXProviderOverview";
import { Container } from "@rempi-ui/container";
import { styled } from "@rempi-ui/core";
import { FC, PropsWithChildren } from "react";

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

const DocsPage: FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <StyledContainerBody>
      <StyledContainer
        as={(props: any) => <Container {...props} as="section" />}
        variant="sm"
      >
        <MDXProviderOverview>{children}</MDXProviderOverview>
      </StyledContainer>
    </StyledContainerBody>
  );
};

export default DocsPage;
