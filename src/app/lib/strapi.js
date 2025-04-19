const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function fetchWhyChooseUs() {
  try {
    const response = await fetch(
      `${NEXT_PUBLIC_STRAPI_URL}/api/why-choose-uses?populate=*`,
      {
        next: { revalidate: 60 }, // Optional revalidation
      }
    );

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const responseData = await response.json();

    // Check if data exists and has the expected structure
    if (!responseData.data || !Array.isArray(responseData.data)) {
      throw new Error("Invalid data structure from Strapi");
    }
    console.log("responseData", responseData);
    // Assuming you want the first entry if multiple exist
    const item = responseData.data[0];

    return {
      heading: item.Heading || item.heading || "",
      title: item.Title || "",
      description: item.Description || "",
      mainImage: item.image || null,
      features: item.Feature || [],
    };
  } catch (error) {
    console.error("Strapi fetch error:", error);
    return null;
  }
}
