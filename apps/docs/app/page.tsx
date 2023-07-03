import { Button } from "@rempi-ui/button";
import { Flex } from "@rempi-ui/flex";
import { Heading } from "@rempi-ui/heading";
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
      <Typography variant="lead1">Typography 1</Typography>
      <Typography variant="lead2">Typography 2</Typography>
      <Typography variant="body1">Typography 3</Typography>
      <Typography variant="body2">Typography 4</Typography>
      <Typography variant="caption">Typography 5</Typography>
      <Typography variant="subtitle">Typography 6</Typography>

      <Heading as="h1" variant="1">
        Heading 1
      </Heading>
      <Heading as="h2" variant="2">
        Heading 2
      </Heading>
      <Heading as="h3" variant="3">
        Heading 3
      </Heading>
      <Heading as="h4" variant="4">
        Heading 4
      </Heading>
      <Heading as="h5" variant="5">
        Heading 5
      </Heading>
      <Heading as="h6" variant="6">
        Heading 6
      </Heading>
    </Flex>
  );
}
