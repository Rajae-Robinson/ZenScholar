import hero from "../assets/img/hero.svg";
import bg from "../assets/img/hero-bg.svg";
import { Link } from "react-router-dom";
import SectionItem from "../components/Home/SectionItem";

import stressGirl from "../assets/img/stress-girl.svg";
import happyBoy from "../assets/img/happy-boy.svg";
import onlineTest from "../assets/img/online-test.svg";
import psychologist from "../assets/img/psychologist.svg";
import test from "../assets/icons/test.svg";
import community from "../assets/icons/community.svg";
import HomeSection from "../components/Home/HomeSection";

export default function Home() {
  return (
    <>
      <img
        src={bg}
        className="absolute inset-0 h-screen w-full -z-20 object-cover object-center"
        aria-hidden="true"
      />
      <header className="flex h-screen overflow-clip">
        <div className="h-fit flex">
          <div>
            <h1 className="mt-16 text-heading text-3xl font-thin">
              <span className="font-bold">ZenScholar:</span>
              Tools & Resources for Student Mental Wellness
            </h1>
            <p className="text-body mt-2">
              Ever felt the weight of university life impacting your mental
              well-being? <b>You&apos;re not alone</b>. Our mission is to shed
              light on the silent mental struggles of Jamaican university
              students. Join us in breaking the stigma and discovering the
              support you deserve. Take our depression test, explore mental
              health resources, and take the first step towards a brighter and
              more balanced campus life.
            </p>
            <div className="mt-12 flex space-x-4">
              <Link to="/screening">
                <button className="text-white bg-primary py-2 px-4 hover:bg-accent whitespace-nowrap">
                  Go to Depression Screening Test
                </button>
              </Link>
              <Link to="/resources">
                <button className="border-primary border-2 py-2 px-4 hover:shadow-md whitespace-nowrap">
                  Mental Health Resources
                </button>
              </Link>
            </div>
            <p className="text-xs mt-2">
              <span className="font-bold">FREE. </span>
              No sign-up required
            </p>
          </div>
          <img
            src={hero}
            className="w-0 sm:w-[200px] md:w-[300px] lg:w-[400px] self-center"
            alt="girl meditating"
          />
        </div>
      </header>
      <main className="space-y-16">
        <section className="flex">
          <div>
            <h2 className="text-heading text-lg">
              Juggling Life and University
            </h2>
            <p className="mt-4 text-body">
              University life is a maze of challenges, from academic demands to
              personal battles. The pressure cooker of expectations,
              relationships, finances, and the quest for identity—we understand
              the whirlwind that young adults navigate. In these moments, mental
              health often takes a backseat.
            </p>
            <div className="flex mt-4">
              <SectionItem
                icon={test}
                title="PHQ-9 Screening Form"
                description="The PHQ-9 self-assessment is a simple yet powerful tool used to gauge the presence and severity of depression symptoms."
                linkText="Take Test >>"
                linkHref="/screening"
              />
              <SectionItem
                icon={community}
                title="Community"
                description="Explore stories from peers who've navigated similar challenges, allowing empathy to pave the way toward healing."
                linkText="Go to Community >>"
                linkHref="/community"
              />
            </div>
          </div>
          <img src={stressGirl} className="w-[500px]" alt="stressed girl" />
        </section>
        <HomeSection
          img={happyBoy}
          heading={"Embracing Emotional Well-being"}
          body={`Recognizing the signs, acknowledging emotions, and seeking
              support—it's all part of a journey toward emotional
              well-being. We're here to share experiences, validate
              feelings, and guide you toward the resources that can make a
              meaningful difference.`}
        />
        <HomeSection
          img={onlineTest}
          heading={"Understanding the PHQ-9 Test"}
          body={`Curious about where you stand? The PHQ-9 self-assessment is a simple yet powerful tool used to 
          gauge the presence and severity of depression symptoms. It is not a diagnosis, 
          but a guide—a step-by-step process designed to help you understand your emotional 
          landscape better.`}
          btnText="Go to test"
          btnHref="/screening"
        />
        <HomeSection
          img={psychologist}
          heading={"Seeking Professional Help"}
          body={`Completing the screening test is a courageous first step towards understanding your emotional well-being. It's a vital checkpoint 
          in recognizing your feelings. However, remember, it's just the beginning. If the results prompt concern or if 
          you feel overwhelmed, seeking professional help is highly recommended. 
          Explore our comprehensive mental health resources page—a directory of contacts and centers specialized in 
          aiding university students dealing with mental health challenges.`}
          btnText="Mental Health Resources"
          btnHref="/resources"
        />
      </main>
    </>
  );
}
