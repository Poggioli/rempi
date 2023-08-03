import { Button } from "@rempi-ui/button";
import { Flex } from "@rempi-ui/flex";
import { Heading } from "@rempi-ui/heading";
import { Typography } from "@rempi-ui/typography";
import { Github } from "lucide-react";
import { FC } from "react";
import "./MainSection.scss";

export const MainSection: FC = () => {
  return (
    <Flex as="section" direction="column" className="main-section">
      <Heading
        fontWeight="semi-bold"
        lineHeight={1}
        className="main-section__title"
      >
        Construa interfaces amigáveis.
      </Heading>
      <Typography
        variant="lead1"
        color="low-contrast"
        fontWeight="normal"
        className="main-section__lead"
      >
        Componentes acessíveis e bonitos. Desenvolvimento suave, design bonito,
        experiência agradável para todos os usuários.
      </Typography>
      <Flex direction="row" className="main-section__buttons">
        <Button
          as="a"
          href="/docs"
          variant="solid"
          color="primary"
          className="main-section__start-link"
        >
          Iniciar
        </Button>
        <Button
          as="a"
          href="https://github.com/Poggioli/rempi"
          target="_blank"
          variant="outlined"
          color="primary"
        >
          <Github size={16} className="main-section__github-icon-link" />
          GitHub
        </Button>
      </Flex>
    </Flex>
  );
};
