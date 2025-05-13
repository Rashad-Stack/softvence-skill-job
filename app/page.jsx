import DesignerRole from "@/components/HomeComponets/DesignerRole";

export default function Home() {
  return (
    <main>
      <section>
        <div className="min-h-screen container mx-auto py-10 px-4 mt-[100px]">
          {/* Title */}
          <h2 className=" lg:text-[48px] xl:text-[48px] 2xl:text-[48px] md:text-[30px] sm:text-[20px] text-[20px] font-semibold text-[#121212] lg:mb-6 mb-2 font-pop">
            Choose your <span className="text-[#038317]">position</span> that
            fits you.
          </h2>
          <p className="text-[16px] font-normal text-[#474747] font-pop">
            Currently following positions are open, feel free to apply any one
            where you are skilled and prefer to join.
          </p>

          {/* Designer Roles */}
          <DesignerRole />

          {/* Developer Roles */}
        </div>
      </section>
    </main>
  );
}
