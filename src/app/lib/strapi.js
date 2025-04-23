// const STRAPI_URL =
//   process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
// const STRAPI_URL = "https://luminous-presence-61d8f148f4.strapiapp.com";

export async function fetchWhyChooseUs() {
  try {
    const response = await fetch(
      `https://luminous-presence-61d8f148f4.strapiapp.com/api/why-choose-uses?populate=*`,
      {
        headers: {
          "Cache-Control": "no-cache",

          "Content-Type": "application/json",

          // You might want to add these additional headers for better control
        },
        cache: "no-store", // This is the modern equivalent for fetch
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
