"use client";

import { styled } from "@rempi-ui/core";
import { Flex } from "@rempi-ui/flex";
import { Tabs } from "@rempi-ui/tabs";
import { Typography } from "@rempi-ui/typography";
import { FC, PropsWithChildren } from "react";
import { AccordionPreview } from "./PreviewComponents/Accordion";
import { AlertDialogPreview } from "./PreviewComponents/AlertDialog";
import { AspectRatioPreview } from "./PreviewComponents/AspectRatio";
import { AvatarPreview } from "./PreviewComponents/Avatar";
import { BadgePreview } from "./PreviewComponents/Badge";
import { BlockquotePreview } from "./PreviewComponents/Blockquote";
import { ButtonPreview } from "./PreviewComponents/Button";

type PreviewComponentProps = {
  name: string;
};

const COMPONENTS: any = {
  accordion: AccordionPreview,
  "alert-dialog": AlertDialogPreview,
  "aspect-ratio": AspectRatioPreview,
  avatar: AvatarPreview,
  badge: BadgePreview,
  blockquote: BlockquotePreview,
  button: ButtonPreview
};

const StyledFlex = styled.div`
  border: ${({ theme }) => theme.borderWidths[1]} solid
    ${({ theme }) => theme.colors.grey6};
  border-radius: ${({ theme }) => theme.radii[2]};
  padding: ${({ theme }) => theme.spaces[10]};
`;

const StyledPreviewContainer = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 100%;

  ${({ theme }) => theme.breakpoints[2]} {
    max-width: 70%;
  }
`;

const StyledTabRoot = styled.div`
  margin-top: ${({ theme }) => theme.spaces[12]};
`;

const StyledTypography = styled.div`
  margin: 0 auto;
`;

const PreviewContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledFlex
      as={Flex}
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <StyledPreviewContainer>{children}</StyledPreviewContainer>
    </StyledFlex>
  );
};

export const PreviewComponent: FC<PreviewComponentProps> = ({ name }) => {
  const Preview = COMPONENTS[name];

  if (!Preview) {
    return (
      <PreviewContainer>
        <StyledTypography as={Typography}>
          Component not found!
        </StyledTypography>
      </PreviewContainer>
    );
  }

  return (
    <StyledTabRoot as={Tabs.Root} defaultValue="example">
      <Tabs.List>
        <Tabs.Trigger value="example">Example</Tabs.Trigger>
        <Tabs.Trigger value="code" disabled>
          Code
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="example">
        <PreviewContainer>
          <Preview />
        </PreviewContainer>
      </Tabs.Content>
      <Tabs.Content value="code">
        <PreviewContainer></PreviewContainer>
      </Tabs.Content>
    </StyledTabRoot>
  );
};