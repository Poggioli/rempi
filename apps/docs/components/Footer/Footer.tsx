import { Typography } from "@rempi-ui/typography";
import { FC } from "react";
import { StyledFooter, StyledFooterLink } from "./Footer.styles";

export const Footer: FC = () => {
  return (
    <StyledFooter>
      <Typography as="p" fontSize="sm">
        Construído por{" "}
        <StyledFooterLink
          as={(props: any) => <Typography {...props} as={'a'} />}
          href="https://twitter.com/_Poggioli"
          target="_blank"
          fontWeight="regular"
        >
          Pogiolli
        </StyledFooterLink>{" "}
        e muitos outros. O código esta disponível no{" "}
        <StyledFooterLink
          as={(props: any) => <Typography {...props} as={'a'} />}
          href="https://github.com/Poggioli/rempi"
          target="_blank"
          fontWeight="regular"
        >
          Github
        </StyledFooterLink>
      </Typography>
    </StyledFooter>
  );
};
