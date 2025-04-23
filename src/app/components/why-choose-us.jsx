"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { cn } from "../lib/utils";

const staticFallbackData = {
  heading: "Why Choose Us",
  title: "We Are Different From Others",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cupiditate accusantium recusandae soluta explicabo hic!",
  mainImage: {
    url: "/news-1.jpg",
  },
  features: [
    {
      id: 1,
      title: "Industry Experts",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quas dolores nam ipsum odit quod fuge numquam hic quo!",
    },
    {
      id: 2,
      title: "Dedicated Team",
      description:
        "Our dedicated team ensures every client receives personalized service and expert advice.",
    },
    {
      id: 3,
      title: "Outcome Focused",
      description:
        "We focus on delivering measurable results that align with your business goals.",
    },
    {
      id: 4,
      title: "High Quality Service",
      description:
        "Exceeding expectations with exceptional service is our top priority.",
    },
    {
      id: 5,
      title: "Cyber Security Expert",
      description:
        "We prioritize the security of your systems with expert solutions and strategies.",
    },
  ],
};

export default function WhyChooseUs({ strapiData }) {
  const data =
    strapiData && strapiData.features ? strapiData : staticFallbackData;
  const [activeTab, setActiveTab] = useState(data.features[0]?.id || "");

  const imageUrl = data.mainImage?.url || "/fallback-image.jpg";

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-base sm:text-lg font-medium text-gray-700">
          {data.heading}
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          {data.title}
        </h3>
        <p className="mt-3 md:mt-4 text-sm sm:text-base text-gray-600 max-w-6xl mx-auto">
          {data.description}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center mt-8 md:mt-16">
        <div className="relative flex">
          <div className="rounded-full bg-[#A04F68] opacity-80 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] flex items-center justify-center p-4 sm:p-6 md:p-8 text-white relative z-10">
            {data.features.map(
              (feature) =>
                feature.id === activeTab && (
                  <div key={feature.id} className="text-center">
                    <h4 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
                      {feature.title}
                    </h4>
                    <p className="text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                )
            )}
          </div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/4 rounded-full overflow-hidden w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
            <Image
              src={imageUrl}
              alt="Professional working"
              width={400}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4 mt-4 md:mt-0">
          {data.features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(feature.id)}
              className={cn(
                "flex items-center w-full rounded-full py-2 sm:py-3 px-4 sm:px-6 transition-all text-sm sm:text-base",
                activeTab === feature.id
                  ? "bg-[#A04F68] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              )}
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              <span className="font-medium">{feature.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
