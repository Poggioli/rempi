import * as Separator from "@radix-ui/react-separator";
import { styled } from "@rempi-ui/core";

export const StyledSeparator = styled(Separator.Root)`
  background-color: ${({ theme }) => theme.colors.grey6};

  &[data-orientation="horizontal"] {
    height: 1px;
    width: 100%;
  }

  &[data-orientation="vertical"] {
    height: 100%;
    width: 1px;
  }
`;
