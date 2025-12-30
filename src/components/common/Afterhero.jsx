import BookCallButton from "../Ui/BookCallButton";
import CounterStat from "../Ui/CounterStat";

export default function Afterhero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
          {/* Left column - Text Content */}
          <div className="flex flex-col justify-start">
            <div className="mb-6">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/ae102de8e02824e85a1a2e68d783cff7786b1a1b?width=136"
                alt="Graduation Cap"
                className="w-[68px] h-[68px]"
              />
            </div>

            <h2 className="font-playfair-display text-[29px] font-bold text-black leading-[33px] mb-6">
              India's Leading Provider of Private Beauty Training since 2003.
            </h2>

            <p className="font-libre-franklin text-[18px] text-black leading-[33px] mb-10 max-w-[633px]">
              <span className="font-bold">Dazzling World</span> is India's
              premier beauty academy, dedicated to transforming passion into
              profession. With over two decades of excellence, we offer
              comprehensive training in makeup artistry, hairstyling, skincare,
              and salon management. Our{" "}
              <span className="font-bold">
                internationally certified courses
              </span>{" "}
              combine hands-on practice with industry expertise, preparing
              students for successful careers in the{" "}
              <span className="font-bold">global beauty industry</span>.
            </p>

            <div className="mt-auto">
              <BookCallButton />
            </div>
          </div>

          {/* Right column - Statistics */}
          <div className="flex flex-col">
            {/* Highlighted Main Stat - OVER 128,000 Students Trained */}
            <div className="bg-gradient-to-br from-[#D09163]/10 to-[#E8B998]/5 rounded-3xl p-8 md:p-10 mb-10 text-center border border-[#D09163]/20">
              <p className="font-libre-franklin text-[#D09163] text-lg md:text-xl font-semibold uppercase tracking-wider mb-2">
                Over
              </p>
              <p className="font-playfair-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#424242] leading-tight">
                10,000
              </p>
              <p className="font-libre-franklin text-xl md:text-2xl text-[#424242] mt-3">
                Students Trained
              </p>
            </div>

            {/* Other Stats Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-8 lg:gap-x-12">
              {/* 120+ Available Courses */}
              <CounterStat
                value="20+"
                label="Available Courses"
                gridClass="col-span-1"
              />

              {/* 16 Qualified & Experienced Tutors */}
              <CounterStat
                value="8"
                label={
                  <>
                    Qualified &<br />
                    Experienced Tutors
                  </>
                }
                gridClass="col-span-1"
              />

              {/* 8 Training Centers */}
              <CounterStat
                value="2"
                label={
                  <>
                    Training
                    <br />
                    Centers
                  </>
                }
                gridClass="col-span-1"
              />

              {/* 35 Years Experience */}
              <CounterStat
                value="25"
                label={
                  <>
                    Years
                    <br />
                    Experience
                  </>
                }
                gridClass="col-span-1"
              />
            </div>

            {/* Update Date */}
            <div className="mt-auto pt-8">
              <p className="font-libre-franklin text-[17px] font-normal leading-[33px] text-black text-right">
                Updated as of 31 December 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
