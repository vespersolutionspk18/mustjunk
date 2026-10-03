import HeroSlider from "@/components/HeroSlider";
import EstimateForm from "@/components/EstimateForm";
import {
  IconArrowRight,
  IconClock,
  IconPen,
  IconRecycle,
} from "@/components/Icons";
import { serviceTiles, site } from "@/lib/site";

function Embellish() {
  return (
    <div className="embellish" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}

function BalanceColumns({
  id,
  image,
  alt,
  caption,
  children,
}: {
  id?: string;
  image: string;
  alt: string;
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <div className="balance-columns" id={id}>
      <figure className="balance-image">
        <img src={image} alt={alt} loading="lazy" />
        <a className="balance-caption" href="#estimate">
          {caption}
          <IconArrowRight size={18} />
        </a>
      </figure>
      <div className="balance-content">{children}</div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <main id="main">
        <HeroSlider />

        {/* Service tiles */}
        <section id="services" aria-label="Our junk removal services">
          <ul className="tiles">
            {serviceTiles.map((tile) => (
              <li key={tile.line2}>
                <a className="tile" href={tile.href}>
                  <img src={tile.image} alt="" loading="lazy" />
                  <span className="tile-hover" aria-hidden="true" />
                  <span className="tile-veil" aria-hidden="true" />
                  <h3>
                    {tile.line1} <span>{tile.line2}</span>
                  </h3>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Intro: copy + estimate form */}
        <section className="intro">
          <div className="wrap-narrow">
            <div className="section-head">
              <Embellish />
              <h1 className="balance-text">{site.tagline}</h1>
              <p className="section-sub">
                Junk removal in Los Angeles, Long Beach, Glendale, Pasadena, and
                Santa Monica
              </p>
            </div>

            <div className="intro-grid">
              <div className="intro-text">
                <p>
                  {site.name} takes junk away for homes and businesses across
                  Los Angeles. Our goal is to clean up LA and recycle as much as
                  we can.
                </p>

                <BalanceColumns
                  id="about"
                  image="/Assets/balance-1.jpg"
                  alt="Must Junk Removal crew hauling junk in Los Angeles"
                  caption="About Us"
                >
                  <p>
                  Book online, or call and let our team take it away for you. We
                  help with rubbish hauling, junk removal and getting rid of
                  furniture, debris or clutter from your Los Angeles home or
                  business.
                </p>
                </BalanceColumns>

                <p>
                  We have been working in the LA area for years. We pick up junk
                  every day of the week, in every corner of Los Angeles County.
                </p>

                <BalanceColumns
                  image="/Assets/balance-2.jpg"
                  alt="Loading a truck with unwanted household items"
                  caption="Homes and Businesses"
                >
                  <p>
                    Whether it&apos;s an extra mattress, a couch you no longer
                    want, or a house full of furniture and clutter, we can help.
                    We work in Los Angeles, Long Beach, Glendale, Pasadena,
                    Santa Monica, and everywhere in between.
                  </p>
                </BalanceColumns>

                <div className="btn-row" style={{ justifyContent: "flex-start" }}>
                  <a className="btn btn-lg" href="#schedule">
                    <IconClock size={18} />
                    Book Junk Removal
                  </a>
                  <a className="btn btn-rust btn-lg" href="#estimate">
                    <IconPen size={18} />
                    Free Estimate
                  </a>
                </div>
              </div>

              <div className="intro-form">
                <div className="discount-block">
                  <h2 className="balance-text">
                    Junk Removal Discounts for Large Clean Out Jobs, Booking
                    Online, and Military
                  </h2>
                  <p>
                    No promo code required! Get <strong>$20 off</strong> any job
                    booked online over <strong>$250</strong>. Discounts are also
                    offered for military families, hoarding clean outs, estate
                    clearance and senior citizens. Call us at{" "}
                    <a href={site.phoneHref}>{site.phone}</a> and ask about our
                    discount pricing.
                  </p>
                </div>

                <EstimateForm />
              </div>
            </div>
          </div>
        </section>

        {/* Full service section */}
        <section className="why" id="full-service">
          <div className="wrap-narrow">
            <div className="section-head">
              <Embellish />
              <h2 className="balance-text">
                Junk <strong>Removal</strong> and Recycling
              </h2>
            </div>

            <p className="why-intro balance-text">
              Hiring us is an easy alternative to renting a{" "}
              <a href="#dumpster-services">dumpster</a> or a truck. We try hard
              to cut what we send to landfill. We pull out anything usable and
              donate it, then take the rest to sorting facilities that separate
              metal, plastic, wood and general trash.
            </p>

            <BalanceColumns
              id="office-cleanouts"
              image="/Assets/balance-3.jpg"
              alt="Two-person crew carrying a box out of a commercial storeroom"
              caption="Office Junk Clean Outs"
            >
              <h2 className="balance-text">Why call a junk removal company?</h2>
              <p>
                Think about renting a truck instead. You pay a deposit, you pay
                for the mileage, then you have to refuel it and clean it before
                you hand it back. And you have spent a whole weekend doing the
                heavy lifting yourself.
              </p>

              <h2 className="balance-text">Why choose {site.name}?</h2>
              <p>
                Because we send people who do this for a living to do the dirty
                work for you. We also deal with the rubbish after we leave, and
                we <strong>sort and recycle</strong> as much of it as we can.
              </p>
              <p>
                We <a href="#estimate">give free estimates</a> before we start,
                so you know exactly what the job costs.
              </p>
            </BalanceColumns>

            <BalanceColumns
              id="residential-business"
              image="/Assets/balance-4.jpg"
              alt="Residential junk removal crew at a Los Angeles home"
              caption="Homes and Businesses"
            >
              <h2 className="balance-text">
                Is it worth paying someone to clear out your junk?
              </h2>
              <p>
                Everyone has more stuff than they planned for. You mean to deal
                with it, then another week goes by and it is still there. A
                clear out that would take you a month of weekends can be done by
                our licensed crew in a day.
              </p>
            </BalanceColumns>

            <BalanceColumns
              id="total-cleanouts"
              image="/Assets/balance-5.jpg"
              alt="Removal crew carrying a rolled sofa out to a pickup truck"
              caption="Total Junk Clean Outs"
            >
              <h2 className="balance-text">Get your space back</h2>
              <p>
                We will clear out your home or business, inside and out. It does
                not matter if you are a homeowner, a landlord, a property
                manager or a business owner. You get the space back and you can
                use it again.
              </p>
            </BalanceColumns>

            <BalanceColumns
              id="estate-cleanout"
              image="/Assets/balance-6.jpg"
              alt="Estate clean out crew sorting belongings"
              caption="Estate Clean Outs"
            >
              <h2 className="balance-text">
                Be with your family. We will handle the estate clean out.
              </h2>
              <p>
                Letting us take the job makes it faster and takes some of the
                weight off. We will clear out your loved one&apos;s home with
                care and respect.
              </p>
              <p>
                If you are a family member or the executor of an estate, we can
                clear out old furniture, clothing and household items so the home
                is ready to rent or sell.
              </p>
              <p>
                <strong>
                  We are a local estate clean out company that has done this a
                  lot of times.
                </strong>
              </p>
            </BalanceColumns>

            <BalanceColumns
              id="hoarder-cleanout"
              image="/Assets/balance-7.jpg"
              alt="Removal crew carrying packed boxes out of a home"
              caption="Hoarder Junk Clean Out"
            >
              <h2 className="balance-text">
                Big job or small job, we will clear it out
              </h2>
              <p>
                Our crews are careful on every job, especially hoarding clean
                outs and estate clearances.
              </p>
              <p>
                Whether you need rubbish taken out, furniture picked up, or a
                whole space cleared, {site.name} can help. We take away single
                items like beds and fridges, and we take away whole rooms full
                of stuff.
              </p>
            </BalanceColumns>

            <div id="dumpster-services" className="why-cta">
              <div className="section-head" style={{ marginBottom: 24 }}>
                <Embellish />
                <h2 className="balance-text" id="reviews">
                  Need a dumpster or container in Los Angeles?
                </h2>
              </div>
              <p
                className="balance-text"
                style={{
                  textAlign: "center",
                  maxWidth: 820,
                  margin: "0 auto 30px",
                }}
              >
                <IconRecycle
                  size={18}
                  className="inline-icon"
                />{" "}
                Our roll-off containers and packer trucks are a good option if a
                single truck will not do the job. We drop it off, you fill it,
                and we take it away. We recycle as much of it as we can.
              </p>
              <div className="btn-row">
                <a className="btn btn-lg" href="#schedule">
                  <IconClock size={18} />
                  Book Junk Removal
                </a>
                <a className="btn btn-rust btn-lg" href="#estimate">
                  <IconPen size={18} />
                  Free Estimate
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}


