import { APIReference } from "./APIReference";
import { PreviewComponent } from "@/components/PreviewComponent";
import { MDXProvider } from "@mdx-js/react";
import { Flex } from "@rempi-ui/flex";
import { FC, PropsWithChildren } from "react";
// import { Code } from "./Code";
import { Heading1 } from "./Heading1";
import { Heading2 } from "./Heading2";
import { Heading3 } from "./Heading3";
import { NavigationNextPrevious } from "@/components/MDXProviderCommon/NavigationNextPrevious";
import { Paragraph } from "./Paragraph";
import { Pre } from "@/components/MDXProviderCommon/Pre";
import { RadixAPI } from "./RadixAPI";
import { RadixUI } from "./RadixUI";
import { Step, Steps } from "@/components/MDXProviderCommon/Steps";
import { Code } from "@rempi-ui/code";
import { DataReference } from "./DataReference";
import { Description } from "@/components/MDXProviderCommon/Description";
import { MoreInfo } from "./MoreInfo";
import { SelectVersion } from "./SelectVersion";
import { EditThisPage } from "@/components/MDXProviderCommon/EditThisPage";

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
        code: Code,
        Flex,
        RadixUI,
        RadixAPI,
        PreviewComponent,
        NavigationNextPrevious,
        APIReference,
        DataReference,
        MoreInfo,
        SelectVersion,
        EditThisPage
      }}
    >
      {children}
    </MDXProvider>
  );
};
