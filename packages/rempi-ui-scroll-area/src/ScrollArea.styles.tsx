import * as ScrollArea from "@radix-ui/react-scroll-area";
import { styled } from "@rempi-ui/core";

export const StyledScrollAreaRoot = styled(ScrollArea.Root)`
  overflow: hidden;
  background-color: transparent;
`;

export const StyledScrollAreaViewport = styled(ScrollArea.Viewport)`
  width: 100%;
  height: 100%;
`;

export const StyledScrollAreaScrollbar = styled(ScrollArea.Scrollbar)`
  display: flex;
  user-select: none;
  touch-action: none;
  padding: ${({ theme }) => theme.spaces[0]};
  background: ${({ theme }) => theme.colors.black6};
  transition: background 160ms ease-out;

  &:hover {
    background: ${({ theme }) => theme.colors.black8};
  }

  &[data-orientation="vertical"] {
    width: ${({ theme }) => theme.spaces[3]};
  }

  &[data-orientation="horizontal"] {
    flex-direction: column;
    height: ${({ theme }) => theme.spaces[3]};
  }
`;

export const StyledScrollAreaThumb = styled(ScrollArea.Thumb)`
  flex: 1;
  background: ${({ theme }) => theme.colors.grey10};
  border-radius: ${({ theme }) => theme.spaces[3]};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: ${({ theme }) => theme.spaces[11]};
    min-height: ${({ theme }) => theme.spaces[11]};
  }
`;

export const StyledScrollAreaCorner = styled(ScrollArea.Corner)`
  background: ${({ theme }) => theme.colors.grey8};
`;
