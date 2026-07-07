import Image from "next/image";
import Sadhguru from "@/public/assets/Sadhguru.jpg";

export default function Home() {
  return (
    <div className="pb-16">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-12">
        <h1 className="anim-fade-up font-['Jersey_20'] text-[42px] md:text-[68px] text-red-600 text-center leading-tight">
          <span className="heading-accent">The Visionary &amp; The Mystic</span>
        </h1>
        <p className="anim-fade-up delay-2 font-['JetBrains_Mono'] text-[18px] md:text-[24px] text-[#514242] text-center mt-8">
          Bridging the gap between ancient yogic sciences and modern life.
        </p>

        <div className="flex w-full items-center justify-center mt-12">
          <div className="anim-zoom-in delay-2 w-full max-w-[1170px] bg-gradient-to-br from-[#514242] to-[#3a2f2f] rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch shadow-2xl shadow-black/40">
            <div className="hero-frame w-full md:max-w-[478px] aspect-[478/437] relative">
              <Image src={Sadhguru} fill sizes="(max-width: 768px) 100vw, 478px" alt="Sadhguru" className="object-cover" priority />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12 md:pl-10">
              <span className="hero-badge inline-block w-fit bg-[#e0591f]/90 text-white text-[13px] md:text-[15px] font-['JetBrains_Mono'] px-4 py-1.5 rounded-full mb-4">
                Yogi · Mystic · Visionary
              </span>
              <h2 className="anim-fade-up delay-3 font-['Jersey_25'] text-[64px] md:text-[96px] text-white leading-none">
                Sadhguru
              </h2>
              <p className="anim-fade-up delay-4 font-['Inknut_Antiqua'] text-[16px] md:text-[28px] text-[#f2e6d6] mt-4">
                A Contemporary Guide to Inner Transformation
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1310px] mx-auto px-4 md:px-8">
        <h3 className="anim-fade-up font-['JetBrains_Mono'] font-bold text-[28px] md:text-[36px] text-red-600 text-center mt-16">
          <span className="heading-accent">Sadhguru Jaggi Vasudev: The Modern Mystic</span>
        </h3>
        <div className="anim-fade-up delay-1 card p-6 md:p-10 mt-10">
          <p className="font-['Hiragino_Sans',sans-serif] text-[18px] md:text-[22px] leading-relaxed text-[#2b211b]">
            <span className="font-bold text-[#b8420f]">Early Years and Transformation:</span>{" "}
            Born as Jagdish Vasudev in Mysore, India (1957), he was an
            adventurous youth with a passion for motorcycles and the outdoors.
            After graduating with a degree in English Literature, he became a
            successful businessman. His life took a radical turn in{" "}
            <span className="font-bold">September 1982</span> on Chamundi Hill,
            where a profound spiritual experience led him to transition from a
            commercial life to one dedicated to yoga and meditation.
            <br />
            <br />
            <span className="font-bold text-[#b8420f]">The Isha Foundation:</span> In 1992, he
            established the <span className="font-bold">Isha Foundation</span>,
            a volunteer-run, non-profit organization. Based at the Isha Yoga
            Center at the base of the Velliangiri Mountains in Coimbatore,
            India, the foundation hosts the{" "}
            <span className="font-bold">Dhyanalinga</span> (a unique meditative
            space) and the <span className="font-bold">Adiyogi</span> statue—the
            world&apos;s largest bust, standing at 112 feet.
          </p>
        </div>

        <h3 className="anim-fade-up font-['JetBrains_Mono'] font-bold text-[28px] md:text-[36px] text-red-600 text-center mt-16">
          <span className="heading-accent">New York Times Bestselling Author</span>
        </h3>
        <div className="anim-fade-up delay-1 card p-6 md:p-10 mt-10">
          <p className="font-['Hiragino_Sans',sans-serif] text-[18px] md:text-[22px] leading-relaxed text-[#2b211b]">
            Sadhguru has authored over 20 books, translating complex yogic
            sciences into practical logic for the modern reader. His most
            notable bestsellers include: <br />
            <br />
            <span className="font-bold text-[#b8420f]">Inner Engineering:</span> A Yogi&apos;s
            Guide to Joy: A guide to self-empowerment that reached the New York
            Times Bestseller list in multiple categories, focusing on aligning
            the body, mind, and energy. <br />
            <br />
            <span className="font-bold text-[#b8420f]">Karma:</span> A Yogi&apos;s Guide to
            Crafting Your Destiny: A deep dive into the mechanics of human
            action and how to take charge of one&apos;s life. <br />
            <br />
            <span className="font-bold text-[#b8420f]">Death:</span> An Inside Story: A
            comprehensive exploration of the one inevitable aspect of life,
            offering a perspective on living and dying with grace.
          </p>
        </div>

        <h3 className="anim-fade-up font-['JetBrains_Mono'] font-bold text-[28px] md:text-[36px] text-red-600 text-center mt-16">
          <span className="heading-accent">A Global Voice of Influence</span>
        </h3>
        <div className="anim-fade-up delay-1 card p-6 md:p-10 mt-10">
          <p className="font-['Hiragino_Sans',sans-serif] text-[18px] md:text-[22px] leading-relaxed text-[#2b211b]">
            Sadhguru is recognized as one of India&apos;s 50 most influential people.
            His impact extends far beyond traditional spirituality:
            <br />
            <br />
            <span className="font-bold text-[#b8420f]">Global Forums:</span> He is a frequent
            lead speaker at the United Nations, the World Economic Forum, and
            top-tier universities like Harvard, Oxford, and MIT, where he
            discusses business, environmental policy, and human well-being.{" "}
            <br />
            <br />
            <span className="font-bold text-[#b8420f]">National Honors:</span> In 2017, he was
            awarded the Padma Vibhushan, India&apos;s second-highest civilian award,
            for his exceptional service to social welfare and spirituality.
            <br />
            <br />
            <span className="font-bold text-[#b8420f]">2026 Initiatives:</span> He continues
            to bridge tradition and modern progress. In February 2026, he
            launched the Bhavya Bharat Bhushan awards to recognize extraordinary
            individuals contributing to science, sports, and national security,
            further solidifying his role as a thought leader in national and
            global development.
          </p>
        </div>
      </div>

      <div className="quote-strip flex min-h-26 h-auto w-full items-center justify-center px-10 py-12 mt-16">
        <p className="relative z-10 max-w-4xl text-center font-['Hiragino_Sans',sans-serif] text-[18px] md:text-[26px] italic text-white">
          &ldquo;If you want to enjoy success, before you engineer situations, first
          you must engineer yourself.&rdquo;
          <span className="block mt-3 not-italic text-[#d99b3e] font-bold">— Sadhguru</span>
        </p>
      </div>
    </div>
  );
}
