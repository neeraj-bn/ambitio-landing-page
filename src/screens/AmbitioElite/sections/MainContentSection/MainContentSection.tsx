import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

const allProfiles = [
  // Top row profiles
  {
    id: "t1",
    src: "/image-90897.png",
    alt: "Image",
    bgColor: "bg-white",
    isRound: false,
    row: 0,
  },
  {
    id: "t2",
    src: "/image-167.png",
    alt: "Image",
    bgColor: "bg-[#4da6de]",
    isRound: true,
    row: 0,
  },
  {
    id: "t3",
    src: "/image-90852.png",
    alt: "Image",
    bgColor: "bg-white",
    isRound: false,
    row: 0,
  },
  {
    id: "t4",
    src: "/whatsapp-image-2023-09-08-at-7-40-3.png",
    alt: "Whatsapp image",
    bgColor: "bg-[#e6bc40]",
    isRound: true,
    row: 0,
  },
  {
    id: "t5",
    src: "/image-90851.png",
    alt: "Image",
    bgColor: "bg-white",
    isRound: false,
    row: 0,
  },
  {
    id: "t6",
    src: "/img-20230907-024520-1-1.png",
    alt: "Img",
    bgColor: "bg-[#e65640]",
    isRound: true,
    row: 0,
  },
  {
    id: "t7",
    src: "/image-90894-1.png",
    alt: "Image",
    bgColor: "bg-white",
    isRound: false,
    row: 0,
  },
  {
    id: "t8",
    src: "/image-90818-3.png",
    alt: "Image",
    bgColor: "bg-[#85af5b]",
    isRound: true,
    row: 0,
  },
  {
    id: "t9",
    src: "/image-90858.png",
    alt: "Image",
    bgColor: "bg-white",
    isRound: false,
    row: 0,
  },
  {
    id: "t10",
    src: "/pratikshit-3-1.png",
    alt: "Pratikshit",
    bgColor: "bg-[#b03771]",
    isRound: true,
    row: 0,
  },
  {
    id: "t11",
    src: "/image-90856.png",
    alt: "Image",
    bgColor: "bg-white",
    isRound: false,
    row: 0,
  },
  {
    id: "t12",
    src: "/image-90706.png",
    alt: "Image",
    bgColor: "bg-[#41b6a8]",
    isRound: true,
    row: 0,
  },
  {
    id: "t13",
    src: "/image-90898.png",
    alt: "Image",
    bgColor: "bg-white",
    isRound: false,
    row: 0,
  },

  // Middle row profiles
  {
    id: "m1",
    src: "/mitgraduationmay15th-146-1.png",
    alt: "Mitgraduationmayth",
    bgColor: "bg-[#cfa72f]",
    isRound: true,
    row: 1,
  },
  {
    id: "m2",
    src: "/image-90858-1.png",
    alt: "Image",
    bgColor: "bg-white",
    isRound: false,
    row: 1,
  },
  {
    id: "m3",
    src: "/image-90792.png",
    alt: "Image",
    bgColor: "bg-[#b14c94]",
    isRound: true,
    row: 1,
  },
  {
    id: "m4",
    src: "/image-90854.png",
    alt: "Image",
    bgColor: "bg-white",
    isRound: false,
    row: 1,
  },
  {
    id: "m5",
    src: "/image-90791.png",
    alt: "Image",
    bgColor: "bg-[#4663a7]",
    isRound: true,
    row: 1,
  },
  {
    id: "m6",
    src: "/image-90853.png",
    alt: "Image",
    bgColor: "bg-white",
    isRound: false,
    row: 1,
  },
  {
    id: "m7",
    src: "/img-20230907-024520-1-1.png",
    alt: "Img",
    bgColor: "bg-[#e65640]",
    isRound: false,
    row: 1,
  },
  {
    id: "m8",
    src: "/image-90896.png",
    alt: "Image",
    bgColor: "bg-white",
    isRound: false,
    row: 1,
  },
  {
    id: "m9",
    src: "/image-90793.png",
    alt: "Image",
    bgColor: "bg-[#579ec7]",
    isRound: true,
    row: 1,
  },
  {
    id: "m10",
    src: "/image-90899.png",
    alt: "Image",
    bgColor: "bg-white",
    isRound: false,
    row: 1,
  },
  {
    id: "m11",
    src: "/image-90759.png",
    alt: "Image",
    bgColor: "bg-[#a0bc52]",
    isRound: true,
    row: 1,
  },
  {
    id: "m12",
    src: "/image-90756.png",
    alt: "Image",
    bgColor: "bg-white",
    isRound: false,
    row: 1,
  },
  {
    id: "m13",
    src: "/image-90831.png",
    alt: "Image",
    bgColor: "bg-[#e65640]",
    isRound: true,
    row: 1,
  },

  // Bottom row profiles
  {
    id: "b1",
    src: "/image-90678.png",
    alt: "Image",
    bgColor: "bg-white",
    isRound: false,
    row: 2,
  },
  {
    id: "b2",
    src: "/image-90760.png",
    alt: "Image",
    bgColor: "bg-[#dd4e4e]",
    isRound: true,
    row: 2,
  },
  {
    id: "b3",
    src: "/image-90900.png",
    alt: "Image",
    bgColor: "bg-white",
    isRound: false,
    row: 2,
  },
  {
    id: "b4",
    src: "/img-20230907-024520-1-2.png",
    alt: "Img",
    bgColor: "bg-[#e6a640]",
    isRound: true,
    row: 2,
  },
  {
    id: "b5",
    src: "/image-162.png",
    alt: "Image",
    bgColor: "bg-white",
    isRound: false,
    row: 2,
  },
  {
    id: "b6",
    src: "/image-90832-1.png",
    alt: "Image",
    bgColor: "bg-[#e165a3]",
    isRound: true,
    row: 2,
  },
  {
    id: "b7",
    src: "/image-90669.png",
    alt: "Image",
    bgColor: "bg-white",
    isRound: false,
    row: 2,
  },
  {
    id: "b8",
    src: "/image-90834.png",
    alt: "Image",
    bgColor: "bg-[#7847a9]",
    isRound: true,
    row: 2,
  },
  {
    id: "b9",
    src: "/image-90901.png",
    alt: "Image",
    bgColor: "bg-white",
    isRound: false,
    row: 2,
  },
  {
    id: "b10",
    src: "/image-90866.png",
    alt: "Image",
    bgColor: "bg-[#e18b31]",
    isRound: true,
    row: 2,
  },
  {
    id: "b11",
    src: "/image-90754.png",
    alt: "Image",
    bgColor: "bg-white",
    isRound: false,
    row: 2,
  },
  {
    id: "b12",
    src: "/image-90833.png",
    alt: "Image",
    bgColor: "bg-[#646cb9]",
    isRound: true,
    row: 2,
  },
  {
    id: "b13",
    src: "/image-90754-1.png",
    alt: "Image",
    bgColor: "bg-white",
    isRound: false,
    row: 2,
  },
];

