import * as Tabs from "@radix-ui/react-tabs";
import { styled } from "@rempi-ui/core";

export const StyledTabsRoot = styled(Tabs.Root)`
  width: 100%;
`;

export const StyledTabsList = styled(Tabs.List)`
  align-items: center;
  background-color: ${(props) => props.theme.colors.grey4};
  border-radius: ${(props) => props.theme.radii[2]};
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.theme.spaces[1]};
  padding: ${(props) => props.theme.spaces[1]};
`;

export const StyledTabsTrigger = styled(Tabs.Trigger)`
  background-color: transparent;
  border-radius: ${(props) => props.theme.radii[2]};
  color: ${(props) => props.theme.colors.grey12};
  cursor: pointer;
  flex: 1;
  font-size: ${(props) => props.theme.fontSizes[4]};
  font-weight: ${(props) => props.theme.fontWeights[3]};
  padding: ${(props) => props.theme.spaces[1]}
    ${(props) => props.theme.spaces[4]};
  transition: background-color 200ms ease;

  * {
    color: ${(props) => props.theme.colors.grey12};
    font-size: ${(props) => props.theme.fontSizes[4]};
    font-weight: ${(props) => props.theme.fontWeights[3]};
  }

  &:hover:not([data-disabled], [data-state="active"]) {
    background-color: ${(props) => props.theme.colors.grey2};
  }

  &:focus-visible,
  &:focus {
    outline-color: ${(props) => props.theme.colors.info9};
    outline-style: solid;
    outline-width: ${(props) => props.theme.borderWidths[1]};
  }

  &[data-state="active"] {
    background-color: ${(props) => props.theme.colors.grey1};
    color: ${(props) => props.theme.colors.grey12};

    * {
      color: ${(props) => props.theme.colors.grey12};
    }
  }

  &[data-disabled] {
    color: ${(props) => props.theme.colors.grey8};
    cursor: not-allowed;

    * {
      color: ${(props) => props.theme.colors.grey8};
    }
  }
`;

export const StyledTabsContent = styled(Tabs.Content)`
  margin-top: ${(props) => props.theme.spaces[2]};
`;
