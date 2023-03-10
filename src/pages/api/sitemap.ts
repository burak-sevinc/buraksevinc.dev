import { getAllSlugs } from "@/utils/mdx";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/xml");

  // Instructing the Vercel edge to cache the file
  res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");

  const main = [
    {
      slug: "",
      date: "2023-02-28",
    },
    {
      slug: "projects",
      date: "2023-02-28",
    },
  ];

  const siteUrl = process.env.WEBSITE_URL;
  const projectSlugs = await getAllSlugs();
  
  // generate sitemap here
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${main.map(
        (item) =>
            `
            <url>
              <loc>${siteUrl}/${item.slug}</loc>
              <lastmod>${item.date}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.6</priority>
            </url>
            `
      )}
      ${projectSlugs
        .map(
          (item) =>
            `
            <url>
              <loc>${siteUrl}/projects/${item.slug}</loc>
              <lastmod>${item.publishedAt}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.6</priority>
            </url>
            `
        )
        .join("")}
      </urlset>`;

  res.end(xml);
}
