import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Footer } from "../../commonComponents/Footer";
import { Header } from "../../commonComponents/Header/header";
import { HomeCTASection } from "../../commonComponents/HomeCTASection";
import {
  ArrowRight,
  Award,
  BarChart3,
  Check,
  Database,
  Globe,
  Headphones,
  Network,
  Shield,
  TrendingUp,
  UserCircle,
  Zap,
} from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { FounderSection } from "../../LandingPageSections/FounderSection";

const stats = [
  { value: "99.9%", label: "Accuracy Rate" },
  { value: "50M+", label: "Data Points Labeled" },
  { value: "24/7", label: "Support Available" },
  { value: "150+", label: "Global Clients" },
];

const services = [
  {
    icon: Database,
    title: "Data Labelling",
    description:
      "Precision labelling across images, text, audio, and video with industry-leading accuracy. Our expert team ensures your training data meets the highest quality standards.",
    features: [
      "Image & Video Classification",
      "Semantic Segmentation",
      "Object Detection & Tracking",
      "Multi-class Labelling",
    ],
  },
  {
    icon: BarChart3,
    title: "Data Collection",
    description:
      "End-to-end data collection services tailored to your AI needs. We gather high-quality, diverse datasets from multiple sources worldwide.",
    features: [
      "Custom Dataset Creation",
      "Web Scraping & Crawling",
      "Crowdsourcing & Surveys",
      "Multi-modal Data Acquisition",
    ],
  },
  {
    icon: Network,
    title: "ML Infrastructure",
    description:
      "Scalable, cloud-native infrastructure to support your entire machine learning pipeline from data ingestion to model deployment.",
    features: [
      "Auto-scaling Data Pipelines",
      "Model Monitoring",
      "Cloud-agnostic Architecture",
    ],
  },
  {
    icon: UserCircle,
    title: "Human-in-the-Loop",
    description:
      "Combine the best of human judgment and machine learning. Our HITL systems continuously improve model performance through expert feedback.",
    features: [
      "Image & Video Classification",
      "Quality Assurance Loops",
      "Expert Review Workflows",
      "Continuous Model Improvement",
    ],
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "SOC 2 Type II certified with GDPR and HIPAA compliance.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Turnaround",
    description: "Rapid delivery without compromising on quality standards.",
  },
  {
    icon: Globe,
    title: "Global Workforce",
    description: "24/7 operations with multilingual support in 80+ languages.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description:
      "Specialized teams across healthcare, automotive, finance, and more.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "From pilot to development, we scale with your needs.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personal account managers and 24/7 technical support.",
  },
];

const steps = [
  {
    number: "1",
    title: "Consultation & Analysis",
    description:
      "We understand your specific needs, data requirements, and quality expectations.",
  },
  {
    number: "2",
    title: "Custom Workflow Design",
    description:
      "Tailored annotation processes and workflows designed for your unique use case.",
  },
  {
    number: "3",
    title: "Expert Execution",
    description:
      "Trained specialists work on your data with rigorous quality control measures.",
  },
  {
    number: "4",
    title: "Quality Assurance",
    description:
      "Multi-layer QA process ensures your dataset meets or exceeds your accuracy goals.",
  },
  {
    number: "5",
    title: "Delivery & Iteration",
    description:
      "Seamless data delivery with continuous feedback loops for ongoing improvement.",
  },
];

const companies = [
  "CARSOME",
  "airlends",
  "DBS",
  "HELLO FRESH",
  "singaporr",
  "LIVRARIA",
  "VULOG",
];

