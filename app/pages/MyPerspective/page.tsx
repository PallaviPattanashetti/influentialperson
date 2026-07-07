import React from "react";
import PageHero from "@/app/components/PageHero";
import IshaCenter from "@/public/assets/perspective.jpg";

const page = () => {
  return (
    <div className="pb-16">
      <PageHero
        image={IshaCenter}
        alt="Sadhguru Jaggi Vasudev"
        title="My Perspective — Why Sadhguru?"
        subtitle="Exploring the intersection of logic, life, and inner clarity."
      />

      <div className="max-w-[1310px] mx-auto px-4 md:px-8">
        <h3 className="anim-fade-up font-['JetBrains_Mono'] font-bold text-[28px] md:text-[36px] text-red-600 text-center mt-16">
          <span className="heading-accent">1. The Logic of Spirituality</span>
        </h3>
        <div className="anim-fade-up delay-1 card p-6 md:p-10 mt-10">
          <p className="font-['Hiragino_Sans',sans-serif] text-[18px] md:text-[22px] leading-relaxed text-[#2b211b]">
            Most spiritual leaders lean heavily on faith or dogma. What makes
            Sadhguru influential to me is his refusal to offer beliefs. He often
            says, &ldquo;Don&apos;t believe me, but don&apos;t disbelieve me either.&rdquo; This
            scientific approach to the internal human mechanism—treating joy and
            peace as &ldquo;technologies&rdquo; rather than miracles—appeals to my rational
            mind.
          </p>
        </div>

        <h3 className="anim-fade-up font-['JetBrains_Mono'] font-bold text-[28px] md:text-[36px] text-red-600 text-center mt-16">
          <span className="heading-accent">2. Radical Responsibility</span>
        </h3>
        <div className="anim-fade-up delay-1 card p-6 md:p-10 mt-10">
          <p className="font-['Hiragino_Sans',sans-serif] text-[18px] md:text-[22px] leading-relaxed text-[#2b211b]">
            One of his core teachings is that Response-ability is the ability to
            respond.
            <br />
            <br />
            <span className="font-bold text-[#b8420f]">The Impact:</span> Instead of blaming
            external circumstances, his philosophy taught me that while I cannot
            control what happens to me, I have 100% control over how I
            experience it.
            <br />
            <br />
            <span className="font-bold text-[#b8420f]">The Result:</span> This shift from
            &ldquo;victim&rdquo; to &ldquo;creator&rdquo; has been the most empowering lesson in my
            personal development.
          </p>
        </div>

        <h3 className="anim-fade-up font-['JetBrains_Mono'] font-bold text-[28px] md:text-[36px] text-red-600 text-center mt-16">
          <span className="heading-accent">3. Practicality in a Chaotic World</span>
        </h3>
        <div className="anim-fade-up delay-1 card p-6 md:p-10 mt-10">
          <p className="font-['Hiragino_Sans',sans-serif] text-[18px] md:text-[22px] leading-relaxed text-[#2b211b]">
            He doesn&apos;t ask you to go to a cave or renounce the world. He rides
            motorcycles, builds global movements, and speaks at the UN. This
            &ldquo;monk in the marketplace&rdquo; persona shows me that one can be deeply
            spiritual while remaining highly effective and successful in the
            modern world.
          </p>
        </div>

        <h3 className="anim-fade-up font-['JetBrains_Mono'] font-bold text-[28px] md:text-[36px] text-red-600 text-center mt-16">
          <span className="heading-accent">4. Commitment to the Future (Conscious Planet)</span>
        </h3>
        <div className="anim-fade-up delay-1 card p-6 md:p-10 mt-10">
          <p className="font-['Hiragino_Sans',sans-serif] text-[18px] md:text-[22px] leading-relaxed text-[#2b211b]">
            His influence isn&apos;t just about &ldquo;feel-good&rdquo; quotes; it&apos;s about
            action. Watching a man in his 60s ride across continents for &ldquo;Save
            Soil&rdquo; proves that true spirituality is rooted in a deep concern for
            all life. His leadership on the climate crisis transformed my view
            from passive concern to active awareness.
          </p>
        </div>
      </div>

      <div className="quote-strip flex min-h-26 h-auto w-full items-center justify-center px-10 py-12 mt-16">
        <p className="relative z-10 max-w-4xl text-center font-['Hiragino_Sans',sans-serif] text-[18px] md:text-[26px] italic text-white">
          &ldquo;The only thing that stands between you and your wellbeing is a simple
          fact: you have allowed your thoughts and emotions to take instruction
          from the outside rather than the inside.&rdquo;
          <span className="block mt-3 not-italic text-[#d99b3e] font-bold">— Sadhguru</span>
        </p>
      </div>
    </div>
  );
};

export default page;
