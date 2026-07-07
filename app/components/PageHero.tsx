import Image, { StaticImageData } from "next/image";
import React from "react";

type PageHeroProps = {
  image: StaticImageData;
  alt: string;
  title: string;
  subtitle?: string;
};

const PageHero = ({ image, alt, title, subtitle }: PageHeroProps) => {
  return (
    <div className="relative w-full max-w-[1310px] mx-auto mt-8 px-4 md:px-8">
      <div className="hero-frame anim-zoom-in relative h-[280px] md:h-[420px] w-full">
        <Image src={image} alt={alt} fill sizes="(max-width: 1310px) 100vw, 1310px" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-6 md:p-12">
          <h1 className="anim-fade-up delay-2 font-['Jersey_20'] text-[38px] md:text-[64px] text-white leading-tight drop-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="anim-fade-up delay-3 font-['JetBrains_Mono'] text-[15px] md:text-[22px] text-[#f2e6d6] mt-4 max-w-3xl drop-shadow">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHero;
