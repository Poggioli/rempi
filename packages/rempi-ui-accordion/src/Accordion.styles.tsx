import * as Accordion from "@radix-ui/react-accordion";
import { keyframes, styled } from "@rempi-ui/core";

const openning = keyframes`
  from {
    height: 0;
  }

  to {
    height: var(--radix-accordion-content-height);
  }
`;

const closing = keyframes`
  from {
    height: var(--radix-accordion-content-height);
  }

  to {
    height: 0;
  }
`;

export const StyledAccordionRoot = styled(Accordion.Root)`
  border-radius: ${({ theme }) => theme.radii[3]};
`;

export const StyledAccordionTrigger = styled(Accordion.Trigger)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary2};
  color: ${({ theme }) => theme.colors.grey12};
  display: flex;
  flex: 1;
  font-size: ${({ theme }) => theme.fontSizes[5]};
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  justify-content: space-between;
  line-height: ${({ theme }) => theme.lineHeights[1]};
  padding: ${({ theme }) => theme.spaces[4]} ${({ theme }) => theme.spaces[1]}
    ${({ theme }) => theme.spaces[4]} ${({ theme }) => theme.spaces[2]};

  &:hover:not([data-disabled]) {
    cursor: pointer;
    text-decoration: underline;
  }

  &[data-disabled] {
    color: ${({ theme }) => theme.colors.grey8};
    cursor: not-allowed;
  }
`;

export const StyledAccordionItem = styled(Accordion.Item)`
  border-bottom-width: ${({ theme }) => theme.borderWidths[1]};
  border-color: ${({ theme }) => theme.colors.grey8};
  border-style: solid;

  &:first-child {
    margin-top: 1px;
  }

  &:focus-within {
    outline-color: ${({ theme }) => theme.colors.info9};
    outline-style: solid;
    outline-width: ${({ theme }) => theme.borderWidths[1]};
    position: relative;
    z-index: 1;

    ${StyledAccordionTrigger.toString()} {
      text-decoration: underline;
    }
  }
`;

export const StyledAccordionHeader = styled(Accordion.Header)`
  display: flex;
`;

export const StyledContent = styled.div`
  padding: ${({ theme }) => theme.spaces[2]} ${({ theme }) => theme.spaces[4]}
    ${({ theme }) => theme.spaces[4]} ${({ theme }) => theme.spaces[2]};
`;

export const StyledAccordionContent = styled(Accordion.Content)`
  background-color: ${({ theme }) => theme.colors.primary2};
  color: ${({ theme }) => theme.colors.grey11};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  line-height: ${({ theme }) => theme.lineHeights[2]};
  overflow: hidden;

  &[data-state="open"] {
    animation: ${openning} 400ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  &[data-state="closed"] {
    animation: ${closing} 400ms cubic-bezier(0.87, 0, 0.13, 1);
  }
`;
