"use client";

import { styled } from "@rempi-ui/core";
import { Flex } from "@rempi-ui/flex";
import { Heading } from "@rempi-ui/heading";
import { Tabs } from "@rempi-ui/tabs";
import { Typography } from "@rempi-ui/typography";
import { useSearchParams } from "next/navigation";
import { FC, PropsWithChildren, useContext } from "react";
import { VersionContext } from "../VersionProvider";
import { AccordionPreview } from "./PreviewComponents/Accordion";
import { AlertDialogPreview } from "./PreviewComponents/AlertDialog";
import { AspectRatioPreview } from "./PreviewComponents/AspectRatio";
import { AvatarPreview } from "./PreviewComponents/Avatar";
import { BadgePreview } from "./PreviewComponents/Badge";
import { BlockquotePreview } from "./PreviewComponents/Blockquote";
import { ButtonPreview } from "./PreviewComponents/Button";
import { CalendarPreview } from "./PreviewComponents/Calendar";
import { CalloutPreview } from "./PreviewComponents/Callout";
import { CardPreview } from "./PreviewComponents/Card";
import { CheckboxPreview } from "./PreviewComponents/Checkbox";
import { CodePreview } from "./PreviewComponents/Code";
import { CollapsiblePreview } from "./PreviewComponents/Collapsible";
import { ComboboxPreview } from "./PreviewComponents/Combobox";
import { ContainerPreview } from "./PreviewComponents/Container";
import { ContextMenuPreview } from "./PreviewComponents/ContextMenu";
import { DialogPreview } from "./PreviewComponents/Dialog";
import { DropdownMenuPreview } from "./PreviewComponents/DropdownMenu";
import { FlexPreview } from "./PreviewComponents/Flex";
import { HeadingPreview } from "./PreviewComponents/Heading";
import { HoverCardPreview } from "./PreviewComponents/HoverCard";
import { InputPreview } from "./PreviewComponents/Input";
import { LabelPreview } from "./PreviewComponents/Label";
import { MenuBarPreview } from "./PreviewComponents/MenuBar";
import { NavigationMenuPreview } from "./PreviewComponents/NavigationMenu";
import { PopoverPreview } from "./PreviewComponents/Popover";
import { ProgressPreview } from "./PreviewComponents/Progress";
import { RadioPreview } from "./PreviewComponents/Radio";
import { ScrollAreaPreview } from "./PreviewComponents/ScrollArea";
import { SelectPreview } from "./PreviewComponents/Select";
import { SeparatorPreview } from "./PreviewComponents/Separator";
import { SkeletonPreview } from "./PreviewComponents/Skeleton";
import { SliderPreview } from "./PreviewComponents/Slider";
import { SwitchPreview } from "./PreviewComponents/Switch";
import { TablePreview } from "./PreviewComponents/Table";
import { TabsPreview } from "./PreviewComponents/Tabs";
import { TextareaPreview } from "./PreviewComponents/Textarea";
import { ToastPreview } from "./PreviewComponents/Toast";
import { TogglePreview } from "./PreviewComponents/Toggle";
import { TooltipPreview } from "./PreviewComponents/Tooltip";
import { TypographyPreview } from "./PreviewComponents/Typography";

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
  button: ButtonPreview,
  calendar: CalendarPreview,
  callout: CalloutPreview,
  card: CardPreview,
  checkbox: CheckboxPreview,
  code: CodePreview,
  collapsible: CollapsiblePreview,
  combobox: ComboboxPreview,
  container: ContainerPreview,
  "context-menu": ContextMenuPreview,
  dialog: DialogPreview,
  "dropdown-menu": DropdownMenuPreview,
  flex: FlexPreview,
  heading: HeadingPreview,
  "hover-card": HoverCardPreview,
  input: InputPreview,
  label: LabelPreview,
  menubar: MenuBarPreview,
  "navigation-menu": NavigationMenuPreview,
  popover: PopoverPreview,
  progress: ProgressPreview,
  radio: RadioPreview,
  "scroll-area": ScrollAreaPreview,
  select: SelectPreview,
  separator: SeparatorPreview,
  skeleton: SkeletonPreview,
  slider: SliderPreview,
  switch: SwitchPreview,
  table: TablePreview,
  tabs: TabsPreview,
  textarea: TextareaPreview,
  toast: ToastPreview,
  toggle: TogglePreview,
  tooltip: TooltipPreview,
  typography: TypographyPreview,
};

const StyledFlex = styled.div`
  border: ${({ theme }) => theme.borderWidths[1]} solid
    ${({ theme }) => theme.colors.grey6};
  border-radius: ${({ theme }) => theme.radii[2]};
  padding: ${({ theme }) => theme.spaces[10]};
`;

const StyledPreviewContainer = styled.div`
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

const StyledHeadingLvl2 = styled.h2`
  border-bottom: ${({ theme }) => theme.borderWidths[1]} solid
    ${({ theme }) => theme.colors.grey6};
  margin: ${({ theme }) => theme.spaces[12]} 0 ${({ theme }) => theme.spaces[4]}
    0;
  padding-bottom: ${({ theme }) => theme.spaces[2]};
  font-size: ${({ theme }) => theme.fontSizes[10]};
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
  const { versions } = useContext(VersionContext);
  const searchParams = useSearchParams();

  if (
    searchParams.get("v") &&
    versions.includes(searchParams.get("v") as string) &&
    searchParams.get("v") !== versions[0]
  ) {
    return null;
  }

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
    <>
      <StyledHeadingLvl2
        as={(props: any) => <Heading {...props} as="h2" />}
        variant="2"
      >
        Example
      </StyledHeadingLvl2>
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
    </>
  );
};
