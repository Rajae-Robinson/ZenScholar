import hero from "../assets/img/hero.svg";
import bg from "../assets/img/hero-bg.svg";
import { Link } from "react-router-dom";
import SectionItem from "../components/Home/SectionItem";

import stressGirl from "../assets/img/stress-girl.svg";
import happyBoy from "../assets/img/happy-boy.svg";
import onlineTest from "../assets/img/online-test.svg";
import psychologist from "../assets/img/psychologist.svg";
import test from "../assets/icons/test.svg";
import searchResources from "../assets/icons/search-resources.svg";
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
            <div className="flex mt-6">
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

        <footer>
          <div className=" w-full bg-blue-950 text-white  ">
            <div className="max-w-7xl mx-auto pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                <div className="mb-5 pl-8">
                  <br></br>
                  <br></br>
                  <h4 className="font-semibold text-base text-blue-300">
                    {" "}
                    ZenScholar
                  </h4>

                  <p className="italic"> Resources for Student</p>
                  <p className="italic"> Mental Wellness</p>
                </div>

                <div className="mb-5">
                  <h4 className="font-semibold text-sm">Pages</h4>
                  <br></br>
                  <ul>
                    <Link to="/" className="hover:text-blue-300">
                      <li className="pb-3"> Home</li>
                    </Link>
                    <Link to="/resources" className="hover:text-blue-300">
                      <li className="pb-3">
                        <i className="fa fa-chevron-right"></i> Resources
                      </li>
                    </Link>
                    <Link to="/about" className="hover:text-blue-300">
                      <li className="pb-3">
                        <i className="fa fa-chevron-right"></i> About
                      </li>
                    </Link>
                  </ul>
                </div>

                <div className="mb-5">
                  <h4 className="font-semibold text-sm">Useful Links</h4>
                  <br></br>
                  <ul>
                    <Link to="/resources" className="hover:text-blue-300">
                      <li className="pb-3">
                        <i className="fa fa-chevron-right"></i> Mental Health
                        Resources{" "}
                      </li>
                    </Link>
                    <Link to="/screening" className="hover:text-blue-300">
                      <li className="pb-3">
                        <i className="fa fa-chevron-right"></i> PHQ-9 Screening
                        Test
                      </li>
                    </Link>
                  </ul>
                </div>

                <div className="mb-5">
                  <h4 className="font-semibold text-sm">
                    {" "}
                    MOH Emergency Contacts
                  </h4>
                  <br></br>
                  <ul>
                    <li className="pb-3">East Region: 876-927-2272</li>
                    <li className="pb-3">Southern Region: 876-962-3370</li>
                    <li className="pb-3">Western Region: 876-952-5100-9</li>
                    <li className="pb-3">South East Region: 876-930-1152 </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
