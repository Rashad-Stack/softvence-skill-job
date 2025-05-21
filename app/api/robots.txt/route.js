import { NextResponse } from "next/server";

export async function GET() {
  const content = `
User-agent: *
Disallow:

Sitemap: https://softvence-skill-job.vercel.app/api/sitemap.xml
Host: https://softvence-skill-job.vercel.app
  `.trim();

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
