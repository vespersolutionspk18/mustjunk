import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { galleryImages, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Photo Gallery | ${site.name}`,
  description: `Real ${site.name} jobs in Los Angeles. Furniture, mattresses, appliances, building debris, yard waste and roll-off containers. ${site.tagline}.`,
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <main id="main">
        <PageHero
          eyebrow="Gallery"
          title="Recent Jobs"
          lede="This is what actually comes out of Los Angeles homes and businesses. Every photo here is a job we have done, with the same crews and the same trucks we use every day."
          image="/Assets/gallery-4.jpg"
          imageAlt="Household junk stacked on a lawn beside a Los Angeles home"
        />

        <section className="page-section">
          <div className="wrap">
            <ul className="gallery-grid-lg">
              {galleryImages.map((src, i) => (
                <li key={src}>
                  <a href={src} aria-label={`View job photo ${i + 1} full size`}>
                    <img
                      src={src}
                      alt={`${site.name} job photo ${i + 1}`}
                      width={600}
                      height={600}
                      loading="lazy"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <div className="btn-row" style={{ justifyContent: "center" }}>
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
