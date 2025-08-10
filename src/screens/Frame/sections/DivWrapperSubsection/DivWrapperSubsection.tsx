import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";

export const DivWrapperSubsection = (): JSX.Element => {
  const teamMembers = [
    {
      id: 1,
      name: "Rajnish Tiwari",
      position: "Founder & CEO",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      linkedin: "https://www.linkedin.com/in/rajnish-tiwari",
    },
    {
      id: 2,
      name: "Anurag Giri",
      position: "Co-Founder & COO",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
      linkedin: "https://www.linkedin.com/in/anurag-giri-ab2a00148/",
    },
    {
      id: 3,
      name: "Devbrat Pandey",
      position: "Co-Founder & CTO",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      linkedin: "https://www.linkedin.com/in/devbrat-pandey-77879314a/",
    },
    {
      id: 4,
      name: "Kriti Bohra",
      position: "Director of Product",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200",
      linkedin: "https://www.linkedin.com/in/kriti-bohra-45a924161/",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-28 bg-[#00020f]">
      <div className="flex flex-col items-center gap-6 mx-auto max-w-[828px] px-4">
        <Badge className="px-4 py-2.5 rounded-full font-medium text-white text-base bg-transparent shadow-[0px_2px_12px_#07051880] backdrop-blur-[11.3px] before:content-[''] before:absolute before:inset-0 before:p-[0.94px] before:rounded-[100px] before:[background:linear-gradient(1deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_38%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none [background:radial-gradient(50%_50%_at_50%_0%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%),linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.08)_100%)]">
          Visionaries Leading AI’s Next Evolution
        </Badge>

        <h3 className="font-bold text-white text-[clamp(28px,6vw,64px)] leading-[1.2] tracking-[-1.28px] text-center font-['Rethink_Sans',Helvetica]">
          <span className="mr-1">The Minds Behind </span>
          <span className="bg-gradient-to-r from-[#35E0ED] to-[#0074E5] bg-clip-text text-transparent">
            The Spiral
          </span>
        </h3>

        <p className="text-center [font-family:'Rethink_Sans',Helvetica] font-medium text-lg md:text-xl tracking-[-0.40px] leading-7 text-[#adb2b9] max-w-2xl">
          Discover the creative minds shaping{" "}
          <span className="text-white">the Spiral’s</span> innovative solutions
          and guiding its strategic vision to new heights.
        </p>
      </div>

      <div className="relative mx-auto mt-16 max-w-[1030px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`flex flex-col group transform transition-transform duration-300 ${
                index % 2 === 0 ? "-translate-y-6" : "translate-y-6"
              }`}
            >
              {/* Image */}
              <div className="h-[282px] w-full overflow-hidden rounded-t-xl">
                <img
                  src={member.image}
                  alt={`${member.name} profile`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-xl"
                />
              </div>

              {/* Card body */}
              <Card className="rounded-none border-0 overflow-hidden text-center">
                <CardContent className="p-0">
                  <div className="h-[72px] flex flex-col justify-center items-center bg-[linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(52,55,71,1)_100%)] p-4">
                    <div className="[font-family:'Rethink_Sans',Helvetica] font-medium text-white text-sm leading-[26px]">
                      {member.name}
                    </div>
                    <div className="[font-family:'Rethink_Sans',Helvetica] font-medium text-[#adb2b9] text-xs leading-3">
                      {member.position}
                    </div>
                  </div>
                </CardContent>

                {/* Footer - Hidden until hover */}
                <CardFooter className="p-0 h-[31px] overflow-hidden rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full flex items-center justify-center bg-[linear-gradient(90deg,rgba(79,57,246,0.8)_0%,rgba(0,146,184,0.8)_100%)] cursor-pointer"
                  >
                    <div className="[font-family:'Rethink_Sans',Helvetica] font-semibold text-white text-[10px] tracking-[-0.10px] leading-6 group-hover:scale-110 transition-transform duration-300">
                      VIEW PROFILE
                    </div>
                  </a>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
