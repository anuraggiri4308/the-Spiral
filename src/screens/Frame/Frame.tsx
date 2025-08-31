import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { HomeCTASection } from "./sections/HomeCTASection";
import { FounderSection } from "./sections/FounderSection";
import { HeroSection } from "./sections/HeroSection";
import { WhyChooseUs } from "./sections/WhyChooseUsSection";
import { HomePageBlogsSection } from "./sections/HomePageBlogsSection";
import { ExpertiseSection } from "./sections/ExpertiseSection";
import { Footer } from "./sections/Footer";
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
                <HeroSection />
                <WhyChooseUs />
                <ExpertiseSection />
                <FounderSection />
                <HomePageBlogsSection />
                <HomeCTASection />
                <Footer />
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
