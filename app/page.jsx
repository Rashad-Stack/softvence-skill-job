import DesignerRole from "@/components/HomeComponets/DesignerRole";
import axiosInstance from "@/lib/axios";

export const metadata = {
  title: "Explore Open Job Positions | Softvence",
  description:
    "Browse and apply for open developer and designer roles that match your skills. Choose the position that fits you best.",
  keywords: ["developer jobs", "designer roles", "remote jobs", "career opportunities", "open positions"],
  openGraph: {
    title: "Explore Open Job Positions | Softvence",
    description: "Find the best position for your skills from our list of open roles.",
    url: process.env.NEXT_PUBLIC_DOMAIN,
    type: "website",
    images: [
      {
        url: `lara.png`,
        width: 1200,
        height: 630,
        alt: "Job roles open - Choose your position",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Open Job Positions | Softvence",
    description: "Choose your next role as a developer or designer today.",
    images: [`${process.env.NEXT_PUBLIC_DOMAIN}/lara.png`],
  },
};

export default async function Home() {
  const { data } = await axiosInstance.get("/job/all");
  const allJobs = data.data;

  if(!allJobs){
    return <h1>No job available right now</h1>
  }

  return (
    <main>
      <section className="min-h-screen container mx-auto py-10 px-4 mt-[100px]">
        {/* Heading */}
        <header>
          <h1 className="text-[20px] sm:text-[20px] md:text-[30px] lg:text-[48px] font-semibold text-[#121212] lg:mb-6 mb-2 font-pop">
            Choose your <span className="text-[#038317]">position</span> that fits you.
          </h1>
          <p className="text-[16px] font-normal text-[#474747] font-pop max-w-2xl">
            Currently, the following positions are open. Feel free to apply to any role where your skills shine and you're excited to contribute.
          </p>
        </header>

        {/* Developer Roles */}
        <DesignerRole designerJobs={allJobs} developer={true} />

        {/* Designer Roles */}
        <DesignerRole designerJobs={allJobs} developer={false} />
      </section>
    </main>
  );
}
