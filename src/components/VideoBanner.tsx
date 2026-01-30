"use client";
import TextPressure from "@/components/TextPressure";

export const VideoBanner = () => {
  return (
    <section className="bg-black relative overflow-hidden pb-[5px]">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_bottom,#000,#30D0C8_34%,#30D0C8_65%,#30D0C8_82%)]"></div>
      <div className="relative z-10 w-full">
        <div className="relative h-[85vh] sm:h-[90vh] lg:h-[95vh]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/home.mov"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="pointer-events-none absolute inset-0 bg-black/45"></div>
          <div className="pointer-events-none absolute left-0 top-[calc(42%+50px)] z-20 w-full -translate-y-1/2 text-center text-white">
            <div className="mx-auto w-[96vw] sm:w-[92vw]">
              <div style={{ position: "relative", height: "clamp(120px, 18vw, 240px)", width: "100%" }}>
                <TextPressure
                  text="构建具身智能时代的数据引擎"
                  flex={false}
                  alpha={false}
                  stroke={false}
                  width={false}
                  weight
                  italic
                  textColor="#F5F5F5"
                  minFontSize={16}
                  className="px-2 text-center leading-tight tracking-[0.06em] drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)] whitespace-normal break-words"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
