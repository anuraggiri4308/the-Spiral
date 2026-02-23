import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { HomeCTASection } from "./commonComponents/HomeCTASection";
import { FounderSection } from "./LandingPageSections/FounderSection";
import { HeroSection } from "./LandingPageSections/HeroSection";
import { WhyChooseUs } from "./LandingPageSections/WhyChooseUsSection";
import { HomePageBlogsSection } from "./LandingPageSections/HomePageBlogsSection";
import { ExpertiseSection } from "./LandingPageSections/ExpertiseSection";
import { Footer } from "./commonComponents/Footer";
import Blogs from "./Pages/blogs/blogs";
import BlogsDetailPage from "./Pages/blogs/blogsDetailPage";
import DataLabeling from "./Pages/dataLabeling/dataLabeling";
import { Route, Routes } from "react-router-dom";
import { BookDemo } from "./Pages/bookDemo/BookDemo";
import WhyUs from "./Pages/whyUs/whyUs";

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
          <Route path="/dataLabeling" element={<DataLabeling />} />
          <Route path="/whyUs" element={<WhyUs />} />

          {/* (Optional) Direct detail page route */}
          <Route
            path="/bookDemo"
            element={
              <>
                <BookDemo />
                <Footer />
              </>
            }
          />
        </Routes>
      </CardContent>
    </Card>
  );
};
