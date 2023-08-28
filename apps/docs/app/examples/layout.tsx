import { ExampleNav } from "@/components/ExampleNav";
import { Button } from "@rempi-ui/button";
import { Flex } from "@rempi-ui/flex";
import { Heading } from "@rempi-ui/heading";
import { Typography } from "@rempi-ui/typography";
import { FC, PropsWithChildren } from "react";

const ExamplesLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Flex as="section" flexDirection="column" flexWrap="initial">
        <Heading fontWeight="semi-bold" lineHeight={1}>
          Veja alguns exemplos.
        </Heading>
        <Typography variant="lead1" color="low-contrast" fontWeight="normal">
          Dashboard, cards, autenticações. Alguns exemplos construídos com{" "}
          <strong>Rempi-UI</strong>.
        </Typography>
        <Flex flexDirection="row" flexWrap="initial">
          <Button as="a" href="/docs/accordion" variant="solid" color="primary">
            Iniciar
          </Button>
          <Button
            as="a"
            href="/components"
            target="_blank"
            variant="outlined"
            color="primary"
          >
            Componentes
          </Button>
        </Flex>
      </Flex>
      <ExampleNav />
      {children}
    </>
  );
};

export default ExamplesLayout;
