// src/app/why-choose-us/page.tsx
// import { fetchWhyChooseUs } from "@/lib/strapi";
import WhyChooseUs from "../components/why-choose-us";
import { fetchWhyChooseUs } from "../lib/strapi";
// import { fetchWhyChooseUs } from "../lib/strapi";
// import WhyChooseUs from "@/components/WhyChooseUs";

export default async function WhyChooseUsPage() {
  // const data = await fetchWhyChooseUs();

  return (
    <WhyChooseUs
    //  strapiData={data}
    />
  );
}
