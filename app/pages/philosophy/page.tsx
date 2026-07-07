import React from "react";
import PageHero from "@/app/components/PageHero";
import Adiyogi from "@/public/assets/adiyogi.jpg";

const page = () => {
  return (
    <div className="pb-16">
      <PageHero
        image={Adiyogi}
        alt="Adiyogi statue at the Isha Yoga Center"
        title="The Mechanics of Inner Engineering"
        subtitle="In is the only way out."
      />

      <div className="max-w-[1310px] mx-auto px-4 md:px-8">
        <div className="anim-fade-up delay-1 card p-6 md:p-10 mt-12">
          <p className="font-['Hiragino_Sans',sans-serif] text-[18px] md:text-[22px] leading-relaxed text-[#2b211b]">
            Sadhguru&apos;s philosophy is built on the premise that &ldquo;In is the only
            way out.&rdquo; Instead of trying to fix the external world to find
            happiness, Inner Engineering provides the tools to manage your
            internal environment.
          </p>
        </div>

        <h3 className="anim-fade-up font-['JetBrains_Mono'] font-bold text-[28px] md:text-[36px] text-red-600 text-center mt-16">
          <span className="heading-accent">1. The Four Dimensions of the Self</span>
        </h3>
        <div className="anim-fade-up delay-1 card p-6 md:p-10 mt-10">
          <p className="font-['Hiragino_Sans',sans-serif] text-[18px] md:text-[22px] leading-relaxed text-[#2b211b]">
            To achieve a state of &ldquo;Engineering,&rdquo; one must align the four
            fundamental aspects of human existence. When these four are in
            harmony, a human being functions at their peak potential:
            <br />
            <br />
            <span className="font-bold text-[#b8420f]">Body (Annamaya Kosha):</span> Using yoga
            and &ldquo;Upa-Yoga&rdquo; to keep the physical frame vibrant and disease-free.
            <br />
            <br />
            <span className="font-bold text-[#b8420f]">Mind (Manomaya Kosha):</span> Shifting
            from a state of &ldquo;mental diarrhea&rdquo; (uncontrolled thoughts) to a
            sharp, focused instrument.
            <br />
            <br />
            <span className="font-bold text-[#b8420f]">Emotions (Pranamaya Kosha):</span>{" "}
            Moving from reactive outbursts to a consistent state of
            &ldquo;Pleasantness.&rdquo;
            <br />
            <br />
            <span className="font-bold text-[#b8420f]">Energy (Vijnanamaya Kosha):</span>{" "}
            Activating the life forces within so that joy becomes a natural
            state, not a goal to be achieved.
          </p>
        </div>

        <h3 className="anim-fade-up font-['JetBrains_Mono'] font-bold text-[28px] md:text-[36px] text-red-600 text-center mt-16">
          <span className="heading-accent">2. Moving from &ldquo;Accidental&rdquo; to &ldquo;Intentional&rdquo;</span>
        </h3>
        <div className="anim-fade-up delay-1 card p-6 md:p-10 mt-10">
          <p className="font-['Hiragino_Sans',sans-serif] text-[18px] md:text-[22px] leading-relaxed text-[#2b211b]">
            Sadhguru argues that most people are &ldquo;accidental&rdquo; successes or
            failures. Their happiness depends on the weather, the economy, or
            their neighbor&apos;s behavior. <br />
            <br />
            <span className="font-bold text-[#b8420f]">The Philosophy:</span> Inner Engineering
            shifts you from being a victim of external stimuli to a deliberate
            creator of your own experience. <br />
            <br />
            <span className="font-bold text-[#b8420f]">The Goal:</span> To create a &ldquo;chemical
            basis&rdquo; for blissfulness within yourself so that you are peaceful by
            your own nature, regardless of what happens outside.
          </p>
        </div>

        <h3 className="anim-fade-up font-['JetBrains_Mono'] font-bold text-[28px] md:text-[36px] text-red-600 text-center mt-16">
          <span className="heading-accent">3. The Technology of &ldquo;Shambhavi Mahamudra&rdquo;</span>
        </h3>
        <div className="anim-fade-up delay-1 card p-6 md:p-10 mt-10">
          <p className="font-['Hiragino_Sans',sans-serif] text-[18px] md:text-[22px] leading-relaxed text-[#2b211b]">
            The practical application of this philosophy culminates in a
            21-minute kriya (inner energy process) called Shambhavi Mahamudra.{" "}
            <br />
            <br />
            It is supported by modern genomic and molecular studies that show it
            reduces stress markers and increases &ldquo;Ojo&rdquo; (vitality) at a cellular
            level. <br />
            <br />
            It serves as the &ldquo;engine&rdquo; that powers the philosophy, turning
            intellectual understanding into a lived experience.
          </p>
        </div>
      </div>

      <div className="quote-strip flex min-h-26 h-auto w-full items-center justify-center px-10 py-12 mt-16">
        <p className="relative z-10 max-w-4xl text-center font-['Hiragino_Sans',sans-serif] text-[18px] md:text-[26px] italic text-white">
          &ldquo;As there is a technology to create external wellbeing, there is a
          whole science and technology to create inner wellbeing.&rdquo;
          <span className="block mt-3 not-italic text-[#d99b3e] font-bold">— Sadhguru</span>
        </p>
      </div>
    </div>
  );
};

export default page;
