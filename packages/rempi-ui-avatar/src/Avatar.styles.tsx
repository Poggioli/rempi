import * as Avatar from "@radix-ui/react-avatar";
import {
  ApplyResponsiveVariant,
  css,
  RempiConfig,
  RempiVariant,
  RuleSet,
  styled,
} from "@rempi-ui/core";
import { Size } from "./Avatar";

export const StyledAvatarFallback = styled(Avatar.Fallback)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary3};
  color: ${({ theme }) => theme.colors.primary11};
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  height: 100%;
  justify-content: center;
  line-height: ${({ theme }) => theme.lineHeights[1]};
  width: 100%;
`;

export const StyledAvatarImage = styled(Avatar.Image)`
  border-radius: inherit;
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const size: Record<Size, RuleSet<object>> = {
  small: css`
    height: ${({ theme }) => theme.spaces[8]};
    width: ${({ theme }) => theme.spaces[8]};

    ${StyledAvatarFallback.toString()} {
      font-size: ${({ theme }) => theme.fontSizes[2]};
    }
  `,
  standard: css`
    height: ${({ theme }) => theme.spaces[12]};
    width: ${({ theme }) => theme.spaces[12]};
  `,
  large: css`
    height: ${({ theme }) => theme.spaces[14]};
    width: ${({ theme }) => theme.spaces[14]};
  `,
};

export const StyledAvatarRoot = styled(Avatar.Root)<{
  $size?: RempiVariant<Size>;
}>`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black3};
  border-radius: ${({ theme }) => theme.radii.pill};
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  user-select: none;
  vertical-align: middle;

  ${(props) => {
    const apply = (value: Size) => {
      return value && size[value];
    };

    return ApplyResponsiveVariant(
      apply,
      props.theme as RempiConfig,
      props.$size
    );
  }}
`;
