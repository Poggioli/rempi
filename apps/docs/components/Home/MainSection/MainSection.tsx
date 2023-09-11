import { Button } from "@rempi-ui/button";
import { Flex } from "@rempi-ui/flex";
import { Heading } from "@rempi-ui/heading";
import { Typography } from "@rempi-ui/typography";
import { Github } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC } from "react";
import {
  StyledMainSection,
  StyledMainSectionButtons,
  StyledMainSectionGithubIconLink,
  StyledMainSectionLead,
  StyledMainSectionStartLink,
  StyledMainSectionTitle,
} from "./MainSection.styles";

export const MainSection: FC = () => {
  const t = useTranslations("home");

  return (
    <StyledMainSection
      as={(props: any) => <Flex {...props} as="section" />}
      flexDirection="column"
    >
      <StyledMainSectionTitle
        as={Heading}
        fontWeight="semi-bold"
        lineHeight={1}
      >
        {t("title")}
      </StyledMainSectionTitle>
      <StyledMainSectionLead
        as={Typography}
        variant="lead1"
        color="low-contrast"
        fontWeight="normal"
      >
        Componentes acessíveis e bonitos. Desenvolvimento suave, design bonito,
        experiência agradável para todos os usuários.
      </StyledMainSectionLead>
      <StyledMainSectionButtons as={Flex} flexDirection="row">
        <StyledMainSectionStartLink
          as={(props: any) => <Button {...props} as="a" />}
          href="/docs/overview/introduction"
          variant="solid"
          color="primary"
        >
          Iniciar
        </StyledMainSectionStartLink>
        <Button
          as="a"
          href="https://github.com/Poggioli/rempi"
          target="_blank"
          variant="outlined"
          color="primary"
        >
          <StyledMainSectionGithubIconLink as={Github} size={16} />
          GitHub
        </Button>
      </StyledMainSectionButtons>
    </StyledMainSection>
  );
};