export const WhyUs = (): JSX.Element => {
  return (
    <>
      <Header backgroundClass="bg-[#00020f]" />
      <div className="relative w-full overflow-x-hidden bg-[#00020f] px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="self-start px-4 py-2 rounded-full font-medium text-white text-base bg-transparent shadow-[0px_2px_12px_#07051880] backdrop-blur-[11.3px] before:content-[''] before:absolute before:inset-0 before:p-[0.94px] before:rounded-[100px] before:[background:linear-gradient(1deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_38%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none [background:radial-gradient(50%_50%_at_50%_0%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%),linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.08)_100%)]">
                Fortune 500+ Recipient AI Data Labelling & Training Partner
              </Badge>

              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
                Powering AI Excellence
                <br />
                Through Human Precision
              </h1>

              <p className="text-gray-400 text-lg max-w-xl">
                We deliver world-class data labeling, annotation, and ML
                infrastructure solutions that bridge the gap between human
                expertise and AI potential.
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </Button>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-pink-500/20 to-cyan-500/20 p-1">
                <div className="bg-[#0a0e1a] rounded-2xl p-8">
                  <img
                    src="https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="AI Visualization"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>

              {/* FIXED GLOW */}
              <div className="absolute -z-10 inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[400px] max-w-[90vw] h-[400px] bg-cyan-500/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full overflow-x-hidden bg-[#0a0e1a] bg-gradient-to-b from-teal-900/30 to-[#0a0e1a] py-16 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#00020f] py-24 px-6 w-full overflow-x-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-[#35E0ED] to-[#0074E5] bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-gray-400">
              Four pillars of excellence that set us apart in the AI industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <service.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" w-full overflow-x-hidden bg-[#00020f] py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-4">
            <Badge className="self-start px-4 py-2 rounded-full font-medium text-white text-base bg-transparent shadow-[0px_2px_12px_#07051880] backdrop-blur-[11.3px] before:content-[''] before:absolute before:inset-0 before:p-[0.94px] before:rounded-[100px] before:[background:linear-gradient(1deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_38%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none [background:radial-gradient(50%_50%_at_50%_0%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%),linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.08)_100%)]">
              Latest Insights & Stories
            </Badge>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why{" "}
              <span className="bg-gradient-to-r from-[#35E0ED] to-[#0074E5] bg-clip-text text-transparent">
                Choose us ?
              </span>
            </h2>
            <p className="text-gray-400">
              Industry-leading capabilities backed by proven result
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl 
  border border-gray-700/50 
  bg-gradient-to-br from-gray-800/40 to-gray-900/40 
  hover:border-cyan-400/50 
  transition-all duration-300"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-2xl flex items-center justify-center group-hover:border-cyan-400/50 transition-all duration-300">
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full overflow-x-hidden bg-[#00020f] py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Our{" "}
                <span className="bg-gradient-to-r from-[#35E0ED] to-[#0074E5] bg-clip-text text-transparent">
                  Process
                </span>
              </h2>
              <p className="text-gray-400 mb-12">
                A proven methodology that ensures exceptional results every time
              </p>

              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-pink-500/20 to-cyan-500/20 p-1">
                <div className="bg-[#0f1621] rounded-2xl p-8">
                  <img
                    src="https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="AI Process Visualization"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-400/30 rounded-full flex items-center justify-center group-hover:bg-cyan-500/30 transition-all duration-300">
                      <span className="text-cyan-400 font-bold text-lg">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 pb-8 border-l-2 border-gray-700/50 pl-6 -ml-px group-hover:border-cyan-400/30 transition-colors">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full overflow-x-hidden bg-[#00020f] py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* LEFT CONTENT */}
              <div>
                <div className="text-6xl text-cyan-400 mb-4">"</div>

                <p className="text-white text-xl lg:text-2xl leading-relaxed mb-8">
                  THE SPIRAL transformed our data infrastructure completely.
                  Their DNA-inspired approach helped us achieve 40% better model
                  accuracy while reducing training time by 60%. It's like having
                  evolution work for your AI.
                </p>

                <div className="border-t border-gray-700/50 pt-6">
                  <p className="text-cyan-400 font-semibold">Andrea Gan</p>
                  <p className="text-gray-400 text-sm">
                    Chief Technology Officer, Omron
                  </p>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-64 h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-pink-500/20 to-cyan-500/20 p-1">
                  <div className="w-full h-full bg-[#0f1621] rounded-2xl overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Andrea Gan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FounderSection />
      <HomeCTASection />
      <Footer />
    </>
  );
};

export default WhyUs;
