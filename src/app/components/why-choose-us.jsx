"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { cn } from "../lib/utils";

export default function WhyChooseUs({ strapiData }) {
  const isLoading = !strapiData || !strapiData.features;
  const [activeTab, setActiveTab] = useState(
    strapiData?.features?.[0]?.id || ""
  );

  const imageUrl = strapiData?.mainImage?.url
    ? strapiData.mainImage.url
    : "/fallback-image.jpg";

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-base sm:text-lg font-medium text-gray-700">
          {isLoading ? (
            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mx-auto" />
          ) : (
            strapiData.heading
          )}
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          {isLoading ? (
            <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mx-auto" />
          ) : (
            strapiData.title
          )}
        </h3>
        <p className="mt-3 md:mt-4 text-sm sm:text-base text-gray-600 max-w-6xl mx-auto">
          {isLoading ? (
            <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse mx-auto" />
          ) : (
            strapiData.description
          )}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center mt-8 md:mt-16">
        <div className="relative flex">
          <div className="rounded-full bg-[#A04F68] opacity-80 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] flex items-center justify-center p-4 sm:p-6 md:p-8 text-white relative z-10">
            {isLoading ? (
              <div className="space-y-2 text-center">
                <div className="h-5 w-32 bg-white/30 rounded animate-pulse mx-auto" />
                <div className="h-4 w-48 bg-white/30 rounded animate-pulse mx-auto" />
              </div>
            ) : (
              strapiData.features.map(
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
              )
            )}
          </div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/4 rounded-full overflow-hidden w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
            {isLoading ? (
              <div className="w-full h-full bg-gray-200 animate-pulse" />
            ) : (
              <Image
                src={imageUrl}
                alt="Professional working"
                width={400}
                height={400}
                className="object-cover w-full h-full"
                priority
              />
            )}
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4 mt-4 md:mt-0">
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="h-10 rounded-full bg-gray-200 animate-pulse"
                />
              ))
            : strapiData.features.map((feature) => (
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
