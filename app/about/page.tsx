import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { IconCheck, IconRecycle } from "@/components/Icons";
import { primaryCities, services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `About Us | ${site.name}`,
  description: `${site.name} is a licensed and insured junk removal company in Los Angeles. ${site.tagline}. Free estimates, 7 days a week, serving ${primaryCities}.`,
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "We give you the price first",
    body: "We look at the job and tell you the price before we start. No surprises once the truck is at your door.",
  },
  {
    title: "We sort before we throw away",
    body: "Furniture and working appliances that someone can still use go to charity. Metals, plastic, cardboard and electronics go to a recycling facility.",
  },
  {
    title: "We do not judge",
    body: "Hoarding and estate clean outs are part of this job, and they usually come with something hard behind them. Our crews are trained to work quietly and get it done.",
  },
  {
    title: "We turn up when we say",
    body: `${site.hours}. You get a real arrival window. If we are running late, we will call you.`,
  },
];

export default function AboutPage() {
  return (
    <>
      <main id="main">
        <PageHero
          eyebrow="About"
          title={`${site.tagline}`}
          lede={`${site.name} has been taking junk out of Los Angeles homes and businesses for over ten years. We are licensed, insured and local. We do the whole job, from the lifting to the sorting and the dump run.`}
          image="/Assets/balance-1.jpg"
          imageAlt="Must Junk Removal crew hauling junk in Los Angeles"
        />

        <section className="page-section">
          <div className="wrap">
            <div className="prose">
              <h2>What we do</h2>
              <p>
                We take junk away for homes and businesses in {primaryCities}{" "}
                and the rest of Los Angeles County. One phone call gets you a
                crew, a truck and a price. It does not matter if it is a single
                mattress, a cleared out office floor, a garage that has been shut
                for years, or a roll-off container for a renovation.
              </p>
              <p>
                We do not hand the hard part to anyone else. The people who
                quote your job are the people who load it, and the price we
                quote is the price you pay. There is no truck to book, no
                deposit to chase and no mileage to work out.
              </p>

              <h2>Sorting and recycling</h2>
              <p>
                We want to clean up LA and recycle as much of it as we can. On
                a normal load that means taking out furniture and appliances
                that still work and sending them to charity. It means pulling
                out metal, plastic, cardboard and electronics for a recycling
                facility. Only what is genuinely rubbish gets thrown away.
              </p>
              <p>
                Over a year of work, that sorting is what separates a load of
                actual rubbish from a load of mostly useful material.
              </p>
              <p className="prose-callout">
                <IconRecycle size={18} className="inline-icon" /> We sort every
                load for charity and recycling before anything gets thrown away.
              </p>

              <h2>How we work</h2>
              <ul className="check-list">
                {values.map((v) => (
                  <li key={v.title}>
                    <IconCheck />
                    <span>
                      <strong>{v.title}.</strong> {v.body}
                    </span>
                  </li>
                ))}
              </ul>

              <h2>Where we work</h2>
              <p>
                We are based in Los Angeles and we cover the whole county. We
                work in {primaryCities} and the South Bay most weeks. If you are
                not sure we reach you, give us a call. If we can get a truck
                there, we will price the job.
              </p>
            </div>

            <div className="about-stats">
              <div>
                <strong>2009</strong>
                <span>Serving LA County</span>
              </div>
              <div>
                <strong>{services.length}</strong>
                <span>Services offered</span>
              </div>
              <div>
                <strong>7 days</strong>
                <span>Bookings each week</span>
              </div>
              <div>
                <strong>{site.license}</strong>
                <span>Licensed &amp; insured</span>
              </div>
            </div>

            <div className="btn-row" style={{ justifyContent: "center" }}>
              <Link className="btn btn-lg" href="/services">
                See all services
              </Link>
              <Link className="btn btn-rust btn-lg" href="/#estimate">
                Get a free estimate
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
