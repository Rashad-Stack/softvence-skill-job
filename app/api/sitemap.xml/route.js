import { NextResponse } from "next/server";
import axiosInstance from "@/lib/axios";

export async function GET() {
  const baseUrl = "https://softvence-skill-job.vercel.app";

  const { data } = await axiosInstance.get("/job/all");
  const jobs = data.data;

  const jobUrls = jobs
    .map((job) => {
      return `
  <url>
    <loc>${baseUrl}/job/${job.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
      `;
    })
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
  <url>
    <loc>${baseUrl}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/jobs</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  ${jobUrls}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
