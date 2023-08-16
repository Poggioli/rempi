import * as Collapsible from "@radix-ui/react-collapsible";
import { keyframes, styled } from "@rempi-ui/core";

const slideOpenVertical = keyframes`
  from {
    height: 0;
  }
  to {
    height: var(--radix-collapsible-content-height);
  }
`;

const slideCloseVertical = keyframes`
  from {
    height: var(--radix-collapsible-content-height);
  }
  to {
    height: 0;
  }
`;

export const StyledCollapsibleRoot = styled(Collapsible.Root)``;

export const StyledCollapsibleTrigger = styled(Collapsible.Trigger)``;

export const StyledCollapsibleContent = styled(Collapsible.Content)`
  overflow: hidden;

  &[data-state="open"] {
    animation: ${slideOpenVertical} 300ms ease-out;
  }

  &[data-state="closed"] {
    animation: ${slideCloseVertical} 300ms ease-out;
  }
`;
