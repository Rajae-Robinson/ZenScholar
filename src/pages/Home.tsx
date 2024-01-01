import bg from "../assets/img/hero-bg.svg";

import happyBoy from "../assets/img/happy-boy.svg";
import onlineTest from "../assets/img/online-test.svg";
import psychologist from "../assets/img/psychologist.svg";

import Hero from "../components/Home/Hero";
import HomeSection from "../components/Home/HomeSection";
import MainSection from "../components/Home/MainSection";

export default function Home() {
  return (
    <>
      <img
        src={bg}
        className="absolute inset-0 w-[80%] -z-20 object-cover left-[30%]"
        aria-hidden="true"
      />
      <Hero />
      <main className="mt-16 md:mt-0">
        <MainSection />
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
