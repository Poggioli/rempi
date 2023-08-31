import { MDXProvider } from "@mdx-js/react";
import { FC, PropsWithChildren } from "react";
import { Description } from "./Description";
import { Heading1 } from "./Heading1";
import { Heading2 } from "./Heading2";
import { Heading3 } from "./Heading3";
import { NavigationNextPrevious } from "./NavigationNextPrevious";
import { Paragraph } from "./Paragraph";
import { Pre } from "./Pre";
import { Step, Steps } from "./Steps";

export const MDXProviderOverview: FC<PropsWithChildren<any>> = ({
  children,
}) => {
  return (
    <MDXProvider
      components={{
        h1: Heading1,
        h2: Heading2,
        h3: Heading3,
        Description,
        p: Paragraph,
        pre: Pre,
        Steps,
        Step,
        NavigationNextPrevious,
      }}
    >
      {children}
    </MDXProvider>
  );
};
