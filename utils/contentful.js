const contentful = require("contentful");
const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const environment = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT;

const getJSClient = () => {
  return contentful.createClient({
    space,
    accessToken,
    environment,
  });
};

export async function fetchEntries(locale = "en-US") {
  const client = getJSClient();
  const entries = await client.getEntries({
    content_type: "crevier",
    locale,
  });
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType.name}.`);
}

export async function getEntryById(id, locale = "en-US") {
  const client = getJSClient();
  const entry = await client.getEntry(id, { locale });
  return entry;
}

export async function fetchEntryBySlug(slug, locale = "en-US") {
  const client = getJSClient();

  const entries = await client.getEntries({
    content_type: "crevier",
    locale,
    "fields.slug": slug,
    limit: 1,
    include: 5,
  });
  if (entries.items) return entries.items[0];
  console.log(`Error getting Entries for ${contentType.name}.`);
}

export async function fetchOppositeEntrySlug(id, currentLocale) {
  const client = getJSClient();
  const oppositeLocale = currentLocale === "en-US" ? "fr-CA" : "en-US";
  const entry = await client.getEntry(id, { locale: oppositeLocale });
  return entry.fields.slug;
}
