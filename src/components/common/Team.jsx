import TeamCarousel from "../lightswind/team-carousel";
import DoodlePattern from "./DoodlePattern";
import founder from "../../../dazzling_images/Teams/founder.jpeg";
import anchalaMakeup from "../../../dazzling_images/Teams/anchala_makeup.jpeg";
import riyaMakeup from "../../../dazzling_images/Teams/Riya_makeup.jpeg";
import swetaHair from "../../../dazzling_images/Teams/sweta_hair.jpeg";
import menka from "../../assets/dazzling_images/Teams/menka_manager.jpeg";

// const teamMembers = [
//   {
//     id: "1",
//     name: "Meenakshi Shri",
//     role: "Founder",
//     image: founder,
//     bio: "Visionary leader with 10+ years of experience in beauty education and training.",
//   },
//   {
//     id: "2",
//     name: "Anchala",
//     role: "Skin faculty ",
//     image: anchalaMakeup,
//     bio: "",
//   },
//   {
//     id: "3",
//     name: "Riya",
//     role: "Makeup Faculty",
//     image: riyaMakeup,
//     bio: "Specializes in modern techniques and client transformation stories.",
//   },
//   {
//     id: "4",
//     name: "Sweta",
//     role: "Hair Faculty",
//     image: swetaHair,
//     bio: "Master of classic and contemporary hairstyling with years of expertise.",
//   },
//   {
//     id: "5",
//     name: "Menka Prasad",
//     role: "Academy manager & placement Counseller",
//     image: menka,
//     bio: "Master of classic and contemporary hairstyling with years of salon expertise.",
//   },
// ];
const teamMembers = [
  {
    id: "1",
    name: "Meenakshi Shri",
    role: "Founder",
    image: founder,
    bio: "A visionary leader and mentor with over 10 years of experience in beauty education and professional training. She is passionate about empowering students with industry-ready skills and confidence.",
  },
  {
    id: "2",
    name: "Anchala",
    role: "Skin Faculty",
    image: anchalaMakeup,
    bio: "An expert in skincare and cosmetology, specializing in advanced skin treatments and personalized skin solutions. She focuses on practical knowledge, hygiene, and client consultation skills.",
  },
  {
    id: "3",
    name: "Riya",
    role: "Makeup Faculty",
    image: riyaMakeup,
    bio: "A professional makeup artist known for modern techniques, bridal looks, and flawless transformations. She trains students in trending styles, product knowledge, and real-world client handling.",
  },
  {
    id: "4",
    name: "Sweta",
    role: "Hair Faculty",
    image: swetaHair,
    bio: "A skilled hair expert with strong expertise in classic and contemporary hairstyling. She guides students in haircutting, styling, hair treatments, and salon-ready techniques.",
  },
  {
    id: "5",
    name: "Menka Prasad",
    role: "Academy Manager & Placement Counsellor",
    image: menka,
    bio: "Handles academy operations and student placements with professionalism and care. She supports students in career guidance, interview preparation, and placement opportunities in the beauty industry.",
  },
];

function Team() {
  return (
    <section className="relative py-16 md:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white to-[#FFF7F2]">
      {/* Large Decorative Doodle Pattern - Subtle Background */}
      <DoodlePattern className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3 opacity-8 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] lg:w-[1600px] lg:h-[1600px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Reduced vertical gaps */}
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          {" "}
          {/* Reduced from mb-12/16/20 */}
          <p className="font-libre-franklin text-[#D09163] font-semibold text-sm md:text-base uppercase tracking-widest mb-0">
            {" "}
            {/* Reduced from mb-4 */}
            Meet Our Experts
          </p>
          <h2 className="font-playfair-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#424242] leading-tight">
            Top Management
            <br />
            <span className="text-[#D09163]">& Leaders</span>
          </h2>
          <p className="mt-3 text-lg md:text-xl text-gray-700 font-libre-franklin max-w-3xl mx-auto">
            {" "}
            {/* Reduced from mt-6 */}
            Passionate professionals dedicated to shaping the next generation of
            beauty experts.
          </p>
        </div>

        {/* Team Carousel - Reduced gap above */}
        <div className="mt-4 md:mt-8 lg:mt-10">
          {" "}
          {/* Reduced from mt-12/16/20 */}
          <TeamCarousel
            members={teamMembers}
            title="OUR TEAM"
            autoPlay={6000}
            onMemberChange={(member, index) => {
              // Optional: track active member
              // console.log("Active member:", member.name);
            }}
          />
        </div>

        {/* Optional CTA below carousel (uncomment if needed) */}
        {/* <div className="text-center mt-12">
          <p className="text-gray-600 font-libre-franklin text-lg">
            Ready to learn from the best?
          </p>
        </div> */}
      </div>
    </section>
  );
}

export default Team;
