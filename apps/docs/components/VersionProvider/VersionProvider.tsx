"use client";

import { createContext, FC, PropsWithChildren } from "react";

type Version = {
  versions: string[];
};

export const VersionContext = createContext<Version>({} as any);

export const VersionProvider: FC<PropsWithChildren<Version>> = ({
  versions,
  children,
}) => {
  return (
    <VersionContext.Provider value={{ versions }}>
      {children}
    </VersionContext.Provider>
  );
};
