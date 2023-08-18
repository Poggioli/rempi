import * as Tabs from "@radix-ui/react-tabs";
import { styled } from "@rempi-ui/core";

export const StyledTabsRoot = styled(Tabs.Root)`
  width: 100%;
`;

export const StyledTabsList = styled(Tabs.List)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey4};
  border-radius: ${({ theme }) => theme.radii[2]};
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spaces[1]};
  padding: ${({ theme }) => theme.spaces[1]};
`;

export const StyledTabsTrigger = styled(Tabs.Trigger)`
  background-color: transparent;
  border-radius: ${({ theme }) => theme.radii[2]};
  color: ${({ theme }) => theme.colors.grey12};
  cursor: pointer;
  flex: 1;
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  padding: ${({ theme }) => theme.spaces[1]} ${({ theme }) => theme.spaces[4]};
  transition: background-color 200ms ease;

  * {
    color: ${({ theme }) => theme.colors.grey12};
    font-size: ${({ theme }) => theme.fontSizes[4]};
    font-weight: ${({ theme }) => theme.fontWeights[3]};
  }

  &:hover:not([data-disabled], [data-state="active"]) {
    background-color: ${({ theme }) => theme.colors.grey2};
  }

  &:focus-visible,
  &:focus {
    outline-color: ${({ theme }) => theme.colors.info9};
    outline-style: solid;
    outline-width: ${({ theme }) => theme.borderWidths[1]};
  }

  &[data-state="active"] {
    background-color: ${({ theme }) => theme.colors.grey1};
    color: ${({ theme }) => theme.colors.grey12};

    * {
      color: ${({ theme }) => theme.colors.grey12};
    }
  }

  &[data-disabled] {
    color: ${({ theme }) => theme.colors.grey8};
    cursor: not-allowed;

    * {
      color: ${({ theme }) => theme.colors.grey8};
    }
  }
`;

export const StyledTabsContent = styled(Tabs.Content)`
  margin-top: ${({ theme }) => theme.spaces[2]};
`;
