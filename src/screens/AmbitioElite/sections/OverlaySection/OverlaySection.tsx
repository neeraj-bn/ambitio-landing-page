import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const OverlaySection = (): JSX.Element => {
  const statistics = [
    {
      value: "98.2%",
      description: "got into their Target Program",
    },
    {
      value: "4.96",
      description: "Google Rating",
    },
    {
      value: "5000+",
      description: "Students Assisted",
    },
  ];

  return (
    <>
      {/* Desktop Version (Only for large screens) */}
      <div className="hidden lg:block">
        <Card className="relative rounded-[20px] overflow-hidden mb-16 mx-16">
          <div className="relative">
            <img className="w-full h-[335px] object-cover" alt="Mask group" src="/mask-group.png" />
            <CardContent className="absolute inset-0 flex flex-col items-center justify-center py-14 px-[152px] bg-[#fffafad9] backdrop-blur-md">
              <div className="flex flex-col items-center gap-8 w-full">
                <div className="flex flex-col items-center gap-2">
                  <h2 className="font-['Space_Grotesk',Helvetica] text-4xl text-center leading-[39.6px] whitespace-nowrap">
                    <span className="font-bold text-[#232323]">We let </span>
                    <span className="font-bold text-primary-red">our numbers</span>
                    <span className="font-bold text-[#232323]"> do the talking</span>
                  </h2>
                  <p className="w-full max-w-[789px] font-['Nunito_Sans',Helvetica] font-semibold text-grey-500 text-2xl text-center leading-[30.9px]">
                    Our users love us and we know you will to! Explore our products.
                  </p>
                </div>
                <div className="flex w-full justify-between">
                  {statistics.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center w-1/3">
                      <div className="flex flex-col items-center gap-1">
                        <span className="font-['Space_Grotesk',Helvetica] font-bold text-primary-red text-[64px] text-center tracking-[-1.28px] leading-[72px]">
                          {stat.value}
                        </span>
                        <span className="font-['Space_Grotesk',Helvetica] font-medium text-grey-500 text-[22px] text-center leading-7">
                          {stat.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <div className="absolute w-[335px] h-[335px] top-[190px] right-[-100px] bg-[#f72e38] rounded-[167.5px] blur-[100px] opacity-20" />
            <div className="absolute w-[335px] h-[335px] top-[-180px] left-[-100px] bg-[#f72e38] rounded-[167.5px] blur-[100px] opacity-20" />
          </div>
        </Card>
      </div>

      {/* Tablet & Mobile Version (for md and smaller) */}
      <div className="block lg:hidden">
  <Card className="relative rounded-[20px] overflow-hidden mb-8 mx-4 py-8">
    <div className="relative h-[500px] flex items-center justify-center">
      <img className="w-full h-full object-cover" alt="Mask group" src="/mask-group.png" />
      <CardContent className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-[#fffafad9] backdrop-blur-md text-center">
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-3xl font-bold font-['Space_Grotesk',Helvetica]">
              <span className="text-[#232323]">We let </span>
              <span className="text-primary-red">our numbers</span>
              <span className="text-[#232323]"> do the talking</span>
            </h2>
            <p className="text-lg font-semibold font-['Nunito_Sans',Helvetica] text-grey-500">
              Our users love us and we know you will too! Explore our products.
            </p>
          </div>
          <div className="flex flex-col items-center gap-8 w-full">
            {statistics.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <span className="text-5xl font-bold font-['Space_Grotesk',Helvetica] text-primary-red">
                  {stat.value}
                </span>
                <span className="text-xl font-medium font-['Space_Grotesk',Helvetica] text-grey-500">
                  {stat.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <div className="absolute w-[200px] h-[200px] top-[150px] right-[-50px] bg-[#f72e38] rounded-full blur-[50px] opacity-20" />
      <div className="absolute w-[200px] h-[200px] top-[-100px] left-[-50px] bg-[#f72e38] rounded-full blur-[50px] opacity-20" />
    </div>
  </Card>
</div>

    </>
  );
};
