import { Button } from "@rempi-ui/button";
import { Flex } from "@rempi-ui/flex";

export default function Page() {
  return (
      <Flex direction="column" alignItems="center">
        <Button as="a" href="https://google.com.br" color="primary" variant="contained" buttonSize="standard">
          Hello
        </Button>
        <Button as="div" color="secondary" variant="contained" buttonSize="standard">
          Hello
        </Button>
        <Button color="secondary" variant="contained" buttonSize="standard">
          Hello
        </Button>
      </Flex>
  );
}
