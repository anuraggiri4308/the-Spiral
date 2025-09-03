import React, { useState } from "react";
import { CheckIcon, ArrowUpRightIcon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";
import { Header } from "../../commonComponents/Header/header";
import heroBgImg from "/public/images/bookDemoBg3.png";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../../../../components/ui/dialog";

export const BookDemo = (): JSX.Element => {
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    email: "",
    companyName: "",
    countryName: "",
    projectDescription: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showErrors, setShowErrors] = useState(false);
  const [open, setOpen] = useState(false);

  const features = [
    "Cut labeling time without cutting accuracy",
    "Personalize workflows for your domain",
    "Build resilient data pipelines that scale",
  ];

  const budgetOptions = [
    { id: "under-50k", label: "<$50k" },
    { id: "50k-250k", label: "$50-250k" },
    { id: "250k-1m", label: "$250k-1M" },
    { id: "1m-plus", label: "$1M+" },
  ];

  const serviceOptions = [
    {
      id: "data-annotation",
      label: "Data Annotation and Curation for Autonomy",
    },
    { id: "data-generation", label: "Data Generation and RLHF for LLMs" },
    {
      id: "enterprise-genai",
      label: "Enterprise: GenAI Solutions and GenAI Platform",
    },
    { id: "model-test", label: "Model Test and Evaluation" },
    {
      id: "public-sector",
      label: "Public Sector: Defense, Government, and Non-Profits",
    },
    { id: "other", label: "Other" },
  ];

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    if (checked) {
      setSelectedServices([...selectedServices, serviceId]);
    } else {
      setSelectedServices(selectedServices.filter((id) => id !== serviceId));
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (showErrors && errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please complete this required field";
    }
    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = "Please complete this required field";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please complete this required field";
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Please complete this required field";
    }
    if (!formData.countryName.trim()) {
      newErrors.countryName = "Please complete this required field";
    }
    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = "Please complete this required field";
    }
    if (!selectedBudget) {
      newErrors.budget = "Please complete this required field";
    }
    if (selectedServices.length === 0) {
      newErrors.services = "Please complete this required field";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    setShowErrors(true);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully", {
        formData,
        selectedBudget,
        selectedServices,
      });
      setOpen(true); // ✅ open success dialog
    }
  };

  return (
    <>
      <Header />

      <section
        className="grid grid-cols-1 lg:grid-cols-2 w-full py-10 lg:py-16 gap-8 lg:gap-8 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBgImg})` }}
      >
        <div className="fflex flex-col w-full lg:max-w-[661px] items-center gap-14 order-2 lg:order-1 py-6 ml-0 lg:ml-12">
          <div className="flex flex-col w-full max-w-[619px] items-start gap-8">
            <h1 className="w-full max-w-[540px] [font-family:'Rethink_Sans',Helvetica] font-semibold text-absolutewhite text-4xl md:text-4xl tracking-[0] leading-[57.6px]">
              Let&apos;s Evolve Your AI Together?
            </h1>
            <p className="w-full [font-family:'Rethink_Sans',Helvetica] font-normal text-[#adb2b9] text-xl tracking-[0] leading-7">
              The Spiral empowers teams to accelerate model training with
              smarter data. Get a hands-on demo and see how we:
            </p>
          </div>
          <div className="flex flex-col items-start gap-14 w-full">
            <div className="flex flex-col items-start gap-6 w-full">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 w-full">
                  <CheckIcon className="w-7 h-7 text-white" />
                  <span className="[font-family:'Rethink_Sans',Helvetica] font-medium text-white text-xl tracking-[-1.00px] leading-7">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            <Card className="w-full max-w-[469px] h-[238.25px] bg-[url(/bg.png)] bg-[100%_100%] border-0">
              <CardContent className="relative w-[411px] h-[178px] top-[30px] left-[30px] p-0">
                <img
                  className="w-[101px] h-[15px] mb-[35px]"
                  alt="Review"
                  src="/review.png"
                />
                <blockquote className="w-[409px] font-regular-16px font-[number:var(--regular-16px-font-weight)] text-white text-[length:var(--regular-16px-font-size)] tracking-[var(--regular-16px-letter-spacing)] leading-[var(--regular-16px-line-height)] [font-style:var(--regular-16px-font-style)] mb-[35px]">
                  &#34;We love Landingfolio! Our designers were using it for
                  their projects, so we already knew what kind of design they
                  want.&#34;
                </blockquote>
                <div className="flex items-center gap-[15px]">
                  <img
                    className="w-[45px] h-[45px] rounded-[158.47px] object-cover"
                    alt="Devon Lane"
                    src="/bg-1.png"
                  />
                  <div className="flex flex-col">
                    <div className="font-bold-13px font-[number:var(--bold-13px-font-weight)] text-white text-[length:var(--bold-13px-font-size)] tracking-[var(--bold-13px-letter-spacing)] leading-[var(--bold-13px-line-height)] [font-style:var(--bold-13px-font-style)]">
                      Devon Lane
                    </div>
                    <div className="font-regular-13px font-[number:var(--regular-13px-font-weight)] text-[#797e85] text-[length:var(--regular-13px-font-size)] tracking-[var(--regular-13px-letter-spacing)] leading-[var(--regular-13px-line-height)] [font-style:var(--regular-13px-font-style)]">
                      DLDesign.co
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Card
          className="flex-shrink-0 w-full lg:w-[507px] bg-[#0f1426] rounded-[20px] 
             shadow-[0px_10px_15px_#00000008,0px_3px_11px_#0000000f] border-0 
             order-1 lg:order-2 
             mx-auto lg:ml-auto" // 👉 centers on mobile/tablet, pushes right on desktop
        >
          <CardContent className="p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col w-full  items-start gap-8">
              <h2 className="[font-family:'Rethink_Sans',Helvetica] font-bold text-white text-[28px] tracking-[0] leading-[38px]">
                Send us a message
              </h2>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-start gap-8 w-full"
              >
                <div className="flex flex-col items-start gap-0 w-full">
                  <Label className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#797e85] text-base tracking-[0] leading-6">
                    Your Name*
                  </Label>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={`bg-transparent border-0 border-b rounded-none px-0 py-2 h-auto focus-visible:ring-0 text-white placeholder:text-[#797e85] ${
                      showErrors && errors.name
                        ? "border-red-500 focus-visible:border-red-500"
                        : "border-[#797e85] focus-visible:border-white"
                    }`}
                  />
                  {showErrors && errors.name && (
                    <span className="text-red-500 text-sm [font-family:'Rethink_Sans',Helvetica]">
                      {errors.name}
                    </span>
                  )}
                </div>
                <div className="flex flex-col items-start gap-0 w-full">
                  <Label className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#797e85] text-base tracking-[0] leading-6">
                    Job Title*
                  </Label>
                  <Input
                    value={formData.jobTitle}
                    onChange={(e) =>
                      handleInputChange("jobTitle", e.target.value)
                    }
                    className={`bg-transparent border-0 border-b rounded-none px-0 py-2 h-auto focus-visible:ring-0 text-white placeholder:text-[#797e85] ${
                      showErrors && errors.jobTitle
                        ? "border-red-500 focus-visible:border-red-500"
                        : "border-[#797e85] focus-visible:border-white"
                    }`}
                  />
                  {showErrors && errors.jobTitle && (
                    <span className="text-red-500 text-sm [font-family:'Rethink_Sans',Helvetica]">
                      {errors.jobTitle}
                    </span>
                  )}
                </div>
                <div className="flex flex-col items-start gap-0 w-full">
                  <Label className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#797e85] text-base tracking-[0] leading-6">
                    Work E-mail Address*
                  </Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`bg-transparent border-0 border-b rounded-none px-0 py-2 h-auto focus-visible:ring-0 text-white placeholder:text-[#797e85] ${
                      showErrors && errors.email
                        ? "border-red-500 focus-visible:border-red-500"
                        : "border-[#797e85] focus-visible:border-white"
                    }`}
                  />
                  {showErrors && errors.email && (
                    <span className="text-red-500 text-sm [font-family:'Rethink_Sans',Helvetica]">
                      {errors.email}
                    </span>
                  )}
                </div>
                <div className="flex flex-col items-start gap-0 w-full">
                  <Label className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#797e85] text-base tracking-[0] leading-6">
                    Company Name*
                  </Label>
                  <Input
                    value={formData.companyName}
                    onChange={(e) =>
                      handleInputChange("companyName", e.target.value)
                    }
                    className={`bg-transparent border-0 border-b rounded-none px-0 py-2 h-auto focus-visible:ring-0 text-white placeholder:text-[#797e85] ${
                      showErrors && errors.companyName
                        ? "border-red-500 focus-visible:border-red-500"
                        : "border-[#797e85] focus-visible:border-white"
                    }`}
                  />
                  {showErrors && errors.companyName && (
                    <span className="text-red-500 text-sm [font-family:'Rethink_Sans',Helvetica]">
                      {errors.companyName}
                    </span>
                  )}
                </div>
                <div className="flex flex-col items-start gap-0 w-full">
                  <Label className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#797e85] text-base tracking-[0] leading-6">
                    Country Name*
                  </Label>
                  <Input
                    value={formData.countryName}
                    onChange={(e) =>
                      handleInputChange("countryName", e.target.value)
                    }
                    className={`bg-transparent border-0 border-b rounded-none px-0 py-2 h-auto focus-visible:ring-0 text-white placeholder:text-[#797e85] ${
                      showErrors && errors.countryName
                        ? "border-red-500 focus-visible:border-red-500"
                        : "border-[#797e85] focus-visible:border-white"
                    }`}
                  />
                  {showErrors && errors.countryName && (
                    <span className="text-red-500 text-sm [font-family:'Rethink_Sans',Helvetica]">
                      {errors.countryName}
                    </span>
                  )}
                </div>
                <div className="flex flex-col h-[124px] items-start gap-0 w-full">
                  <Label className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#797e85] text-base tracking-[0] leading-6">
                    Please describe your project in detail (data type, volume,
                    timeline, budget, etc.)*
                  </Label>
                  <Textarea
                    value={formData.projectDescription}
                    onChange={(e) =>
                      handleInputChange("projectDescription", e.target.value)
                    }
                    className={`bg-transparent border-0 border-b rounded-none px-0 py-2 h-auto resize-none focus-visible:ring-0 flex-1 text-white placeholder:text-[#797e85] ${
                      showErrors && errors.projectDescription
                        ? "border-red-500 focus-visible:border-red-500"
                        : "border-[#797e85] focus-visible:border-white"
                    }`}
                  />
                  {showErrors && errors.projectDescription && (
                    <span className="text-red-500 text-sm [font-family:'Rethink_Sans',Helvetica]">
                      {errors.projectDescription}
                    </span>
                  )}
                </div>
                <div className="flex flex-col w-full items-start gap-4">
                  <Label className="[font-family:'Rethink_Sans',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
                    Project Budget*
                  </Label>
                  <RadioGroup
                    value={selectedBudget}
                    onValueChange={setSelectedBudget}
                    className="flex flex-col gap-3"
                  >
                    {budgetOptions.map((option) => (
                      <div key={option.id} className="flex items-center gap-3">
                        <RadioGroupItem
                          value={option.id}
                          id={option.id}
                          className="w-4 h-4 border-[1.6px] border-[#797e85] text-white"
                        />
                        <Label
                          htmlFor={option.id}
                          className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#c7c7c7] text-sm tracking-[0] leading-5 cursor-pointer"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                  {showErrors && errors.budget && (
                    <span className="text-red-500 text-sm [font-family:'Rethink_Sans',Helvetica]">
                      {errors.budget}
                    </span>
                  )}
                </div>
                <div className="flex flex-col w-full items-start gap-4">
                  <Label className="[font-family:'Rethink_Sans',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
                    What can we help with? Select all that apply*
                  </Label>
                  <div className="flex flex-col gap-3">
                    {serviceOptions.map((option) => (
                      <div key={option.id} className="flex items-center gap-3">
                        <Checkbox
                          id={option.id}
                          checked={selectedServices.includes(option.id)}
                          onCheckedChange={(checked) =>
                            handleServiceChange(option.id, checked as boolean)
                          }
                          className="w-4 h-4 border-[1.6px] border-[#797e85] rounded-[3px] data-[state=checked]:bg-white data-[state=checked]:text-black"
                        />
                        <Label
                          htmlFor={option.id}
                          className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#c7c7c7] text-sm tracking-[0] leading-5 cursor-pointer"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                  {showErrors && errors.services && (
                    <span className="text-red-500 text-sm [font-family:'Rethink_Sans',Helvetica]">
                      {errors.services}
                    </span>
                  )}
                </div>
                <Separator className="w-full h-px bg-[#797e85]" />
                <p className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#c7c7c7] text-sm tracking-[0] leading-5">
                  <span className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#c7c7c7] text-sm tracking-[0] leading-5">
                    By submitting this form, your information will be processed
                    in accordance with our{" "}
                  </span>
                  <span className="font-bold underline">Privacy Policy.</span>
                </p>
                <Button
                  type="submit"
                  className="w-full h-12 px-4 py-3 bg-[linear-gradient(90deg,rgba(79,57,246,1)_0%,rgba(0,146,184,1)_100%)] rounded-[32px] hover:opacity-90 h-auto"
                >
                  <div className="flex h-6 items-center justify-center gap-1">
                    <span className="[font-family:'Rethink_Sans',Helvetica] font-semibold text-white text-lg tracking-[-0.54px] leading-6">
                      Submit
                    </span>
                    <ArrowUpRightIcon className="w-6 h-6" />
                  </div>
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </section>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader className="flex flex-col gap-3">
            <DialogTitle>
              Cheers,{" "}
              <span className="bg-gradient-to-r from-[#35E0ED] to-[#0074E5] bg-clip-text text-transparent font-semibold">
                {formData.name || "Friend"}!
              </span>
            </DialogTitle>
            <DialogDescription>
              Your request has been submitted successfully. We’ll contact you
              shortly. Try the live demo in the meantime.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <div className="flex flex-col items-center gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/anurag-giri-ab2a00148/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2  bg-white rounded-[32px] hover:opacity-80 font-medium shadow-md text-black transition-all duration-200"
              >
                Live Demo
              </a>
            </div>

            {/* <Button onClick={() => setOpen(false)} className="mt-4">
              See Live Demo!
            </Button> */}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
