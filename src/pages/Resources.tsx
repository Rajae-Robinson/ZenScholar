import { Link } from "react-router-dom";
import InfoCard from "../components/InfoCard";
import ScrollContainer from "../components/ScrollContainer";
import ImageCardCTA from "../components/Resources/ImageCardCTA";
import {
  appointmentData,
  webResourcesData,
} from "../components/Resources/constants";

export default function Resources() {
  return (
    <>
      <h1 className="text-heading text-xl font-bold">
        Mental Health Resources
      </h1>
      <p className="mt-2 lg:w-[60%]">
        Your hub for mental health support, offering crisis helplines,
        appointment scheduling, mental health centers, self-help guides, and
        more.
      </p>

      <Link to="#moh">
        <h2 className="text-accent text-base mt-8 font-medium mb-2">
          Ministry of Health and Wellness Contact
        </h2>
      </Link>
      <div className="space-y-2">
        <p>
          <strong>Toll Free:</strong> 888-ONE-LOVE (663-5683)
        </p>
        <p>
          <strong>Mental Health Suicide Prevention Helpline:</strong>{" "}
          888-NEW-LIFE (639-5433)
        </p>
        <p>Emergency Contacts:</p>
        <ul className="list-disc ml-8">
          <li>
            <strong>North East Region:</strong> 876-927-2272
          </li>
          <li>
            <strong>Southern Region:</strong> 876-962-3370
          </li>
          <li>
            <strong>Western Region:</strong> 876-952-5100-9
          </li>
          <li>
            <strong>South East Region:</strong> 876-930-1152 / 928-1381-9
          </li>
        </ul>
      </div>

      <Link to="#schedule-appointment">
        <h2 className="text-accent text-base mt-8 font-medium mb-2">
          Schedule an Appointment
        </h2>
      </Link>
      <ScrollContainer>
        {appointmentData.map((card, index) => (
          <ImageCardCTA key={index} {...card} />
        ))}
      </ScrollContainer>

      <Link to="#mental-health-centers">
        <h2 className="text-accent text-base mt-8 font-medium mb-2">
          Mental Health Centers
        </h2>
      </Link>
      <div className="flex gap-x-6 overflow-x-scroll">
        <InfoCard
          title={"Mental Health Clinic Schedules"}
          description={"Schedules for all Mental Health Clinics in Jamaica"}
          link={
            "https://www.moh.gov.jm/wp-content/uploads/2019/03/MOH-Mental-Health-Clinic-Schedules.pdf"
          }
        />
      </div>

      <Link to="#web-resources">
        <h2 className="text-accent text-base mt-8 font-medium mb-2">
          Web Resources
        </h2>
      </Link>
      <ScrollContainer>
        {webResourcesData.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}
      </ScrollContainer>

      <Link to="#social-accounts">
        <h2 className="text-accent text-base mt-8 font-medium mb-2">
          Social Accounts
        </h2>
      </Link>
      <div className="flex gap-x-6 overflow-x-scroll">
        <ImageCardCTA
          title={"Think Mental Health JA"}
          imagePath={"/resources/think-mental-health.jpg"}
          socialProfileLink="https://www.instagram.com/thinkmh_ja/"
        />
        <ImageCardCTA
          title={"Jamaica Mental Health Advocacy Network"}
          imagePath={"/resources/jmha-network.jpg"}
          socialProfileLink="https://www.facebook.com/jamentalhealth/"
        />
      </div>
    </>
  );
}
