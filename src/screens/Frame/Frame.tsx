import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { HomeCTASection } from "./commonComponents/HomeCTASection";
import { FounderSection } from "./LandingPageSections/FounderSection";
import { HeroSection } from "./LandingPageSections/HeroSection";
import { WhyChooseUs } from "./LandingPageSections/WhyChooseUsSection";
import { HomePageBlogsSection } from "./LandingPageSections/HomePageBlogsSection";
import { ExpertiseSection } from "./LandingPageSections/ExpertiseSection";
import { Footer } from "./commonComponents/Footer";
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
