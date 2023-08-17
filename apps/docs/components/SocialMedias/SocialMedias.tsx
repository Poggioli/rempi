import { ThemeSelector } from "@/components/ThemeSelector";
import { IconButton } from "@rempi-ui/button";
import { Flex } from "@rempi-ui/flex";
import { Github, Twitter } from "lucide-react";
import { FC } from "react";
import { StyledSocialMedias } from "./SocialMedias.styles";

export const SocialMedias: FC = () => {
  return (
    <StyledSocialMedias as={Flex} flexDirection="row" alignItems="center">
      <IconButton
        as="a"
        href="https://github.com/Poggioli/rempi"
        target="_blank"
        size="small"
        variant="text"
        aria-label="github"
      >
        <Github size={20} />
      </IconButton>
      <IconButton
        as="a"
        href="https://twitter.com/_Poggioli"
        target="_blank"
        size="small"
        variant="text"
        aria-label="twitter"
      >
        <Twitter size={20} />
      </IconButton>
      <ThemeSelector />
    </StyledSocialMedias>
  );
};
