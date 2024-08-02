export const getTextFromHtml = (html, limit = "full") => {
  let description = html.replace(/<\/?[^>]+(>|$)/g, "").trim();
  description = description.replace(/\s+/g, " ");

  if (typeof limit === "number" && description.length > limit) {
    description = description.substring(0, limit - 3) + "...";
  }

  return description;
};
