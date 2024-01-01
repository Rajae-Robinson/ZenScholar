import bg from "../assets/img/hero-bg.svg";
import SectionItem from "../components/Home/SectionItem";

import stressGirl from "../assets/img/stress-girl.svg";
import happyBoy from "../assets/img/happy-boy.svg";
import onlineTest from "../assets/img/online-test.svg";
import psychologist from "../assets/img/psychologist.svg";
import test from "../assets/icons/test.svg";
import searchResources from "../assets/icons/search-resources.svg";
import HomeSection from "../components/Home/HomeSection";
import Hero from "../components/Home/Hero";

export default function Home() {
  return (
    <>
      <img
        src={bg}
        className="absolute inset-0 w-[80%] -z-20 object-cover left-[30%]"
        aria-hidden="true"
      />
      <Hero />
      <main className="mt-16 md:space-y-16">
        <section className="flex flex-col md:flex-row">
          <div className="order-2 md:order-1">
            <h2 className="text-heading text-2xl font-medium">
              Juggling Life and University
            </h2>
            <p className="mt-4 text-body">
              University life is a maze of challenges, from academic demands to
              personal battles. The pressure cooker of expectations,
              relationships, finances, and the quest for identity—we understand
              the whirlwind that young adults navigate. In these moments, mental
              health often takes a backseat.
            </p>
            <div className="flex flex-col space-y-9 md:flex-row md:space-y-0 mt-12">
              <SectionItem
                icon={test}
                title="PHQ-9 Screening Form"
                description="The PHQ-9 self-assessment is a simple yet powerful tool used to gauge the presence and severity of depression symptoms."
                linkText="Take Test >>"
                linkHref="/screening"
              />
              <SectionItem
                icon={searchResources}
                title="Mental Health Resources"
                description="Access trusted mental health guidance and effective techniques to manage depression, stress, or anxiety, along with contact details for local mental health support centers."
                linkText="Search Mental Health Resources >>"
                linkHref="/resources"
              />
            </div>
          </div>
          <img
            src={stressGirl}
            className="order-1 w-[300px] md:w-[500px] self-center md:self-start"
            alt="stressed girl"
          />
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
