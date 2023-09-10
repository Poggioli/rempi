"use client";

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import { FC } from "react";

type MDXWrapper = {
  source: MDXRemoteProps;
};

export const MDXWrapper: FC<MDXWrapper> = ({ source }) => {
  return <MDXRemote {...source} />;
};
