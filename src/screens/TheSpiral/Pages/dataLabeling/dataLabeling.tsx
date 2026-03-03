import React, { useState } from "react";
import { Header } from "../../commonComponents/Header/header";
import { Footer } from "../../commonComponents/Footer";
import { HomeCTASection } from "../../commonComponents/HomeCTASection";
import { FileTextIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";
import dlTypes from "/images/dlTypes.png";
import expertiseImg from "/images/expertise-1.svg";

const annotationTypes = [
  { id: "text", label: "Text Annotation" },
  { id: "audio", label: "Audio Annotation" },
  { id: "image", label: "Image Annotation" },
  { id: "video", label: "Video Annotation" },
  { id: "multimodal", label: "Multimodal Annotation" },
];

const sidebarItems = [
  { id: "bounding", label: "Bounding Boxes" },
  { id: "polygons", label: "Polygons" },
  { id: "keypoints", label: "Keypoints" },
  { id: "segmentation", label: "Segmentation" },
  { id: "polylines", label: "Polylines" },
  { id: "cuboids", label: "Cuboids" },
];

const useCases = [
  {
    label: "FACIAL RECOGNITION",
    color: "bg-gradient-to-r from-orange-500 to-yellow-500",
  },
  {
    label: "OBJECT DETECTION",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  {
    label: "IMAGE CLASSIFICATION",
    color: "bg-gradient-to-r from-pink-500 to-red-500",
  },
];

const learningCards = new Array(6).fill({
  title: "Machine Learning",
  description:
    "Scalable ML ops platform with automated training pipelines and continuous model improvement.",
});

export const DataLabeling = (): JSX.Element => {
  const [activeSidebar, setActiveSidebar] = useState("bounding");

  return (
    <>
      <Header backgroundClass="bg-[#00030c]" />

      <div className="flex flex-col bg-[#00030c] text-white overflow-x-hidden">
        {/* HERO SECTION */}
        <section className="w-full mt-16 flex items-center justify-center px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-center py-4">
            <div className="flex flex-col gap-6">
              <Badge className="self-start px-4 py-2 rounded-full font-medium text-white text-base bg-transparent shadow-[0px_2px_12px_#07051880] backdrop-blur-[11.3px] before:content-[''] before:absolute before:inset-0 before:p-[0.94px] before:rounded-[100px] before:[background:linear-gradient(1deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_38%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none [background:radial-gradient(50%_50%_at_50%_0%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%),linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.08)_100%)]">
                Fastest, Most Resilient AI Data Labelling & Training Partner
              </Badge>

              <h1 className="text-5xl md:text-6xl font-bold">Data Labeling</h1>

              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Boost your object detection, classification and segmentation
                models with the highest quality datasets tailored for your AI
                projects. Boost your object detection, classification and
                segmentation models with the highest quality datasets tailored
                for your AI projects.
              </p>

              <Button
                asChild
                variant="ghost"
                className="w-[190px] flex items-center justify-center gap-2 px-4 py-6 rounded-full border border-white font-medium text-white text-base tracking-[-0.54px] leading-6 hover:bg-white hover:opacity-90 transition-all duration-300"
              >
                <a
                  href="https://datalabeler.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Demo
                </a>
              </Button>
            </div>

            <img
              className="w-full rounded-lg"
              alt="AI Data Labeling Visualization"
              src={expertiseImg}
            />
          </div>
        </section>

        {/* DATA LABELING TYPES */}
        <section className="w-full px-8 md:px-16 lg:px-24 py-24">
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Data Labeling{" "}
                <span className="bg-gradient-to-r from-[#35E0ED] to-[#0074E5] bg-clip-text text-transparent">
                  Types
                </span>
              </h2>

              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                From text and audio to images and video, each data type requires
                specific annotation techniques.
              </p>
            </div>

            <Tabs defaultValue="image" className="w-full">
              <TabsList className="w-full justify-center bg-transparent border-b border-white/10 rounded-none gap-8">
                {annotationTypes.map((type) => (
                  <TabsTrigger
                    key={type.id}
                    value={type.id}
                    className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-white pb-4 text-gray-400 data-[state=active]:text-white rounded-none"
                  >
                    {type.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* IMAGE TAB (FULL IMPLEMENTATION) */}
              <TabsContent value="image" className="mt-12">
                <Card className="bg-[#15161A] border-white/10">
                  <CardContent className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="bg-[#0f1424] p-4 rounded-xl flex flex-col gap-3">
                      {sidebarItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setActiveSidebar(item.id)}
                          className={`px-4 py-3 rounded-lg transition-colors ${
                            activeSidebar === item.id
                              ? "bg-blue-500 text-white"
                              : "text-gray-400 hover:bg-white/5"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>

                    <div className="lg:col-span-2 flex flex-col gap-6">
                      {activeSidebar === "bounding" ? (
                        <>
                          <img
                            className="w-full rounded-lg"
                            alt="Annotated scene"
                            src={dlTypes}
                          />

                          <p className="text-gray-300 leading-relaxed">
                            Annotating visual data with{" "}
                            <span className="text-white font-semibold">
                              Bounding Boxes
                            </span>{" "}
                            allows AI models to learn object detection
                            accurately. Boost your object detection,
                            classification and segmentation models with the
                            highest quality datasets tailored for your AI
                            projects.
                          </p>

                          <div>
                            <p className="text-white font-semibold mb-3">
                              Use cases:
                            </p>
                            <div className="flex flex-wrap gap-3">
                              {useCases.map((useCase, index) => (
                                <Badge
                                  key={index}
                                  className={`${useCase.color} text-white border-0 px-4 py-2 text-xs font-semibold`}
                                >
                                  {useCase.label}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="flex items-center justify-center h-64 text-gray-500 text-lg">
                          No items to display
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* OTHER TABS → NOT IMPLEMENTED */}
              {["text", "audio", "video", "multimodal"].map((tab) => (
                <TabsContent key={tab} value={tab} className="mt-12">
                  <Card className="bg-[#15161A] border-white/10">
                    <CardContent className="p-8 flex items-center justify-center h-64 text-gray-500 text-lg">
                      No items to display
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* WHY IMPORTANT SECTION (UNCHANGED) */}
        <section className="w-full px-8 md:px-16 lg:px-24 py-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningCards.map((card, index) => (
              <Card
                key={index}
                className="bg-[#0a0f1e] border-white/10 hover:border-blue-500/50 transition-colors"
              >
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center">
                    <FileTextIcon className="w-6 h-6 text-blue-500" />
                  </div>

                  <h3 className="text-xl text-white font-bold">{card.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <HomeCTASection />
        <Footer />
      </div>
    </>
  );
};

export default DataLabeling;
