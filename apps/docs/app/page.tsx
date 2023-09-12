"use client";

import { Home } from "@/components/Home";
import { Container } from "@rempi-ui/container";
import { StyledContainerBody, StyledContent } from "./page.styles";

export default function Page() {
  return (
    <StyledContainerBody as={Container} variant="md" centered>
      <StyledContent>
        <Home />
      </StyledContent>
    </StyledContainerBody>
  );
}
