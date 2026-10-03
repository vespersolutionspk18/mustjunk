import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import EstimateForm from "@/components/EstimateForm";
import { IconCheck } from "@/components/Icons";
import { getService, primaryCities, services } from "@/lib/services";
import { site } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: `Service Not Found | ${site.name}` };

  return {
    title: `${service.name} in Los Angeles | ${site.name}`,
    description: `${service.short}. ${service.blurb.slice(0, 120)} Serving ${primaryCities}. Free on-site estimates, licensed and insured. Call ${site.phone}.`,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | ${site.name}`,
      description: service.short,
      images: [service.image],
    },
  };
}

export default async function ServicePage({ params }: { params: Params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.related
    .map((r) => getService(r))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <main id="main">
        <PageHero
          eyebrow="Services"
          title={service.name}
          lede={service.blurb}
          image={service.image}
          imageAlt={service.imageAlt}
        />

        <section className="page-section">
          <div className="wrap">
            <div className="svc-detail">
              <div className="svc-detail-main">
                <h2>What&apos;s included</h2>
                <ul className="check-list">
                  {service.includes.map((item) => (
                    <li key={item}>
                      <IconCheck />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h2>How it works</h2>
                <ol className="step-list">
                  <li>
                    <strong>Tell us what you want gone.</strong> Send a photo or
                    a list, or let us look at it in person. We will give you a
                    price straight away.
                  </li>
                  <li>
                    <strong>We load and take it away.</strong> Our licensed
                    crew brings the equipment, protects your floors and
                    doorframes, and loads everything you point at.
                  </li>
                  <li>
                    <strong>We sort and recycle.</strong> Things you can still
                    use go to charity. Recyclable material goes to a sorting
                    facility. Only real waste gets thrown away.
                  </li>
                </ol>
              </div>

              <aside className="svc-detail-side">
                <EstimateForm />
              </aside>
            </div>

            {related.length > 0 && (
              <div className="svc-related">
                <h2>Related services</h2>
                <ul className="svc-grid">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link className="svc-card" href={`/services/${r.slug}`}>
                        <span className="svc-card-name">{r.name}</span>
                        <span className="svc-card-short">{r.short}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link className="footer-more" href="/services">
                  See all {services.length} services →
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
