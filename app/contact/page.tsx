import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EstimateForm from "@/components/EstimateForm";
import { IconClock, IconPhone, IconRecycle } from "@/components/Icons";
import { primaryCities, services } from "@/lib/services";
import { areasServed, site } from "@/lib/site";

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`,
)}`;

export const metadata: Metadata = {
  title: `Contact Us | ${site.name}`,
  description: `Contact ${site.name} for junk removal in ${primaryCities}. Call ${site.phone} or ask for a free estimate. We are at ${site.address.street}, ${site.address.city}. Open ${site.hours}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <main id="main">
        <PageHero
          eyebrow="Contact"
          title="Get Your Free Estimate"
          lede="Tell us what you want gone and where it is. We will come and look at it, then give you a firm price before we load anything. No obligation and no pressure."
          image="/Assets/gallery-3.jpg"
          imageAlt="Items set out at a kerb ready for collection"
        />

        <section className="page-section">
          <div className="wrap">
            <div className="contact-grid">
              <div className="contact-info">
                <h2>Talk to us</h2>
                <ul className="contact-list">
                  <li>
                    <IconPhone />
                    <div>
                      <strong>Phone</strong>
                      <a href={site.phoneHref}>{site.phone}</a>
                      <span>Fastest way to get a price</span>
                    </div>
                  </li>
                  <li>
                    <IconClock />
                    <div>
                      <strong>Hours</strong>
                      <span>{site.hours}</span>
                      <span>We take bookings all year</span>
                    </div>
                  </li>
                  <li>
                    <IconRecycle />
                    <div>
                      <strong>Licence</strong>
                      <span>{site.license}</span>
                      <span>Licensed and insured</span>
                    </div>
                  </li>
                </ul>

                <h2>Where we are</h2>
                <address className="contact-address">
                  <strong>{site.name}</strong>
                  <br />
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </address>
                <a
                  className="map-frame"
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src="/Assets/service-area-map.jpg"
                    alt={`Map showing ${site.name} at ${site.address.street}, ${site.address.city}`}
                    width={1200}
                    height={700}
                    loading="lazy"
                  />
                </a>
                <p className="map-credit">
                  <a
                    href="https://www.openstreetmap.org/copyright"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    &copy; OpenStreetMap contributors
                  </a>
                </p>
              </div>

              <div className="contact-form">
                <EstimateForm />
              </div>
            </div>

            <div className="areas-block">
              <h2>Areas we serve</h2>
              <p>
                We work across {primaryCities} and the wider county every week.
                All {services.length} of our services are available in every
                area below.
              </p>
              <ul className="areas-chips">
                {areasServed.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
