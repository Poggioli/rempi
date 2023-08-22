import { Button } from "@rempi-ui/button";
import { styled } from "@rempi-ui/core";
import { Flex } from "@rempi-ui/flex";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { FC } from "react";

const StyledContainerNextPrevious = styled.div`
  margin-top: ${({ theme }) => theme.spaces[12]};
`;

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces[1]};
`;

const StyledNextButton = styled(StyledButton)`
  margin-left: auto;
`;

export const NavigationNextPrevious: FC<any> = ({ previous, next }) => {
  return (
    <StyledContainerNextPrevious
      as={Flex}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      {previous ? (
        <StyledButton
          as={(props: any) => <Button {...props} as="a" />}
          size="small"
          variant="outlined"
          href={previous.link}
        >
          <ChevronLeftIcon size={18} />
          {previous.label}
        </StyledButton>
      ) : null}
      {next ? (
        <StyledNextButton
          as={(props: any) => <Button {...props} as="a" />}
          size="small"
          variant="outlined"
          href={next.link}
        >
          {next.label}
          <ChevronRightIcon size={18} />
        </StyledNextButton>
      ) : null}
    </StyledContainerNextPrevious>
  );
};
