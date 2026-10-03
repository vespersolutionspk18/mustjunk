import Link from "next/link";
import { site } from "@/lib/site";

export default function PageHero({
  eyebrow,
  title,
  lede,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{eyebrow}</span>
        </nav>
        <div className="page-hero-grid">
          <div className="page-hero-text">
            <h1>{title}</h1>
            <p className="page-hero-lede">{lede}</p>
            <div className="btn-row">
              <Link className="btn btn-lg" href="/#schedule">
                Schedule Removal
              </Link>
              <Link className="btn btn-rust btn-lg" href="/#estimate">
                Free Estimate
              </Link>
            </div>
            <p className="page-hero-phone">
              or call <a href={site.phoneHref}>{site.phone}</a>. {site.hours}
            </p>
          </div>
          <figure className="page-hero-image">
            <img src={image} alt={imageAlt} width={900} height={675} />
          </figure>
        </div>
      </div>
    </section>
  );
}
