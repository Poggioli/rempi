import { Container } from "@rempi-ui/container";
import { Typography } from "@rempi-ui/typography";
import { FC } from "react";

export const ContainerPreview: FC = () => {
  return (
    <Container
      variant="sm"
      style={{
        backgroundColor: "var(--colors-primary4)",
        padding: "var(--spaces-2)",
        borderRadius: "var(--radii-2)",
      }}
    >
      <Typography>@rempi-ui/container</Typography>
    </Container>
  );
};
