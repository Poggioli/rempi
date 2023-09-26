import { Code } from "@rempi-ui/code";
import { FC } from "react";

export const CodeComp: FC = ({ ...props }) => {
  return <Code {...props} fontSize="sm" lineHeight={1} />;
};
