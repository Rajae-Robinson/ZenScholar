import SectionItem from "./SectionItem";
import { Fade, Slide } from "react-awesome-reveal";

import stressGirl from "../../assets/img/stress-girl.svg";
import test from "../../assets/icons/test.svg";
import searchResources from "../../assets/icons/search-resources.svg";

export default function MainSection() {
  return (
    <section className="flex flex-col md:flex-row">
      <Fade triggerOnce className="order-2 md:order-1">
        <div>
          <h2 className="text-heading text-2xl font-medium md:text-lg md:font-normal">
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
      </Fade>
      <Slide
        triggerOnce
        direction="right"
        className="order-1 self-center md:self-start"
      >
        <div className="order-1 w-[300px] md:w-[500px]">
          <img src={stressGirl} alt="stressed girl" />
        </div>
      </Slide>
    </section>
  );
}
