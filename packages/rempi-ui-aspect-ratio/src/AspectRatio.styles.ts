import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { styled } from "@rempi-ui/core";

export const StyledAspectRatio = styled(AspectRatio.Root)`
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
