import { Button } from "@rempi-ui/button";

export default function Page() {
  return (
    <span
      style={{
        color: "var(--colors-error12)",
      }}
    >
      <Button color="primary" variant="contained" buttonSize="standard">
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
    </span>
  );
}
