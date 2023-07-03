import { Button } from "@rempi-ui/button";
import { Flex } from "@rempi-ui/flex";
import { Typography } from "@rempi-ui/typography";

export default function Page() {
  return (
    <Flex direction="column" alignItems="center">
      <Button
        as="a"
        href="https://google.com.br"
        color="primary"
        variant="contained"
        buttonSize="standard"
      >
        Hello
      </Button>
      <Button
        as="div"
        color="secondary"
        variant="contained"
        buttonSize="standard"
      >
        Hello
      </Button>
      <Button color="secondary" variant="contained" buttonSize="standard">
        Hello
      </Button>
      <Typography isTruncated variant="lead1">Teste 1 Teste 1 Teste 1 Teste 1 Teste 1 Teste 1 Teste 1 Teste 1 Teste 1 Teste 1 </Typography>
      <Typography as="a" href="https://google.com.br" isTruncated variant="lead1">Teste 1 Teste 1 Teste 1 Teste 1 Teste 1 Teste 1 Teste 1 Teste 1 Teste 1 Teste 1 </Typography>
      <Typography as="h1" isTruncated variant="lead1">Teste 1 Teste 1 Teste 1 Teste 1 Teste 1 Teste 1 Teste 1 Teste 1 Teste 1 Teste 1 </Typography>
      <Typography variant="lead2">Teste 2</Typography>
      <Typography variant="body1">Teste 3</Typography>
      <Typography variant="body2">Teste 4</Typography>
      <Typography variant="caption">Teste 5</Typography>
      <Typography variant="subtitle">Teste 6</Typography>
      <Typography
        variant="subtitle"
        fontSize="xlg"
        color="low-contrast"
        fontWeight="extra-bold"
        lineHeight={2}
        align="right"
        isTruncated
      >
        Teste 6 Teste 6 Teste 6 Teste 6 Teste 6 Teste 6 Teste 6 Teste 6 Teste 6 Teste 6 
      </Typography>
    </Flex>
  );
}