// Duplicate profiles for seamless looping
const createInfiniteProfiles = (profiles) => [...profiles, ...profiles];

const ProfileItem = ({ profile }) => (
  <div
    className={`relative w-20 h-20 mx-2.5 flex-shrink-0 ${profile.bgColor} ${
      profile.isRound ? "rounded-full" : "rounded-[18px]"
    } overflow-hidden ${
      !profile.isRound
        ? "border border-solid border-[#e6e6e6] shadow-[0px_0px_8px_#0000001a]"
        : "border-[0.9px] border-solid border-[#e6e6e6]"
    }`}
  >
    <img
      className="absolute w-auto h-auto max-w-full max-h-full object-cover"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      alt={profile.alt}
      src={profile.src}
    />
  </div>
);

export const MainContentSection = (): JSX.Element => {
  // Get profiles for each row
  const rowProfiles = [
    allProfiles.filter((profile) => profile.row === 0),
    allProfiles.filter((profile) => profile.row === 1),
    allProfiles.filter((profile) => profile.row === 2),
  ];

  return (
    <section className="flex flex-col items-center gap-2 w-full relative">
      {/* Profile grid background */}
      <div className="relative w-full overflow-hidden h-[400px]">
        <div className="relative w-full max-w-[1440px] mx-auto">
          {/* Semi-transparent white background */}
          <Card className="absolute w-[90%] max-w-[1313px] h-[280px] top-28 left-1/2 -translate-x-1/2 bg-white/80 border-none shadow-none">
            {/* Three animated rows */}
            {rowProfiles.map((profiles, rowIndex) => (
              <div
                key={`row-${rowIndex}`}
                className={`absolute w-full h-[80px] overflow-hidden`}
                style={{ top: `${rowIndex * 100}px` }}
              >
                <div
                  className={`flex items-center h-full ${
                    rowIndex % 2 === 0
                      ? "animate-marquee"
                      : "animate-marquee-reverse"
                  } whitespace-nowrap`}
                >
                  {createInfiniteProfiles(profiles).map((profile, index) => (
                    <ProfileItem
                      key={`${rowIndex}-${profile.id}-${index}`}
                      profile={profile}
                    />
                  ))}
                </div>
              </div>
            ))}
          </Card>

          {/* Crown icon in center */}
          <div className="absolute w-[120px] h-[120px] top-48 left-1/2 -translate-x-1/2 z-10">
            <div className="relative h-[120px] rounded-[26px]">
              <div className="absolute w-[120px] h-[120px] top-0 left-0 bg-[#2d0002] rounded-[26px] overflow-hidden shadow-[0px_0px_8.3px_2px_#aa050ecc,0px_0px_36px_22px_#aa050e66] opacity-75">
                <div className="relative w-56 h-[252px] top-[-71px] left-[-58px]">
                  <div className="absolute w-[129px] h-[129px] top-0 left-[95px] bg-[#b1060f] rounded-[64.58px] blur-[28.67px]" />
                  <div className="absolute w-[129px] h-[129px] top-[122px] left-px bg-[#b1060f] rounded-[64.58px] rotate-[-0.93deg] blur-[28.67px]" />
                </div>
              </div>

              <div className="absolute w-[109px] h-[109px] top-[5px] left-[5px] bg-[#2d0002] rounded-3xl overflow-hidden">
                <div className="relative w-56 h-[252px] top-[-71px] left-[-58px]">
                  <div className="absolute w-[129px] h-[129px] top-0 left-[95px] bg-[#b1060f] rounded-[64.58px] blur-[28.67px]" />
                  <div className="absolute w-[129px] h-[129px] top-[122px] left-px bg-[#b1060f] rounded-[64.58px] rotate-[-0.93deg] blur-[28.67px]" />
                  <img
                    className="absolute w-14 h-14 top-[97px] left-[85px]"
                    alt="Ph crown fill"
                    src="/ph-crown-fill.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Decorative side elements */}
          <img
            className="absolute w-[550px] h-[649px] top-[-150px] left-[-150px]"
            alt="Subtract"
            src="/subtract.svg"
          />
          <img
            className="absolute w-[550px] h-[649px] top-[-150px] right-[-150px]"
            alt="Subtract"
            src="/subtract-1.svg"
          />
        </div>
      </div>

      {/* Content section */}
      <div className="flex flex-col items-center justify-center gap-6 max-w-3xl mx-auto text-center px-4">
  <div className="flex flex-col items-center justify-center gap-2">
    <div className="flex flex-col items-center">
      <h1 className="font-semibold text-[#232323] text-6xl leading-[66px] mt-[-1px] mobile-headline">
        Give the best shot
      </h1>
      <div className="flex items-center gap-3 flex-wrap justify-center mobile-subhead">
        <span className="font-semibold text-[#232323] text-6xl leading-[66px] mt-[-1px]">
          at your
        </span>
        <span className="font-semibold text-6xl leading-[66px] mt-[-1px] bg-gradient-to-r from-[#b10612] via-[#8a0007] to-[#b10612] bg-clip-text text-transparent">
          Dream University
        </span>
      </div>
    </div>

    <p className="text-[22px] leading-[31.5px] mt-2 mobile-text">
      <span className="font-semibold text-[#696969]">
        Get expert help, personalised guidance, and all the support you
        need to{" "}
      </span>
      <span className="font-bold text-[#212121]">
        increase your chances of success with Ambitio Elite.
      </span>
    </p>
  </div>

  <Button className="bg-[#212121] text-white font-semibold text-lg px-14 py-8 h-14 rounded-xl mobile-button">
    10x your chances with Ambitio
  </Button>

  <style jsx global>{`
    /* Mobile-only styles (applied below 768px) */
    @media (max-width: 767px) {
      .mobile-headline,
      .mobile-subhead span {
        font-size: 2.25rem !important; /* text-4xl */
        line-height: 1.3 !important;
      }
      
      .mobile-subhead {
        flex-direction: column !important;
        gap: 0.25rem !important;
      }
      
      .mobile-text {
        font-size: 1rem !important; /* text-base */
        line-height: 1.5 !important;
      }
      
      .mobile-button {
        padding-top: 1rem !important;
        padding-bottom: 1rem !important;
        font-size: 1rem !important;
        height: auto !important;
      }
    }
  `}</style>
</div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          will-change: transform;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
};
