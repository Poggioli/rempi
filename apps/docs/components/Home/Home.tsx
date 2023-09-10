import { Dashboard } from "app/examples/dash/components/Dashboard";
import { FC } from "react";
import { MainSection } from "./MainSection";

export const Home: FC = () => {
  return (
    <>
      <MainSection />
      <Dashboard />
    </>
  );
};
