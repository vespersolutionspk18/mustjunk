import Link from "next/link";
import { areasServed, site } from "@/lib/site";
import { services } from "@/lib/services";
import { IconFacebook, IconInstagram } from "./Icons";

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`,
)}`;

const topServices = services.slice(0, 8);
const topAreas = areasServed.slice(0, 8);

export default function SiteFooter() {
  return (
    <>
      <div className="footer-cta" id="schedule">
        <div className="wrap">
          <h2>
            <span>
              <a href={site.phoneHref}>{site.phone}</a>
            </span>
            <span className="sep" aria-hidden="true">
              •
            </span>
            <span>
              <Link href="/#estimate">Free Estimate</Link>
            </span>
            <span className="sep" aria-hidden="true">
              •
            </span>
            <span>
              <Link href="/#estimate">Book Junk Removal</Link>
            </span>
          </h2>
          <div className="pay-strip" aria-label="Accepted payment methods">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>Discover</span>
            <span>Cash</span>
            <span>Zelle</span>
          </div>
        </div>
      </div>

      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-grid">
            <section className="footer-brand">
              <img
                className="footer-logo"
                src="/Assets/Logo.svg"
                alt={site.name}
                width={200}
                height={56}
              />
              <p className="footer-tagline">{site.tagline}</p>
              <p>
                <strong>{site.name}</strong>
                <br />
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </p>
              <p>
                <a href={site.phoneHref}>{site.phone}</a>
                <br />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
              <p>
                <strong>Hours:</strong> {site.hours}
                <br />
                <strong>License:</strong> {site.license}
              </p>
              <p className="footer-follow">
                <span className="social-links">
                  <a
                    href="https://www.facebook.com"
                    aria-label="Follow us on Facebook"
                  >
                    <IconFacebook />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    aria-label="Follow us on Instagram"
                  >
                    <IconInstagram />
                  </a>
                </span>
              </p>
            </section>

            <section>
              <h3 className="widget-title">Popular Services</h3>
              <ul className="footer-links">
                {topServices.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`}>{s.name}</Link>
                  </li>
                ))}
              </ul>
              <Link className="footer-more" href="/services">
                All {services.length} services →
              </Link>
            </section>

            <section>
              <h3 className="widget-title">Areas We Cover</h3>
              <ul className="footer-links">
                {topAreas.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <p className="footer-note">We cover all of Los Angeles County, 7 days a week.</p>
            </section>

            <section>
              <h3 className="widget-title">Where We Are</h3>
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
              <ul className="footer-links footer-links-row">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </section>
          </div>

          <div className="footer-credits">
            <p>
              © 2009 to {site.year} {site.name}. All rights reserved. {site.tagline}
            </p>
            <p>Licensed and insured. We cover Los Angeles County.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
