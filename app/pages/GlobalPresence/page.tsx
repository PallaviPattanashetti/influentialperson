import React from "react";
import PageHero from "@/app/components/PageHero";
import Speaking from "@/public/assets/sadhguru-speaking.jpg";

const page = () => {
  return (
    <div className="pb-16">
      <PageHero
        image={Speaking}
        alt="Sadhguru addressing an audience"
        title="A Voice at the High Tables"
        subtitle="Shaping policy and discourse at the world's most prestigious institutions."
      />

      <div className="max-w-[1310px] mx-auto px-4 md:px-8">
        <div className="anim-fade-up delay-1 card p-6 md:p-10 mt-12">
          <p className="font-['Hiragino_Sans',sans-serif] text-[18px] md:text-[22px] leading-relaxed text-[#2b211b]">
            Sadhguru is not just a spiritual teacher; he is a global influencer
            who shapes policy and discourse at the world&apos;s most prestigious
            institutions.
          </p>
        </div>

        <h3 className="anim-fade-up font-['JetBrains_Mono'] font-bold text-[28px] md:text-[36px] text-red-600 text-center mt-16">
          <span className="heading-accent">1. World Economic Forum (WEF), Davos</span>
        </h3>
        <div className="anim-fade-up delay-1 card p-6 md:p-10 mt-10">
          <p className="font-['Hiragino_Sans',sans-serif] text-[18px] md:text-[22px] leading-relaxed text-[#2b211b]">
            Sadhguru has been a regular &ldquo;Agenda Contributor&rdquo; at Davos for over a
            decade. His role there is to remind business and political leaders
            that human wellbeing is the ultimate currency. <br />
            <br />
            <span className="font-bold text-[#b8420f]">Recent Impact (2024-2026):</span> He
            has championed the &ldquo;1 Trillion Trees&rdquo; platform and emphasized that
            the global economy cannot thrive on a dying planet.
            <br />
            <br />
            <span className="font-bold text-[#b8420f]">The Message:</span> He advocates for
            shifting from &ldquo;personal ambition&rdquo; to &ldquo;global vision,&rdquo; arguing that
            businesses must become &ldquo;holistic&rdquo; to remain relevant in a conscious
            future.
          </p>
        </div>

        <h3 className="anim-fade-up font-['JetBrains_Mono'] font-bold text-[28px] md:text-[36px] text-red-600 text-center mt-16">
          <span className="heading-accent">2. The United Nations (UN)</span>
        </h3>
        <div className="anim-fade-up delay-1 card p-6 md:p-10 mt-10">
          <p className="font-['Hiragino_Sans',sans-serif] text-[18px] md:text-[22px] leading-relaxed text-[#2b211b]">
            Sadhguru is a frequent keynote speaker at various UN wings,
            including the UN Headquarters in New York and the UN Convention to
            Combat Desertification (UNCCD).
            <br />
            <br />
            <span className="font-bold text-[#b8420f]">The &ldquo;Save Soil&rdquo; Movement:</span> In
            recent years, his influence at the UN culminated in a global
            blueprint for soil revitalization, now being integrated into the
            agricultural policies of over 80 nations.
            <br />
            <br />
            <span className="font-bold text-[#b8420f]">International Day of Yoga:</span> He
            has been a primary force in the UN&apos;s global recognition of yoga as a
            tool for holistic health.
          </p>
        </div>

        <h3 className="anim-fade-up font-['JetBrains_Mono'] font-bold text-[28px] md:text-[36px] text-red-600 text-center mt-16">
          <span className="heading-accent">3. Academic Institutions (Harvard, Oxford, MIT)</span>
        </h3>
        <div className="anim-fade-up delay-1 card p-6 md:p-10 mt-10">
          <p className="font-['Hiragino_Sans',sans-serif] text-[18px] md:text-[22px] leading-relaxed text-[#2b211b]">
            In the hallowed halls of academia, Sadhguru challenges the modern
            understanding of the mind and consciousness.
            <br />
            <br />
            <span className="font-bold text-[#b8420f]">Harvard Medical School:</span> He has
            engaged in landmark debates on &ldquo;Memory, Consciousness, and
            Coma,&rdquo; bridging the gap between neurological science and yogic
            experience.
            <br />
            <br />
            <span className="font-bold text-[#b8420f]">Oxford University:</span> In late 2025,
            he hosted high-level dialogues with cosmologists and scientists at
            Oxford, exploring the intersection of quantum physics and
            spirituality.
            <br />
            <br />
            <span className="font-bold text-[#b8420f]">MIT:</span> He frequently lectures on
            the &ldquo;Four Layers of the Mind,&rdquo; providing a scientific framework for
            subjective experiences that traditional psychology often overlooks.
          </p>
        </div>
      </div>

      <div className="quote-strip flex min-h-26 h-auto w-full items-center justify-center px-10 py-12 mt-16">
        <p className="relative z-10 max-w-4xl text-center font-['Hiragino_Sans',sans-serif] text-[18px] md:text-[26px] italic text-white">
          &ldquo;Leadership is the art of fulfilling everyone&apos;s aspirations, not an
          assertion of yourself.&rdquo;
          <span className="block mt-3 not-italic text-[#d99b3e] font-bold">— Sadhguru</span>
        </p>
      </div>
    </div>
  );
};

export default page;
