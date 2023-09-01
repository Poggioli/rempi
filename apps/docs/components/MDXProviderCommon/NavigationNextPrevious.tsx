import { styled } from "@rempi-ui/core";
import { Flex } from "@rempi-ui/flex";
import { Typography } from "@rempi-ui/typography";
import { FC } from "react";

const StyledContainerNextPrevious = styled.div`
  margin-top: ${({ theme }) => theme.spaces[12]};
  gap: ${({ theme }) => theme.spaces[4]};
`;

const StyledContainerLinkGap = styled.div`
  gap: ${({ theme }) => theme.spaces[1]};
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.info10};
`;

const StyledMarginLeftAuto = styled(StyledContainerLinkGap)`
  margin-left: auto;
`

export const NavigationNextPrevious: FC<any> = ({ previous, next }) => {
  return (
    <StyledContainerNextPrevious
      as={Flex}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      {previous ? (
        <StyledContainerLinkGap
          as={Flex}
          flexDirection="column"
          alignItems="flex-start"
        >
          <Typography variant="body1" color="low-contrast" fontWeight="normal">
            Previous
          </Typography>
          <StyledLink
            as={(props: any) => <Typography as="a" {...props} />}
            href={previous.link}
            variant="lead1"
          >
            {previous.label}
          </StyledLink>
        </StyledContainerLinkGap>
      ) : null}
      {next ? (
        <StyledMarginLeftAuto
          as={Flex}
          flexDirection="column"
          alignItems="flex-end"
        >
          <Typography variant="body1" color="low-contrast" fontWeight="normal">
            Next
          </Typography>
          <StyledLink
            as={(props: any) => <Typography as="a" {...props} />}
            href={next.link}
            variant="lead1"
          >
            {next.label}
          </StyledLink>
        </StyledMarginLeftAuto>
      ) : null}
    </StyledContainerNextPrevious>
  );
};
