import DoodlePattern from "./DoodlePattern";

const processSteps = [
  {
    id: 1,
    title: "Explore & Enroll:",
    description: "Discover our courses and register easily.",
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/4624f66ab5b1692badcb0e9a70c25692018298d2?width=194",
  },
  {
    id: 2,
    title: "Goal-Oriented Training",
    description:
      "Learn from industry experts through a perfect blend of theory and hands-on practice.",
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/ebdd2ca17492ad470512366d3d2c8044a17a330d?width=140",
  },
  {
    id: 3,
    title: "Live Practice & Mini-Courses",
    description:
      "Gain real-world experience with live sessions and mini-courses.",
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/27a81a122365eb1da79476639a67b7e404a3d3d5?width=150",
  },
  {
    id: 4,
    title: "Guaranteed Placement Assistance",
    description:
      "Secure job opportunities with top salons and wellness brands.",
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/27a81a122365eb1da79476639a67b7e404a3d3d5?width=150",
  },
];

export default function Process() {
  return (
    <section className="relative bg-[#D09163] py-12 md:py-16 lg:py-20">
      {/* Doodle Pattern Background */}
      <DoodlePattern />

      <div className="relative z-10 max-w-[1376px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="flex items-center justify-center mb-4 md:mb-6">
            <div className="h-[1px] w-6 bg-white hidden sm:block"></div>
            <p className="font-libre-franklin text-white font-medium text-[11.331px] uppercase tracking-[1px] leading-[31px] mx-4 sm:mx-6">
              OUR PROCESS
            </p>
            <div className="h-[1px] w-6 bg-white hidden sm:block"></div>
          </div>
          <h2 className="font-playfair-display text-3xl sm:text-4xl md:text-[36px] font-bold text-white leading-[31px] tracking-[1px] capitalize">
            How Does it Work?
          </h2>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className="bg-[#D09163] border-2 border-dashed border-[#F9F9F9] rounded-[20px] p-6 md:p-7 flex flex-col min-h-[225px] relative"
            >
              {/* Icon positioned at top */}
              <div className="mb-4 md:mb-6">
                <img
                  src={step.icon}
                  alt={step.title}
                  className={`
                    ${index === 0 ? "w-[97px] h-[99px]" : ""}
                    ${index === 1 ? "w-[70px] h-[71px]" : ""}
                    ${index === 2 ? "w-[75px] h-[77px]" : ""}
                    ${index === 3 ? "w-[75px] h-[77px]" : ""}
                    object-contain
                  `}
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="font-plus-jakarta font-bold text-[22px] text-[#F9F9F9] leading-[24.2px] mb-3 md:mb-4">
                  {step.title}
                </h3>

                <p className="font-plus-jakarta font-medium text-[16px] text-[#F9F9F9] leading-[25.6px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
