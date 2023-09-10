import { styled } from "@rempi-ui/core";
import { ScrollArea } from "@rempi-ui/scroll-area";
import { FC } from "react";

const StyledPre = styled.pre`

  padding: ${({ theme }) => theme.spaces[4]};

  code {
    color: ${({ theme }) => theme.colors.grey12};
    display: grid;
    min-width: 100%;
    overflow-wrap: break-word;
    border-radius: 0;
    border-width: 0;
    background-color: transparent;
    padding: 0;
    counter-reset: line;
    -webkit-box-decoration-break: clone;
    font-size: ${({ theme }) => theme.fontSizes[3]};
    line-height: ${({ theme }) => theme.lineHeights[1]};
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      Liberation Mono, Courier New, monospace;
  }
`;

const StyledScrollAreaRoot = styled.div`
  background-color: ${({ theme }) => theme.colors.grey3};
  border: ${({ theme }) => theme.borderWidths[1]} solid
    ${({ theme }) => theme.colors.grey6};
  border-radius: ${({ theme }) => theme.radii[2]};
  margin: ${({ theme }) => theme.spaces[4]} 0;
`;

const StyledViewport = styled.div`
  max-height: 440px;
`

export const Pre: FC = ({ ...props }) => {
  return (
    <StyledScrollAreaRoot as={ScrollArea.Root} >
      <StyledViewport as={ScrollArea.Viewport}>
        <StyledPre {...props} />
      </StyledViewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar orientation="horizontal">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </StyledScrollAreaRoot>
  )
};