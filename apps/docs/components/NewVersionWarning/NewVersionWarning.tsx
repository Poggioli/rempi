"use client";

import { Callout } from "@rempi-ui/callout";
import { styled } from "@rempi-ui/core";
import { Megaphone } from "lucide-react";
import { FC } from "react";

const StyledCalloutRoot = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: ${({ theme }) => theme.spaces[16]};
  margin-top: calc(-1 * ${({ theme }) => theme.spaces[9]});
  z-index: 1;
`;

type NewVersionWarningProps = {
  title: string;
  slug: string;
};

export const NewVersionWarning: FC<NewVersionWarningProps> = ({
  title,
  slug,
}) => {
  return (
    <StyledCalloutRoot
      as={(props: any) => <Callout.Root {...props} as="aside" />}
      size="small"
    >
      <Callout.Icon>
        <Megaphone size={16} />
      </Callout.Icon>
      <Callout.Text>
        A newer version of {title} is available. <a href={slug}>Learn more</a>.
      </Callout.Text>
    </StyledCalloutRoot>
  );
};
