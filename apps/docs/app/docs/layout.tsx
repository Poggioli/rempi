"use client";

import { DocsNavigationMenu } from "@/components/DocsNavigationMenu";
import { styled } from "@rempi-ui/core";
import { Flex } from "@rempi-ui/flex";
import { FC, PropsWithChildren } from "react";

const StyledSideNav = styled.aside`
  display: none;

  ${({ theme }) => theme.breakpoints[3]} {
    display: block;
    width: 250px;
    min-width: 250px;
  }
`;

const StyledBlock = styled.div`
  z-index: 1;
  top: calc(
    ${({ theme }) => theme.spaces[12]} + ${({ theme }) => theme.spaces[0]}
  );
  width: inherit;
  position: fixed;
  left: 0;
  bottom: 0;
  border-right: ${({ theme }) => theme.borderWidths[1]} solid
    ${({ theme }) => theme.colors.grey6};
`;

const StyledContent = styled.div`
  max-width: 858px;
  width: 100%;
  padding: ${({ theme }) => theme.spaces[16]} 0;

  ${({ theme }) => theme.breakpoints[3]} {
    padding: ${({ theme }) => theme.spaces[12]}
      ${({ theme }) => theme.spaces[16]} ${({ theme }) => theme.spaces[16]}
      calc(
        ${({ theme }) => theme.spaces[16]} + ${({ theme }) => theme.spaces[6]}
      );
  }
`;

const StyledContainer = styled.div`
  flex-grow: 1;
  display: flex;
  max-width: 100%;
  justify-content: center;

  ${({ theme }) => theme.breakpoints[3]} {
    max-width: calc(100% - 250px);
  }
`;

const DocsPage: FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <Flex justifyContent="flex-start" flexWrap="initial">
      <StyledSideNav>
        <StyledBlock>
          <DocsNavigationMenu />
        </StyledBlock>
      </StyledSideNav>
      <StyledContainer>
        <StyledContent>{children}</StyledContent>
      </StyledContainer>
    </Flex>
  );
}

export default DocsPage