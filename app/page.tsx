import Image from "next/image";
import Sadhguru from "@/public/assets/Sadhguru.jpg"

export default function Home() {
  return (
    <div className="px-4 py-8">
      <h1 className="font-['Jersey_20'] text-[40px] md:text-[64px] text-red-600 text-center">
        The Visionary & The Mystic
      </h1>
      <p className="font-['JetBrains_Mono'] text-[18px] md:text-[24px] text-black text-center">
        Bridging the gap between ancient yogic sciences and modern life.
      </p>

      <div className="flex w-full items-center justify-center mt-8">
        <div className="w-full max-w-293.25 min-h-106.5 bg-[#514242] flex flex-col md:flex-row items-center justify-start p-4 md:pl-4">
          <div className="flex flex-col md:flex-row items-center w-full">
            <div className="w-full max-w-119.5 aspect-478/437 bg-gray-400 relative">
              <Image
                src={Sadhguru}
                fill
                alt="Sadhguru"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center mt-6 md:mt-0">
              <h2 className="font-['Jersey_25'] text-[60px] md:text-[96px] text-white flex items-center md:pl-8.5 ">
                Sadhguru
              </h2>
              <p className="font-['Inknut_Antiqua'] text-[16px] md:text-[32px] text-white md:pl-8.5 md:whitespace-nowrap mt-2">
                A Contemporary Guide to Inner Transformation
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="font-['JetBrains_Mono'] font-bold text-[28px] md:text-[36px] text-red-600 text-center mt-10">
        Sadhguru Jaggi Vasudev: The Modern Mystic
      </h3>

      <div className="flex justify-center mt-6">
        <div className="w-full max-w-327 bg-[#514242]/23 flex items-center justify-start p-6 md:pl-4">
          <p className="font-['Hiragino_Sans',sans-serif] text-[18px] md:text-[24px] text-black">
            <span className="font-bold">Early Years and Transformation:</span>{" "}
            Born as Jagdish Vasudev in Mysore, India (1957), he was an
            adventurous youth with a passion for motorcycles and the outdoors.
            After graduating with a degree in English Literature, he became a
            successful businessman. His life took a radical turn in{" "}
            <span className="font-bold">September 1982</span> on Chamundi Hill,
            where a profound spiritual experience led him to transition from a
            commercial life to one dedicated to yoga and meditation.
            <br />
            <br />
            <span className="font-bold">The Isha Foundation:</span> In 1992, he
            established the <span className="font-bold">Isha Foundation</span>,
            a volunteer-run, non-profit organization. Based at the Isha Yoga
            Center at the base of the Velliangiri Mountains in Coimbatore,
            India, the foundation hosts the{" "}
            <span className="font-bold">Dhyanalinga</span> (a unique meditative
            space) and the <span className="font-bold">Adiyogi</span> statue—the
            world's largest bust, standing at 112 feet.
          </p>
        </div>
      </div>
      <h3 className="font-['JetBrains_Mono'] font-bold text-[28px] md:text-[36px] text-red-600 text-center mt-10">
        New York Times Bestselling Author
      </h3>
      <div className="flex justify-center mt-6">
        <div className="w-full max-w-327 bg-[#514242]/23 flex items-center justify-start p-6 md:pl-4">
          <p className="font-['Hiragino_Sans',sans-serif] text-[18px] md:text-[24px] text-black">
            Sadhguru has authored over 20 books, translating complex yogic
            sciences into practical logic for the modern reader. His most
            notable bestsellers include: <br />
            <br />
            <span className="font-bold">.Inner Engineering:</span> A Yogi's
            Guide to Joy: A guide to self-empowerment that reached the New York
            Times Bestseller list in multiple categories, focusing on aligning
            the body, mind, and energy. <br />
            <br />
            <span className="font-bold">.Karma:</span> A Yogi's Guide to
            Crafting Your Destiny: A deep dive into the mechanics of human
            action and how to take charge of one's life. <br />
            <br />
            <span className="font-bold">.Death:</span> An Inside Story: A
            comprehensive exploration of the one inevitable aspect of life,
            offering a perspective on living and dying with grace.
          </p>
        </div>
      </div>
      <h3 className="font-['JetBrains_Mono'] font-bold text-[28px] md:text-[36px] text-red-600 text-center mt-10">
        A Global Voice of Influence
      </h3>
      <div className="flex justify-center mt-6">
        <div className="w-full max-w-327 bg-[#514242]/23 flex items-center justify-start p-6 md:pl-4">
          <p className="font-['Hiragino_Sans',sans-serif] text-[18px] md:text-[24px] text-black">
            Sadhguru is recognized as one of India's 50 most influential people.
            His impact extends far beyond traditional spirituality:
            <br />
            <br />
            <span className="font-bold"> .Global Forums:</span> He is a frequent
            lead speaker at the United Nations, the World Economic Forum, and
            top-tier universities like Harvard, Oxford, and MIT, where he
            discusses business, environmental policy, and human well-being.{" "}
            <br />
            <br />
            <span className="font-bold">.National Honors: </span>In 2017, he was
            awarded the Padma Vibhushan, India's second-highest civilian award,
            for his exceptional service to social welfare and spirituality.
            <br />
            <br />
            <span className="font-bold">.2026 Initiatives:</span> He continues
            to bridge tradition and modern progress. In February 2026, he
            launched the Bhavya Bharat Bhushan awards to recognize extraordinary
            individuals contributing to science, sports, and national security,
            further solidifying his role as a thought leader in national and
            global development.
          </p>
        </div>
      </div>
      <div className="flex min-h-26 h-auto w-full  items-center justify-evenly bg-[#514242] px-10 py-4 mt-6">
        <p className="font-['Hiragino_Sans',sans-serif] text-[18px] md:text-[24px] text-white">
          "If you want to enjoy success, before you engineer situations, first
          you must engineer yourself."— Sadhguru
        </p>
      </div>
    </div>
  );
}
