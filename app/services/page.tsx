import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { primaryCities, serviceCategories, services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Junk Removal Services in Los Angeles | ${site.name}`,
  description: `All ${services.length} services we offer in ${primaryCities}. Junk removal, hauling, clean outs and containers for homes and businesses. Free estimates. Licensed and insured. Call ${site.phone}.`,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <main id="main">
        <PageHero
          eyebrow="Services"
          title="Junk Removal Services in Los Angeles"
          lede={`Everything we take away, all in one place. Pick a service to see what it covers, or just tell us what you have and we will work it out when we come look. We serve ${primaryCities} and everywhere in between.`}
          image="/Assets/hero-1.jpg"
          imageAlt="Removal crew loading a sofa into a work van on a Los Angeles street"
        />

        <section className="page-section">
          <div className="wrap">
            {serviceCategories.map((cat) => {
              const items = cat.slugs
                .map((slug) => services.find((s) => s.slug === slug))
                .filter((s): s is (typeof services)[number] => Boolean(s));
              if (!items.length) return null;
              return (
                <div key={cat.heading} className="svc-group">
                  <h2 className="svc-group-head">{cat.heading}</h2>
                  <ul className="svc-grid">
                    {items.map((s) => (
                      <li key={s.slug}>
                        <Link className="svc-card" href={`/services/${s.slug}`}>
                          <span className="svc-card-name">{s.name}</span>
                          <span className="svc-card-short">{s.short}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <section className="why-cta">
          <div className="wrap">
            <h2 className="balance-text">Not sure what you need?</h2>
            <p
              className="balance-text"
              style={{
                textAlign: "center",
                maxWidth: 760,
                margin: "0 auto 30px",
              }}
            >
              Most jobs are just junk removal. If you are not sure, book a free
              look at your place. We will price it exactly, and tell you what
              we can recycle or give away instead of throw away.
            </p>
            <div className="btn-row">
              <Link className="btn btn-lg" href="/#schedule">
                Schedule Junk Removal
              </Link>
              <Link className="btn btn-rust btn-lg" href="/#estimate">
                Free Estimate
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
