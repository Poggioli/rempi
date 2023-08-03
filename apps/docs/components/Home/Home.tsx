import { FC } from "react";
import { ExampleNav } from "@/components/ExampleNav";
import { MainSection } from "./MainSection";
import { Dashboard } from "app/examples/dash/components/Dashboard";
import "./Home.scss";

export const Home: FC = () => {
  return (
    <>
      <MainSection />
      <ExampleNav />
      <Dashboard />
    </>
  );
};
