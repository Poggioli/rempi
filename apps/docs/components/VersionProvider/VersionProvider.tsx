"use client";

import { createContext, FC, PropsWithChildren, useContext } from "react";

type Version = {
  versions: string[];
};

const VersionContext = createContext<Version | undefined>(undefined);

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

export const useVersionContext = (): Version => {
  const context = useContext(VersionContext);

  if (!context) {
    throw new Error("VersionContext should be used whitin VersionProvider");
  }

  return context as Version;
};
