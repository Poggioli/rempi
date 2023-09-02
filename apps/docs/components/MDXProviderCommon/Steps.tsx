import { styled } from "@rempi-ui/core";
import { Heading } from "@rempi-ui/heading";
import { FC } from "react";

const StyledSteps = styled.div`
  border-left: ${({ theme }) => theme.borderWidths[1]} solid
    ${({ theme }) => theme.colors.grey6};
  counter-reset: step;
  margin-bottom: ${({ theme }) => theme.spaces[12]};
  margin-left: ${({ theme }) => theme.spaces[4]};
  padding-left: ${({ theme }) => theme.spaces[8]};
`;

const StyledStep = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  counter-increment: step;
  margin-top: ${({ theme }) => theme.spaces[8]};

  &:before {
    position: absolute;
    display: inline-flex;
    height: ${({ theme }) => theme.spaces[9]};
    width: ${({ theme }) => theme.spaces[9]};
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }) => theme.radii.pill};
    border: calc(${({ theme }) => theme.borderWidths[2]} * 2) solid
      ${({ theme }) => theme.colors.grey1};
    background-color: ${({ theme }) => theme.colors.primary3};
    text-align: center;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      Liberation Mono, Courier New, monospace;
    font-size: ${({ theme }) => theme.fontSizes[4]};
    line-height: ${({ theme }) => theme.lineHeights[2]};
    font-weight: ${({ theme }) => theme.fontWeights[3]};
    margin-left: calc(
      calc(
          ${({ theme }) => theme.spaces[12]} + ${({ theme }) => theme.spaces[0]}
        ) * -1
    );
    margin-top: calc(${({ theme }) => theme.spaces[1]} * -1);
    content: counter(step);
  }
`;

export const Steps: FC = ({ ...props }) => {
  return <StyledSteps {...props} />;
};

export const Step: FC = ({ ...props }) => {
  return (
    <StyledStep
      as={(props: any) => <Heading {...props} as="h3" />}
      {...props}
      variant="3"
    />
  );
};
