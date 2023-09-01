import { SocialMedias } from "@/components/SocialMedias";
import { Flex } from "@rempi-ui/flex";
import { FC } from "react";
import {
  StyledMarginLeftAuto,
  StyledNavigationMenuHeader
} from "./NavigationMenu.styles";

export const NavigationMenu: FC = () => {
  return (
    <StyledNavigationMenuHeader
      as={(props: any) => <Flex {...props} as="header" />}
      justifyContent="space-between"
    >
      <StyledMarginLeftAuto>
        <SocialMedias />
      </StyledMarginLeftAuto>
    </StyledNavigationMenuHeader>
  );
};
