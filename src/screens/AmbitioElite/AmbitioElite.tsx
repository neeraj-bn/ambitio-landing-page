import React from "react";
import { MainContentSection } from "./sections/MainContentSection";
import { OverlaySection } from "./sections/OverlaySection";
import { NavSection } from "./sections/NavSection";

export const AmbitioElite = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full relative">
        <div className="flex flex-col w-full items-center gap-16">
          <NavSection />
          <MainContentSection />
          <OverlaySection />
        </div>
      </div>
    </div>
  );
};
