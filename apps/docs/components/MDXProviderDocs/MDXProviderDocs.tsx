import { Description } from "@/components/MDXProviderCommon/Description";
import { EditThisPage } from "@/components/MDXProviderCommon/EditThisPage";
import { NavigationNextPrevious } from "@/components/MDXProviderCommon/NavigationNextPrevious";
import { Pre } from "@/components/MDXProviderCommon/Pre";
import { Step, Steps } from "@/components/MDXProviderCommon/Steps";
import { PreviewComponent } from "@/components/PreviewComponent";
import { MDXProvider } from "@mdx-js/react";
import { Flex } from "@rempi-ui/flex";
import { FC, PropsWithChildren } from "react";
import { APIReference } from "./APIReference";
import { CodeComp } from "./Code";
import { DataReference } from "./DataReference";
import { Heading1 } from "./Heading1";
import { Heading2 } from "./Heading2";
import { Heading3 } from "./Heading3";
import { MoreInfo } from "./MoreInfo";
import { Paragraph } from "./Paragraph";
import { RadixAPI } from "./RadixAPI";
import { RadixUI } from "./RadixUI";
import { SelectVersion } from "./SelectVersion";

export const MDXProviderDocs: FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <MDXProvider
      components={{
        h1: Heading1,
        h2: Heading2,
        h3: Heading3,
        Description,
        p: Paragraph,
        Steps,
        Step,
        pre: Pre,
        code: CodeComp,
        Flex,
        RadixUI,
        RadixAPI,
        PreviewComponent,
        NavigationNextPrevious,
        APIReference,
        DataReference,
        MoreInfo,
        SelectVersion,
        EditThisPage,
      }}
    >
      {children}
    </MDXProvider>
  );
};
