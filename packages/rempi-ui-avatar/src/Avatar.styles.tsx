import * as Avatar from "@radix-ui/react-avatar";
import { css, styled } from "@rempi-ui/core";
import { Size } from "./Avatar";

export const StyledAvatarFallback = styled(Avatar.Fallback)`
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary3};
  color: ${(props) => props.theme.colors.primary11};
  display: flex;
  font-size: ${(props) => props.theme.fontSizes[4]};
  font-weight: ${(props) => props.theme.fontWeights[3]};
  height: 100%;
  justify-content: center;
  line-height: ${(props) => props.theme.lineHeights[1]};
  width: 100%;
`;

export const StyledAvatarImage = styled(Avatar.Image)`
  border-radius: inherit;
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export const StyledAvatarRoot = styled(Avatar.Root) <{
  size?: Size;
}>`
  align-items: center;
  background-color: ${(props) => props.theme.colors.black3};
  border-radius: ${(props) => props.theme.radii.pill};
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  user-select: none;
  vertical-align: middle;

  ${(props) => {
    switch (props.size) {
      case "small":
        return css`
          height: ${(props) => props.theme.spaces[8]};
          width: ${(props) => props.theme.spaces[8]};

          ${StyledAvatarFallback.toString()} {
            font-size: ${(props) => props.theme.fontSizes[2]};
          }
        `;
      case "standard":
        return css`
          height: ${(props) => props.theme.spaces[12]};
          width: ${(props) => props.theme.spaces[12]};
        `;
      case "large":
        return css`
          height: ${(props) => props.theme.spaces[14]};
          width: ${(props) => props.theme.spaces[14]};
        `;
    }
  }}
` 