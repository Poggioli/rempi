import { Button } from "@rempi-ui/button";
import { Flex } from "@rempi-ui/flex";

export default function Page() {
  return (
      <Flex direction="column" alignItems="center">
        <Button as="a" href="https://google.com.br" color="primary" variant="contained" buttonSize="standard">
          Hello
        </Button>
        <Button color="secondary" variant="contained" buttonSize="standard">
          Hello
        </Button>
        <Button color="success" variant="contained" buttonSize="standard">
          Hello
        </Button>
        <Button color="error" variant="contained" buttonSize="standard">
          Hello
        </Button>

        <Button color="primary" variant="text" buttonSize="standard">
          Hello
        </Button>
        <Button color="secondary" variant="text" buttonSize="standard">
          Hello
        </Button>
        <Button color="success" variant="text" buttonSize="standard">
          Hello
        </Button>
        <Button color="error" variant="text" buttonSize="standard">
          Hello
        </Button>

        <Button color="primary" variant="outlined" buttonSize="standard">
          Hello
        </Button>
        <Button color="secondary" variant="outlined" buttonSize="standard">
          Hello
        </Button>
        <Button color="success" variant="outlined" buttonSize="standard">
          Hello
        </Button>
        <Button color="error" variant="outlined" buttonSize="standard">
          Hello
        </Button>
      </Flex>
  );
}
