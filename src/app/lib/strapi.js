const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function fetchWhyChooseUs() {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/why-choose-uses?populate=*`,
      {
        headers: {
          "Cache-Control": "no-cache",
        },
      }
    );

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const responseData = await response.json();

    if (!responseData.data || !Array.isArray(responseData.data)) {
      throw new Error("Invalid data structure from Strapi");
    }

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
