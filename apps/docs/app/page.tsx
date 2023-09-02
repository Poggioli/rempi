"use client";

import { Footer } from "@/components/Footer";
import { Home } from "@/components/Home";
import { Container } from "@rempi-ui/container";
import { StyledContainerBody, StyledContent } from "./layout.styles";

export default function Page() {
  return (
    <StyledContainerBody as={Container} variant="md" centered>
      <StyledContent>
        <Home />
      </StyledContent>
      <Footer />
    </StyledContainerBody>
  );
}
