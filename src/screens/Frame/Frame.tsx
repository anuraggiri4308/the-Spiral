import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { DivSubsection } from "./sections/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection";
import { ElementSubsection } from "./sections/ElementSubsection";
import { ElementWrapperSubsection } from "./sections/ElementWrapperSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection";
import { OverlapGroupWrapperSubsection } from "./sections/OverlapGroupWrapperSubsection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection";
import Blogs from "../../screens/Frame/Pages/blogs/blogs";
import BlogsDetailPage from "../../screens/Frame/Pages/blogs/blogsDetailPage";
import { Route, Routes } from "react-router-dom";

export const Frame = (): JSX.Element => {
  return (
    <Card className="w-full border-none">
      <CardContent className="flex flex-col items-start w-full p-0 relative overflow-x-hidden">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <ElementSubsection />
                <ElementWrapperSubsection />
                <OverlapGroupWrapperSubsection />
                <DivWrapperSubsection />
                <FrameWrapperSubsection />
                <DivSubsection />
                <SectionComponentNodeSubsection />
              </>
            }
          />

          {/* Blog Pages */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogsDetailPage />} />
          {/* (Optional) Direct detail page route */}
        </Routes>
      </CardContent>
    </Card>
  );
};
