import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { DivSubsection } from "./sections/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection";
import { ElementSubsection } from "./sections/ElementSubsection";
import { ElementWrapperSubsection } from "./sections/ElementWrapperSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection";
import { OverlapGroupWrapperSubsection } from "./sections/OverlapGroupWrapperSubsection";
import { OverlapWrapperSubsection } from "./sections/OverlapWrapperSubsection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection";

export const Frame = (): JSX.Element => {
  return (
    <Card className="w-full border-none">
      <CardContent className="flex flex-col items-start w-full p-0 relative overflow-x-hidden">
        <ElementSubsection />
        <ElementWrapperSubsection />
        <OverlapWrapperSubsection />
        <OverlapGroupWrapperSubsection />

        <DivWrapperSubsection />
        <FrameWrapperSubsection />
        <DivSubsection />
        <SectionComponentNodeSubsection />
      </CardContent>
    </Card>
  );
};
